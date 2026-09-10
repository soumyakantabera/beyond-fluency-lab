import { defineHandler } from "h3";
import { createHash } from "node:crypto";
import { courses } from "../../src/lib/content";
import { database, enquirySchema, saveEnquiry } from "../utils/enquiries";

export default defineHandler(async (event) => {
  const reply = (value: object, status = 200) =>
    Response.json(value, { status, headers: { "Cache-Control": "no-store" } });
  const env = process.env;
  if (
    env.CHECKOUT_ENABLED !== "true" ||
    !env.STRIPE_SECRET_KEY ||
    !env.STRIPE_WEBHOOK_SECRET ||
    !env.DATABASE_URL ||
    !env.ENQUIRY_RATE_SALT ||
    !env.PUBLIC_SITE_URL
  )
    return reply(
      {
        error: "Online payments are not open yet. Please request a free trial or try again later.",
      },
      503,
    );
  const req = event.req;
  if (req.headers.get("origin") !== new URL(env.PUBLIC_SITE_URL).origin)
    return reply({ error: "Invalid origin." }, 403);
  if (!req.headers.get("content-type")?.includes("application/json"))
    return reply({ error: "Invalid request." }, 415);
  try {
    const reader = req.body?.getReader();
    if (!reader) return reply({ error: "Missing details." }, 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 16384) {
        await reader.cancel();
        return reply({ error: "Request too large." }, 413);
      }
      chunks.push(value);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString());
    const result = enquirySchema.safeParse(body);
    if (
      !result.success ||
      body.termsAccepted !== true ||
      result.data.kind !== "enrolment" ||
      result.data.website
    )
      return reply({ error: "Please complete the form and accept the terms." }, 400);
    const data = result.data;
    const course = courses.find((c) => c.slug === data.course);
    if (!course) return reply({ error: "Choose a course." }, 400);
    const saved = await saveEnquiry(
      data,
      req.headers.get("x-vercel-forwarded-for")?.split(",")[0] || "unknown",
    );
    if (saved.limited)
      return reply({ error: "Too many requests. Please try again in an hour." }, 429);
    const hash = createHash("sha256").update(JSON.stringify(data)).digest("hex");
    const db = database();
    await db.query(
      `INSERT INTO course_payments(enquiry_id,request_hash,amount_cents) VALUES($1,$2,$3) ON CONFLICT DO NOTHING`,
      [data.id, hash, course.price * 100],
    );
    const order = (await db.query("SELECT * FROM course_payments WHERE enquiry_id=$1", [data.id]))
      .rows[0];
    if (order.request_hash !== hash)
      return reply({ error: "Details changed. Please submit a new form." }, 409);
    if (order.status === "paid")
      return reply({ error: "This enrolment has already been paid." }, 409);
    if (order.checkout_url) return reply({ url: order.checkout_url });
    const params = new URLSearchParams({
      mode: "payment",
      customer_email: data.email,
      client_reference_id: data.id,
      success_url: `${env.PUBLIC_SITE_URL}/enrol?payment=returned`,
      cancel_url: `${env.PUBLIC_SITE_URL}/courses/${course.slug}?payment=cancelled#join-course`,
      "payment_method_types[0]": "card",
      "line_items[0][quantity]": "1",
      "line_items[0][price_data][currency]": "eur",
      "line_items[0][price_data][unit_amount]": String(order.amount_cents),
      "line_items[0][price_data][tax_behavior]": "exclusive",
      "line_items[0][price_data][product_data][name]": course.name,
      "line_items[0][price_data][product_data][description]": `${course.duration}. Price excludes VAT. One-time course payment.`,
      "metadata[enquiry_id]": data.id,
    });
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Idempotency-Key": `course-${data.id}`,
      },
      body: params,
      signal: AbortSignal.timeout(12000),
    });
    const session = await response.json();
    if (
      !response.ok ||
      typeof session.url !== "string" ||
      new URL(session.url).hostname !== "checkout.stripe.com"
    )
      throw new Error("Checkout unavailable");
    await db.query(
      "UPDATE course_payments SET stripe_session_id=$2,checkout_url=$3 WHERE enquiry_id=$1",
      [data.id, session.id, session.url],
    );
    return reply({ url: session.url });
  } catch {
    return reply(
      {
        error:
          "We could not open payment. Your details may already be saved; retrying this unchanged form will not create a second payment session.",
      },
      503,
    );
  }
});

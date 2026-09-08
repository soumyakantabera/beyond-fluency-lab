import { defineHandler } from "h3";
import { createHmac, timingSafeEqual } from "node:crypto";
import { database } from "../utils/enquiries";

export default defineHandler(async (event) => {
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.DATABASE_URL)
    return new Response(null, { status: 503 });
  const reader = event.req.body?.getReader();
  if (!reader) return new Response(null, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 1048576) {
      await reader.cancel();
      return new Response(null, { status: 413 });
    }
    chunks.push(value);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  const parts = (event.req.headers.get("stripe-signature") || "")
    .split(",")
    .map((x) => x.split("="));
  const timestamp = parts.find(([k]) => k === "t")?.[1] || "";
  if (
    !timestamp ||
    !Number.isFinite(Number(timestamp)) ||
    Math.abs(Date.now() / 1000 - Number(timestamp)) > 300
  )
    return new Response(null, { status: 400 });
  const expected = createHmac("sha256", process.env.STRIPE_WEBHOOK_SECRET)
    .update(`${timestamp}.${raw}`)
    .digest();
  const valid = parts
    .filter(([k]) => k === "v1")
    .some(([, v]) => {
      const b = Buffer.from(v || "", "hex");
      return b.length === expected.length && timingSafeEqual(b, expected);
    });
  if (!valid) return new Response(null, { status: 400 });
  try {
    const data = JSON.parse(raw);
    if (
      data.type === "checkout.session.completed" ||
      data.type === "checkout.session.async_payment_succeeded"
    ) {
      const session = data.data.object;
      if (session.payment_status === "paid") {
        const result = await database().query(
          `UPDATE course_payments SET status='paid',paid_at=COALESCE(paid_at,now())
          WHERE stripe_session_id=$1 AND amount_cents=$2 AND currency=$3 RETURNING enquiry_id`,
          [session.id, session.amount_total, session.currency],
        );
        if (!result.rowCount) return new Response(null, { status: 503 });
      }
    }
    return Response.json({ received: true });
  } catch {
    return new Response(null, { status: 503 });
  }
});

import { conversionEvent } from "@/lib/conversion-events";
import { useRef, useState, type FormEvent } from "react";
import { courses } from "@/lib/content";
import { LabIcon } from "./lab-icon";
import "./course-join.css";

export function CourseJoin({ course }: { course: (typeof courses)[number] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const [details, setDetails] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const identity = useRef<{ body: string; id: string } | null>(null);
  function review(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDetails(
      Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>,
    );
    setError("");
    dialog.current?.showModal();
    conversionEvent("checkout_reviewed", course.slug, "enrolment");
  }
  async function pay() {
    if (busy) return;
    setBusy(true);
    setError("");
    const data = {
      ...details,
      kind: "enrolment",
      course: course.slug,
      privacyAcknowledged: true,
      termsAccepted: true,
    };
    const body = JSON.stringify(data);
    if (identity.current?.body !== body) identity.current = { body, id: crypto.randomUUID() };
    try {
      const response = await fetch("/api/course-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, id: identity.current.id }),
        signal: AbortSignal.timeout(25000),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Payment is temporarily unavailable.");
      const url = new URL(result.url);
      if (url.protocol !== "https:" || url.hostname !== "checkout.stripe.com")
        throw new Error("Payment is temporarily unavailable.");
      conversionEvent("checkout_handoff", course.slug, "enrolment");
      location.assign(url.href);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Please try again.");
      setBusy(false);
    }
  }
  return (
    <section id="join-course" className="wrap section course-enrolment">
      <div>
        <p className="eyebrow">JOIN THIS COURSE</p>
        <h2>{course.name}</h2>
        <p>
          {course.duration} · <strong>€{course.price} including VAT</strong>
        </p>
        <p>
          Share your details, review your choice, then continue to Stripe for a one-time payment.
        </p>
        <p>Before paying, make sure the cohort schedule has been agreed with the team.</p>
      </div>
      <form className="form" onSubmit={review}>
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required maxLength={254} />
        </label>
        <div className="form-row">
          <label>
            City or time zone
            <input name="timezone" required maxLength={100} placeholder="e.g. Europe/Berlin" />
          </label>
          <label>
            Availability
            <input
              name="availability"
              required
              maxLength={200}
              placeholder="e.g. weekday evenings"
            />
          </label>
        </div>
        <label>
          Your communication goal <span className="fine">Optional</span>
          <textarea name="message" maxLength={2000} />
        </label>
        <div hidden>
          <label>
            Leave empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="consent">
          <input type="checkbox" required />{" "}
          <span>I am 18 or over and have agreed a cohort schedule with the team.</span>
        </label>
        <label className="consent">
          <input type="checkbox" required />{" "}
          <span>
            I accept the <a href="/legal/terms">Terms</a> and{" "}
            <a href="/legal/refunds">Refund Policy</a>, and have read the{" "}
            <a href="/legal/privacy">Privacy Policy</a>.
          </span>
        </label>
        <button className="btn" type="submit" ref={button}>
          Review my enrolment <LabIcon name="arrow" size={18} />
        </button>
        <p className="fine">
          Reviewing does not charge you. Your details are submitted when you continue to Stripe.
        </p>
      </form>
      <dialog
        className="course-confirm"
        ref={dialog}
        aria-labelledby="confirm-title"
        onCancel={(e) => {
          if (busy) e.preventDefault();
        }}
        onClose={() => button.current?.focus()}
      >
        <p className="eyebrow">REVIEW YOUR ENROLMENT</p>
        <h2 id="confirm-title">Ready for your next step?</h2>
        <h3>{course.name}</h3>
        <p>{course.duration} · Live online</p>
        <p>
          {details.name} · {details.email}
        </p>
        <p className="confirm-total">
          Total: €{course.price} <span>VAT included</span>
        </p>
        <p>
          One payment. No subscription or extra VAT at checkout. Payment details are entered
          securely on Stripe.
        </p>
        {error && (
          <p role="alert" className="status error">
            {error}
          </p>
        )}
        <div className="actions">
          <button className="btn" type="button" disabled={busy} onClick={pay}>
            {busy ? "Opening Stripe…" : `Continue to Stripe · €${course.price}`}{" "}
            <LabIcon name="arrow" size={18} />
          </button>
          <button
            className="btn outline"
            type="button"
            disabled={busy}
            onClick={() => dialog.current?.close()}
          >
            Edit details
          </button>
        </div>
      </dialog>
    </section>
  );
}

/** Local measurement hooks only. No network, storage, pixels or analytics collector. */
export type ConversionEvent = "lead_saved" | "checkout_reviewed" | "checkout_handoff";
export function conversionEvent(event: ConversionEvent, course: string, kind?: "trial" | "report" | "enrolment") {
  if (typeof window === "undefined") return;
  const allowedCourses = ["speak-with-confidence", "career-interview-intensive", "professional-communication", "executive-communication"];
  // Never include names, email, form answers, diagnostic results, URLs or payment IDs.
  try {
    window.dispatchEvent(new CustomEvent("bfl:conversion", {
      detail: { event, course: allowedCourses.includes(course) ? course : "unspecified", ...(kind ? { kind } : {}) },
    }));
  } catch { /* Measurement must never block a visitor's request or checkout. */ }
}

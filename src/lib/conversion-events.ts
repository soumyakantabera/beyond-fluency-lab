/** Conversion hooks. Pushed to Google/Microsoft only after cookie consent loads those tags. */
export type ConversionEvent = "lead_saved" | "checkout_reviewed" | "checkout_handoff";
export function conversionEvent(event: ConversionEvent, course: string, kind?: "trial" | "report" | "enrolment") {
  if (typeof window === "undefined") return;
  const allowedCourses = ["speak-with-confidence", "career-interview-intensive", "professional-communication", "executive-communication"];
  const detail = { event, course: allowedCourses.includes(course) ? course : "unspecified", ...(kind ? { kind } : {}) };
  try {
    window.dispatchEvent(new CustomEvent("bfl:conversion", { detail }));
    window.dataLayer?.push({ event: "bfl_conversion", ...detail });
    window.gtag?.("event", event, { course: detail.course, kind: kind || undefined });
    window.uetq?.push("event", "custom", { event_category: event, event_label: detail.course });
  } catch { /* Measurement must never block a visitor's request or checkout. */ }
}
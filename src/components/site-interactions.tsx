import { conversionEvent } from "@/lib/conversion-events";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CourseInvitation } from "@/components/course-invitation";
import { LabIcon } from "@/components/lab-icon";
import { courses } from "@/lib/content";
import { questions, dimensions, scoreDiagnostic } from "@/lib/diagnostic";

function attribution() {
  return Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
      .map((k) => [k, new URLSearchParams(window.location.search).get(k)?.slice(0, 200) || ""])
      .filter((x) => x[1]),
  );
}

export function LeadForm({
  report,
  answers,
  enrol = false,
}: {
  report?: ReturnType<typeof scoreDiagnostic>;
  answers?: number[];
  enrol?: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [requestText, setRequestText] = useState("");
  const [online, setOnline] = useState(false);
  const submission = useRef<{ body: string; id: string } | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/enquiries', { signal: controller.signal })
      .then(r => r.ok ? r.json() : null).then(data => setOnline(data?.enabled === true)).catch(() => {});
    return () => controller.abort();
  }, []);
  const [consent, setConsent] = useState(false);
  const [course, setCourse] = useState(report?.course.slug || "not-sure");

  useEffect(() => {
    if (!report) {
      const c = new URLSearchParams(location.search).get("course");
      if (courses.some((x) => x.slug === c)) setCourse(c!);
    }
  }, [report]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError(true);
      setStatus("Please confirm that we may use your details for this request.");
      return;
    }
    const f = new FormData(e.currentTarget);
    if (String(f.get("website") || "")) return;
    setBusy(true);
    const chosen = courses.find((c) => c.slug === course);
    const lines = [
      report
        ? "Diagnostic report request"
        : enrol
          ? "Course enrolment enquiry"
          : "Free trial request",
      "",
      "Name: " + (f.get("name") || "—"),
      "Email: " + f.get("email"),
      chosen ? "Course: " + chosen.name + " · €" + chosen.price : "Course: help me choose",
      f.get("timezone") ? "Time zone: " + f.get("timezone") : "",
      f.get("availability") ? "Availability: " + f.get("availability") : "",
      f.get("message") ? "Goal: " + f.get("message") : "",
      report ? "Plateau: " + report.dimension.name : "",
      report ? "Recommended: " + report.course.name : "",
      answers ? "Answer indexes: " + answers.join(",") : "",
      "UTM: " + JSON.stringify(attribution()),
    ]
      .filter(Boolean)
      .join("\n");
    setRequestText(lines);
    if (online) {
      const payload = { kind: report ? 'report' : enrol ? 'enrolment' : 'trial',
        name: String(f.get('name') || ''), email: String(f.get('email') || ''), course,
        timezone: String(f.get('timezone') || ''), availability: String(f.get('availability') || ''),
        message: String(f.get('message') || ''), diagnostic: report?.dimension.name,
        privacyAcknowledged: consent, website: String(f.get('website') || '') };
      const body = JSON.stringify(payload);
      if (submission.current?.body !== body) submission.current = { body, id: crypto.randomUUID() };
      try {
        const response = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, id: submission.current.id }), signal: AbortSignal.timeout(20000) });
        const result = await response.json();
        if (!response.ok || !result.saved) throw new Error(result.error || 'We could not confirm your request.');
        conversionEvent("lead_saved", course, report ? "report" : enrol ? "enrolment" : "trial");
        setError(false);
        setStatus(`Your request is saved. Reference: ${result.reference}. The team will confirm availability separately.`);
      } catch {
        setError(true);
        setStatus('We could not confirm receipt. Keep a copy and try again later.');
      } finally { setBusy(false); }
      return;
    }
    try {
      await navigator.clipboard.writeText(lines);
      setError(false);
      setStatus(
        "Your request is copied. Nothing has been sent to the team. You can also download a copy below.",
      );
    } catch {
      setError(false);
      setStatus(
        "Your browser could not copy the request. Nothing has been sent. Download a copy below to keep your details.",
      );
    } finally {
      setBusy(false);
    }
  }

  function downloadRequest() {
    const url = URL.createObjectURL(new Blob([requestText], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "beyond-fluency-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <form className="form" onSubmit={submit}>
      {enrol && (
        <div className="enrol-summary">
          <p className="eyebrow">YOUR COURSE ENQUIRY</p>
          <h2>{courses.find((c) => c.slug === course)?.name || "Let’s find your course"}</h2>
          <p>
            {courses.find((c) => c.slug === course)
              ? "€" +
                courses.find((c) => c.slug === course)!.price +
                " · " +
                courses.find((c) => c.slug === course)!.duration
              : "Select a course below, or ask us to help you choose."}
          </p>
        </div>
      )}
      {!report && (
        <div className="form-row">
          <div>
            <label htmlFor="lead-name">Your name</label>
            <input id="lead-name" name="name" autoComplete="name" required maxLength={120} />
          </div>
          <div>
            <label htmlFor="lead-email">Email address</label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
            />
          </div>
        </div>
      )}
      {report && (
        <div>
          <label htmlFor="report-email">Email address</label>
          <input
            id="report-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </div>
      )}
      {!report && (
        <>
          <div>
            <label htmlFor="course-select">Course you’re considering</label>
            <select
              id="course-select"
              className="form-select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="not-sure">Help me choose</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} · €{c.price}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="timezone">City or time zone</label>
              <input
                id="timezone"
                name="timezone"
                placeholder="e.g. Berlin / Europe/Berlin"
                required
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="availability">When are you usually free?</label>
              <input
                id="availability"
                name="availability"
                placeholder="e.g. weekday evenings"
                required
                maxLength={200}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">
              What conversation would you like to handle better?{" "}
              <span className="fine">Optional</span>
            </label>
            <textarea
              id="message"
              name="message"
              maxLength={2000}
              placeholder="An internship interview, university presentation, first-job conversation or meeting…"
            />
          </div>
        </>
      )}
      <div hidden aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="consent">
        <input
          id={report ? "report-consent" : "trial-consent"}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <label htmlFor={report ? "report-consent" : "trial-consent"}>
          I understand that my details will be used to{" "}
          {report
            ? "prepare my diagnostic report"
            : enrol
              ? "respond to my course enrolment enquiry"
              : "respond to my trial request"}
          , as described in the{" "}
          <a className="underline" href="/legal/privacy">
            Privacy Policy
          </a>
          . This does not subscribe me to marketing emails.
        </label>
      </div>
      <p className="note" role="status">
        {online ? 'Your request will be saved for the team. This is not a confirmed booking.' : 'Online submissions are not open yet. Copy or download your request to keep it; this does not send it to the team.'}
      </p>
      <button className="btn" disabled={busy} type="submit">
        {online ? (busy ? 'Sending…' : 'Send my request') : busy
          ? "Preparing…"
          : report
            ? "Copy my report request"
            : enrol
              ? "Copy my enrolment enquiry"
              : "Copy my free trial request"}{" "}
        <LabIcon name="arrow" size={17} />
      </button>
      {status && (
        <p role={error ? "alert" : "status"} className={"status " + (error ? "error" : "")}>
          {status}
        </p>
      )}
      {requestText && (
        <button className="btn outline" type="button" onClick={downloadRequest}>
          Download a copy of my request
        </button>
      )}
      <p className="fine">
        {report
          ? "Your result is a reflection tool, not a language qualification."
          : enrol
            ? "This is an enquiry, not a purchase or recurring subscription. Your course place, final fee and schedule are confirmed separately."
            : "No payment required. This is a scheduling request; your place and time are confirmed separately."}
      </p>
    </form>
  );
}

export function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(7).fill(-1));
  const [done, setDone] = useState(false);
  const [shareStatus, setShareStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (step > 0 || done) heading.current?.focus();
  }, [step, done]);
  const result = scoreDiagnostic(answers);

  async function share() {
    const url = location.origin + "/diagnostic?result=" + result.dimension.slug;
    try {
      if (navigator.share)
        await navigator.share({
          title: "My plateau: " + result.dimension.name,
          text:
            "My Beyond Fluency Lab result: " +
            result.dimension.name +
            ". Find your plateau in 90 seconds.",
          url,
        });
      else {
        await navigator.clipboard.writeText(url);
        setShareStatus("Result link copied.");
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setShareStatus("Copy this result link: " + url);
    }
  }

  if (done)
    return (
      <div className="quiz diagnostic-result">
        <div className="result-intro">
          <p className="eyebrow">
            <LabIcon name="compass" size={26} /> YOUR COMMUNICATION STARTING POINT
          </p>
          <p className="result-kicker">
            You’ve found the gap.
            <br />
            Now give it a practice plan.
          </p>
          <h2 tabIndex={-1} ref={heading}>
            {result.dimension.name}
          </h2>
          <h3>{result.dimension.title}</h3>
          <p className="lead">{result.dimension.description}</p>
        </div>
        <CourseInvitation
          course={result.course}
          source="diagnostic-result"
          reason={
            answers[6] === 0
              ? "You chose an upcoming interview. This focused course turns your experience into clear answers and prepares you for the follow-up."
              : result.course.short
          }
        />
        <details className="result-breakdown">
          <summary>See how your answers shaped this result</summary>
          <div className="result-score">
            {dimensions.map((d, i) => (
              <div key={d.slug}>
                <strong>{result.scores[i]} / 6</strong>
                {d.name}
                <span className="sr-only"> scenarios selected</span>
              </div>
            ))}
          </div>
          <p className="small">
            {result.tied
              ? "Your answers span more than one dimension equally. We used your latest relevant scenario as a starting point. "
              : "Your most frequently selected friction is the focus above. "}
            This is a self-reflection tool, not a validated assessment or a measure of ability.
          </p>
        </details>
        <div className="note">
          <strong>One thing to practise this week</strong>
          <p style={{ marginTop: 10 }}>{result.dimension.exercise}</p>
        </div>
        <div className="actions">
          <button className="btn outline" onClick={share}>
            <LabIcon name="share" size={17} /> Share this result
          </button>
          <button
            className="text-link"
            onClick={() => {
              setDone(false);
              setStep(0);
              setAnswers(Array(7).fill(-1));
              setShareStatus("");
            }}
          >
            Take it again
          </button>
        </div>
        {shareStatus && (
          <p className="small" role="status">
            {shareStatus}
          </p>
        )}
        <div className="result-report">
          <h3>Keep your result close.</h3>
          <p className="small" style={{ marginBottom: 24 }}>
            Copy a personalised report request with your result, a practice exercise and the related
            guide.
          </p>
          <LeadForm report={result} answers={answers} />
        </div>
        <a className="text-link" href={"/blog/" + result.dimension.guide}>
          Read your related practice guide <LabIcon name="arrow" size={17} />
        </a>
      </div>
    );

  return (
    <div className="quiz">
      <div className="quiz-top">
        <span>QUESTION {step + 1} OF 7</span>
        <span>Free · No email needed</span>
      </div>
      <div className="quiz-progress" aria-label={`${step} of 7 questions completed`}>
        <span style={{ width: (step / 7) * 100 + "%" }} />
      </div>
      <h2 ref={heading} tabIndex={-1} id="question">
        {questions[step].q}
      </h2>
      <p className="small" style={{ marginBottom: 22 }}>
        Choose the answer closest to your experience. There is no correct answer.
      </p>
      <div className="answers" role="radiogroup" aria-labelledby="question">
        {questions[step].a.map((a, i) => (
          <label
            key={step + "-" + i}
            className={"answer" + (answers[step] === i ? " selected" : "")}
          >
            <input
              type="radio"
              name={"q" + step}
              checked={answers[step] === i}
              onChange={() => setAnswers((old) => old.map((x, j) => (j === step ? i : x)))}
            />
            <span>{a}</span>
          </label>
        ))}
      </div>
      <div className="quiz-actions">
        <button className="btn outline" disabled={step === 0} onClick={() => setStep(step - 1)}>
          <LabIcon name="back" size={16} /> Back
        </button>
        <button
          className="btn"
          disabled={answers[step] < 0}
          onClick={() => (step === 6 ? setDone(true) : setStep(step + 1))}
        >
          {step === 6 ? "See my plateau" : "Next question"} <LabIcon name="next" size={17} />
        </button>
      </div>
    </div>
  );
}

export function SharedResult() {
  const [d, setD] = useState<(typeof dimensions)[number] | undefined>();
  useEffect(() => {
    const r = new URLSearchParams(location.search).get("result");
    setD(dimensions.find((x) => x.slug === r));
  }, []);
  if (!d) return null;
  return (
    <aside className="note">
      <strong>A colleague shared: {d.name}</strong>
      <p>{d.description}</p>
      <p className="small">
        This describes their result. Take the questions below to find your own.
      </p>
    </aside>
  );
}

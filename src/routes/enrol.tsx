import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CoursePage } from "@/components/site-pages";
import { courses } from "@/lib/content";
import { LeadForm } from "@/components/site-interactions";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/enrol");

export const Route = createFileRoute("/enrol")({
  component: EnrolPage,
  validateSearch: (search: Record<string, unknown>) => ({
    course: typeof search.course === "string" ? search.course : "",
    payment: typeof search.payment === "string" ? search.payment : "",
  }),
  head: () => seo(simplePages.enrol[0] + " | Beyond Fluency Lab", simplePages.enrol[1]),
});

function EnrolPage() {
  const { course, payment } = Route.useSearch();
  const index = courses.findIndex((c) => c.slug === course);
  if (index >= 0) return <CoursePage index={index} />;
  if (payment === "returned")
    return (
      <main id="main">
        <PageHero
          eyebrow="ENROLMENT"
          title="Thank you. We’re checking your payment."
          description="Your return from Stripe is not proof of payment. We confirm enrolment after Stripe verifies the transaction. Keep your Stripe receipt and contact the team if you need help."
        />
        <section className="wrap section">
          <a className="btn" href="/courses">
            Return to courses
          </a>
        </section>
      </main>
    );
  return (
    <main id="main">
      <PageHero
        eyebrow="COURSE ENROLMENT"
        title="Your next step. With a plan."
        description="Choose your course and tell us when you can join. We’ll confirm the fit, schedule and complete fee before you decide."
      />
      <section className="wrap section split">
        <div className="prose">
          <h2>
            Bring the conversation
            <br />
            you want to change.
          </h2>
          <p>
            An interview. A presentation. A pitch. A room where you want your ideas to carry more
            weight.
          </p>
          <ol>
            <li>Choose a course and share your goal.</li>
            <li>Discuss a suitable cohort and local-time schedule.</li>
            <li>Review the final fee and terms before enrolling.</li>
          </ol>
          <p>
            Live online practice. Approximately 6 learners. The same trainer throughout, with
            monthly alumni practice after your course.
          </p>
          <p>Course fees cover the stated duration; they are not recurring subscriptions.</p>
          <a href="/pricing">Compare the course fees</a> · <a href="/legal/terms">Read the terms</a>
        </div>
        <div>
          <LeadForm enrol />
        </div>
      </section>
    </main>
  );
}

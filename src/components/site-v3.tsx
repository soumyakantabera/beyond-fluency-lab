import { useState, type ReactNode } from "react";
import { programmes, feeNote, type Programme } from "@/lib/programmes";
import { faqs } from "@/lib/content";
import { LeadForm } from "./site-interactions";
import "./site-v3.css";
import { LabIcon } from "./lab-icon";
import { StorySlides, CourseRail, IconPlate, globalStories } from "./story-slides";
import { problemGuides } from "@/lib/problem-guides";
import type { IconName } from "@/lib/icon-paths";
const programmeIcons: IconName[] = [
  "mentor",
  "briefcase",
  "structure",
  "focus",
  "globe",
  "graduate",
  "cohort",
  "exchange",
  "enterprise",
  "compass",
];

const arrow = <LabIcon name="arrow" size={19} />;
function Link({
  href,
  children,
  subtle = false,
}: {
  href: string;
  children: ReactNode;
  subtle?: boolean;
}) {
  return (
    <a className={subtle ? "v3-link" : "v3-button"} href={href}>
      {children}
      {arrow}
    </a>
  );
}
function Scene({ name, alt, hero = false }: { name: string; alt: string; hero?: boolean }) {
  return (
    <figure className="v3-scene">
      <img
        src={"/assets/" + name + ".webp"}
        alt={alt}
        width="1536"
        height="1024"
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
      />
      <figcaption>Illustrative scene · Beyond Fluency Lab</figcaption>
    </figure>
  );
}
function Frame({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="v3">
      {children}
    </main>
  );
}
function Intro({
  label,
  title,
  description,
  image = "mentoring",
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="v3-wrap v3-intro">
      <div>
        <p className="v3-kicker">
          <LabIcon name="compass" size={22} />
          {label}
        </p>
        <h1>{title}</h1>
        <p className="v3-lead">{description}</p>
      </div>
      <Scene name={image} alt="Illustrative live communication practice" hero />
    </section>
  );
}
export function Story() {
  return (
    <section id="our-story" className="v5-origin">
      <div className="v3-wrap v3-section">
        <div className="brand-section-head">
          <div>
            <p className="v3-kicker">
              <LabIcon name="story" size={20} />
              OUR STORY, IN THREE CHAPTERS
            </p>
            <h2>
              Fluent is only
              <br />
              <em>the beginning.</em>
            </h2>
          </div>
          <p>From Learn With Smile in Kolkata to the conversations that matter in your world.</p>
        </div>
        <StorySlides
          label="Our story"
          slides={[
            {
              label: "OUR ROOTS",
              icon: "story",
              title: "A place to learn. Room to try.",
              text: "Beyond Fluency Lab comes from Learn With Smile, rooted in Kolkata. We carry forward a human approach to learning: someone listens, you try, and feedback gives the next attempt a direction. The Lab brings that approach to a focused communication-coaching offer.",
              image: "bfl-story-learning-v5",
              href: "/about",
            },
            {
              label: "WHY WE EXIST",
              icon: "focus",
              title: "The words are there. The moment is harder.",
              text: "You understand the meeting but hold back your point. You know your experience but lose the thread in an interview. You can manage daily life in English but hesitate to start a conversation. We exist to give those specific moments a place to be practised.",
              image: "bfl-story-rehearsal-v5",
              href: "/blog/why-beyond-fluency-lab-exists",
            },
            {
              label: "WHAT WE DO",
              icon: "mentor",
              title: "Real conversations. Thoughtful practice.",
              text: "Bring a situation from your life, study or work. Practise with a coach, receive specific feedback and try again. Through small live classes and personalised private coaching, we work on clarity, composure and connection while keeping your own voice at the centre.",
              image: "bfl-global-work-v4",
              href: "/our-method",
            },
          ]}
        />
      </div>
    </section>
  );
}
function Card({ p, index }: { p: Programme; index: number }) {
  return (
    <article className="v3-course">
      <a href={"/courses/" + p.slug} tabIndex={-1} aria-hidden="true">
        <img src={"/assets/" + p.image + ".webp"} alt="" width="600" height="400" loading="lazy" />
      </a>
      <div className="v3-course-body">
        <IconPlate name={programmeIcons[index]} />
        <p className="v3-kicker">
          {String(index + 1).padStart(2, "0")} / {p.audience}
        </p>
        <h3>
          <a href={"/courses/" + p.slug}>{p.name}</a>
        </h3>
        <p>{p.short}</p>
        <div className="v3-course-meta">
          <span>{p.offers.map((o) => o.format).join(" · ")}</span>
          <span>
            {p.offers.length > 1 ? "From " : ""}€{p.offers[0].price.toLocaleString("en-IE")}
          </span>
        </div>
        <Link href={"/courses/" + p.slug} subtle>
          Explore this chapter
        </Link>
      </div>
    </article>
  );
}
export function HomePage() {
  return (
    <Frame>
      <section className="v3-wrap v3-hero">
        <div className="v3-hero-copy">
          <p className="v3-kicker">
            <span className="v3-dot" /> BEYOND WORDS. INTO YOUR WORLD.
          </p>
          <h1>
            You know what
            <br />
            you want to say.
            <br />
            <em>
              Let the room
              <br />
              hear it.
            </em>
          </h1>
          <p className="v3-lead">
            For the conversations you rehearse. The moments you hold back. And the person you are
            ready to become.
          </p>
          <Link href="#our-story">Discover your next chapter</Link>
          <p className="v3-hero-note">Live communication coaching · From Learn With Smile</p>
        </div>
        <div className="v4-hero-mosaic" aria-label="Voices across life, work and cultures">
          <figure className="v4-mosaic-main">
            <img
              src="/assets/bfl-hero-v3.webp"
              alt="Woman finding her voice in an online conversation"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <figcaption>
              <LabIcon name="mentor" size={20} /> YOUR VOICE
            </figcaption>
          </figure>
          <figure className="v4-mosaic-work">
            <img
              src="/assets/bfl-global-work-v4.webp"
              alt="Colleagues from different backgrounds sharing an idea at work"
              width="1536"
              height="1024"
            />
            <figcaption>
              <LabIcon name="briefcase" size={20} /> YOUR WORLD
            </figcaption>
          </figure>
          <figure className="v4-mosaic-life">
            <img
              src="/assets/bfl-global-belonging-v4.webp"
              alt="Adults connecting through an everyday conversation"
              width="1536"
              height="1024"
            />
            <figcaption>
              <LabIcon name="globe" size={20} /> YOUR NEXT CHAPTER
            </figcaption>
          </figure>
          <div className="v4-mosaic-note">
            <LabIcon name="exchange" size={27} />
            <span>
              Different worlds.
              <br />
              <em>A shared wish to be heard.</em>
            </span>
          </div>
          <p className="v4-mosaic-caption">Illustrative scenes · Real-life possibilities</p>
        </div>
      </section>
      <Story />
      <section className="v3-wrap v3-section">
        <p className="v3-kicker">SOUND FAMILIAR?</p>
        <h2>
          It is rarely just
          <br />
          <em>about the words.</em>
        </h2>
        <div className="v3-moments">
          {[
            ["The meeting after the meeting.", "Your best point arrives on the walk home."],
            ["The answer you knew.", "Until the interviewer asked you to explain."],
            ["The room you want to belong in.", "You are there. You just do not quite feel heard."],
          ].map(([a, b], i) => (
            <article key={a}>
              <IconPlate name={(["briefcase", "graduate", "globe"] as IconName[])[i]} />
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
        </div>
        <p className="v3-statement">
          You do not need a different personality.
          <br />
          You need space to practise being heard.
        </p>
      </section>
      <section className="v3-wrap v3-section">
        <StorySlides label="Lives behind the words" slides={globalStories} />
      </section>
      <section className="v3-dark">
        <div className="v3-wrap v3-split">
          <div>
            <p className="v3-kicker">THE WORK BEHIND THE CONFIDENCE</p>
            <h2>
              Less rehearsing alone.
              <br />
              <em>More real conversation.</em>
            </h2>
            <p>
              Bring a moment from your life. Practise it with a coach. Notice what changes. Try
              again with a little more clarity.
            </p>
            <Link href="/our-method" subtle>
              Inside the Lab
            </Link>
          </div>
          <div className="v3-method-list">
            {[
              ["01", "Clarity", "Find the point you want people to remember."],
              ["02", "Composure", "Stay with your idea when the conversation changes."],
              ["03", "Connection", "Choose the language that meets the person in front of you."],
            ].map(([n, t, d]) => (
              <article key={n}>
                <IconPlate name={n === "01" ? "structure" : n === "02" ? "pressure" : "exchange"} />
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="v3-wrap v3-section v3-split">
        <Scene name="mentoring" alt="Illustrative one-to-one conversation with a coach" />
        <div>
          <p className="v3-kicker">HUMAN BEFORE ANYTHING ELSE</p>
          <h2>
            A coach who listens.
            <br />
            <em>A plan that feels yours.</em>
          </h2>
          <p>
            This is live practice with another person. Your goals shape the work; feedback gives you
            something specific to try next. Small classes offer shared practice. Private coaching
            gives your own situations more time.
          </p>
          <Link href="/coaches" subtle>
            How we match you with a coach
          </Link>
          <p className="v3-small">
            A new chapter from Learn With Smile.{" "}
            <a href="/testimonials">Read the context behind our learner stories.</a>
          </p>
        </div>
      </section>
      <section className="v3-catalogue-home">
        <div className="v3-wrap v3-section">
          <div className="v3-section-top">
            <div>
              <p className="v3-kicker">WHERE DOES YOUR NEXT CHAPTER BEGIN?</p>
              <h2>
                Different lives.
                <br />
                <em>The same wish to be heard.</em>
              </h2>
            </div>
            <Link href="/courses" subtle>
              Explore all 10 programmes
            </Link>
          </div>
          <CourseRail label="Your next chapter">
            {programmes.map((p, i) => (
              <Card key={p.slug} p={p} index={i} />
            ))}
          </CourseRail>
          <p className="v3-small">
            Live classes and premium private programmes for life, study and work. {feeNote}
          </p>
        </div>
      </section>
      <section className="v3-wrap v3-section">
        <div className="brand-section-head">
          <div>
            <p className="v3-kicker">
              <LabIcon name="story" size={20} />
              FROM THE JOURNAL
            </p>
            <h2>
              The real problem.
              <br />
              <em>A practical place to start.</em>
            </h2>
          </div>
          <p>
            Original guides from the Lab. Start with a situation you recognise, try one useful
            exercise, and learn how our coaching approaches it.
          </p>
        </div>
        <div className="v5-guide-grid">
          {problemGuides.slice(0, 3).map((a) => (
            <article key={a.slug}>
              <a href={"/blog/" + a.slug} tabIndex={-1} aria-hidden="true">
                <img
                  src={"/assets/" + a.image + ".webp"}
                  alt=""
                  width="900"
                  height="600"
                  loading="lazy"
                />
              </a>
              <p className="v3-kicker">
                <LabIcon name={a.course === 4 ? "globe" : "story"} size={20} />
                {a.category}
              </p>
              <h3>
                <a href={"/blog/" + a.slug}>{a.title}</a>
              </h3>
              <p>{a.description}</p>
              <Link href={"/blog/" + a.slug} subtle>
                Read the guide
              </Link>
            </article>
          ))}
        </div>
        <Link href="/blog" subtle>
          All communication guides
        </Link>
      </section>
      <section className="v3-wrap v3-section v3-last">
        <p className="v3-kicker">THOUGHTFUL COACHING NEEDS ROOM</p>
        <h2>
          Your time to speak
          <br />
          <em>is part of the promise.</em>
        </h2>
        <p>
          We keep adult classes to a planned maximum of six, and young learner classes to four.
          Private schedules depend on coach capacity. Tell us what you need; we will confirm what is
          available before you commit.
        </p>
        <Link href="/contact">Start a conversation</Link>
        <span className="v3-small">A free fit conversation. No pressure to enrol.</span>
      </section>
    </Frame>
  );
}
export function CoursesPage() {
  const [filter, setFilter] = useState("All programmes");
  const filters = ["All programmes", ...new Set(programmes.map((p) => p.audience))];
  const selected = programmes.filter((p) => filter === filters[0] || p.audience === filter);
  return (
    <Frame>
      <Intro
        label="THE PROGRAMMES"
        title="A chapter for the life you are living."
        description="An interview. A new country. A bigger responsibility. A young voice finding its place. Start with the conversation you want to change."
        image="salon"
      />
      <section className="v3-wrap v3-section">
        <div className="v3-filters" aria-label="Filter programmes">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={f === filter}>
              {f}
            </button>
          ))}
        </div>
        <p className="v3-small" role="status">
          {selected.length} programmes · All sessions live online
        </p>
        <CourseRail key={filter} label="Course collection">
          {selected.map((p) => (
            <Card p={p} key={p.slug} index={programmes.indexOf(p)} />
          ))}
        </CourseRail>
        <p className="v3-small">{feeNote}</p>
      </section>
    </Frame>
  );
}
export function CoursePage({ index }: { index: number }) {
  const p = programmes[index];
  return (
    <Frame>
      <Intro label={p.name} title={p.headline} description={p.short} image={p.image} />
      <section className="v3-wrap v3-section v3-split">
        <div>
          <p className="v3-kicker">WHAT WE WILL PRACTISE</p>
          <h2>
            A change you can
            <br />
            <em>take into real life.</em>
          </h2>
          <p>
            We start with where you are. Each live session gives you room to practise, receive
            feedback and use it again.
          </p>
        </div>
        <ul className="v3-outcomes">
          {p.outcomes.map((x) => (
            <li key={x}>
              {arrow}
              {x}
            </li>
          ))}
        </ul>
      </section>
      <section className="v3-story">
        <div className="v3-wrap v3-section">
          <p className="v3-kicker">YOUR LEARNING JOURNEY</p>
          <h2>Small steps. Deliberate practice.</h2>
          <StorySlides
            label="Your learning chapters"
            slides={p.modules.map(([title, text], i) => ({
              title,
              text,
              label: ["YOUR STARTING POINT", "THE PRACTICE", "INTO REAL LIFE"][i],
              image:
                index === 6
                  ? "bfl-young-voices-v3"
                  : index === 7 || index === 4
                    ? "bfl-global-belonging-v4"
                    : i === 0
                      ? p.image
                      : i === 1
                        ? "practice"
                        : "bfl-global-work-v4",
              icon: programmeIcons[index],
            }))}
          />
        </div>
      </section>
      <section className="v3-wrap v3-section" id="programme-details">
        <p className="v3-kicker">THE PRACTICAL DETAILS</p>
        <h2>Make room for your next chapter.</h2>
        <div className="v3-offers">
          {p.offers.map((o) => (
            <article key={o.format}>
              <p className="v3-kicker">{o.format}</p>
              <h3>
                €{o.price.toLocaleString("en-IE")}
                <small> / programme</small>
              </h3>
              <dl>
                <div>
                  <dt>Live sessions</dt>
                  <dd>{o.sessions}</dd>
                </div>
                <div>
                  <dt>Planned duration</dt>
                  <dd>{o.weeks}</dd>
                </div>
                <div>
                  <dt>Your space</dt>
                  <dd>{o.capacity}</dd>
                </div>
                <div>
                  <dt>Feedback</dt>
                  <dd>{o.feedback}</dd>
                </div>
              </dl>
              <Link href={"/contact?course=" + p.slug + "&format=" + encodeURIComponent(o.format)}>
                Ask about this programme
              </Link>
            </article>
          ))}
        </div>
        <p className="v3-small">{feeNote}</p>
        {index === 6 && (
          <div className="v3-notice">
            <h3>For parents and guardians</h3>
            <p>
              Please enquire on your child’s behalf. We confirm age and level matching, the coach,
              supervision and safeguarding arrangements before offering a place. Do not include
              sensitive details about a child in the form.
            </p>
          </div>
        )}
        {index === 7 && (
          <p className="v3-notice">
            This fee covers up to two adults in one household. This is communication coaching, not
            therapy or relationship counselling.
          </p>
        )}
      </section>
      <section className="v3-wrap v3-section v3-split">
        <div>
          <p className="v3-kicker">BEFORE YOU DECIDE</p>
          <h2>
            Let us start
            <br />
            <em>with your situation.</em>
          </h2>
        </div>
        <div>
          <p>
            Tell us your goal and time zone. We discuss fit, share the available coach and
            timetable, and confirm the complete fee and terms in writing. An enquiry is not a
            booking.
          </p>
          <p>
            Progress depends on participation and practice. We do not guarantee a job, promotion,
            test score or business outcome.
          </p>
          <Link href="/courses" subtle>
            See the other programmes
          </Link>
        </div>
      </section>
    </Frame>
  );
}
export function PricingPage() {
  return (
    <Frame>
      <Intro
        label="PROGRAMME INVESTMENT"
        title="Pay for attention. Practice. Progress."
        description="Transparent scope for live coaching, with time set aside for your voice. Compare the full programme, not a headline monthly price."
        image="notebook"
      />
      <section className="v3-wrap v3-section">
        <p className="v3-notice">{feeNote}</p>
        <div className="v3-price-table" role="region" aria-label="All programme fees" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Programme</th>
                <th>Format</th>
                <th>Live sessions</th>
                <th>Duration</th>
                <th>EUR</th>
              </tr>
            </thead>
            <tbody>
              {programmes.flatMap((p) =>
                p.offers.map((o) => (
                  <tr key={p.slug + o.format}>
                    <th scope="row">
                      <a href={"/courses/" + p.slug}>{p.name}</a>
                    </th>
                    <td>
                      {o.format}
                      <small>{o.capacity}</small>
                    </td>
                    <td>{o.sessions}</td>
                    <td>{o.weeks}</td>
                    <td>€{o.price.toLocaleString("en-IE")}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
        <div className="v3-split v3-section">
          <div>
            <p className="v3-kicker">START WITH FIT</p>
            <h2>
              A conversation before
              <br />
              <em>a commitment.</em>
            </h2>
          </div>
          <div>
            <h3>Free fit conversation · 10–15 minutes</h3>
            <p>
              Discuss your goal, time zone and an appropriate programme. No coaching purchase
              required.
            </p>
            <h3>Optional individual assessment · €59</h3>
            <p>
              30 minutes to explore your communication starting point. Executive assessment: €99 for
              45 minutes. Ask about availability and a proposed assessment credit towards enrolment
              within 14 days; confirm the terms before paying.
            </p>
            <Link href="/assessment" subtle>
              Understand the assessment
            </Link>
          </div>
        </div>
      </section>
    </Frame>
  );
}
export function ContactPage() {
  return (
    <Frame>
      <Intro
        label="LET’S BEGIN"
        title="Tell us about the conversation on your mind."
        description="You do not need to know the course name. A situation, a goal or a little context is enough to begin."
        image="listening"
      />
      <section className="v3-wrap v3-section v3-split">
        <div>
          <p className="v3-kicker">A SMALL FIRST STEP</p>
          <h2>
            We will find
            <br />
            <em>the fit together.</em>
          </h2>
          <ol className="v3-steps">
            <li>Share your goal and usual availability.</li>
            <li>Discuss a suitable coach, format and schedule.</li>
            <li>Review the complete fee and terms before deciding.</li>
          </ol>
          <p>
            The first fit conversation is free. Your enquiry does not reserve a place or authorise a
            payment.
          </p>
          <p>
            For a child, a parent or guardian must enquire. Please avoid sensitive personal
            information.
          </p>
          <a className="v3-link" href="mailto:info@learnwithsmile.app">
            info@learnwithsmile.app <LabIcon name="mail" size={20} />
          </a>
        </div>
        <LeadForm enrol />
      </section>
    </Frame>
  );
}
export function FaqPage() {
  return (
    <Frame>
      <Intro
        label="YOUR QUESTIONS"
        title="A little clarity before you begin."
        description="The details behind the live sessions, the programme fees and your first conversation."
        image="notebook"
      />
      <section className="v3-wrap v3-section v3-faq">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </Frame>
  );
}
export function MethodPage() {
  return (
    <Frame>
      <Intro
        label="INSIDE THE LAB"
        title="Confidence is something you practise."
        description="More than knowing the words: choosing them, holding your ground and connecting with another person. Our sessions make that work visible."
        image="practice"
      />
      <section className="v3-wrap v3-section">
        <div className="v3-moments">
          {[
            [
              "Clarity",
              "Organise the thought. Choose relevant evidence. Make your next step easy to understand.",
            ],
            [
              "Composure",
              "Pause without panic. Recover from interruptions. Respond when a question changes direction.",
            ],
            [
              "Connection",
              "Listen closely. Adjust your tone. Make space for another person’s perspective.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h2>{t}</h2>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="v3-dark">
        <div className="v3-wrap v3-section">
          <p className="v3-kicker">A SESSION AT THE LAB</p>
          <h2>Bring it. Try it. Notice it. Try again.</h2>
          <div className="v3-moments">
            {[
              [
                "A real situation",
                "An upcoming meeting, presentation or everyday conversation becomes your practice brief.",
              ],
              [
                "Focused feedback",
                "Your coach identifies something specific: an opening, a pause, a question or a clearer ending.",
              ],
              [
                "Another attempt",
                "Use that feedback immediately, then choose a small practice task for the week.",
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="v3-wrap v3-section v3-split">
        <div>
          <h2>
            See your own
            <br />
            <em>starting point.</em>
          </h2>
          <p>
            Our self-check is reflective, not a formal language test. A coach can help turn your
            observations into a practical plan.
          </p>
          <Link href="/diagnostic">Take the free self-check</Link>
        </div>
        <div>
          <h3>Progress with context</h3>
          <p>
            We revisit your initial situation and compare how you handle it: structure, composure
            and tone. Any progress review is specific to your practice, not a guaranteed external
            result or an accredited qualification.
          </p>
          <Link href="/assessment" subtle>
            Explore an individual assessment
          </Link>
        </div>
      </section>
    </Frame>
  );
}
export function AboutPage() {
  return (
    <Frame>
      <Intro
        label="OUR STORY"
        title="From finding the words to finding your voice."
        description="Beyond Fluency Lab is a communication-coaching brand from Learn With Smile, rooted in Kolkata and built for conversations across borders."
        image="heritage"
      />
      <Story />
      <section className="v3-wrap v3-section v3-split">
        <div>
          <p className="v3-kicker">A NOTE FROM THE LAB</p>
          <h2>
            Keep the human
            <br />
            <em>in the learning.</em>
          </h2>
        </div>
        <div>
          <p>
            We believe the next step after fluency deserves its own kind of practice. A learner
            should have time to speak, a reason to try again and feedback they can use outside the
            session.
          </p>
          <p>
            That shapes the Lab: small live classes, personalised private coaching and real
            situations from life, study and work.
          </p>
          <p>
            Beyond Fluency Lab is operated by Learn With Smile, a sole proprietorship in India. We
            are independent of universities and employers unless a specific partnership is
            explicitly named.
          </p>
          <Link href="/coaches" subtle>
            Meet the approach behind the coaching
          </Link>
        </div>
      </section>
    </Frame>
  );
}
export function TestimonialsPage() {
  return (
    <Frame>
      <Intro
        label="LEARNER STORIES & TRUST"
        title="Trust is built in the work."
        description="Beyond Fluency Lab is a new programme from Learn With Smile. We keep the parent academy’s experience separate from evidence about this programme."
        image="listening"
      />
      <section className="v3-wrap v3-section v3-split">
        <div>
          <h2>
            Honest context.
            <br />
            <em>No borrowed outcomes.</em>
          </h2>
        </div>
        <div>
          <p>
            We are gathering permission-based stories from the Lab. We do not yet publish verified
            outcomes or testimonials from these new programmes.
          </p>
          <p>
            Learn With Smile’s earlier teaching experience informs the approach, but it does not
            prove the results of a new course. Illustrative photographs on this site are not
            photographs of named learners or coaches.
          </p>
          <h3>What you can assess now</h3>
          <ul>
            <li>The live-session scope and feedback included in each programme.</li>
            <li>The suitability of your proposed coach and timetable.</li>
            <li>The clarity of your final fee, terms and personal goals.</li>
          </ul>
          <Link href="/contact">Ask the questions that matter to you</Link>
        </div>
      </section>
    </Frame>
  );
}
const infoPages: Record<
  string,
  {
    label: string;
    title: string;
    description: string;
    image: string;
    sections: [string, string][];
    links?: [string, string][];
  }
> = {
  coaches: {
    label: "THE PEOPLE BEHIND THE PRACTICE",
    title: "Good coaching begins with listening.",
    description:
      "A human conversation, a clear goal and feedback that respects the person you already are.",
    image: "mentoring",
    sections: [
      [
        "Your coach, before you commit",
        "Ask for the available coach’s profile, relevant experience and teaching approach. We confirm who will teach your programme before enrolment; this page does not substitute illustrative people for an actual roster.",
      ],
      [
        "Matched to your situation",
        "Your goal, level, preferred schedule and programme shape the match. For young learners, age fit and safeguarding arrangements are part of that conversation.",
      ],
      [
        "Continuity matters",
        "The proposed coach and any substitution arrangements are confirmed with your programme details. Private coaching includes a defined feedback scope, not unlimited access.",
      ],
    ],
  },
  "private-coaching": {
    label: "PERSONALISED PRIVATE COACHING",
    title: "Your context deserves undivided attention.",
    description: "Premium one-to-one practice shaped around the conversations only you can bring.",
    image: "mentoring",
    sections: [
      [
        "A personal practice brief",
        "Work on your interview, leadership conversation, pitch or academic presentation. Agree a goal with your coach and revisit it throughout the programme.",
      ],
      [
        "Defined time and feedback",
        "Each programme states live-session length, total sessions and the number of short work samples included. The scope is agreed before enrolment.",
      ],
      [
        "Room for your real life",
        "We discuss time zones and scheduling before you commit. Coach availability is confirmed personally; there is no artificial countdown.",
      ],
    ],
    links: programmes
      .filter((p) => p.offers.some((o) => o.format === "Private 1:1"))
      .map((p) => ["/courses/" + p.slug, p.name]),
  },
  "live-classes": {
    label: "SMALL LIVE CLASSES",
    title: "A little company. A lot of room to speak.",
    description:
      "Learn through real interaction, shared practice and feedback — with a coach present throughout the session.",
    image: "salon",
    sections: [
      [
        "Small enough to participate",
        "Adult classes are planned for up to six learners; young learner classes for up to four. We match a suitable level and confirm the group before offering a place.",
      ],
      [
        "Live from wherever you are",
        "Discuss a compatible time zone and timetable. The programme page lists the planned number and length of sessions.",
      ],
      [
        "Availability without the theatre",
        "There are no invented seat counters. Ask about upcoming dates, minimum group requirements and what happens if a class cannot start.",
      ],
    ],
    links: programmes
      .filter((p) => p.offers.some((o) => o.format === "Live class"))
      .map((p) => ["/courses/" + p.slug, p.name]),
  },
  assessment: {
    label: "FIND YOUR STARTING POINT",
    title: "Know what to practise next.",
    description:
      "Begin with a free reflective self-check. If you want personal feedback, ask about a live individual assessment.",
    image: "notebook",
    sections: [
      [
        "Free fit conversation",
        "10–15 minutes to discuss your goal, schedule and programme fit. This is not a full coaching session or an accredited test.",
      ],
      [
        "Individual assessment · €59",
        "A planned 30-minute private session to explore a real communication situation, identify a starting point and discuss a practice focus.",
      ],
      [
        "Executive assessment · €99",
        "A planned 45-minute private session for a leadership or high-stakes communication brief. Availability, taxes and the final fee are confirmed before booking.",
      ],
      [
        "Assessment credit",
        "The proposed enrolment credit applies within 14 days. Ask for written confirmation of eligibility, amount and applicable programme before purchasing an assessment.",
      ],
    ],
    links: [["/diagnostic", "Take the free self-check"]],
  },
  "for-employers": {
    label: "FOR EMPLOYERS",
    title: "Help good work become clearly understood.",
    description:
      "Live communication practice around the meetings, client conversations and decisions your team handles every day.",
    image: "corporate",
    sections: [
      [
        "Start with a real need",
        "Tell us the team size, roles, level, time zones and communication situations you want to improve. We scope a programme around those needs.",
      ],
      [
        "Practice, not a generic presentation",
        "Discuss small-group practice, leadership coaching and relevant simulations. Any reporting, feedback and confidentiality arrangements are agreed in the proposal.",
      ],
      [
        "A scoped proposal",
        "Organisational programmes are quoted after discovery. No existing employer partnerships or results are implied.",
      ],
    ],
    links: [
      ["/courses/professional-communication", "Professional Communication"],
      ["/courses/sales-and-persuasion", "Sales & Persuasion"],
    ],
  },
  "for-universities": {
    label: "FOR UNIVERSITIES",
    title: "Give student ideas a life beyond the page.",
    description:
      "Explore live practice for presentations, seminar participation and the transition into professional conversations.",
    image: "student",
    sections: [
      [
        "Built around your students",
        "Discuss learning needs, student level, cohort size and your academic calendar. Programmes can draw on Academic Fluency and Career & Interview practice.",
      ],
      [
        "Clear boundaries",
        "We are an independent coaching provider. We do not claim affiliation with, accreditation from or endorsement by a university.",
      ],
      [
        "Discuss a pilot",
        "Ask for a scoped proposal with live hours, learner capacity, delivery requirements and evaluation expectations. Fees follow the agreed scope.",
      ],
    ],
    links: [
      ["/courses/academic-fluency", "Academic Fluency"],
      ["/courses/career-interview-intensive", "Career & Interview Intensive"],
    ],
  },
};
export function InfoPage({ page }: { page: string }) {
  const p = infoPages[page];
  return (
    <Frame>
      <Intro label={p.label} title={p.title} description={p.description} image={p.image} />
      <section className="v3-wrap v3-section">
        <StorySlides
          label="Inside your next chapter"
          slides={p.sections.map(([title, text], i) => ({
            title,
            text,
            image: i % 2 ? p.image : "bfl-global-work-v4",
            icon: (["compass", "mentor", "calendar", "check"] as IconName[])[i % 4],
          }))}
        />
        {p.links && (
          <div className="v3-related">
            <p className="v3-kicker">EXPLORE YOUR NEXT STEP</p>
            {p.links.map(([href, t]) => (
              <Link key={href} href={href} subtle>
                {t}
              </Link>
            ))}
          </div>
        )}
        <Link href="/contact">Start a conversation</Link>
      </section>
    </Frame>
  );
}
export function AudiencesPage() {
  return (
    <Frame>
      <Intro
        label="WHO IT’S FOR"
        title="A voice for every chapter of life."
        description="Start with your situation. There is no single version of confidence, and no single route to finding it."
        image="bfl-global-belonging-v4"
      />
      <section className="v3-wrap v3-section">
        <StorySlides label="People, problems, possibilities" slides={globalStories} />
      </section>
      <section className="v3-wrap v3-section">
        <div className="v3-info-grid">
          {[...new Set(programmes.map((p) => p.audience))].map((a) => (
            <article key={a}>
              <IconPlate name={programmeIcons[programmes.findIndex((p) => p.audience === a)]} />
              <h2>{a}</h2>
              {programmes
                .filter((p) => p.audience === a)
                .map((p) => (
                  <p key={p.slug}>
                    <Link href={"/courses/" + p.slug} subtle>
                      {p.name}
                    </Link>
                  </p>
                ))}
            </article>
          ))}
        </div>
        <div className="v3-related">
          <Link href="/for-employers" subtle>
            For employers
          </Link>
          <Link href="/for-universities" subtle>
            For universities
          </Link>
        </div>
      </section>
    </Frame>
  );
}

export function AudienceDetail({ slug }: { slug: string }) {
  const mapping: Record<
    string,
    { title: string; description: string; indexes: number[]; image: string }
  > = {
    "university-students": {
      title: "Your ideas belong beyond the page.",
      description:
        "Seminars, presentations and first steps into work. Practise the conversations your next chapter will ask of you.",
      indexes: [5, 1, 0],
      image: "student",
    },
    "graduating-students": {
      title: "Let the room see what you can do.",
      description:
        "You have done the learning. Now practise explaining your contribution in interviews and your first workplace conversations.",
      indexes: [1, 2, 0],
      image: "interview",
    },
    "corporate-professionals": {
      title: "Make your judgment visible.",
      description: "Bring clarity to meetings, recommendations and leadership conversations.",
      indexes: [2, 3],
      image: "corporate",
    },
    "small-business-owners": {
      title: "A strong business. A story that lands.",
      description: "Practise explaining value, discussing pricing and building partnerships.",
      indexes: [8, 9],
      image: "sme",
    },
    "sales-marketing": {
      title: "Turn a conversation into a clear next step.",
      description:
        "Listen closely, communicate relevance and help people make an informed decision.",
      indexes: [9, 2],
      image: "sales",
    },
  };
  const a = mapping[slug];
  const moments: Record<string, [string, string]> = {
    "university-students": [
      "You leave the seminar still holding your question.",
      "You understand the discussion, but worry that your question will sound obvious. By the time you find the wording, the group has moved on. Your next step is practising how to enter the conversation while the thought is still forming.",
    ],
    "graduating-students": [
      "“Tell me about yourself.” Suddenly, nothing sounds right.",
      "You have projects, effort and real experience to talk about. Under interview pressure, your answer becomes a list or a memorised speech. Practise selecting one relevant example and explaining your part clearly.",
    ],
    "corporate-professionals": [
      "Your update ends. The room moves on.",
      "You explain the work carefully, but the decision you need gets lost in the details. Across different teams and cultures, a clear recommendation matters. Practise leading with your point and responding when someone challenges it.",
    ],
    "small-business-owners": [
      "Your price becomes an apology.",
      "You believe in the business you built. Yet a buyer’s question makes you over-explain, discount too soon or lose the value of your offer. Practise a relevant explanation, a calm price conversation and a useful next step.",
    ],
    "sales-marketing": [
      "They enjoyed the conversation. Then nothing happened.",
      "The call felt warm, but you never established the real concern or agreed what happens next. Practise asking better questions, responding to the actual objection and making the decision clear without pressure.",
    ],
  };

  return (
    <Frame>
      <Intro
        label="YOUR NEXT CHAPTER"
        title={a.title}
        description={a.description}
        image={a.image}
      />
      <section className="v3-wrap v3-section">
        <p className="v3-kicker">PROGRAMMES TO EXPLORE</p>
        <StorySlides
          label="From the problem to the practice"
          slides={[
            {
              title: moments[slug][0],
              text: moments[slug][1],
              label: "THE MOMENT",
              image: a.image,
              icon: programmeIcons[a.indexes[0]],
            },
            {
              title: "Give the difficult moment a place to change.",
              text:
                programmes[a.indexes[0]].modules[1][1] +
                " Your coach gives you specific feedback, and you try the conversation again.",
              label: "THE PRACTICE",
              image: "practice",
              icon: "mentor",
            },
            {
              title: "Take a clearer next step into your world.",
              text:
                programmes[a.indexes[0]].outcomes.join(" ") +
                " These are practice goals, not guaranteed outcomes.",
              label: "YOUR NEXT CHAPTER",
              image: "bfl-global-work-v4",
              icon: "globe",
              href: "/courses/" + programmes[a.indexes[0]].slug,
            },
          ]}
        />
        <CourseRail label="Programmes for your situation">
          {a.indexes.map((i) => (
            <Card key={i} p={programmes[i]} index={i} />
          ))}
        </CourseRail>
        <p className="v3-small">{feeNote}</p>
      </section>
    </Frame>
  );
}

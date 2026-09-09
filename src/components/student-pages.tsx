import { courses, segments } from "@/lib/content";
import { LabIcon } from "./lab-icon";
import "./student-pages.css";

const trial = "/contact?course=career-interview-intensive";
const paths = [
  {
    href: "/who-its-for/university-students",
    label: "At university",
    title: "Make your ideas heard, before your first job.",
    text: "Practise seminars, project presentations and internship interviews.",
    image: "university-students.webp",
    alt: "University students discussing a project together in a library",
  },
  {
    href: "/who-its-for/graduating-students",
    label: "Graduating or recently graduated",
    title: "Bring your experience into the interview.",
    text: "Turn coursework, volunteering and part-time work into clear, honest answers.",
    image: "interview.webp",
    alt: "A graduate speaking with interviewers across a table",
  },
];

function StudentPaths() {
  return (
    <section className="sf-section">
      <p className="sf-label">Find your starting point</p>
      <h2>Two stages. A practical next step.</h2>
      <div className="sf-paths">
        {paths.map((p) => (
          <a className="sf-path" href={p.href} key={p.href}>
            <img src={"/assets/" + p.image} alt={p.alt} width="1500" height="1000" loading="lazy" />
            <div>
              <p className="sf-label">{p.label}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="sf-link">
                Explore this pathway <LabIcon name="arrow" size={18} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function CourseFeature() {
  const c = courses[1];
  return (
    <section className="sf-section sf-course">
      <div>
        <p className="sf-label">A focused place to begin</p>
        <h2>{c.name}</h2>
        <p>
          Practise introducing yourself, explaining a project and answering follow-up questions. You
          don’t need a long CV to have something worth saying.
        </p>
        <a className="sf-button" href={"/courses/" + c.slug}>
          See the course <LabIcon name="arrow" size={18} />
        </a>
      </div>
      <div className="sf-course-details">
        <p className="sf-price">
          €{c.price} <span>/ {c.duration}</span>
        </p>
        <p>
          One-time course fee including VAT. Your session schedule is agreed before payment.
        </p>
        <ul>
          <li>Live online practice in groups of about six</li>
          <li>Specific feedback from your trainer</li>
          <li>Examples drawn from your own experience</li>
        </ul>
      </div>
    </section>
  );
}

function StudentFaq() {
  const questions = [
    [
      "What if I have no work experience?",
      "Start with a university project, volunteering, a society role or part-time work. We help you explain what you personally did and learned, without exaggerating your experience.",
    ],
    [
      "Do you help me choose a career?",
      "We can discuss your goals and offer general guidance. Our main focus is communication and interview preparation, not specialist career-direction counselling, recruitment or job placement.",
    ],
    [
      "How good does my English need to be?",
      "You should already be able to hold a conversation in English. This is communication practice, not a beginner language course. The free trial helps us discuss whether the level is right for you.",
    ],
    [
      "Can I bring an upcoming interview?",
      "Yes. Bring the role description and examples you would like to discuss. We can use them as practice material; coaching does not guarantee an interview result or job offer.",
    ],
    [
      "Will this fit around university or applications?",
      "The Career & Interview Intensive runs for one month. Cohort dates, session length, frequency and your local time zone are confirmed before you enrol, so you can decide whether the schedule works.",
    ],
    [
      "How do I start?",
      "Request a free trial to discuss your goals and course fit. You can review the schedule, full price and policies before deciding whether to enrol.",
    ],
  ];
  return (
    <section className="sf-section sf-faq">
      <p className="sf-label">Before you begin</p>
      <h2>A few things you may be wondering.</h2>
      {questions.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </section>
  );
}

function PracticeSteps() {
  return (
    <section className="sf-section">
      <p className="sf-label">How the practice works</p>
      <h2>Prepare. Say it. Try again.</h2>
      <div className="sf-three">
        {[
          [
            "01",
            "Bring a real situation",
            "An internship interview, a presentation or a question you find difficult. Start with something that matters to you.",
          ],
          [
            "02",
            "Practise with people",
            "Speak in a small live group. Learn to make your point and respond when the conversation changes.",
          ],
          [
            "03",
            "Use specific feedback",
            "Notice what helped your answer land. Repeat it with a clearer structure, in your own voice.",
          ],
        ].map(([n, t, d]) => (
          <article key={n}>
            <span className="sf-number">{n}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Professionals() {
  return (
    <section className="sf-section sf-professionals">
      <p className="sf-label">Already working?</p>
      <h2>There’s room for your next step, too.</h2>
      <p>
        Coaching for meetings, presentations, client conversations and leadership remains part of
        the lab.
      </p>
      <div className="sf-audience-links">
        {segments.slice(0, 3).map((s) => (
          <a href={"/who-its-for/" + s.slug} key={s.slug}>
            {s.name} <LabIcon name="arrow" size={18} />
          </a>
        ))}
      </div>
    </section>
  );
}

function EndSection() {
  return (
    <section className="sf-section sf-end">
      <p className="sf-label">Your next conversation is a starting point</p>
      <h2>You don’t need a perfect answer to begin.</h2>
      <p>
        Tell us what you’re preparing for. We’ll help you explore the right communication practice.
      </p>
      <a className="sf-button" href={trial}>
        Request a free trial <LabIcon name="arrow" size={18} />
      </a>
      <a className="sf-link" href="/pricing">
        Explore all course fees
      </a>
    </section>
  );
}

export function StudentHomePage() {
  return (
    <main id="main" className="sf-page">
      <section className="sf-hero">
        <div>
          <p className="sf-label">For university students & recent graduates</p>
          <h1>
            Your next chapter.
            <br />
            <em>Your voice, ready.</em>
          </h1>
          <p className="sf-intro">
            You have ideas, knowledge and experiences worth sharing. Practise communicating them
            clearly—in interviews, presentations and your first professional conversations.
          </p>
          <div className="sf-actions">
            <a className="sf-button" href={trial}>
              Request a free trial <LabIcon name="arrow" size={18} />
            </a>
            <a className="sf-link" href="#student-pathways">
              Find your starting point <LabIcon name="arrow" size={18} className="sf-icon-down" />
            </a>
          </div>
          <p className="sf-note">Live online · Small groups · Interview course from €50</p>
        </div>
        <figure>
          <img
            src="/assets/university-students.webp"
            alt="An international group of university students working through ideas together"
            width="1500"
            height="1000"
            fetchPriority="high"
          />
          <figcaption>From campus conversations to the moments that come next.</figcaption>
        </figure>
      </section>
      <section className="sf-section">
        <p className="sf-label">Skills for the moments ahead</p>
        <h2>Make what you know easier to see.</h2>
        <div className="sf-three">
          {[
            [
              "Introduce yourself",
              "Give a focused answer to “tell me about yourself”, without reciting your whole CV.",
            ],
            [
              "Explain your contribution",
              "Talk about a project, a team challenge or an idea with specific examples.",
            ],
            [
              "Handle the next question",
              "Pause, listen and respond—even when you haven’t rehearsed that exact question.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <div id="student-pathways">
        <StudentPaths />
      </div>
      <CourseFeature />
      <PracticeSteps />
      <section className="sf-section sf-trust">
        <p className="sf-label">From Learn With Smile</p>
        <h2>A place to practise, not to perform perfectly.</h2>
        <p>
          Live teaching, small-group conversation and feedback you can put into practice. Beyond
          Fluency Lab brings that approach to the communication challenges ahead of you.
        </p>
        <a className="sf-link" href="/our-method">
          Explore our teaching method <LabIcon name="arrow" size={18} />
        </a>
      </section>
      <StudentFaq />
      <Professionals />
      <EndSection />
    </main>
  );
}

export function StudentAudiencePage({ graduate = false }: { graduate?: boolean }) {
  const p = paths[graduate ? 1 : 0];
  const situations = graduate
    ? [
        [
          "Your first interview",
          "Build an introduction that connects your studies, interests and the role you’re applying for.",
        ],
        [
          "Your experience, explained",
          "Choose evidence from coursework, volunteering or part-time work. Be clear about your own contribution.",
        ],
        [
          "Questions you didn’t expect",
          "Practise follow-ups, asking for clarification and recovering when an answer loses its direction.",
        ],
      ]
    : [
        [
          "Presentations & seminars",
          "Organise an idea, speak to the room and answer questions about your work.",
        ],
        [
          "Internship interviews",
          "Explain why an opportunity interests you and what you can contribute while you’re still learning.",
        ],
        [
          "Group projects & networking",
          "Join the discussion, disagree respectfully and introduce yourself to someone new.",
        ],
      ];
  return (
    <main id="main" className="sf-page">
      <section className="sf-hero">
        <div>
          <p className="sf-label">{p.label}</p>
          <h1>
            {graduate
              ? "Your degree is a beginning. Let’s practise what comes next."
              : "Find your voice. While you find your way."}
          </h1>
          <p className="sf-intro">
            {graduate
              ? "Communication and interview preparation for final-year students and recent graduates. Make your experience clear—even when your career is just beginning."
              : "Communication coaching for university students preparing for presentations, internships and first professional conversations. Build confidence through practice, one situation at a time."}
          </p>
          <a className="sf-button" href={trial}>
            Request a free trial <LabIcon name="arrow" size={18} />
          </a>
          <p className="sf-note">Online · Groups of about six · Practical trainer feedback</p>
        </div>
        <figure>
          <img
            src={"/assets/" + p.image}
            alt={p.alt}
            width="1500"
            height="1000"
            fetchPriority="high"
          />
          <figcaption>
            {graduate
              ? "You can start with the experience you already have."
              : "Make space for your ideas in the conversation."}
          </figcaption>
        </figure>
      </section>
      <section className="sf-section">
        <p className="sf-label">Your practice, your context</p>
        <h2>
          {graduate
            ? "Prepare for the conversation, not a memorised script."
            : "Skills you can use on campus—and beyond."}
        </h2>
        <div className="sf-three">
          {situations.map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="sf-section sf-trust">
        <p className="sf-label">Try a small first step</p>
        <h2>{graduate ? "One project. One clear answer." : "Give your idea a clear opening."}</h2>
        <p>
          {graduate
            ? "Choose a project from your studies, volunteering or part-time work. In 60 seconds, explain what needed to happen, what you personally did and what you learned. Then try answering: why did you choose that approach?"
            : "Choose a topic from a seminar or group project. In 60 seconds, state your main idea, give one reason or example and say what you want the group to consider next. Ask a friend which point they remember."}
        </p>
        <p>
          You don’t need to get it right on the first attempt. Notice one thing you would make
          clearer, then try again.
        </p>
        <a className="sf-link" href="/our-method">
          See how we turn practice into feedback <LabIcon name="arrow" size={18} />
        </a>
      </section>
      <CourseFeature />
      {!graduate && (
        <section className="sf-section sf-trust">
          <p className="sf-label">Presentations before interviews?</p>
          <h2>Choose practice that fits your immediate goal.</h2>
          <p>
            If speaking up in seminars or presenting to a group is your first priority, Speak with
            Confidence offers focused practice over 3–4 weeks for a listed fee of €50. You do not
            need to take every course in order.
          </p>
          <a className="sf-link" href="/courses/speak-with-confidence">
            Explore Speak with Confidence <LabIcon name="arrow" size={18} />
          </a>
        </section>
      )}
      <section className="sf-section">
        <p className="sf-label">Keep practising</p>
        <h2>Prepare for your next conversation.</h2>
        <p>Use these short guides before your next interview, seminar or presentation.</p>
        <div className="sf-audience-links">
          <a href="/blog/the-interview-after-the-exam">Interview preparation after university <LabIcon name="arrow" size={18} /></a>
          <a href="/blog/stay-clear-under-pressure">Speaking clearly under pressure <LabIcon name="arrow" size={18} /></a>
        </div>
      </section>
      <PracticeSteps />
      <StudentFaq />
      <StudentPaths />
      <EndSection />
    </main>
  );
}

export function StudentAudiencesPage() {
  return (
    <main id="main" className="sf-page">
      <section className="sf-section">
        <p className="sf-label">Who it’s for</p>
        <h1>
          Start where you are.
          <br />
          <em>Practise for what’s next.</em>
        </h1>
        <p className="sf-intro">
          Student and graduate communication comes first. Wherever you are in your journey, choose
          the situations you want to practise.
        </p>
      </section>
      <StudentPaths />
      <Professionals />
      <EndSection />
    </main>
  );
}

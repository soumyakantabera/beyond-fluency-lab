import { programmes } from "./programmes";
export const ORIGIN = "https://beyond-fluency-lab.vercel.app";
export const BUSINESS =
  "Beyond Fluency Lab, from Learn With Smile, offers live communication coaching through small classes and premium personalised private programmes for life, study and work.";
export const FOOTER_BLURB =
  "Your ideas, your experiences, your voice. Live communication coaching for the conversations that matter — in life, study and work.";
export const AFFILIATION_Q = "Are you affiliated with my university?";
export const AFFILIATION_A =
  "No. Beyond Fluency Lab is an independent programme — we are not partnered with, endorsed by, or officially connected to any specific university. If we ever do form a real partnership with a school, we'll state it clearly on this page, by name.";
export function pageMeta(path: string, title: string, description: string, _kind?: string) {
  return { path, title: title + " | Beyond Fluency Lab", description };
}
// Keep the original first-four order for existing diagnostic recommendations.
export const courses = programmes.map((p, i) => ({
  ...p,
  price: p.offers[0].price,
  duration: p.offers[0].weeks,
  kicker: String(i + 1).padStart(2, "0") + " / YOUR NEXT CHAPTER",
  description: p.short + " Live online communication coaching with personalised feedback.",
  dimension: "Clarity, composure and connection",
  for: p.short,
  segments: [0, 1, 2, 3],
}));
export const segments = [
  {
    slug: "corporate-professionals",
    name: "Corporate Professionals",
    hook: "The overlooked promotion.",
    image: "corporate",
    course: 2,
    pain: "You did the work. Someone else made the case.",
    intro:
      "Your English gets you through meetings. But your updates describe activity when the room needs a recommendation. The next step is making your judgment visible.",
    situations: [
      "The update that disappears into the minutes.",
      "The proposal you soften until it sounds optional.",
      "The question that makes you abandon your strongest point.",
    ],
    practice:
      "Take a routine project update. Start with the decision required, give one piece of evidence, then name the next action. Rehearse it again with an interruption.",
    guide: "make-your-work-visible",
  },
  {
    slug: "small-business-owners",
    name: "Small Business & SME Owners",
    hook: "The sale your English almost lost.",
    image: "sme",
    course: 2,
    pain: "Your offer is strong. Your explanation wanders.",
    intro:
      "You know your business inside out. A buyer needs the part that matters to them: the problem, the value and a credible next step. Fluency alone does not make that selection for you.",
    situations: [
      "The prospect who likes the idea but never decides.",
      "The price objection you answer with an apology.",
      "The follow-up that sounds either too formal or too familiar.",
    ],
    practice:
      "Explain your offer in three sentences: the buyer’s problem, the change you can deliver and the next step you recommend. Have a partner challenge the value.",
    guide: "explain-your-value",
  },
  {
    slug: "sales-marketing",
    name: "Sales & Marketing",
    hook: "Comfortable talking, untrained at closing.",
    image: "sales",
    course: 2,
    pain: "The conversation flows. The decision doesn’t.",
    intro:
      "You can keep a conversation going. Now train the moments that move it forward: a sharper question, a relevant answer to an objection and a next step both sides understand.",
    situations: [
      "The objection you answer before understanding it.",
      "The product story with no buyer-specific consequence.",
      "The close that turns into “let me know what you think”.",
    ],
    practice:
      "When a prospect says “too expensive”, ask what they are comparing it with. Summarise their concern before proposing a next step. Practise staying curious under pressure.",
    guide: "from-conversation-to-decision",
  },
  {
    slug: "graduating-students",
    name: "Graduating Students",
    hook: "The exam you never had.",
    image: "student",
    course: 1,
    pain: "You passed English. Nobody tested your interview.",
    intro:
      "Exams reward a correct answer. Interviews ask you to choose a relevant example, explain your part and respond when the next question changes direction. That is a different kind of practice.",
    situations: [
      "The “tell me about yourself” answer with no direction.",
      "The group task where your idea arrives too late.",
      "The follow-up question your rehearsed answer cannot cover.",
    ],
    practice:
      "Choose one real project. Say what needed to happen, what you personally did and what changed. Ask a friend to interrupt with “why?” and answer without starting again.",
    guide: "the-interview-after-the-exam",
  },
];
export const faqs = [
  [
    "Are all sessions live?",
    "Yes. These are live online coaching programmes with a coach. They are not a library of recorded lessons.",
  ],
  [
    "Is every course available privately and in a class?",
    "No. Each course lists its own formats. Executive and Business Owner’s programmes are private; Speak with Confidence, Settle & Belong and Kids & Teens are live classes. Career, Professional, Academic and Sales offer both. Family Communication is private for up to two adults.",
  ],
  [
    "How many people are in a class?",
    "Adult classes are designed for up to six learners. Kids & Teens classes are designed for up to four, matched by age and level. Actual dates and group fit are confirmed before enrolment.",
  ],
  [
    "What do the fees include?",
    "The stated live sessions and the feedback scope listed on your course page. Fees are indicative in EUR. We confirm applicable taxes, the final total and terms before any payment.",
  ],
  [
    "How do I begin?",
    "Take the free self-check or request a free 10–15 minute fit conversation. If useful, ask about a paid assessment: €59 for 30 minutes, or €99 for a 45-minute executive assessment. Availability and any assessment credit are confirmed before booking.",
  ],
  [
    "Can I enrol my child?",
    "A parent or guardian must make the enquiry and complete enrolment. We discuss age, level, safeguarding arrangements and suitable class times before a place is offered. Do not send sensitive information about your child through the enquiry form.",
  ],
  [
    "Do you guarantee a job, promotion or fluency?",
    "No. Coaching offers practice and feedback; progress depends on your starting point, participation and practice. We do not promise employment, revenue or a fixed outcome.",
  ],
  [
    "Is family communication coaching therapy?",
    "No. It is language and communication practice for adults. It does not provide counselling, therapy or crisis support.",
  ],
  [AFFILIATION_Q, AFFILIATION_A],
];

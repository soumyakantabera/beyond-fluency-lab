export type Offer = {
  format: "Live class" | "Private 1:1" | "Private household";
  price: number;
  sessions: string;
  weeks: string;
  capacity: string;
  feedback: string;
};
export type Programme = {
  slug: string;
  name: string;
  audience: string;
  image: string;
  headline: string;
  short: string;
  outcomes: string[];
  modules: [string, string][];
  offers: Offer[];
};
const batch = (
  price: number,
  sessions: string,
  weeks: string,
  capacity = "Up to 6 learners",
): Offer => ({
  format: "Live class",
  price,
  sessions,
  weeks,
  capacity,
  feedback: "Specific feedback during live practice; a clear focus for your next session.",
});
const privateOffer = (price: number, sessions: string, weeks: string, items: number): Offer => ({
  format: "Private 1:1",
  price,
  sessions,
  weeks,
  capacity: "One learner, one coach",
  feedback: `Personalised session feedback and up to ${items} short work samples reviewed during the programme. Scope agreed before enrolment.`,
});
export const programmes: Programme[] = [
  {
    slug: "speak-with-confidence",
    name: "Speak with Confidence",
    audience: "Everyday confidence",
    image: "practice",
    headline: "The thought is already there. Give it a voice.",
    short: "For the moments when you know the answer, but someone else speaks first.",
    outcomes: [
      "Start a conversation without scripting every sentence.",
      "Hold your place through an interruption.",
      "Recover when you lose a word or your train of thought.",
    ],
    modules: [
      [
        "Find your footing",
        "Notice your speaking patterns in a low-pressure conversation. Set a small, personal goal.",
      ],
      [
        "Take your turn",
        "Practise openings, clear points and thoughtful interruptions with your group.",
      ],
      [
        "Stay in the conversation",
        "Repeat realistic situations with increasing challenge, then reflect on what changed.",
      ],
    ],
    offers: [batch(349, "10 × 60 minutes", "5 weeks")],
  },
  {
    slug: "career-interview-intensive",
    name: "Career & Interview Intensive",
    audience: "Careers & interviews",
    image: "interview",
    headline: "Let your experience speak for itself.",
    short: "Turn the work you have done into answers that sound clear, credible and like you.",
    outcomes: [
      "Tell evidence-led stories about your contribution.",
      "Handle unexpected follow-up questions.",
      "Explain your strengths without memorising a script.",
    ],
    modules: [
      ["Find the evidence", "Map your experience to the role you want."],
      ["Shape your story", "Build concise, relevant answers and a confident introduction."],
      ["Meet the follow-up", "Rehearse realistic interviews, reflect and try again."],
    ],
    offers: [
      batch(499, "12 × 60 minutes", "6 weeks"),
      privateOffer(899, "6 × 60 minutes", "3–6 weeks", 3),
    ],
  },
  {
    slug: "professional-communication",
    name: "Professional Communication",
    audience: "Work & leadership",
    image: "bfl-global-work-v4",
    headline: "Make your contribution impossible to miss.",
    short: "Meetings, presentations and difficult conversations that move work forward.",
    outcomes: [
      "Make a recommendation with clear evidence.",
      "Respond to pushback without losing the thread.",
      "Adapt your tone to colleagues, clients and leaders.",
    ],
    modules: [
      ["Create clarity", "Lead with your point and give the room a useful next step."],
      [
        "Navigate resistance",
        "Practise difficult questions, disagreement and interrupted updates.",
      ],
      ["Build range", "Adapt the same message for different people and situations."],
    ],
    offers: [
      batch(699, "20 × 60 minutes", "10 weeks"),
      privateOffer(1499, "10 × 60 minutes", "8–10 weeks", 5),
    ],
  },
  {
    slug: "executive-communication",
    name: "Executive Communication",
    audience: "Work & leadership",
    image: "mentoring",
    headline: "Say less. Carry more weight.",
    short: "Personalised coaching for decisions, negotiations and conversations with consequences.",
    outcomes: [
      "Frame decisions under uncertainty.",
      "Disagree firmly while preserving trust.",
      "Lead high-stakes conversations with restraint and precision.",
    ],
    modules: [
      [
        "Define the stakes",
        "Choose real leadership situations and agree a confidential practice brief.",
      ],
      [
        "Lead under pressure",
        "Rehearse negotiation, board-level questions and challenging decisions.",
      ],
      [
        "Refine your presence",
        "Review your language, pacing and judgment across changing contexts.",
      ],
    ],
    offers: [privateOffer(2499, "12 × 75 minutes", "12–14 weeks", 6)],
  },
  {
    slug: "settle-and-belong",
    name: "Settle & Belong",
    audience: "Life & belonging",
    image: "bfl-global-belonging-v4",
    headline: "A new place can start to feel like yours.",
    short: "Build confidence in everyday conversations when you are making a life somewhere new.",
    outcomes: [
      "Start and sustain everyday conversations.",
      "Ask for clarification without embarrassment.",
      "Understand and discuss unfamiliar social expectations.",
    ],
    modules: [
      ["Find familiar ground", "Practise introductions, small talk and asking for help."],
      [
        "Navigate daily life",
        "Rehearse appointments, community interactions and everyday misunderstandings.",
      ],
      [
        "Build connection",
        "Practise invitations, boundaries and conversations that grow relationships.",
      ],
    ],
    offers: [batch(599, "16 × 60 minutes", "8 weeks")],
  },
  {
    slug: "academic-fluency",
    name: "Academic Fluency",
    audience: "Study & young voices",
    image: "student",
    headline: "Your ideas belong in the discussion.",
    short:
      "From seminars to presentations: participate with clarity, curiosity and your own perspective.",
    outcomes: [
      "Contribute to seminar discussions.",
      "Present an argument and respond to questions.",
      "Discuss research and collaborate across cultures.",
    ],
    modules: [
      [
        "Enter the discussion",
        "Practise asking questions, contributing and disagreeing constructively.",
      ],
      [
        "Present your thinking",
        "Structure academic ideas for an audience outside your specialist subject.",
      ],
      ["Defend and reflect", "Rehearse questions, group work and short research presentations."],
    ],
    offers: [
      batch(599, "16 × 60 minutes", "8 weeks"),
      privateOffer(1199, "8 × 60 minutes", "4–8 weeks", 4),
    ],
  },
  {
    slug: "confident-kids-and-teens",
    name: "Confident Kids & Teens",
    audience: "Study & young voices",
    image: "bfl-young-voices-v3",
    headline: "A little courage. A voice that grows.",
    short:
      "Age-appropriate live speaking practice where young people have room to try, pause and try again.",
    outcomes: [
      "Share a story or idea with greater ease.",
      "Listen, take turns and ask thoughtful questions.",
      "Practise classroom speaking and presentations.",
    ],
    modules: [
      [
        "Feel comfortable",
        "Build trust through age-appropriate conversation and creative prompts.",
      ],
      ["Explore your voice", "Practise storytelling, expression and listening in a small group."],
      [
        "Share something yours",
        "Prepare and deliver a short personal presentation with supportive feedback.",
      ],
    ],
    offers: [
      batch(649, "24 × 45 minutes", "12 weeks", "Up to 4 learners, matched by age and level"),
    ],
  },
  {
    slug: "cross-cultural-relationships",
    name: "Cross-Cultural Relationships & Family Communication",
    audience: "Life & belonging",
    image: "bfl-global-belonging-v4",
    headline: "Understand the person behind the words.",
    short:
      "Private communication practice for adults navigating different languages, expectations and cultures.",
    outcomes: [
      "Clarify meaning before making assumptions.",
      "Express needs and boundaries respectfully.",
      "Discuss cultural differences with curiosity.",
    ],
    modules: [
      ["Listen for meaning", "Explore communication preferences and recurring misunderstandings."],
      ["Say what matters", "Practise requests, boundaries and respectful disagreement."],
      [
        "Make space for each other",
        "Rehearse realistic conversations and agree habits to use at home.",
      ],
    ],
    offers: [
      {
        ...privateOffer(1299, "8 × 60 minutes", "8 weeks", 4),
        format: "Private household",
        capacity: "Up to 2 adults; fee covers the household",
      },
    ],
  },
  {
    slug: "business-owners-intensive",
    name: "Business Owner’s Communication Intensive",
    audience: "Business & sales",
    image: "sme",
    headline: "You built the business. Now tell its story.",
    short:
      "Personalised practice for the pitches, pricing conversations and partnerships your business needs.",
    outcomes: [
      "Explain your value in the buyer’s language.",
      "Discuss pricing without apologising.",
      "Lead partner and client conversations with direction.",
    ],
    modules: [
      ["Find your message", "Turn your offer into a concise, buyer-relevant explanation."],
      ["Practise the conversation", "Rehearse discovery, pricing and partnership discussions."],
      ["Ask for the next step", "Refine proposals and follow-ups around clear, mutual decisions."],
    ],
    offers: [privateOffer(1499, "10 × 60 minutes", "8–10 weeks", 5)],
  },
  {
    slug: "sales-and-persuasion",
    name: "Sales & Persuasion",
    audience: "Business & sales",
    image: "sales",
    headline: "A better conversation. A clearer decision.",
    short: "Ethical persuasion that starts with listening and ends with a useful next step.",
    outcomes: [
      "Ask questions that uncover a real need.",
      "Respond to objections with relevant evidence.",
      "Agree clear next steps without pressure tactics.",
    ],
    modules: [
      ["Understand first", "Practise discovery and active listening before presenting a solution."],
      ["Make relevance visible", "Connect your offer to a specific need and handle objections."],
      ["Move forward together", "Rehearse decision conversations and thoughtful follow-ups."],
    ],
    offers: [
      batch(699, "16 × 60 minutes", "8 weeks"),
      privateOffer(1499, "10 × 60 minutes", "8–10 weeks", 5),
    ],
  },
];
export const feeNote =
  "Indicative programme fees in EUR, not a payment offer. Your coach, timetable, availability, applicable taxes and final total are confirmed in writing before enrolment. No recurring subscription.";

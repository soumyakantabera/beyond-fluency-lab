import { courses, segments, pageMeta } from "./content";
import { articles } from "./articles";
export const simplePages: Record<string, [string, string]> = {
  enrol: [
    "Join a Communication Coaching Course",
    "Enquire about joining a live communication course in English. Confirm your schedule and fee before enrolling.",
  ],
  courses: [
    "Live Communication Courses in English for Fluent Speakers",
    "Compare ten live live communication courses in English for Europe. Explore live classes and private programmes.",
  ],
  "who-its-for": [
    "Communication Coaching for Students, Professionals and NRIs",
    "The Plateau Framework in real life: live communication coaching for students, professionals, NRIs, leaders, business owners and families.",
  ],
  "our-method": [
    "The Plateau Framework: Live Communication Coaching Method",
    "Persuasive Structure, Pressure Performance and Register Control: an original coaching framework adapted to life, study and work through live classes and personalised private practice.",
  ],
  about: [
    "About Beyond Fluency Lab and Learn With Smile",
    "Kolkata roots, European ambition. Learn With Smile’s 7-year, 500+ learner history behind a new live coaching programme for fluent English speakers.",
  ],
  testimonials: [
    "Learn With Smile Learner Stories and the European Launch",
    "Attributed Parent-academy Learn With Smile stories, clearly separated from the founding European cohort, which has no EU testimonials yet.",
  ],
  blog: [
    "Professional Communication Blog and Practical Guides",
    "Read The Fluency Plateau Report and practical guides for meetings, sales, SME pitches, interviews, pressure performance and register.",
  ],
  pricing: [
    "Communication Coaching in English: indicative programme fees",
    "Compare course fees: all live programme fees and session scopes.",
  ],
  faq: [
    "Frequently Asked Questions About Beyond Fluency Lab",
    "Answers about live classes, fees, level, course progression, alumni practice and our independence from universities.",
  ],
  contact: [
    "Book a Free Live Communication Trial",
    "Request a free live coaching trial. Tell us your communication goal and local time zone; discuss the right course before deciding.",
  ],
  "brand-kit": [
    "Beyond Fluency Lab Brand Asset Kit",
    "Download the logo, favicon, social cards, business card concept and A4 letterhead template.",
  ],
  "legal/terms": [
    "Terms of Service",
    "How Beyond Fluency Lab runs: enrolment, learner responsibilities, governing law and consumer rights that still apply in your country.",
  ],
  "legal/privacy": [
    "Privacy Policy",
    "What Beyond Fluency Lab collects, why we use it, who we share it with, and how to ask for access or deletion.",
  ],
  "legal/cookies": [
    "Cookie Policy",
    "Essential storage, Google Analytics, Tag Manager and Bing UET for off-site Bing ads — not advertisements on this website.",
  ],
  "legal/refunds": [
    "Refund & Cancellation Policy",
    "Free trials, the 14-day EU/UK withdrawal right, standard cancellation, rescheduling and how refunds are paid.",
  ],
  "legal/gdpr": [
    "GDPR Information",
    "How Beyond Fluency Lab maps GDPR rights to trial requests, enrolment, Stripe payments, the diagnostic, Google Analytics and Bing ads measurement.",
  ],
  "legal/uk": [
    "UK Privacy Addendum",
    "How UK GDPR applies to Beyond Fluency Lab learners in the United Kingdom, including ICO complaints.",
  ],
  "legal/us": [
    "US Privacy Addendum",
    "How California and similar US state privacy rights apply to Beyond Fluency Lab learners in the United States.",
  ],
};
simplePages["who-its-for"] = [
  "Communication Coaching for Students, Graduates & Professionals",
  "Explore student and graduate pathways for presentations, internships and first-job interviews, plus communication coaching for working professionals.",
];
// Search snippets describe the actual offering without changing the editorial page story.
simplePages.courses = [
  "Live Communication & Interview Courses",
  "Compare live online communication courses for students, graduates and professionals. Small-group practice, trainer feedback and fees of indicative programme fees.",
];
simplePages.blog = [
  "Communication & Interview Preparation Guides",
  "Practical guides for university presentations, graduate interviews and workplace conversations. Learn to structure answers and speak clearly under pressure.",
];
simplePages.about = [
  "About Beyond Fluency Lab",
  "Meet the communication-coaching approach from Learn With Smile. Live online practice for students, graduates and professionals who already speak English.",
];
simplePages.testimonials = [
  "Learner Stories from Learn With Smile",
  "Explore learner stories from Learn With Smile, the parent academy behind Beyond Fluency Lab, and discover our live communication-coaching approach.",
];
simplePages.pricing = [
  "Communication Course Fees",
  "Live programme fees, formats and session scopes.",
];
Object.assign(simplePages, {
  courses: [
    "Live Communication Programmes",
    "Explore all ten course families: live classes and premium personalised private coaching for life, study and work.",
  ],
  pricing: [
    "Programme Fees & Live Coaching Scope",
    "Compare fourteen live programme options, session counts and indicative fees. Your coach, timetable, taxes and total are confirmed before enrolment.",
  ],
  contact: [
    "Start a Conversation",
    "Tell us your communication goal and time zone. Request a free fit conversation before choosing a live programme.",
  ],
  "our-method": [
    "Our Live Coaching Method",
    "Real situations, deliberate practice and specific feedback for clarity, composure and connection.",
  ],
  coaches: [
    "Your Coach & Our Approach",
    "Understand how a coach is matched to your goals and what to ask before enrolment.",
  ],
  "private-coaching": [
    "Premium Personalised Private Coaching",
    "Live one-to-one communication coaching for your career, leadership, academic and business goals.",
  ],
  "live-classes": [
    "Small Live Communication Classes",
    "Live practice with a coach: up to six adults or four young learners, subject to level and schedule matching.",
  ],
  assessment: [
    "Communication Assessment",
    "Explore a free self-check, a free fit conversation and optional individual communication assessments.",
  ],
  "for-employers": [
    "Communication Coaching for Teams",
    "Discuss a scoped live communication programme for your team and its real workplace conversations.",
  ],
  "for-universities": [
    "Communication Practice for Students",
    "Discuss academic and career communication programmes. Beyond Fluency Lab is an independent provider.",
  ],
});
export const paths = [
  "/",
  "/who-its-for/university-students",
  ...Object.keys(simplePages).map((x) => "/" + x),
  ...courses.map((c) => "/courses/" + c.slug),
  ...segments.map((s) => "/who-its-for/" + s.slug),
  ...articles.map((a) => "/blog/" + a.slug),
  "/diagnostic",
];
export function routeMetadata(slug: string) {
  const simple = simplePages[slug];
  if (simple)
    return pageMeta(
      "/" + slug,
      ...simple,
      slug === "blog" ? "blog" : slug === "courses" || slug === "pricing" ? "course" : "home",
    );
  const c = courses.find((x) => "courses/" + x.slug === slug);
  if (c)
    return pageMeta(
      "/" + slug,
      c.name + " Live Communication Coaching · €" + c.price,
      c.description,
      "course",
    );
  const s = segments.find((x) => "who-its-for/" + x.slug === slug);
  if (s)
    return pageMeta(
      "/" + slug,
      "Professional Communication Coaching for " + s.name,
      s.intro,
      "course",
    );
  const a = articles.find((x) => "blog/" + x.slug === slug);
  if (a) return pageMeta("/" + slug, a.title, a.description, "blog");
  return pageMeta("/" + slug, "Page not found", "Explore Beyond Fluency Lab.");
}

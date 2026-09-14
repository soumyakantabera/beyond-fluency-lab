import { courses, segments, pageMeta } from "./content";
import { articles } from "./articles";
export const simplePages: Record<string, [string, string]> = {
  enrol: [
    "Join a Communication Coaching Course",
    "Enquire about joining a live communication course in English. Confirm your schedule and fee before enrolling.",
  ],
  courses: [
    "Live Communication Courses in English for Fluent Speakers",
    "Explore ten communication course families for life, study and work, through small live classes and premium personalised private coaching.",
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
    "The story behind Beyond Fluency Lab, from Learn With Smile in Kolkata to live communication coaching for students, professionals, NRIs and families.",
  ],
  testimonials: [
    "Learn With Smile Learner Stories and the European Launch",
    "Attributed Parent-academy Learn With Smile stories, clearly separated from the founding European cohort, which has no EU testimonials yet.",
  ],
  blog: [
    "Communication Stories and Guides for Life, Study and Work",
    "Read our story, the Plateau Framework and original communication guides for students, professionals, NRIs, families and business owners. Explore live coaching and indicative programme fees.",
  ],
  pricing: [
    "Communication Coaching in English: indicative programme fees",
    "Compare fourteen live programme offers, formats, sessions and indicative fees. Your timetable, taxes and final total are confirmed before enrolment.",
  ],
  faq: [
    "Frequently Asked Questions About Beyond Fluency Lab",
    "Answers about live classes, private coaching, indicative fees, trial requests, learner suitability and programme arrangements.",
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
// Supporting pages share the same canonical metadata registry.
Object.assign(simplePages, {
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

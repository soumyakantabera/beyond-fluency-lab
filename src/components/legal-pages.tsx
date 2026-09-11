import type { ReactNode } from "react";
import { PageHero } from "./site-pages";

type PolicyKind = "terms" | "privacy" | "cookies" | "refunds" | "gdpr" | "uk" | "us";
const meta: Record<PolicyKind, { title: string; summary: string; sections: string[] }> = {
  terms: { title: "Terms of Service", summary: "How Beyond Fluency Lab runs: who we are, enrolment, your responsibilities, and the law that still applies in your country.", sections: ["Who we are", "What we provide", "Eligibility", "Free trial", "Enrolment and payment", "Your responsibilities", "Schedules and trainers", "Cancellations", "Intellectual property", "Liability", "Governing law", "Changes", "Contact"] },
  privacy: { title: "Privacy Policy", summary: "What personal information we collect, why we use it, who we share it with, and how you can ask us to correct or delete it.", sections: ["Who we are", "What this policy covers", "Information we collect", "How we use information", "Legal basis", "Your rights", "Payments", "Class recordings", "Cookies", "Who we share with", "International transfers", "Retention", "Children", "Security", "Grievance officer", "Contact"] },
  cookies: { title: "Cookie Policy", summary: "Essential storage, Google Analytics, Tag Manager, and Bing ads measurement for campaigns that run outside this website.", sections: ["How we use cookies", "Essential", "Analytics", "Bing ads measurement", "Cookie list", "Your controls", "Changes", "Contact"] },
  refunds: { title: "Refund & Cancellation Policy", summary: "Free trials, the 14-day EU/UK withdrawal right, standard cancellation, rescheduling and how refunds are paid.", sections: ["Free trial", "EU and UK withdrawal", "Standard cancellation", "Rescheduling", "How refunds are processed", "Removal for conduct", "How to request"] },
  gdpr: { title: "GDPR Information", summary: "How we handle personal data of people in the EU and EEA, mapped to forms, payments, Google Analytics, Tag Manager and off-site Bing ads measurement.", sections: ["Scope", "Controller", "EU representative", "Data flows", "Your rights", "Processors", "International transfers", "Retention", "Complaints", "Contact"] },
  uk: { title: "UK Privacy Addendum", summary: "How UK GDPR applies to learners in the United Kingdom. Read this with the Privacy Policy, not instead of it.", sections: ["UK GDPR", "UK representative", "Data controller", "Your rights", "Supervisory authority", "Contact"] },
  us: { title: "US Privacy Addendum", summary: "How California and similar US state privacy rights apply. Read this with the Privacy Policy, not instead of it.", sections: ["Overview", "Categories we collect", "Sale and sharing", "Your rights", "Sensitive information", "Data controller", "Retention", "Contact"] },
};
const id = (value: string) => value.toLowerCase().replaceAll(" ", "-");
function Section({ title, children }: { title: string; children: ReactNode }) { return <section id={id(title)}><h2>{title}</h2>{children}</section>; }
function PolicyNav({ kind }: { kind: PolicyKind }) {
  const links: [PolicyKind, string][] = [["terms", "Terms"], ["privacy", "Privacy"], ["uk", "UK privacy"], ["us", "US privacy"], ["cookies", "Cookies"], ["refunds", "Refunds"], ["gdpr", "GDPR"]];
  return <aside className="policy-nav" aria-label="Policy contents"><p className="eyebrow">ON THIS PAGE</p><ol>{meta[kind].sections.map((section) => <li key={section}><a href={`#${id(section)}`}>{section}</a></li>)}</ol><div className="policy-links">{links.filter(([key]) => key !== kind).map(([key, label]) => <a key={key} href={`/legal/${key}`}>{label}</a>)}</div></aside>;
}

function Terms() { return <>
  <Section title="Who we are"><p>Beyond Fluency Lab is a live communication coaching programme operated by <strong>Learn With Smile</strong>, a sole proprietorship registered in India, trading as Beyond Fluency Lab, at 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, West Bengal, India. Contact: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p><p>These terms describe how the programme runs. They are not legal advice. Consumer rights under the law of your country that cannot be waived still apply.</p></Section>
  <Section title="What we provide"><p>Live, small-group (typically around six learners) online communication coaching for university students, graduates and working professionals, across the course tiers listed on our <a href="/courses">Courses</a> page. Duration, format and price are as stated on the relevant course page at the time you enrol.</p></Section>
  <Section title="Eligibility"><p>Programmes are for learners who already have working English fluency and want persuasive structure, pressure performance and register control — not for absolute beginners in English. If you are unsure whether a course fits, <a href="/contact">contact us</a> before enrolling.</p></Section>
  <Section title="Free trial"><p>A free trial class does not require payment or a long-term commitment. Booking a trial does not obligate you to enrol in a paid course.</p></Section>
  <Section title="Enrolment and payment"><p>Enrolling in a paid course requires payment in full at the stated price, through our payment providers (Stripe and/or Razorpay). Prices are as stated on the course page at enrolment. Where prices exclude VAT or other applicable tax, that tax is calculated at checkout based on your location and added before payment. Your place is confirmed once payment is successfully processed.</p></Section>
  <Section title="Your responsibilities"><p>Attend live sessions on time and prepared. Do not share class recordings outside your enrolled group. Engage respectfully with trainers and fellow learners.</p><p>We may remove a learner from a course, without refund of sessions already delivered, in cases of abusive behaviour, harassment, or repeated serious disruption of a live session.</p></Section>
  <Section title="Schedules and trainers"><p>We aim to keep the same trainer throughout a course. If a trainer is unavailable due to illness or another genuine reason, we will arrange a qualified substitute or reschedule the affected session, and notify you as early as reasonably possible.</p></Section>
  <Section title="Cancellations"><p>See the <a href="/legal/refunds">Refund & Cancellation Policy</a>, including the statutory withdrawal right for EU and UK consumers.</p></Section>
  <Section title="Intellectual property"><p>Course materials, recordings, the Plateau Diagnostic and all site content belong to Learn With Smile / Beyond Fluency Lab, or are used under licence, and are for your personal use as an enrolled learner. You may not redistribute, resell or publicly share course materials or recordings without written permission.</p></Section>
  <Section title="Liability"><p>We provide coaching in good faith and to a professional standard. We do not guarantee a job offer, promotion, exam result or other specific outcome. To the maximum extent permitted by law, our liability for a claim relating to a course is limited to the amount you paid for that course. Nothing excludes liability that cannot lawfully be excluded, including death, personal injury caused by negligence, or fraud.</p></Section>
  <Section title="Governing law"><p>These terms are governed by the laws of India, without prejudice to any mandatory consumer-protection rights you have under the law of your country of residence.</p></Section>
  <Section title="Changes"><p>We may update these terms. The date at the top is the latest version. Continued use after an update means the new version applies going forward. Terms agreed for an existing paid booking continue unless a change is required by law or agreed with you.</p></Section>
  <Section title="Contact"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> for any question about these terms.</p></Section>
</>; }

function Privacy() { return <>
  <Section title="Who we are"><p>Beyond Fluency Lab is a live communication coaching programme operated by <strong>Learn With Smile</strong>, a sole proprietorship in India, trading as Beyond Fluency Lab. We teach learners across Europe, the UK and other countries over the internet.</p><p><strong>Data controller:</strong> Learn With Smile, trading as Beyond Fluency Lab, determines the purposes and means of processing your personal information under GDPR, UK GDPR and equivalent laws.</p><p>Registered address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, West Bengal, India (office only, not a walk-in campus).</p><p>Data-protection contact: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p><p>EU representative (GDPR Art. 27): currently being appointed. Until then, people in the EU may contact the controller directly.</p><p>UK representative (UK GDPR Art. 27): currently being appointed. Until then, people in the UK may contact the controller directly. See the <a href="/legal/uk">UK Privacy Addendum</a>.</p><p><strong>Grievance Officer (India):</strong> Soumyakanta Bera · <a href="mailto:bera.soumyakanta@yahoo.com">bera.soumyakanta@yahoo.com</a> · <a href="tel:+919674479949">+91 9674479949</a>. Appointed under India’s Consumer Protection (E-Commerce) Rules and data-protection law. This role does not replace the EU or UK representatives.</p></Section>
  <Section title="What this policy covers"><p>This policy applies to this website and to personal information you give us when you take the Plateau Diagnostic, enquire, book a free trial, enrol, pay or attend a class. It does not cover websites or payment pages we don’t control, including Stripe, Razorpay, and any messaging platform you contact us through.</p><p>Learners in the United Kingdom should also read the <a href="/legal/uk">UK Privacy Addendum</a>. Learners in the United States should also read the <a href="/legal/us">US Privacy Addendum</a>. People in the EU or EEA should also read <a href="/legal/gdpr">GDPR Information</a>.</p></Section>
  <Section title="Information we collect"><p><strong>Identity and contact:</strong> name, email address, country or time zone, and preferred class slot.</p><p><strong>Plateau Diagnostic:</strong> answers and the named focus, if you choose to receive a result by email. Otherwise answers stay in your browser.</p><p><strong>Course details:</strong> the programme you enquire about, goals you mention, and notes needed to place you in a group.</p><p><strong>Class delivery:</strong> attendance, trainer feedback, and recordings of live sessions for enrolled learners to revise.</p><p><strong>Payments:</strong> amount, date, course and payment status. Card and bank details are collected by Stripe and/or Razorpay. We do not store full card numbers.</p><p><strong>Technical data:</strong> basic server logs such as IP address, browser type and pages requested, kept by our hosting provider to operate and secure the site. If you accept analytics cookies, Google may receive online identifiers and pages viewed. If you accept Bing measurement, Microsoft may receive similar data for ads we run on Bing — not ads on this website.</p></Section>
  <Section title="How we use information"><p>We use personal information to reply to your enquiry, send a diagnostic result, confirm a trial or enrolment, deliver live classes, share recordings with enrolled learners in that group, process payments, and keep records we reasonably need for accounting, tax and disputes.</p><p>We do not sell personal information. We do not add trial requests to unrelated marketing lists. We do not display advertisements on this website.</p></Section>
  <Section title="Legal basis"><p>Where the law requires a stated basis, we rely on: your consent (for example the diagnostic, or analytics cookies); performance of a contract once you enrol; pre-contract steps for a trial or enquiry; legitimate interests in running and securing the website; and legal obligations such as tax and accounts.</p></Section>
  <Section title="Your rights"><p>Depending on where you live, you may have rights to access, correct, delete, restrict or port personal information, and to object to certain processing. Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. We aim to respond within one month under GDPR, and may need to verify your identity.</p><p>If you are in the EU or UK and are not satisfied, you may complain to your local supervisory authority. See the <a href="/legal/uk">UK</a> and <a href="/legal/us">US</a> addenda and <a href="/legal/gdpr">GDPR Information</a>.</p></Section>
  <Section title="Payments"><p>Fees are collected through Stripe and/or Razorpay. Each provider’s privacy policy applies to data you enter on their checkout page. We receive confirmation that a payment succeeded or failed, and basic transaction details — not your full card number.</p></Section>
  <Section title="Class recordings"><p>Live classes are recorded so enrolled learners in that group can revise or catch up. Recordings are for personal study by that group only. They are not posted publicly or used for marketing without your separate, specific permission. If you do not wish to appear in a recording, tell us before the session so we can discuss a practical arrangement.</p></Section>
  <Section title="Cookies"><p>We use cookies strictly necessary to operate the site (including remembering your cookie preference) unless you separately consent to analytics. See the <a href="/legal/cookies">Cookie Policy</a> and Cookie settings in the footer.</p></Section>
  <Section title="Who we share with"><p>We share information only with people and providers who help us deliver the service: trainers and operations staff who run your group; Stripe and/or Razorpay for payment; our website hosting provider; Google (Analytics and Tag Manager) and Microsoft (Bing UET) only if you accept those cookies; and professional advisers or authorities where the law requires it, or to protect learners, staff or the public.</p><p>We do not sell your data, and we do not share it with data brokers.</p></Section>
  <Section title="International transfers"><p>Because we operate from India and serve learners in the EU, UK and other countries, your personal information may be processed in India. Google and Microsoft may process measurement data in the United States. Where required, we rely on safeguards such as Standard Contractual Clauses. Contact us for the specific safeguard used for your data.</p></Section>
  <Section title="Retention"><p>Enquiry messages that don’t lead to enrolment are kept only as long as needed to reply and for a short follow-up. Enrolment, attendance and payment records are kept for the course and a reasonable period afterward for accounting, tax and disputes, then deleted or anonymised unless the law requires longer.</p></Section>
  <Section title="Children"><p>Programmes are for university students, graduates and working professionals. We do not knowingly collect personal information from children under 16. If you believe a child has given us information without appropriate consent, contact us and we will delete it where we reasonably can.</p></Section>
  <Section title="Security"><p>We take reasonable technical and organisational steps to protect personal information. No website, payment provider or messaging platform is perfectly secure.</p></Section>
  <Section title="Grievance officer"><p>If you have a complaint about personal information or our services, contact the Grievance Officer, Soumyakanta Bera, at <a href="mailto:bera.soumyakanta@yahoo.com">bera.soumyakanta@yahoo.com</a> or <a href="tel:+919674479949">+91 9674479949</a>. We will acknowledge it within a reasonable time. This does not affect your right to complain to a data-protection authority in your own country.</p></Section>
  <Section title="Contact"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> for a privacy question, access request or deletion request.</p></Section>
</>; }

function Cookies() { return <>
  <Section title="How we use cookies"><p>This website uses three categories of storage. Essential storage runs the site. Analytics storage (Google Analytics 4 and Google Tag Manager) measures how the site is used. Bing ads measurement (Bing UET) is used only to see whether a visit started from an advertisement we placed on Bing. We do not show ads, pop-ups or third-party banners on this website. Analytics and Bing tags are off until you accept them in the cookie banner.</p></Section>
  <Section title="Essential"><p>Hosting and security may set strictly necessary cookies. We store <code>bfl-consent</code> (your cookie choice) and <code>bfl-motion</code> (pause-motion preference) in your browser. Diagnostic answers stay in the page’s memory and clear on refresh. Campaign parameters already in a link may be kept while you browse and attached only if you submit a form.</p></Section>
  <Section title="Analytics"><p>If you accept analytics, we load Google Tag Manager and/or Google Analytics 4. They help us see which pages are read, which buttons are used and whether a trial or enrolment step was started. They may set cookies such as <code>_ga</code> and <code>_ga_*</code>. Google may process this data in the United States. Legal basis in the EU: consent. You can refuse analytics and still use the whole site.</p></Section>
  <Section title="Bing ads measurement"><p>If you accept Bing ads measurement, we load Microsoft’s Bing UET tag. It tells us if someone who clicked our Bing ad later opened a page or started a trial. Bing Webmaster Tools may be used to verify the site for search, which is not advertising on this website. Typical cookies include <code>_uetsid</code> and <code>_uetvid</code>. We do not use Google Ads conversion cookies. Legal basis in the EU: consent. You can refuse this and still use the whole site.</p></Section>
  <Section title="Cookie list">
    <div className="table-scroll">
      <table className="data-table">
        <caption className="sr-only">Cookies and similar storage used on this website</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Category</th>
            <th>Typical life</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>bfl-consent</code></td>
            <td>Beyond Fluency Lab</td>
            <td>Stores your analytics and advertising choice</td>
            <td>Essential</td>
            <td>Until you clear site data</td>
          </tr>
          <tr>
            <td><code>bfl-motion</code></td>
            <td>Beyond Fluency Lab</td>
            <td>Pause-motion preference</td>
            <td>Essential</td>
            <td>Until you change it</td>
          </tr>
          <tr>
            <td><code>_ga</code>, <code>_ga_*</code></td>
            <td>Google Analytics</td>
            <td>Distinguish visitors and sessions</td>
            <td>Analytics</td>
            <td>Up to 24 months</td>
          </tr>
          <tr>
            <td>GTM container</td>
            <td>Google Tag Manager</td>
            <td>Loads consented tags; does not measure by itself</td>
            <td>Analytics</td>
            <td>Session / tag-dependent</td>
          </tr>
          <tr>
            <td><code>_uetsid</code>, <code>_uetvid</code></td>
            <td>Microsoft (Bing)</td>
            <td>Measure whether a visit started from our Bing ads. No ads are shown on this site.</td>
            <td>Bing ads measurement</td>
            <td>1 day / up to 13 months</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Exact cookie names can change when Google or Microsoft update their tags. The banner always controls whether those tags load.</p>
  </Section>
  <Section title="Your controls"><p>Use the cookie banner, or Cookie settings in the footer, to accept, refuse or change analytics and Bing ads measurement. Essential storage cannot be refused if you want the site to work. You can also block cookies in your browser. Google provides an opt-out add-on for Analytics. Microsoft account settings can limit advertising measurement on Bing.</p></Section>
  <Section title="Changes"><p>If we add another measurement tool, or begin advertising on another network, this policy and the banner choices will be updated before it is used.</p></Section>
  <Section title="Contact"><p>Questions: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. See the <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/gdpr">GDPR Information</a>.</p></Section>
</>; }


function Refunds() { return <>
  <Section title="Free trial"><p>Free trial classes carry no payment and no obligation. Cancel or reschedule a trial any time before it starts, at no cost, by emailing <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p></Section>
  <Section title="EU and UK withdrawal"><p>If you are a consumer in the European Union or United Kingdom, you generally have a legal right to cancel a distance contract for services (including online courses) within <strong>14 days</strong> of enrolling, without giving a reason, and to receive a full refund. This page does not reduce any statutory right you have under the law of your country.</p><p>If you enrol and your course has <strong>not yet started</strong>, you can cancel within 14 days for a full refund.</p><p>Because courses run on a live group schedule, your first session may occur before those 14 days end. If you want to start attending immediately, we will ask you to expressly acknowledge that you are requesting early performance and understand that once the course is fully delivered you lose the right to cancel. That acknowledgement is a clear checkbox at checkout — it is not buried in these terms.</p><p>If you agree to early performance and then cancel during the 14-day period, before the course is fully delivered, you are entitled to a refund for the portion not yet delivered, calculated proportionally against sessions or weeks already provided.</p><p>After the 14-day period, or once the course has been fully delivered (whichever is earlier), the statutory right no longer applies and the standard terms below apply instead.</p></Section>
  <Section title="Standard cancellation"><p>These terms apply after the statutory withdrawal period, or for learners outside the EU/UK.</p><p><strong>Before the course starts:</strong> full refund, minus any payment-processing fee already incurred, if you cancel at least 48 hours before your first scheduled session.</p><p><strong>After the course starts:</strong> refunds are calculated proportionally based on sessions not yet delivered, minus a reasonable administrative fee, if you cancel with reasonable notice.</p><p><strong>No-shows:</strong> missed sessions without advance notice are not eligible for refund or make-up, though we will try to accommodate a genuine emergency.</p></Section>
  <Section title="Rescheduling"><p>If you need to switch to a different group or time slot rather than cancel, contact us before your course starts. We will do our best to accommodate this at no extra cost, subject to availability.</p></Section>
  <Section title="How refunds are processed"><p>Approved refunds are issued to the original payment method, through the same provider (Stripe or Razorpay) used for the original payment, and typically appear within 5–10 business days depending on your bank or card issuer. Any tax collected on the original payment is refunded with a full refund, or adjusted proportionally for a partial refund.</p></Section>
  <Section title="Removal for conduct"><p>A learner removed from a course for abusive behaviour or serious disruption is not entitled to a refund for sessions already delivered up to that point, as set out in the <a href="/legal/terms">Terms of Service</a>.</p></Section>
  <Section title="How to request"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> with your name, the course you enrolled in, and — if we ask — your reason for cancelling. A reason is not required for a statutory EU/UK withdrawal. We aim to respond within 2 business days. Cookie and analytics choices do not change your refund rights.</p></Section>
</>; }

function Uk() { return <>
  <Section title="UK GDPR"><p>This addendum applies in addition to our <a href="/legal/privacy">Privacy Policy</a>, for learners in the United Kingdom. Read it alongside, not instead of, the main policy.</p><p>Following the UK’s departure from the EU, the UK operates its own UK GDPR alongside the Data Protection Act 2018. We treat UK learners’ personal information in line with UK GDPR, which is substantively similar to the EU regime described in the Privacy Policy and <a href="/legal/gdpr">GDPR Information</a>.</p></Section>
  <Section title="UK representative"><p>A UK representative under UK GDPR Article 27 is currently being appointed. Until then, contact the controller at <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p></Section>
  <Section title="Data controller"><p>The controller for UK learners is Learn With Smile, a sole proprietorship in India, trading as Beyond Fluency Lab. Registered address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, India. Full contact details are in the Privacy Policy.</p></Section>
  <Section title="Your rights"><p>You have the same core rights described in the Privacy Policy — access, correction, deletion, restriction, portability and objection — enforced in the UK under the UK GDPR and the Data Protection Act 2018.</p></Section>
  <Section title="Supervisory authority"><p>If you are unhappy with how we have handled your personal information and have not been able to resolve it with us, you may complain to the UK’s regulator:</p><p><strong>Information Commissioner’s Office (ICO)</strong> — <a href="https://ico.org.uk" rel="noopener noreferrer">ico.org.uk</a>.</p></Section>
  <Section title="Contact"><p>UK data-protection queries: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p></Section>
</>; }

function Us() { return <>
  <Section title="Overview"><p>This addendum applies in addition to our <a href="/legal/privacy">Privacy Policy</a>, for learners in the United States. Read it alongside, not instead of, the main policy.</p><p>The United States does not have one federal privacy law. A growing number of states (including California, Colorado, Connecticut, Virginia and others) have broadly similar consumer rights. This page summarises how those rights apply, regardless of which US state you are in.</p></Section>
  <Section title="Categories we collect"><p>As described in the Privacy Policy: identity and contact details, Plateau Diagnostic responses, course and enrolment details, class attendance and recordings, payment status (not full card numbers), and basic technical and log data. If you accept optional cookies, measurement identifiers may also be processed as described in the <a href="/legal/cookies">Cookie Policy</a>.</p></Section>
  <Section title="Sale and sharing"><p>Under California’s CCPA/CPRA and similar state laws, “sale” and “share” of personal information are defined broadly, including some advertising-related data sharing. <strong>We do not sell your personal information, and we do not share it for cross-context behavioral advertising.</strong> We do not display advertisements on this website. Optional analytics load only if you accept them in the cookie banner. We do not use your enquiry or course details to run third-party marketing lists.</p></Section>
  <Section title="Your rights"><p>Depending on your state of residence, you may have the right to:</p><p><strong>Know</strong> what personal information we have collected about you and why.</p><p><strong>Delete</strong> personal information we hold, subject to exceptions such as records we must keep for accounting or tax.</p><p><strong>Correct</strong> inaccurate personal information.</p><p><strong>Opt out</strong> of sale or sharing (not applicable here, because we do not sell or share it for cross-context advertising).</p><p><strong>Non-discrimination</strong> — we will not charge a different price or provide a different level of service because you exercised these rights.</p><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. We may need to verify your identity.</p></Section>
  <Section title="Sensitive information"><p>We do not collect sensitive personal information (such as government ID numbers, precise geolocation, or health information) beyond what is incidentally needed to process a payment through our payment providers, who handle that data under their own obligations.</p></Section>
  <Section title="Data controller"><p>The entity responsible for your personal information (the “business” under most US state privacy laws) is Learn With Smile, a sole proprietorship in India, trading as Beyond Fluency Lab. See the Privacy Policy for full contact details.</p></Section>
  <Section title="Retention"><p>The same retention approach in the Privacy Policy applies to US learners.</p></Section>
  <Section title="Contact"><p>US privacy queries: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p></Section>
</>; }

export function LegalPage({ kind }: { kind: PolicyKind }) {
  const policy = meta[kind];
  const pages: Record<PolicyKind, ReactNode> = { terms: <Terms/>, privacy: <Privacy/>, cookies: <Cookies/>, refunds: <Refunds/>, gdpr: <Gdpr/>, uk: <Uk/>, us: <Us/> };
  return <main id="main"><PageHero eyebrow="LEGAL" title={policy.title} description={policy.summary}/><section className="wrap section policy-layout"><PolicyNav kind={kind}/><article className="policy-copy prose"><div className="policy-meta"><span>Effective 11 September 2026</span><span>Plain-language policy</span></div>{pages[kind]}<div className="policy-review"><strong>Note</strong><p>This notice should be reviewed if the operating entity, tax position or delivery process changes. It does not replace legal advice.</p></div></article></section></main>;
}

function Gdpr() { return <>
  <Section title="Scope"><p>This page explains how the GDPR applies when we process personal data of people in the European Union or the European Economic Area. It sits alongside our <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/cookies">Cookie Policy</a>.</p><p>Each right below is mapped to a real data flow: visiting the site, measurement tags, the diagnostic, a free-trial request, a course enquiry, Stripe payment, and live coaching.</p></Section>
  <Section title="Controller"><p>The controller is Learn With Smile, a sole proprietorship in India, trading as Beyond Fluency Lab. Registered address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, India.</p><p>Data-protection contact: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. You may also use the <a href="/contact">contact page</a> and write “GDPR request” in your message.</p></Section>
  <Section title="EU representative"><p>An EU representative under GDPR Article 27 is currently being appointed. Until then, people in the EU may contact the controller at the details above. See also the <a href="/legal/privacy">Privacy Policy</a>.</p></Section>
  <Section title="Data flows"><p>We do not ask for special-category data (health, beliefs, union membership and similar). Please do not include that information in a form or session.</p>
    <h3>Visiting the site</h3>
    <p>Hosting may record IP address, browser type, request time and errors. A hashed IP is used only to limit abusive form submissions. Legal basis: legitimate interests in security and availability. Rights: access and erasure are limited because logs are short-lived security records. An objection does not stop essential hosting.</p>
    <h3>Motion preference</h3>
    <p>The pause-motion control stores <code>bfl-motion</code> in your browser. It does not leave your device. You change or delete it yourself with the control or by clearing site data.</p>
    <h3>Campaign links</h3>
    <p>If a link already contains campaign parameters (<code>utm_source</code> and similar), the site may keep them while you browse and attach them only if you submit a form. If you accept Bing ads measurement, those parameters may also be read by the Bing UET tag. Rights: refuse Bing measurement; or ask us to erase a submitted enquiry.</p>
    <h3>Analytics and Bing ads measurement</h3>
    <p>If you accept analytics, Google Tag Manager and/or Google Analytics 4 receive online identifiers, pages viewed and technical data. If you accept Bing ads measurement, Microsoft’s UET tag receives similar data so we can see whether a Bing advertisement led to a visit. We do not display ads on this website and we do not send form contents, diagnostic answers or card numbers to Google or Microsoft. Legal basis: consent. Rights: withdraw via Cookie settings. Access and erasure of Google/Microsoft logs are limited because those companies hold their own records; we can stop the tags on this site.</p>
    <h3>Plateau diagnostic</h3>
    <p>Your seven answers stay in the open page and clear when you refresh. A shared result link contains only the named focus, not your scores, email or answers. If you request a written report, we receive your email and that named focus. Legal basis: your use of the tool; pre-contract steps if you ask for a report. Rights: leave or refresh the page to erase answers; access, correction and erasure apply to a submitted report request.</p>
    <h3>Free trial request</h3>
    <p>The contact form sends name, email, course interest, city or time zone, availability, optional message and your privacy acknowledgement. We store that enquiry and notify the team. Legal basis: pre-contract steps. Rights: access, correction, portability, erasure if you do not later enrol, and objection to further follow-up.</p>
    <h3>Course enquiry and enrolment form</h3>
    <p>The same fields as a trial, marked as an enrolment enquiry. Legal basis: pre-contract steps, then contract if you pay. Rights: access, correction and portability of the form you sent. Erasure of an unpaid enquiry on request. After payment, we keep the accounting subset.</p>
    <h3>Payment on Stripe</h3>
    <p>When you continue to checkout we send Stripe your email, course, amount, and an enquiry reference. Card numbers, expiry and CVC go to Stripe only; we do not store them. We keep payment status, amount and the enquiry reference. Legal basis: contract, and legal obligation for accounts and tax. Rights: access to status and amount we hold. Erasure of Stripe’s and our payment records is limited. Portability covers our record, not Stripe’s card vault.</p>
    <h3>Live coaching and alumni practice</h3>
    <p>If you join a cohort we process attendance, scheduling and the communication examples you choose to share. Video is delivered by a session provider. Live classes for enrolled learners may be recorded so that group can revise. Recordings are not posted publicly. Tell us before a session if you do not wish to appear. Legal basis: contract. Rights: access to notes we keep about your place; erasure is limited while the course and follow-up run, and for records we must keep.</p>
  </Section>
  <Section title="Your rights"><p>If GDPR applies to you, these rights map to the flows above. They are not absolute. We may refuse or limit a request where the law allows, for example to keep tax records or defend a claim. We may need to verify your identity. We aim to respond within one month.</p>
    <div className="table-scroll">
      <table className="data-table">
        <caption className="sr-only">GDPR rights mapped to Beyond Fluency Lab data flows</caption>
        <thead>
          <tr>
            <th>Right</th>
            <th>Applies to</th>
            <th>What happens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Access</td>
            <td>Trial, enquiry, report request, payment status, coaching notes we keep</td>
            <td>We send a copy of the records we hold. Diagnostic answers that never left your browser are not on our servers. Card details are held by Stripe. Analytics IDs sit with Google or Microsoft; we can confirm whether tags were enabled on your visit if you tell us the approximate date.</td>
          </tr>
          <tr>
            <td>Rectification</td>
            <td>Name, email, time zone, availability, course interest, message</td>
            <td>We correct the enquiry or enrolment record. Payment email on Stripe is updated where Stripe allows.</td>
          </tr>
          <tr>
            <td>Erasure</td>
            <td>Unpaid trial or enrolment enquiries; diagnostic answers in your browser; motion preference; analytics and Bing UET cookies</td>
            <td>We delete an unpaid enquiry on request. Refresh the diagnostic to clear answers. Turn off analytics and Bing measurement in Cookie settings. Paid invoices, tax records and security logs are kept as required. Google and Microsoft retain their own logs per their policies.</td>
          </tr>
          <tr>
            <td>Restriction</td>
            <td>An enquiry or booking you dispute</td>
            <td>We pause follow-up and scheduling on that record while we look into it. Hosting logs may still exist for security.</td>
          </tr>
          <tr>
            <td>Portability</td>
            <td>Data you typed in a form: name, email, time zone, availability, message, course, diagnostic focus</td>
            <td>We send those fields in a reusable file. This does not include server logs or Stripe’s card vault.</td>
          </tr>
          <tr>
            <td>Objection</td>
            <td>Follow-up on a trial that did not become a booking; analytics and Bing UET cookies; non-essential use of logs</td>
            <td>We stop that follow-up. Use Cookie settings to refuse measurement tags. You cannot object to delivering a course you paid for, or to records we must keep for law, tax or security.</td>
          </tr>
          <tr>
            <td>Withdraw consent</td>
            <td>Analytics cookies, Bing UET cookies, motion preference, and any optional consent we asked for</td>
            <td>Use Cookie settings in the footer. Use the pause-motion control. The privacy tick on a form is an acknowledgement that we will handle the request, not a marketing opt-in and not analytics or Bing consent.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Section>
  <Section title="Processors"><p>We use providers only as needed: website hosting, the enquiry database, email (to notify the team of a new request), video sessions, Stripe for payments, Google LLC (Analytics and Tag Manager) and Microsoft Corporation (Bing UET for off-site ads measurement). Analytics and Bing tags load only after consent. Stripe and card networks receive payment information when you pay.</p></Section>
  <Section title="International transfers"><p>The controller is in India. Google and Microsoft process measurement data in the United States. Some other processors may be in the EU, the United Kingdom, the United States or other countries. Where GDPR requires a safeguard for a transfer, we use a recognised mechanism such as an adequacy decision or standard contractual clauses, as available from the relevant provider.</p></Section>
  <Section title="Retention"><p>Unpaid enquiries are reviewed and then deleted or anonymised when no longer needed for follow-up. Paid bookings are kept for the course, reasonable follow-up, accounts, tax and disputes. Technical logs are kept only for security and operations. Diagnostic answers that stay in your browser are gone when you leave or refresh the page. Analytics and Bing UET cookies last according to the cookie list in the <a href="/legal/cookies">Cookie Policy</a>.</p></Section>
  <Section title="Complaints"><p>Please contact us first so we can try to put things right. You also have the right to lodge a complaint with a supervisory authority in the EU or EEA, typically in your country of residence, place of work, or the place of the alleged infringement. The European Data Protection Board publishes a list of authorities.</p></Section>
  <Section title="Contact"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> or use the <a href="/contact">contact page</a>. Write “GDPR request” and which flow it concerns (trial, enrolment, payment, diagnostic, analytics, Bing measurement or logs) so we can find the right record.</p></Section>
</>; }

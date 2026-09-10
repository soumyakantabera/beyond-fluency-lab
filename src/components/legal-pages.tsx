import type { ReactNode } from "react";
import { PageHero } from "./site-pages";

type PolicyKind = "terms" | "privacy" | "cookies" | "refunds" | "gdpr";
const meta: Record<PolicyKind, { title: string; summary: string; sections: string[] }> = {
  terms: { title: "Terms & Conditions", summary: "The practical terms for using this website, measurement tools and joining a Beyond Fluency Lab programme.", sections: ["Provider", "Programmes", "Booking", "Payments", "Website and cookies", "Participation", "Intellectual property", "Liability", "Changes", "Contact"] },
  privacy: { title: "Privacy Policy", summary: "What information we collect through forms, hosting and measurement tools, why we use it and the choices available to you.", sections: ["Controller", "Information", "Purposes", "Sharing", "Transfers", "Retention", "Your rights", "Security", "Contact"] },
  cookies: { title: "Cookie Policy", summary: "Essential storage, Google Analytics, Tag Manager, Microsoft Advertising / Bing, and how you control them.", sections: ["How we use cookies", "Essential", "Analytics", "Advertising", "Cookie list", "Your controls", "Changes", "Contact"] },
  refunds: { title: "Cancellation & Refund Policy", summary: "How cancellations, rescheduling, withdrawals and refunds are handled.", sections: ["Free trial", "Before payment", "Cooling-off period", "Learner cancellation", "Rescheduling", "Provider cancellation", "Refunds", "Contact"] },
  gdpr: { title: "GDPR Information", summary: "How we handle personal data of people in the EU and EEA, mapped to forms, payments, Google Analytics, Tag Manager and Microsoft Advertising.", sections: ["Scope", "Controller", "EU representative", "Data flows", "Your rights", "Processors", "International transfers", "Retention", "Complaints", "Contact"] },
};
const id = (value: string) => value.toLowerCase().replaceAll(" ", "-");
function Section({ title, children }: { title: string; children: ReactNode }) { return <section id={id(title)}><h2>{title}</h2>{children}</section>; }
function PolicyNav({ kind }: { kind: PolicyKind }) { const links: [PolicyKind, string][] = [["terms", "Terms & Conditions"], ["privacy", "Privacy Policy"], ["cookies", "Cookie Policy"], ["refunds", "Cancellation & Refunds"], ["gdpr", "GDPR"]]; return <aside className="policy-nav" aria-label="Policy contents"><p className="eyebrow">ON THIS PAGE</p><ol>{meta[kind].sections.map((section) => <li key={section}><a href={`#${id(section)}`}>{section}</a></li>)}</ol><div className="policy-links">{links.filter(([key]) => key !== kind).map(([key, label]) => <a key={key} href={`/legal/${key}`}>{label}</a>)}</div></aside>; }

function Terms() { return <>
  <Section title="Provider"><p>Beyond Fluency Lab is a communication-coaching programme from Learn With Smile. References to “we”, “us” and “our” mean the business operating Beyond Fluency Lab. Contact the team through the <a href="/contact">contact page</a>.</p></Section>
  <Section title="Programmes"><p>We provide live online communication coaching for adults who already use English. Programme descriptions, duration and listed fees appear on the relevant course page. Coaching is educational and developmental; it is not a regulated qualification, therapy, legal advice or employment service.</p><p>Examples, exercises and diagnostic results are guidance only. We do not guarantee a job, promotion, sale, examination result or particular outcome.</p></Section>
  <Section title="Booking"><p>A trial or enrolment form is a request, not an automatic booking. A place is confirmed only after we agree the programme, cohort dates, session schedule, complete price and applicable taxes with you in writing. You must be at least 18 and provide accurate information.</p></Section>
  <Section title="Payments"><p>Fees are shown in euros and exclude VAT. The payable amount is confirmed before payment. Payments may be processed securely by Stripe and supported card networks. We do not store full card numbers.</p><p>See our <a href="/legal/refunds">Cancellation & Refund Policy</a>.</p></Section>
  <Section title="Website and cookies"><p>The website uses essential storage to function. With your consent we also use Google Analytics, Google Tag Manager and Microsoft Advertising / Bing Webmaster tools to understand how the site is used and whether advertisements led to a visit. These tools are not required to request a trial or join a course. Choices are stored in your browser and can be changed from Cookie settings or the <a href="/legal/cookies">Cookie Policy</a>.</p></Section>
  <Section title="Participation"><p>Join on time, participate respectfully and use suitable equipment and connectivity. Do not share confidential employer, client or personal information. You may not record or distribute a session without prior permission from everyone identifiable in it.</p></Section>
  <Section title="Intellectual property"><p>The website, course structure, exercises, materials, graphics and brand assets belong to Beyond Fluency Lab, Learn With Smile or their licensors. Enrolment gives you personal, non-transferable use of supplied materials; it does not permit resale or publication.</p></Section>
  <Section title="Liability"><p>We provide the website and coaching with reasonable care and skill. We are not responsible for events outside our reasonable control, third-party services, your connection or reliance on coaching as professional advice. Nothing excludes liability or consumer rights that cannot lawfully be excluded.</p></Section>
  <Section title="Changes"><p>We may improve the website, programmes or these terms. Material changes will appear here with a new effective date. Terms agreed for an existing paid booking continue unless a change is required by law or agreed with you.</p></Section>
  <Section title="Contact"><p>Send questions or complaints through the <a href="/contact">contact page</a>. We aim to acknowledge substantive complaints promptly and resolve them fairly.</p></Section>
</>; }

function Privacy() { return <>
  <Section title="Controller"><p>Learn With Smile, a sole proprietorship in India, trading as Beyond Fluency Lab, is the controller. Registered address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, India. Data-protection contact: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>.</p></Section>
  <Section title="Information"><p>When you request a trial, course place or report, we may collect your name, email, time zone, availability, selected programme, communication goal and message. The diagnostic calculates a suggested focus; unless you submit a form, answers remain in your browser. Hosting providers may receive IP address, browser type, request time and error logs.</p><p>If you accept analytics or advertising cookies, Google and Microsoft may also receive online identifiers (cookie IDs), device and browser type, approximate location, pages viewed, referral source, campaign parameters and whether a conversion event occurred. We do not send your form answers, diagnostic scores or card numbers to those tools.</p></Section>
  <Section title="Purposes"><p>We use information to answer enquiries, arrange trials and cohorts, provide courses, deliver requested reports, process payments, maintain security, meet legal obligations and resolve complaints.</p><p>With your consent we use Google Analytics 4 and Google Tag Manager to understand which pages are used, and Microsoft Advertising / Bing (Webmaster Tools and Universal Event Tracking) to measure whether an advertisement or search listing led to a visit or enrolment step. We do not sell personal information or add trial requests to unrelated marketing lists.</p></Section>
  <Section title="Sharing"><p>Information is shared only where needed with: website hosting; the enquiry database; email delivery; video session providers; Stripe and card networks for payment; Google LLC for Analytics and Tag Manager; and Microsoft Corporation for Advertising / Bing measurement. We may also disclose information where required by law or necessary to protect people and the service.</p></Section>
  <Section title="Transfers"><p>The controller is in India. Google and Microsoft process measurement data in the United States and other countries. Stripe and hosting providers may also process data outside the EEA. Where GDPR requires a safeguard, we rely on a recognised mechanism such as an adequacy decision or the provider’s standard contractual clauses.</p></Section>
  <Section title="Retention"><p>Enquiries are kept for follow-up, then deleted or anonymised when no longer required. Paid bookings are kept for the course, accounts, tax and disputes. Analytics and advertising identifiers are retained according to Google and Microsoft settings, typically between 24 hours and 24 months. Your cookie choice is stored in your browser as <code>bfl-consent</code>.</p></Section>
  <Section title="Your rights"><p>Depending on applicable law, you may request access, correction, deletion, restriction or portability, object to certain processing or withdraw consent. Withdraw analytics or advertising consent at any time via Cookie settings. People in the EU and EEA have the rights set out in our <a href="/legal/gdpr">GDPR Information</a>. You may complain to your local data-protection authority.</p></Section>
  <Section title="Security"><p>We use proportionate safeguards including secure connections, input validation, access controls and restricted administration. Measurement tags load only after consent. No online system can guarantee absolute security.</p></Section>
  <Section title="Contact"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> or use the <a href="/contact">contact page</a> and write “Privacy request”.</p></Section>
</>; }

function Cookies() { return <>
  <Section title="How we use cookies"><p>This website uses three categories of storage. Essential storage runs the site. Analytics storage (Google Analytics 4 and Google Tag Manager) measures visits. Advertising storage (Microsoft Advertising / Bing UET and related Google conversion cookies if enabled in Tag Manager) measures whether an ad or search listing led to a visit. Analytics and advertising tags are off until you accept them in the cookie banner.</p></Section>
  <Section title="Essential"><p>Hosting and security may set strictly necessary cookies. We store <code>bfl-consent</code> (your cookie choice) and <code>bfl-motion</code> (pause-motion preference) in your browser. Diagnostic answers stay in the page’s memory and clear on refresh. Campaign parameters already in a link may be kept while you browse and attached only if you submit a form.</p></Section>
  <Section title="Analytics"><p>If you accept analytics, we load Google Tag Manager and/or Google Analytics 4. They help us see which pages are read, which buttons are used and whether a trial or enrolment step was started. They may set cookies such as <code>_ga</code> and <code>_ga_*</code>. Google may process this data in the United States. Legal basis in the EU: consent. You can refuse analytics and still use the whole site.</p></Section>
  <Section title="Advertising"><p>If you accept advertising, we load Microsoft Advertising Universal Event Tracking (Bing UET) and may allow Tag Manager to fire conversion tags. Bing Webmaster Tools is used to verify and understand search listings. Typical cookies include <code>_uetsid</code>, <code>_uetvid</code> and, if Google ads conversion is enabled, <code>_gcl_au</code>. These tools are for campaign measurement, not to sell your enquiry. Legal basis in the EU: consent.</p></Section>
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
            <td>Microsoft Advertising</td>
            <td>Measure Bing / Microsoft ads and remarketing</td>
            <td>Advertising</td>
            <td>1 day / up to 13 months</td>
          </tr>
          <tr>
            <td><code>_gcl_au</code></td>
            <td>Google</td>
            <td>Conversion linker if ads tags are enabled in GTM</td>
            <td>Advertising</td>
            <td>About 90 days</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Exact cookie names can change when Google or Microsoft update their tags. The banner always controls whether those tags load.</p>
  </Section>
  <Section title="Your controls"><p>Use the cookie banner, or Cookie settings in the footer, to accept, refuse or change analytics and advertising. Essential storage cannot be refused if you want the site to work. You can also block cookies in your browser. Google provides an opt-out add-on for Analytics; Microsoft advertising settings are available in your Microsoft account.</p></Section>
  <Section title="Changes"><p>If we add another measurement or advertising tool, this policy and the banner choices will be updated before it is used.</p></Section>
  <Section title="Contact"><p>Questions: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. See the <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/gdpr">GDPR Information</a>.</p></Section>
</>; }

function Refunds() { return <>
  <Section title="Free trial"><p>A free-trial request does not require payment or commit you to buying a course. If a trial must move, we will agree another available time.</p></Section>
  <Section title="Before payment"><p>Before accepting payment, we confirm the programme, cohort dates, schedule, complete price, applicable taxes and cancellation terms. Check these details before paying.</p></Section>
  <Section title="Cooling-off period"><p>If consumer law gives you a cooling-off or withdrawal period for an online purchase, those rights continue to apply. If you ask us to begin coaching during that period, we may request legally required confirmation and may charge proportionately for services already supplied where permitted.</p></Section>
  <Section title="Learner cancellation"><p>Tell us promptly if you need to cancel. Any refund considers the cancellation date, sessions delivered and the booking terms confirmed before purchase. We never reduce mandatory consumer rights.</p></Section>
  <Section title="Rescheduling"><p>Rescheduling depends on the course format and cohort availability. A group session may not be repeatable because other learners’ schedules and privacy must be respected. We will explain available catch-up options fairly.</p></Section>
  <Section title="Provider cancellation"><p>If we cancel a paid programme and cannot offer a reasonable alternative, you may choose a refund for undelivered services. Temporary trainer unavailability may be handled with a replacement or rescheduled session.</p></Section>
  <Section title="Refunds"><p>Approved refunds return to the original payment method where possible. Banks and card networks control final posting time. We confirm the amount and submission in writing.</p></Section>
  <Section title="Contact"><p>Use the <a href="/contact">contact page</a> with the booking email, programme and cohort date. Cookie and analytics choices do not change your refund rights.</p></Section>
</>; }

function Gdpr() { return <>
  <Section title="Scope"><p>This page explains how the GDPR applies when we process personal data of people in the European Union or the European Economic Area. It sits alongside our <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/cookies">Cookie Policy</a>.</p><p>Each right below is mapped to a real data flow: visiting the site, measurement tags, the diagnostic, a free-trial request, a course enquiry, Stripe payment, and live coaching.</p></Section>
  <Section title="Controller"><p>The controller is Learn With Smile, a sole proprietorship in India, trading as Beyond Fluency Lab. Registered address: 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, India.</p><p>Data-protection contact: <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>. You may also use the <a href="/contact">contact page</a> and write “GDPR request” in your message.</p></Section>
  <Section title="EU representative"><p>We are established in India and have not appointed an Article 27 EU representative. Questions and requests should be sent to the controller at the contact details above.</p></Section>
  <Section title="Data flows"><p>We do not ask for special-category data (health, beliefs, union membership and similar). Please do not include that information in a form or session.</p>
    <h3>Visiting the site</h3>
    <p>Hosting may record IP address, browser type, request time and errors. A hashed IP is used only to limit abusive form submissions. Legal basis: legitimate interests in security and availability. Rights: access and erasure are limited because logs are short-lived security records. An objection does not stop essential hosting.</p>
    <h3>Motion preference</h3>
    <p>The pause-motion control stores <code>bfl-motion</code> in your browser. It does not leave your device. You change or delete it yourself with the control or by clearing site data.</p>
    <h3>Campaign links</h3>
    <p>If a link already contains campaign parameters (<code>utm_source</code> and similar), the site may keep them while you browse and attach them only if you submit a form. If you also accept advertising cookies, those parameters may be read by Google or Microsoft tags. Rights: refuse advertising cookies; or ask us to erase a submitted enquiry.</p>
    <h3>Analytics and advertising tags</h3>
    <p>If you accept analytics, Google Tag Manager and/or Google Analytics 4 receive online identifiers, pages viewed and technical data. If you accept advertising, Microsoft Advertising (Bing UET / Webmaster) and any conversion tags enabled in Tag Manager receive similar data to measure ads. Form contents, diagnostic answers and card numbers are not sent to these tools. Legal basis: consent. Rights: withdraw via Cookie settings; access and erasure of Google/Microsoft records are limited because those companies are independent controllers or processors of their logs; we can stop the tags on this site.</p>
    <h3>Plateau diagnostic</h3>
    <p>Your seven answers stay in the open page and clear when you refresh. A shared result link contains only the named focus, not your scores, email or answers. If you request a written report, we receive your email and that named focus. Legal basis: your use of the tool; pre-contract steps if you ask for a report. Rights: leave or refresh the page to erase answers; access, correction and erasure apply to a submitted report request.</p>
    <h3>Free trial request</h3>
    <p>The contact form sends name, email, course interest, city or time zone, availability, optional message and your privacy acknowledgement. We store that enquiry and notify the team. Legal basis: pre-contract steps. Rights: access, correction, portability, erasure if you do not later enrol, and objection to further follow-up.</p>
    <h3>Course enquiry and enrolment form</h3>
    <p>The same fields as a trial, marked as an enrolment enquiry. Legal basis: pre-contract steps, then contract if you pay. Rights: access, correction and portability of the form you sent. Erasure of an unpaid enquiry on request. After payment, we keep the accounting subset.</p>
    <h3>Payment on Stripe</h3>
    <p>When you continue to checkout we send Stripe your email, course, amount, and an enquiry reference. Card numbers, expiry and CVC go to Stripe only; we do not store them. We keep payment status, amount and the enquiry reference. Legal basis: contract, and legal obligation for accounts and tax. Rights: access to status and amount we hold. Erasure of Stripe’s and our payment records is limited. Portability covers our record, not Stripe’s card vault.</p>
    <h3>Live coaching and alumni practice</h3>
    <p>If you join a cohort we process attendance, scheduling and the communication examples you choose to share. Video is delivered by a session provider. We do not record a session unless everyone identifiable has agreed. Legal basis: contract. Rights: access to notes we keep about your place; erasure is limited while the course and follow-up run, and for records we must keep.</p>
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
            <td>Unpaid trial or enrolment enquiries; diagnostic answers in your browser; motion preference; analytics and advertising cookies</td>
            <td>We delete an unpaid enquiry on request. Refresh the diagnostic to clear answers. Turn off analytics and advertising in Cookie settings. Paid invoices, tax records and security logs are kept as required. Google and Microsoft retain their own logs per their policies.</td>
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
            <td>Follow-up on a trial that did not become a booking; analytics and advertising cookies; non-essential use of logs</td>
            <td>We stop that follow-up. Use Cookie settings to refuse measurement tags. You cannot object to delivering a course you paid for, or to records we must keep for law, tax or security.</td>
          </tr>
          <tr>
            <td>Withdraw consent</td>
            <td>Analytics cookies, advertising cookies, motion preference, and any optional consent we asked for</td>
            <td>Use Cookie settings in the footer. Use the pause-motion control. The privacy tick on a form is an acknowledgement that we will handle the request, not a marketing opt-in and not analytics consent.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Section>
  <Section title="Processors"><p>We use providers only as needed: website hosting, the enquiry database, email (to notify the team of a new request), video sessions, Stripe for payments, Google LLC (Analytics and Tag Manager) and Microsoft Corporation (Advertising / Bing). Analytics and advertising tags load only after consent. Stripe and card networks receive payment information when you pay.</p></Section>
  <Section title="International transfers"><p>The controller is in India. Google and Microsoft process measurement data in the United States. Some other processors may be in the EU, the United Kingdom, the United States or other countries. Where GDPR requires a safeguard for a transfer, we use a recognised mechanism such as an adequacy decision or standard contractual clauses, as available from the relevant provider.</p></Section>
  <Section title="Retention"><p>Unpaid enquiries are reviewed and then deleted or anonymised when no longer needed for follow-up. Paid bookings are kept for the course, reasonable follow-up, accounts, tax and disputes. Technical logs are kept only for security and operations. Diagnostic answers that stay in your browser are gone when you leave or refresh the page. Analytics and advertising cookies last according to the cookie list in the <a href="/legal/cookies">Cookie Policy</a>.</p></Section>
  <Section title="Complaints"><p>Please contact us first so we can try to put things right. You also have the right to lodge a complaint with a supervisory authority in the EU or EEA, typically in your country of residence, place of work, or the place of the alleged infringement. The European Data Protection Board publishes a list of authorities.</p></Section>
  <Section title="Contact"><p>Email <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a> or use the <a href="/contact">contact page</a>. Write “GDPR request” and which flow it concerns (trial, enrolment, payment, diagnostic, analytics or logs) so we can find the right record.</p></Section>
</>; }

export function LegalPage({ kind }: { kind: PolicyKind }) {
  const policy = meta[kind];
  const pages: Record<PolicyKind, ReactNode> = { terms: <Terms/>, privacy: <Privacy/>, cookies: <Cookies/>, refunds: <Refunds/>, gdpr: <Gdpr/> };
  return <main id="main"><PageHero eyebrow="LEGAL" title={policy.title} description={policy.summary}/><section className="wrap section policy-layout"><PolicyNav kind={kind}/><article className="policy-copy prose"><div className="policy-meta"><span>Effective {kind === "refunds" ? "8 September 2026" : "11 September 2026"}</span><span>Plain-language policy</span></div>{pages[kind]}<div className="policy-review"><strong>Important</strong><p>This practical baseline should be reviewed for the final operating entity, location, tax position and delivery process before paid enrolment opens.</p></div></article></section></main>;
}

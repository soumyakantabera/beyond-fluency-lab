# Part 3 — student content and acquisition preparation

9 September 2026. No advertising campaign has been created or funded.

## Published content
| Intent | Guide | Course |
| --- | --- | --- |
| Internship interview without work experience | /blog/internship-interview-no-experience | Career & Interview Intensive |
| University presentation opening and questions | /blog/university-presentation-opening | Speak with Confidence |
| Graduate “tell me about yourself” answer | /blog/graduate-interview-tell-me-about-yourself | Career & Interview Intensive |

These are practical coaching guides, not guarantees of hiring outcomes. Existing homepage story, imagery and slides are preserved. Guides are linked from the blog and student pathways; related reading uses course/audience relevance. Existing article dates remain 6 September; new guides display 9 September in content and schema. The source-driven sitemap now includes 35 pages.

## Measurement prepared, not activated
The application dispatches a local `bfl:conversion` CustomEvent. No collector, storage, external pixels or reporting dashboard is installed. No events are retained or replayed.

| Event | Trigger | Interpretation |
| --- | --- | --- |
| lead_saved | Enquiry endpoint returns success and saved=true | Confirmed request receipt; not a booking or sale |
| checkout_reviewed | Valid form opens review dialog | Secondary funnel interaction |
| checkout_handoff | Checkout endpoint succeeds and returns a validated Stripe URL | Checkout start; not a paid enrolment |

Payload permits event name, a known course slug (otherwise unspecified), and request kind only. No names, email addresses, phone numbers, answers, diagnostic data, URL queries or Stripe IDs are emitted. Report requests must remain separate from trial requests in reporting. Repeated successful retries can emit again: the collector must deduplicate leads against backend submission identity before using them for paid optimisation. Local events are intentionally insufficient to establish revenue.

Purchase measurement must come from a verified paid Stripe webhook with transaction deduplication. A payment-return URL, button click or checkout redirect must never record a purchase. Confirm consent/legal basis and attribution rules before exporting any conversion data. No live payment was made during this work.

## Google and Microsoft/Bing search campaign draft
See paid-search-draft.csv for three ad groups, candidate exact/phrase keywords, landing paths and copy. This is a review worksheet, not an account import or published campaign. Keyword volume, CPC and conversion expectations are unvalidated; no estimates have been invented.

- Priority: graduate and internship interview practice, followed by university presentations. Keep brand searches in a separate campaign if needed.
- Geography: launch only in owner-confirmed countries where course delivery, availability and terms are ready. English-language ads; do not imply university affiliation.
- Match approach: begin with tightly related exact/phrase intent, then inspect actual search terms. Avoid broad expansion until qualified conversions can be measured.
- Negative keyword candidates: jobs, vacancies, recruiter, recruitment agency, guaranteed job, visa sponsorship, IELTS, TOEFL, grammar lessons. Review negatives in context; do not exclude “free” account-wide because a free trial is genuinely offered.
- Headline/description drafts satisfy the 30/90 character limits used for responsive-search planning. Recheck platform validation when importing.
- No urgency claims, employment guarantees, fabricated testimonials or fear-based messages. VAT-inclusive prices must match landing pages.
- Do not launch with a presumed budget. The owner must set daily and total test limits and target countries before account creation/publication.

## Activation gates
1. Verify the production enquiry database and notifications with a controlled submission. Verify Stripe checkout and signed webhook handling in test mode, then confirm live readiness.
2. Connect the chosen analytics/ad accounts. Add consent controls and update privacy/cookie disclosures before optional tracking is enabled. Do not interpret enquiry privacy acknowledgement as marketing consent.
3. Implement consent-aware collection, lead deduplication and verified purchase measurement. Test accept, reject and withdraw behaviour, successful saves, errors, repeated submits and checkout abandonment.
4. Verify landing pages and goals inside Google Ads / Microsoft Advertising; do not mark unverified events as active conversions.
5. Approve countries, budget, schedule and copy, then launch manually or by a separately authorised action.

Google Search Console and Bing Webmaster Tools submission remain deferred by the owner. Part 3 does not claim indexing, AI citations, account setup or live conversion reporting.

## Review after activation
Review search terms and qualified trial requests by campaign, then paid enrolments from verified payment records. Use cost per qualified lead and cost per paid enrolment only when denominators are real and deduplicated. Keep organic guide engagement separate from paid conversions. Do not scale based on checkout clicks alone.

Sources checked:
- https://support.google.com/google-ads/answer/1722022?hl=en
- https://www.google.com/intl/en-GB/about/company/user-consent-policy-help/
- https://developers.google.com/search/docs/appearance/ai-features

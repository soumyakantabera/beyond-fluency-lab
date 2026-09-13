# Beyond Fluency Lab — live programmes release

## Implemented

Existing forest green / ivory identity, Newsreader and Schibsted Grotesk retained. Homepage sequence: emotional hero, three manual story chapters, familiar situations, practice method, coaching context, selected programmes, capacity explanation. No early format comparison, fabricated seat counters or learner claims.

Ten programme families and fourteen offer variants are defined in `src/lib/programmes.ts`. Each has its own outcomes, learning journey, live-session scope and indicative fee. Existing four course slugs and diagnostic order remain compatible. New pages cover coaching formats, coach matching, assessments, employers and universities. Existing audience routes now recommend the appropriate new programmes. Journal, diagnostic, brand assets and legal URLs remain accessible.

Three original optimized WebP scenes are illustrative. They are not named learners or staff. No fabricated trainer credentials or outcomes are published.

## Enquiry and payment behavior

The existing enquiry endpoint now validates every course slug. The form provides course and format choices. When online submissions are disabled or fail, a prepared email link and download allow the visitor to retain and send the enquiry themselves. The site never claims an email was sent merely because it opened an email application.

The legacy checkout is guarded against the multi-format catalogue. It cannot safely select a format, allocate a real place or calculate the final tax-inclusive total for this revised offer. No new payment is advertised or collected. Existing webhook and payment records remain intact.

## Owner information needed before accepting paid enrolments

- Approve final fees, tax treatment, assessment credit and session scope. Current site clearly labels fees indicative.
- Supply actual coach profiles, schedules and availability. Confirm minimum viable class size, cancellations and substitutions.
- Confirm parent/guardian enrolment, child safeguarding, consent and the legal terms needed for young learners. Existing legal text has been preserved, not treated as newly reviewed legal advice.
- Confirm assessment booking/payment arrangements and team enquiry handling. Configure and verify server delivery if desired; current email handoff remains usable.
- Replace illustrative scenes with permissioned real learner or coach photographs only when available.

## Verification

`npm run typecheck` and `npm run build` pass locally. Build skips external database migration when DATABASE_URL is absent. Existing auth, platform preview bridge and Vercel/Nitro architecture are preserved.

Review the preview before merging into main. The production domain is unchanged until merge/deployment approval.

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

`npm run typecheck`, `npm run build` and `npm run test:programmes` pass locally. The catalogue contract check covers all ten families, fourteen offers, image assets, sitemap inclusion, allowed/rejected enquiries, private/household/young-learner constraints and legacy diagnostic order. Build skips external database migration when DATABASE_URL is absent. Existing auth, platform preview bridge and Vercel/Nitro architecture are preserved.

Review the preview before merging into main. The production domain is unchanged until merge/deployment approval.

Browser verification on the Vercel preview confirmed the homepage composition, manual story navigation, programme filtering, all fourteen pricing rows, household course scope, course-to-enquiry navigation, the offline email handoff and mobile menu. The responsive review uses real 390 px and 768 px iframe viewports. Mobile headline sizing and tablet stacking were refined from those checks. A desktop screenshot is saved in `docs/homepage-preview.jpg`.

Local Vite starts when explicitly bound to 127.0.0.1; the managed browser cannot reach the local workspace, so visual checks used the Vercel preview. No enquiry email or payment was submitted. No production merge was performed.

## Global imagery and angular storytelling update

The homepage now combines three overlapping rectangular images. Square-corner image rules also cover legacy editorial pages. Two original global illustrative scenes add workplace and everyday-life diversity; existing identity, palette and fonts remain.

The original line-icon vocabulary is now expressed as stronger framed icon panels. Manual story decks cover global everyday situations, audience problem/practice/next-step narratives, all ten course learning journeys and coaching information pages. Course rails retain every course and support arrows, keyboard navigation and native horizontal swiping. They respect reduced-motion preferences and disable boundary controls when no further scrolling is available.

Browser checks confirmed desktop and real 390 px/768 px layouts, story changes, course scrolling and disabled controls on short collections. The updated homepage screenshot is `docs/homepage-global-v4.jpg`. New photo prompts specified fictional diverse adults in daylight workplace/cafe conversations, forest-green/ivory accents and full-bleed rectangular compositions; built-in image generation was used. All fees and live delivery scopes remain as documented above.

## Source-brand refinement and practical guides · 14 September 2026

The original production brand-kit page and original editorial chapter component informed this revision. The original forest/stone palette, Newsreader/Schibsted typography and SVG icon family now carry through the revised pages. Decorative text arrow glyphs were replaced with SVG icons. Framed icon panels from the preceding revision are now bare line icons. Story slides use image-left/copy-right desktop compositions, thin rules and controls below; mobile stacks the image and copy with horizontally scrollable chapter labels. Image frames remain square.

Two new original illustrative photographs support the roots and rehearsal chapters. Five new substantive journal guides explain why the Lab exists and give practical starting points for meeting hesitation, interviews, conversations after moving abroad and young learners. They have individual descriptions, internal course links, sitemap entries and BlogPosting image metadata. Illustrations do not represent actual learners or staff; articles make no guaranteed outcome claims.

Verification: typecheck, production build and programme contract checks passed, covering 10 families, 14 offers and 56 public paths. All five new guides have image files, substantive sections, sitemap coverage and structured data. Browser verification on the Vercel preview confirmed desktop hero and story composition, chapter selection, navigation from the why-we-exist chapter to its article, loaded article imagery and BlogPosting metadata. Real 390 px mobile and 768 px tablet frames were inspected; mobile chapter selection and controls worked. Screenshot: `docs/homepage-brand-v5.jpg`.

Verified application preview: https://beyond-fluency-3hotmpn7q-learnwithsmilein-7865s-projects.vercel.app/

These changes remain on draft PR #15. No production merge, payment or enquiry submission was performed.

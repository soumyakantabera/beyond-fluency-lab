# Site audit and spacing corrections

Date: 14 September 2026. Scope: the current draft preview, shared public layouts, homepage, journal/article flow, programme presentation and trial requests. This is a targeted product/layout audit, not a security audit or a legal review.

## Findings addressed

| Priority | Finding | Correction |
|---|---|---|
| High | Later metadata assignments silently replaced the restored Plateau Framework, broader audiences and journal positioning. | Removed competing overrides; each main page now has one metadata entry. |
| High | Diagnostic recommendation cards showed only the first offer's price/duration for multi-format courses. | Render every current offer and the shared indicative-price note. |
| Medium | Adjacent homepage sections combined 92 px bottom and 92 px top padding. | Shared section rhythm; adjacent sections use a single inter-section gap. |
| Medium | Legacy journal pages and revised pages used different effective content widths. | Shared responsive gutters of 48/32/20 px and a 1240 px maximum content width. |
| Medium | Paragraphs met buttons without spacing; guide card endings drifted between rows. | Added copy-to-action spacing and consistent card layout, heading margins and link alignment. |
| Medium | Trial panels inherited article heading/paragraph margins and oversized small print. | Scoped panel typography and margins in both legacy and revised layouts. |
| Medium | Redundant linked images were hidden from accessibility tools. | Give linked course/guide images descriptive accessible names. |
| Low | Chart legend and narrow columns could become cramped. | Wrapping legends, minmax columns and responsive gaps. |

The current forest/stone identity, original SVG icons, square image corners, story-led order, Plateau Framework, course catalogue and fee values are retained.

## Remaining launch gaps

- Trial requests currently use an email handoff when online submissions are disabled. This is a usable request flow, not a live booking calendar or instant confirmation. To automate scheduling, actual availability and a booking/delivery integration must be supplied and verified.
- Current fees are indicative. Final tax-inclusive totals, coach allocation, session dates and programme availability need operational confirmation before paid enrolments.
- The legacy checkout remains guarded against incorrect multi-format purchases. Format-aware payment, allocation and tax handling are not yet a verified paid-enrolment flow.
- Actual coach biographies, permissioned photographs and independently supportable learner outcomes remain a content dependency. Current illustrative scenes are labelled; no outcomes were invented.
- The free diagnostic still uses work/interview scenarios. Its scope is disclosed in the report; a future audience-specific diagnostic should have separately reviewed questions and programme matching for students, NRIs and families.
- Legal/young-learner operational arrangements require owner review before accepting paid enrolments. Existing legal text has not been treated as newly verified legal advice.

## Verification

Local typecheck, build and catalogue/content checks are run for this revision. Browser review targets desktop and real 390 px/768 px frames on the Vercel preview, including spacing, article/trial contrast and current search metadata. No payment, enquiry email or production merge is performed.

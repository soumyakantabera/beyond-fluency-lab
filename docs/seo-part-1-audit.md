# SEO Part 1 — technical foundation

Completed 8 September 2026. Production origin: https://beyond-fluency-lab.vercel.app.

## Findings and fixes
- `/sitemap.xml` previously returned HTML with HTTP 200. It now returns XML containing 32 canonical public pages, including university students, graduates and refunds. URLs derive from the existing content registry; enrolment utility URLs are omitted. No fabricated last-modified dates.
- Unknown URLs, course slugs, article slugs and audience slugs previously returned HTTP 200. They now return HTTP 404 with noindex metadata.
- Added absolute self-canonical links on public pages, excluding query strings and trailing slashes from the canonical identity.
- Added page-specific Open Graph and Twitter metadata using the existing brand share image. The platform injector respects route metadata while preserving its PWA and branding functionality.
- Enrolment and payment-return utility pages use noindex, follow and remain crawlable so this directive can be read.
- robots.txt allows public crawling, excludes API paths and declares the sitemap. This is crawler guidance, not access control.
- Existing structured-data URLs now use the production origin instead of relative URLs. Expanded schema/content strategy remains Part 2.
- Homepage narrative, slides, images, layout and visible copy are unchanged.

## Verification
- Production Vite/Nitro build and TypeScript checks passed. Database migration is unrelated to this SEO change and was not verified.
- Built server checked for sitemap XML, public page metadata, enrolment noindex and 404 status handling.
- Browser smoke attempted but Chromium is unavailable; no visual-browser verification claimed.
- Existing generic platform tests contain fixture assumptions about the original template branding; focused metadata preservation, branding retention and idempotence checks passed.

## Follow-up
- Submit the sitemap in verified Google Search Console and Bing Webmaster Tools accounts. Account submission and indexing are not completed by adding the file.
- Update the central production origin, robots sitemap declaration and existing content origin together if a custom domain replaces the Vercel domain.
- Search/AI inclusion is not guaranteed by crawl access. Paid advertising and account verification are outside Part 1.

Reference: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
Reference: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

# SEO Part 2 — page relevance, structured data and student pathways

Completed 9 September 2026.

- Fixed the student closing panel: explicit cream paragraph/label text on green, plus button hover and focus styles. Calculated text contrast is 8.30:1 for #f4f1ea on #174f46.
- Corrected Beyond Fluency Lab Organization identity to its own canonical website, retaining Learn With Smile as the parent organization. Added a stable organization identifier and existing ladder logo.
- Added WebSite, WebPage/CollectionPage and BreadcrumbList JSON-LD with canonical identifiers. Legal breadcrumbs skip the nonexistent legal index.
- Added a four-course ItemList on the course index, connected detail Course entities and VAT-inclusive PriceSpecification values using the existing fees.
- Added BlogPosting metadata based on the displayed article title, description, category, brand byline and 6 September 2026 publication date. No invented review ratings, qualifications or modification dates.
- Updated course, pricing, blog, about and learner-story search snippets to describe actual page content. Article share metadata now identifies articles.
- Connected university and graduate pages to existing interview and pressure-performance guides, and confidence/interview courses back to both student pathways.
- Homepage story, slides, images and layout remain intact. Google/Bing account submission deferred at the owner’s request.

## Validation
Production build and TypeScript passed. All 32 sitemap pages returned 200 from the built server, with parseable JSON-LD and expected page identities. Course offer VAT values, article markup, course-list entries and student guide links passed assertions. Contrast verified mathematically; visual browser validation is unavailable because Chromium is not installed. These checks are not a Google Rich Results Test or proof of indexing.

## Search guidance
Structured data describes visible content and may support search understanding; it does not guarantee rich results or AI citations. No keyword stuffing, invented claims, or special AI ranking tags were added. Existing public crawl access remains available.

Sources:
- https://developers.google.com/search/docs/appearance/structured-data/course
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/ai-features

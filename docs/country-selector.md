# Footer country detection

The footer uses `/api/visitor-country`, which reads Vercel's `x-vercel-ip-country` request header. Reference: https://vercel.com/docs/headers/request-headers#x-vercel-ip-country

Only a validated country code is returned. The route explicitly disables browser and CDN caching to prevent a country response being reused for another visitor. It does not expose, log or persist IP addresses or precise coordinates. No third-party geolocation request or browser GPS permission is used.

Automatic mode detects on mount, return to the visible tab and network reconnection. Manual country selection takes precedence over in-flight automatic requests and is saved locally under `bfl-country-preference-v1`. Reset removes that preference and detects again. Unknown location or a failed/timed-out request leaves a manual selector, not a guessed country. VPN/proxy connections can reflect their network exit location. Selection is a display preference, not proof of residence or billing country.

All 249 ISO country/territory choices are available. Existing course prices, currencies, payment rules and tax behavior are unchanged. Country-specific pricing is intentionally deferred.

Verification: typecheck, production build and catalogue checks passed, including 249 valid choices and rejection of invalid/unknown codes. Vercel browser verification detected the current network country, preserved a manual India selection across reload and restored the network country after automatic reset. Footer helper-text contrast was adjusted after visual review. Country preference does not affect programme prices.

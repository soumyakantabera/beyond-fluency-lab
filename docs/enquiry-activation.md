# Activate saved enquiries and email notifications

Status: integration prepared; no hosted database or email account has been provisioned from this workspace. Existing live site remains unchanged until this branch is merged. Do not enable collection before the controller identity, working privacy contact and processing notice are published.

## Free-tier setup

1. In the existing Vercel project's Storage/Marketplace area, create a Neon Postgres database in an available EU region and connect it to this project. Select a free plan if offered; do not opt into a paid plan or automatic upgrade. Confirm current limits in the provider dashboard. The connection should supply `DATABASE_URL`.
2. Create a Resend free account. Its pricing page currently lists 3,000 emails/month and 100/day: https://resend.com/pricing . Verify a domain you own using the DNS records Resend supplies. The test sender has recipient restrictions and is not a substitute for production domain verification.
3. Add server-only Vercel environment variables: `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL` (verified sender), `ENQUIRY_TO_EMAIL` (owner-confirmed recipient), and `ENQUIRY_RATE_SALT` (random secret). Do not paste keys into chat or commit them.
4. Keep `ENQUIRIES_ENABLED` unset until the database migration and policy update are ready. `npm run build` runs the existing migration runner after the build. Apply `migrations/0001_enquiries.sql` to the connected database. Use isolated databases for preview and production.
5. After deployment/migration verification and policy publication, set `ENQUIRIES_ENABLED=true` in production and redeploy.

## Behaviour

- All submissions are validated server-side and limited in size. The API checks same-origin requests and applies a database-backed limit of 10 attempts/IP/hour using a salted hash, not stored raw IP addresses.
- A request is successful only after Postgres saves it. No local/ephemeral database fallback is accepted.
- Retries of the same unchanged form use the same UUID, avoiding duplicate rows.
- Notification email contains the request reference only. The recipient reviews personal details in the authenticated provider database console; no public enquiry-list endpoint exists.
- Notifications have pending/accepted/failed states. Accepted means the email provider accepted the request, not guaranteed inbox delivery. Email failure does not discard saved enquiries. Check pending/failed rows manually; no automatic retry worker is included.
- With collection disabled, the form continues to offer a local copy/download and makes no delivery claim.
- Publish controller/contact information and an accurate retention policy. Implement a scheduled/manual deletion process matching the chosen period; do not claim automatic deletion is running.

## Verification before enabling

Use synthetic data only. Confirm a valid request creates one row, repeat the same ID to confirm no duplicate, and confirm validation errors, oversized bodies, cross-origin requests and rate limits. Simulate a provider failure and verify the row survives. Test notification to the owner's approved test inbox. Test the download fallback in a browser. Remove test rows after verification.

## Information needed from the owner

Legal name, business address/country, registration/VAT details if applicable, public contact email/telephone, approved notification inbox, owned sending domain, and acceptance or changes to the proposed cancellation/retention choices in `eu-policy-drafts.md`.

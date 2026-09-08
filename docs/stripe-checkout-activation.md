# Course Checkout activation

The existing course/explore page now includes an enrolment form. Submission opens an accessible native confirmation dialog; Continue submits the details and creates a hosted Stripe Checkout session. Price and currency come from the server catalogue. Amounts are one-time, EUR, VAT-inclusive; no additional tax is added to the total. Confirm invoice/tax reporting configuration separately; this integration does not calculate a VAT rate or tax breakdown.

Required server-only production configuration:

- `DATABASE_URL`, `ENQUIRY_RATE_SALT`: existing enquiry storage configuration.
- `STRIPE_SECRET_KEY`: test key for initial verification, live key only after verification.
- `STRIPE_WEBHOOK_SECRET`: signing secret for `/api/stripe-webhook` on this deployment.
- `PUBLIC_SITE_URL`: exact canonical HTTPS origin without a trailing slash, e.g. `https://beyond-fluency-lab.vercel.app`.
- `CHECKOUT_ENABLED=true`: enable only after migrations, schedule/terms and Stripe setup are complete.

Apply `migrations/0001_enquiries.sql` and `0002_course_payments.sql` using the existing `npm run db:migrate` deployment command. Register `checkout.session.completed` and `checkout.session.async_payment_succeeded` webhook events. Checkout is blocked safely when required configuration is missing. Preview and production must use separate databases and Stripe environments.

Test with synthetic data and Stripe test mode before accepting live payments:

1. Open a course from Join this course; verify its full description and enrolment form.
2. Complete the form; confirm course, VAT-inclusive amount, keyboard focus, Escape and Edit details in the dialog.
3. Continue and verify an enquiry row and payment row exist before redirect.
4. Complete a Stripe test payment; verify only a valid signed webhook changes the matching amount/currency/session row to paid. Repeated webhook delivery must not create duplicate orders.
5. Test cancellation, declined cards, duplicate retries and invalid signatures. An unchanged form uses one session; a cancelled/expired session may require a new form submission.
6. Verify the return page does not falsely claim payment success from its URL alone.

No automatic course-access fulfilment or receipt email has been added. Configure Stripe customer receipts and have the team review paid rows in the protected database console. Refunds are handled in Stripe; automated refund-status synchronisation is not included. Confirm the published business identity, policies, cohort schedule and tax reporting before enabling live checkout. The form asks learners to confirm the agreed schedule; it does not offer an unconfigured cohort calendar.

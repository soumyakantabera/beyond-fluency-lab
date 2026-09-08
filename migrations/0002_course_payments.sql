CREATE TABLE IF NOT EXISTS course_payments (
  enquiry_id uuid PRIMARY KEY REFERENCES enquiries(id),
  request_hash text NOT NULL,
  amount_cents integer NOT NULL,
  currency text NOT NULL DEFAULT 'eur',
  stripe_session_id text UNIQUE,
  checkout_url text,
  status text NOT NULL DEFAULT 'pending',
  terms_accepted_at timestamptz NOT NULL DEFAULT now(),
  paid_at timestamptz
);

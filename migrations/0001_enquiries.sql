CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY,
  created_at timestamptz NOT NULL DEFAULT now(),
  kind text NOT NULL CHECK (kind IN ('trial','enrolment','report')),
  name text NOT NULL,
  email text NOT NULL,
  course text NOT NULL,
  timezone text NOT NULL,
  availability text NOT NULL,
  message text NOT NULL,
  diagnostic text,
  privacy_version text NOT NULL,
  notification_status text NOT NULL DEFAULT 'pending'
);
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries(created_at);
CREATE TABLE IF NOT EXISTS enquiry_rate_limits (
  bucket text PRIMARY KEY,
  attempts integer NOT NULL,
  expires_at timestamptz NOT NULL
);

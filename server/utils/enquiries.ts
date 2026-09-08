import { Pool } from 'pg';
import { createHash } from 'node:crypto';
import { z } from 'zod';

export const enquirySchema = z.object({
  id: z.uuid(),
  kind: z.enum(['trial', 'enrolment', 'report']),
  name: z.string().trim().max(120),
  email: z.email().max(254),
  course: z.enum(['not-sure','speak-with-confidence','career-interview-intensive','professional-communication','executive-communication']),
  timezone: z.string().trim().max(100),
  availability: z.string().trim().max(200),
  message: z.string().trim().max(2000),
  diagnostic: z.string().max(100).optional(),
  privacyAcknowledged: z.literal(true),
  website: z.string().max(200).optional(),
}).refine(d => d.kind === 'report' || Boolean(d.name && d.timezone && d.availability), {
  message: 'Please enter your name, time zone and availability.',
});

let pool: Pool | undefined;
export function database() {
  if (!process.env.DATABASE_URL) throw new Error('Database is not configured');
  return pool ??= new Pool({ connectionString: process.env.DATABASE_URL, max: 3, connectionTimeoutMillis: 5000, statement_timeout: 8000 });
}

export async function saveEnquiry(data: z.infer<typeof enquirySchema>, ip: string) {
  const db = database();
  const hour = Math.floor(Date.now() / 3_600_000);
  const bucket = createHash('sha256').update(`${process.env.ENQUIRY_RATE_SALT}:${ip}:${hour}`).digest('hex');
  const client = await db.connect();
  try {
    await client.query('BEGIN');
    const limited = await client.query(`INSERT INTO enquiry_rate_limits(bucket,attempts,expires_at)
      VALUES($1,1,now()+interval '2 hours') ON CONFLICT(bucket) DO UPDATE
      SET attempts=enquiry_rate_limits.attempts+1 RETURNING attempts`, [bucket]);
    if (limited.rows[0].attempts > 10) { await client.query('COMMIT'); return { limited: true, created: false }; }
    const saved = await client.query(`INSERT INTO enquiries
      (id,kind,name,email,course,timezone,availability,message,diagnostic,privacy_version)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) ON CONFLICT(id) DO NOTHING RETURNING id`,
      [data.id,data.kind,data.name,data.email,data.course,data.timezone,data.availability,data.message,data.diagnostic ?? null,'2026-09-draft']);
    await client.query('DELETE FROM enquiry_rate_limits WHERE expires_at < now()');
    await client.query('COMMIT');
    return { limited: false, created: saved.rowCount === 1 };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally { client.release(); }
}

export async function notifyEnquiry(id: string) {
  const { RESEND_API_KEY, ENQUIRY_FROM_EMAIL, ENQUIRY_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !ENQUIRY_FROM_EMAIL || !ENQUIRY_TO_EMAIL) return;
  let state = 'failed';
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `enquiry-${id}` },
      body: JSON.stringify({ from: ENQUIRY_FROM_EMAIL, to: [ENQUIRY_TO_EMAIL], subject: 'New Beyond Fluency Lab enquiry',
        text: `A new enquiry has been saved. Reference: ${id}. Sign in to your database console to review it.`, }),
      signal: AbortSignal.timeout(5000),
    });
    state = response.ok ? 'accepted' : 'failed';
  } catch { /* The enquiry remains saved even if the provider is unavailable. */ }
  await database().query('UPDATE enquiries SET notification_status=$2 WHERE id=$1', [id,state]);
}

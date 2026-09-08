import { defineHandler } from 'h3';
import { enquirySchema, saveEnquiry, notifyEnquiry } from '../utils/enquiries';

export default defineHandler(async (event) => {
  const request = event.req;
  const reply = (value: object, status: number) => Response.json(value, { status, headers: { 'Cache-Control': 'no-store' } });
  if (!process.env.DATABASE_URL || !process.env.ENQUIRY_RATE_SALT || process.env.ENQUIRIES_ENABLED !== 'true')
    return reply({ error: 'Online submissions are not open yet. Please keep a copy of your request.' }, 503);
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) return reply({ error: 'Request origin was not accepted.' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply({ error: 'JSON required.' }, 415);
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: 'Request body required.' }, 400);
    const chunks: Uint8Array[] = []; let length = 0;
    for (;;) {
      const { value, done } = await reader.read(); if (done) break;
      length += value.length;
      if (length > 16384) { await reader.cancel(); return reply({ error: 'Request is too large.' }, 413); }
      chunks.push(value);
    }
    const parsed = enquirySchema.safeParse(JSON.parse(Buffer.concat(chunks).toString('utf8')));
    if (!parsed.success) return reply({ error: 'Please check your details and privacy acknowledgement.' }, 400);
    if (parsed.data.website) return reply({ error: 'Request was not accepted.' }, 400);
    const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const result = await saveEnquiry(parsed.data, ip);
    if (result.limited) return reply({ error: 'Too many requests. Please try again in an hour.' }, 429);
    if (result.created) await notifyEnquiry(parsed.data.id).catch(() => {});
    return reply({ saved: true, reference: parsed.data.id }, 200);
  } catch (error) {
    if (error instanceof SyntaxError) return reply({ error: 'Invalid request.' }, 400);
    return reply({ error: 'We could not confirm your request. Keep a copy and try again.' }, 503);
  }
});

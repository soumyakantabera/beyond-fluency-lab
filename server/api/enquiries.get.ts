import { defineHandler } from 'h3';
export default defineHandler(() => Response.json({
  enabled: Boolean(process.env.DATABASE_URL && process.env.ENQUIRY_RATE_SALT && process.env.ENQUIRIES_ENABLED === 'true'),
}, { headers: { 'Cache-Control': 'no-store' } }));

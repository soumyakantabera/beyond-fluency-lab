import { defineHandler } from 'h3';
import { normalizeCountry } from '../../src/lib/countries';

export default defineHandler(event => {
  // Hosting-provided country only. Never expose or persist IP addresses or coordinates.
  const country = normalizeCountry(event.req.headers.get('x-vercel-ip-country'));
  return Response.json({country}, {headers: {
    'Cache-Control': 'private, no-store, max-age=0',
    'CDN-Cache-Control': 'no-store',
    'Vercel-CDN-Cache-Control': 'no-store',
    'Vary': 'x-vercel-ip-country',
    'X-Robots-Tag': 'noindex',
  }});
});

import { createFileRoute } from "@tanstack/react-router";
import { paths } from "../lib/routes";
import { SITE_ORIGIN } from "../lib/head";

export const Route = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => {
  const urls = [...new Set([...paths, "/legal/refunds", "/legal/gdpr"])].filter(path => path !== "/enrol");
  const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.map(path => `<url><loc>${escape(SITE_ORIGIN + path)}</loc></url>`).join("") + "</urlset>", {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
} } } });

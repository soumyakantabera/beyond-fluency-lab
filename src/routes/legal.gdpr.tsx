import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/gdpr");

export const Route = createFileRoute("/legal/gdpr")({
  component: () => <LegalPage kind="gdpr" />,
  head: () => seo(simplePages["legal/gdpr"][0] + " | Beyond Fluency Lab", simplePages["legal/gdpr"][1]),
});

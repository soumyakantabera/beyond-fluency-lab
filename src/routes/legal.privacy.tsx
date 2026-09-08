import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/privacy");

export const Route = createFileRoute("/legal/privacy")({
  component: () => <LegalPage kind="privacy" />,
  head: () => seo(simplePages["legal/privacy"][0] + " | Beyond Fluency Lab", simplePages["legal/privacy"][1]),
});

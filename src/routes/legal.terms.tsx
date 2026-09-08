import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/terms");

export const Route = createFileRoute("/legal/terms")({
  component: () => <LegalPage kind="terms" />,
  head: () => seo(simplePages["legal/terms"][0] + " | Beyond Fluency Lab", simplePages["legal/terms"][1]),
});

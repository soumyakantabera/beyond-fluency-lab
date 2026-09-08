import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/cookies");

export const Route = createFileRoute("/legal/cookies")({
  component: () => <LegalPage kind="cookies" />,
  head: () => seo(simplePages["legal/cookies"][0] + " | Beyond Fluency Lab", simplePages["legal/cookies"][1]),
});

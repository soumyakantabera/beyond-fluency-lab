import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/uk");

export const Route = createFileRoute("/legal/uk")({
  component: () => <LegalPage kind="uk" />,
  head: () => seo(simplePages["legal/uk"][0] + " | Beyond Fluency Lab", simplePages["legal/uk"][1]),
});

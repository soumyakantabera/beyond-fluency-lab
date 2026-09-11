import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/legal/us");

export const Route = createFileRoute("/legal/us")({
  component: () => <LegalPage kind="us" />,
  head: () => seo(simplePages["legal/us"][0] + " | Beyond Fluency Lab", simplePages["legal/us"][1]),
});

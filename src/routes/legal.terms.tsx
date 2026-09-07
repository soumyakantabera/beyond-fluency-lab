import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/legal/terms")({
  component: () => <LegalPage kind="terms" />,
  head: () => seo(simplePages["legal/terms"][0] + " | Beyond Fluency Lab", simplePages["legal/terms"][1]),
});

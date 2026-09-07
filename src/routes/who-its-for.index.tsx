import { createFileRoute } from "@tanstack/react-router";
import { AudiencesPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/who-its-for/")({
  component: AudiencesPage,
  head: () => seo(simplePages["who-its-for"][0] + " | Beyond Fluency Lab", simplePages["who-its-for"][1]),
});

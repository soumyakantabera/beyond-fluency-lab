import { createFileRoute } from "@tanstack/react-router";
import { AudiencesPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/who-its-for");

export const Route = createFileRoute("/who-its-for/")({
  component: AudiencesPage,
  head: () =>
    seo(simplePages["who-its-for"][0] + " | Beyond Fluency Lab", simplePages["who-its-for"][1]),
});

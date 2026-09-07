import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => seo(simplePages["about"][0] + " | Beyond Fluency Lab", simplePages["about"][1]),
});

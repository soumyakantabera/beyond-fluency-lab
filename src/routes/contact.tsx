import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => seo(simplePages["contact"][0] + " | Beyond Fluency Lab", simplePages["contact"][1]),
});

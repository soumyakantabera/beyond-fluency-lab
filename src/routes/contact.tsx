import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/contact");

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => seo(simplePages["contact"][0] + " | Beyond Fluency Lab", simplePages["contact"][1]),
});

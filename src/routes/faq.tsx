import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/faq");

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => seo(simplePages["faq"][0] + " | Beyond Fluency Lab", simplePages["faq"][1]),
});

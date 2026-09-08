import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/pricing");

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => seo(simplePages["pricing"][0] + " | Beyond Fluency Lab", simplePages["pricing"][1]),
});

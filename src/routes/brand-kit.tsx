import { createFileRoute } from "@tanstack/react-router";
import { BrandPage } from "@/components/brand-page";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/brand-kit")({
  component: BrandPage,
  head: () => seo(simplePages["brand-kit"][0] + " | Beyond Fluency Lab", simplePages["brand-kit"][1]),
});

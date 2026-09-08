import { createFileRoute } from "@tanstack/react-router";
import { BrandPage } from "@/components/brand-page";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/brand-kit");

export const Route = createFileRoute("/brand-kit")({
  component: BrandPage,
  head: () => seo(simplePages["brand-kit"][0] + " | Beyond Fluency Lab", simplePages["brand-kit"][1]),
});

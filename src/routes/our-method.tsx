import { createFileRoute } from "@tanstack/react-router";
import { MethodPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/our-method");

export const Route = createFileRoute("/our-method")({
  component: MethodPage,
  head: () => seo(simplePages["our-method"][0] + " | Beyond Fluency Lab", simplePages["our-method"][1]),
});

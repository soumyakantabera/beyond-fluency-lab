import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/testimonials");

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => seo(simplePages["testimonials"][0] + " | Beyond Fluency Lab", simplePages["testimonials"][1]),
});

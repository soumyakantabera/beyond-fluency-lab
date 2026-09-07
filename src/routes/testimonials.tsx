import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => seo(simplePages["testimonials"][0] + " | Beyond Fluency Lab", simplePages["testimonials"][1]),
});

import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";
import { seoForPath } from "@/lib/head";

const seo = seoForPath("/$");

export const Route = createFileRoute("/$")({
  beforeLoad: ({ params }) => { if (true) throw notFound(); },
  notFoundComponent: NotFoundPage,
  component: NotFoundPage,
  head: () => seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab."),
});

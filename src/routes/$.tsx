import { createFileRoute } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/not-found";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab."),
});

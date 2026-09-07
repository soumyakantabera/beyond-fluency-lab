import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => seo(simplePages.blog[0] + " | Beyond Fluency Lab", simplePages.blog[1]),
});

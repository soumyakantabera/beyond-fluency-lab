import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/blog");

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => seo(simplePages.blog[0] + " | Beyond Fluency Lab", simplePages.blog[1]),
});

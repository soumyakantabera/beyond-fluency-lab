import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/courses");

export const Route = createFileRoute("/courses/")({
  component: CoursesPage,
  head: () => seo(simplePages.courses[0] + " | Beyond Fluency Lab", simplePages.courses[1]),
});

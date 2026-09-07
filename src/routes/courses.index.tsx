import { createFileRoute } from "@tanstack/react-router";
import { CoursesPage } from "@/components/site-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/courses/")({
  component: CoursesPage,
  head: () => seo("Live Communication Courses in English for Fluent Speakers | Beyond Fluency Lab", simplePages.courses[1]),
});

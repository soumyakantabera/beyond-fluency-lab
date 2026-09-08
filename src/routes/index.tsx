import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { seoForPath } from "@/lib/head";

const seo = seoForPath("/");

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () =>
    seo(
      "Communication Coaching for Students & Professionals | Beyond Fluency Lab",
      "Beyond fluency: live communication coaching for university students, graduates and professionals. Practise interviews, presentations and conversations that matter.",
    ),
});

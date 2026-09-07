import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => seo(
    "Professional Communication Coaching in English | Beyond Fluency Lab",
    "Communication coaching for fluent English speakers: public speaking, interviews, presentations, persuasion and performance under pressure. Live courses from €50.",
  ),
});

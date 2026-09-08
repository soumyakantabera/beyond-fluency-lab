import { createFileRoute } from "@tanstack/react-router";
import { StudentAudiencesPage } from "@/components/student-pages";
import { seo } from "@/lib/head";
import { simplePages } from "@/lib/routes";

export const Route = createFileRoute("/who-its-for/")({
  component: StudentAudiencesPage,
  head: () =>
    seo(simplePages["who-its-for"][0] + " | Beyond Fluency Lab", simplePages["who-its-for"][1]),
});

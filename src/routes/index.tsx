import { createFileRoute } from "@tanstack/react-router";
import { StudentHomePage } from "@/components/student-pages";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/")({
  component: StudentHomePage,
  head: () =>
    seo(
      "Student & Graduate Interview Coaching | Beyond Fluency Lab",
      "Live communication and interview practice for university students and graduates. Prepare for internships, presentations and your first job. Courses from €50.",
    ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SegmentPage } from "@/components/site-pages";
import { StudentAudiencePage } from "@/components/student-pages";
import { NotFoundPage } from "@/components/not-found";
import { segments } from "@/lib/content";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/who-its-for/$slug")({
  component: SegmentRoute,
  head: ({ params }) => {
    if (params.slug === "university-students")
      return seo(
        "Communication Coaching for University Students | Beyond Fluency Lab",
        "Practise presentations, internship interviews and group discussions with live online communication coaching for university students.",
      );
    if (params.slug === "graduating-students")
      return seo(
        "Interview Preparation for Graduates | Beyond Fluency Lab",
        "Communication and interview practice for final-year students and recent graduates. Explain your projects, answer follow-up questions and prepare for your first job.",
      );
    const s = segments.find((x) => x.slug === params.slug);
    if (!s) return seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab.");
    return seo(
      "Professional Communication Coaching for " + s.name + " | Beyond Fluency Lab",
      s.intro,
    );
  },
});

function SegmentRoute() {
  const { slug } = Route.useParams();
  if (slug === "university-students") return <StudentAudiencePage />;
  if (slug === "graduating-students") return <StudentAudiencePage graduate />;
  const index = segments.findIndex((s) => s.slug === slug);
  if (index < 0) return <NotFoundPage />;
  return <SegmentPage index={index} />;
}

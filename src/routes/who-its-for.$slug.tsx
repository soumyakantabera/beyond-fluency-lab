import { createFileRoute } from "@tanstack/react-router";
import { SegmentPage } from "@/components/site-pages";
import { NotFoundPage } from "@/components/not-found";
import { segments } from "@/lib/content";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/who-its-for/$slug")({
  component: SegmentRoute,
  head: ({ params }) => {
    const s = segments.find((x) => x.slug === params.slug);
    if (!s) return seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab.");
    return seo("Professional Communication Coaching for " + s.name + " | Beyond Fluency Lab", s.intro);
  },
});

function SegmentRoute() {
  const { slug } = Route.useParams();
  const index = segments.findIndex((s) => s.slug === slug);
  if (index < 0) return <NotFoundPage />;
  return <SegmentPage index={index} />;
}

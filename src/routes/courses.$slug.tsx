import { createFileRoute, notFound } from "@tanstack/react-router";
import { CoursePage } from "@/components/site-pages";
import { NotFoundPage } from "@/components/not-found";
import { courses } from "@/lib/content";
import { seoForPath } from "@/lib/head";

export const Route = createFileRoute("/courses/$slug")({
  beforeLoad: ({ params }) => { if (!courses.some(x => x.slug === params.slug)) throw notFound(); },
  notFoundComponent: NotFoundPage,
  component: CourseRoute,
  head: ({ params }) => {
    const seo = seoForPath(`/courses/${params.slug}`);
    const c = courses.find((x) => x.slug === params.slug);
    if (!c) return seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab.");
    return seo(c.name + " Live Communication Coaching · €" + c.price + " | Beyond Fluency Lab", c.description);
  },
});

function CourseRoute() {
  const { slug } = Route.useParams();
  const index = courses.findIndex((c) => c.slug === slug);
  if (index < 0) return <NotFoundPage />;
  return <CoursePage index={index} />;
}

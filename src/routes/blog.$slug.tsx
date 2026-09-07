import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site-pages";
import { NotFoundPage } from "@/components/not-found";
import { articles } from "@/lib/articles";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/blog/$slug")({
  component: ArticleRoute,
  head: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    if (!a) return seo("Page not found | Beyond Fluency Lab", "Explore Beyond Fluency Lab.");
    return seo(a.title + " | Beyond Fluency Lab", a.description);
  },
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index < 0) return <NotFoundPage />;
  return <ArticlePage index={index} />;
}

import { ORIGIN, courses, segments } from "./content";
import { articles } from "./articles";

const organization = { "@id": ORIGIN + "/#organization" };
const labels: Record<string, string> = {
  courses: "Courses", blog: "Communication guides", "who-its-for": "Who it’s for",
  "university-students": "University students", "graduating-students": "Graduates",
  legal: "Legal", terms: "Terms", privacy: "Privacy", cookies: "Cookies", refunds: "Refunds",
};

export function pageSchema(path: string, title: string, description: string) {
  const url = ORIGIN + path;
  const course = courses.find(c => path === "/courses/" + c.slug);
  const article = articles.find(a => path === "/blog/" + a.slug);
  const graph: Record<string, unknown>[] = [{
    "@type": "WebSite", "@id": ORIGIN + "/#website", url: ORIGIN + "/",
    name: "Beyond Fluency Lab", publisher: organization, inLanguage: "en",
  }, {
    "@type": path === "/courses" || path === "/blog" || path === "/who-its-for" ? "CollectionPage" : "WebPage",
    "@id": url + "#webpage", url, name: title.replace(/ \| Beyond Fluency Lab$/, ""), description,
    isPartOf: { "@id": ORIGIN + "/#website" }, inLanguage: "en",
    ...(course ? { mainEntity: { "@id": url + "#course" } } : {}),
    ...(article ? { mainEntity: { "@id": url + "#article" } } : {}),
  }];
  if (path !== "/") {
    const parts = path.split("/").filter(Boolean);
    // Legal has no index page: link each policy directly under Home.
    const crumbs = parts.flatMap((part, i) => part === "legal" ? [] : [{
      "@type": "ListItem", name: labels[part] || courses.find(c => c.slug === part)?.name || segments.find(s => s.slug === part)?.name || (i === parts.length - 1 ? title.split(" | ")[0] : part),
      item: ORIGIN + "/" + parts.slice(0, i + 1).join("/"),
    }]);
    graph.push({ "@type": "BreadcrumbList", itemListElement: [
      { name: "Home", item: ORIGIN + "/", "@type": "ListItem" }, ...crumbs,
    ].map((item, i) => ({ ...item, position: i + 1 })) });
  }
  if (path === "/courses") graph.push({
    "@type": "ItemList", "@id": url + "#courses", numberOfItems: courses.length,
    itemListElement: courses.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: ORIGIN + "/courses/" + c.slug })),
  });
  if (article) graph.push({
    "@type": "BlogPosting", "@id": url + "#article", url, headline: article.title,
    description: article.description, articleSection: article.category, inLanguage: "en",
    datePublished: article.published || "2026-09-06", author: { "@type": "Organization", ...organization, name: "Beyond Fluency Lab", url: ORIGIN + "/about" },
    publisher: organization, mainEntityOfPage: { "@id": url + "#webpage" },
  });
  return { "@context": "https://schema.org", "@graph": graph };
}

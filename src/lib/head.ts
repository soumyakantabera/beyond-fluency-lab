export const SITE_ORIGIN = "https://beyond-fluency-lab.vercel.app";

export function seoForPath(path: string) {
  return (title: string, description: string) => {
    const missing = title.startsWith("Page not found");
    const canonical = SITE_ORIGIN + (path.replace(/\/$/, "") || "/");
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: missing || path === "/enrol" ? "noindex, follow" : "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Beyond Fluency Lab" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: SITE_ORIGIN + "/og.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: SITE_ORIGIN + "/og.jpg" },
      ],
      links: missing ? [] : [{ rel: "canonical", href: canonical }],
    };
  };
}

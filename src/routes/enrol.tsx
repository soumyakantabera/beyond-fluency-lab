import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";

const seo = seoForPath("/enrol");

export const Route = createFileRoute("/enrol")({
  component: EnrolPage,
  validateSearch: (search: Record<string, unknown>) => ({
    course: typeof search.course === "string" ? search.course : "",
    payment: typeof search.payment === "string" ? search.payment : "",
  }),
  head: () => seo(simplePages.enrol[0] + " | Beyond Fluency Lab", simplePages.enrol[1]),
});

function EnrolPage() {
  return <ContactPage />;
}

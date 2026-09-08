import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seoForPath } from "@/lib/head";

const seo = seoForPath("/legal/refunds");

export const Route = createFileRoute("/legal/refunds")({
  component: () => <LegalPage kind="refunds" />,
  head: () => seo("Cancellation & Refund Policy | Beyond Fluency Lab", "Cancellation, rescheduling, withdrawal and refund information for Beyond Fluency Lab courses."),
});

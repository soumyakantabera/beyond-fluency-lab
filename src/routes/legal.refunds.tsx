import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-pages";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/legal/refunds")({
  component: () => <LegalPage kind="refunds" />,
  head: () => seo("Cancellation & Refund Policy | Beyond Fluency Lab", "Cancellation, rescheduling, withdrawal and refund information for Beyond Fluency Lab courses."),
});

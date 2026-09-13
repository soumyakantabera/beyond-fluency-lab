import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/for-universities")({
  component: () => <InfoPage page="for-universities" />,
  head: () =>
    seoForPath("/for-universities")(
      simplePages["for-universities"][0] + " | Beyond Fluency Lab",
      simplePages["for-universities"][1],
    ),
});

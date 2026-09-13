import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/for-employers")({
  component: () => <InfoPage page="for-employers" />,
  head: () =>
    seoForPath("/for-employers")(
      simplePages["for-employers"][0] + " | Beyond Fluency Lab",
      simplePages["for-employers"][1],
    ),
});

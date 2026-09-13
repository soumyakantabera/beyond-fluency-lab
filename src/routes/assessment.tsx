import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/assessment")({
  component: () => <InfoPage page="assessment" />,
  head: () =>
    seoForPath("/assessment")(
      simplePages["assessment"][0] + " | Beyond Fluency Lab",
      simplePages["assessment"][1],
    ),
});

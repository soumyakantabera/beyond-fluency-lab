import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/live-classes")({
  component: () => <InfoPage page="live-classes" />,
  head: () =>
    seoForPath("/live-classes")(
      simplePages["live-classes"][0] + " | Beyond Fluency Lab",
      simplePages["live-classes"][1],
    ),
});

import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/coaches")({
  component: () => <InfoPage page="coaches" />,
  head: () =>
    seoForPath("/coaches")(
      simplePages["coaches"][0] + " | Beyond Fluency Lab",
      simplePages["coaches"][1],
    ),
});

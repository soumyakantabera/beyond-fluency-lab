import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/site-v3";
import { seoForPath } from "@/lib/head";
import { simplePages } from "@/lib/routes";
export const Route = createFileRoute("/private-coaching")({
  component: () => <InfoPage page="private-coaching" />,
  head: () =>
    seoForPath("/private-coaching")(
      simplePages["private-coaching"][0] + " | Beyond Fluency Lab",
      simplePages["private-coaching"][1],
    ),
});

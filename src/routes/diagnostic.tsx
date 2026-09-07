import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-pages";
import { Diagnostic, SharedResult } from "@/components/site-interactions";
import { seo } from "@/lib/head";

export const Route = createFileRoute("/diagnostic")({
  component: DiagnosticPage,
  head: () => seo(
    "Free Communication Plateau Diagnostic | Beyond Fluency Lab",
    "Find your communication plateau in 90 seconds. Seven situational questions, no grammar test, no email required. Get a named result and one relevant course recommendation.",
  ),
});

function DiagnosticPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="THE PLATEAU DIAGNOSTIC"
        title="Where does your communication stop working?"
        description="Find your plateau in 90 seconds. Seven real situations in English. Three dimensions. A useful place to start."
      />
      <section className="wrap section">
        <SharedResult />
        <Diagnostic />
      </section>
    </main>
  );
}

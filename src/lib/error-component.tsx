import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main id="main" className="wrap section" style={{ minHeight: "70vh", textAlign: "center" }}>
      <p className="eyebrow">SOMETHING WENT WRONG</p>
      <h1>Let’s try that again.</h1>
      <p className="lead" style={{ margin: "20px auto" }}>
        {errorMessage(error)}
      </p>
      <div className="actions" style={{ justifyContent: "center" }}>
        <a className="btn" href="/">
          Return home
        </a>
      </div>
    </main>
  );
}

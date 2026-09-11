import { useEffect, useState } from "react";
import {
  applyConsent,
  applyConsentDefaults,
  openCookieSettings,
  readConsent,
  writeConsent,
  type CookieConsentState,
} from "@/lib/measurement";

function Switch({
  checked,
  locked,
  label,
  onChange,
}: {
  checked: boolean;
  locked?: boolean;
  label: string;
  onChange?: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      className="cookie-switch"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={locked}
      onClick={() => onChange?.(!checked)}
    >
      <span />
    </button>
  );
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    applyConsentDefaults();
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
      applyConsent(saved);
      setOpen(false);
    } else {
      setOpen(true);
    }
    setReady(true);
    const reopen = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setCustomize(true);
      setOpen(true);
    };
    window.addEventListener("bfl:cookie-settings", reopen);
    return () => window.removeEventListener("bfl:cookie-settings", reopen);
  }, []);

  function save(next: Pick<CookieConsentState, "analytics" | "marketing">) {
    const stored = writeConsent(next.analytics, next.marketing);
    applyConsent(stored);
    setAnalytics(stored.analytics);
    setMarketing(stored.marketing);
    setOpen(false);
    setCustomize(false);
  }

  if (!ready || !open) return null;

  return (
    <aside className={"cookie-banner" + (customize ? " is-open" : "")} aria-labelledby="cookie-title">
      <div className="cookie-panel">
        <div className="cookie-copy">
          <p id="cookie-title">
            We use cookies. Essential stay on. Optional: analytics.{" "}
            <a href="/legal/cookies">Cookie Policy</a>
          </p>
        </div>

        {customize ? (
          <div className="cookie-detail">
            <div className="cookie-row">
              <div>
                <strong>Essential</strong>
                <span>Pages, forms and remembering this choice. Always on.</span>
              </div>
              <Switch checked locked label="Essential cookies, always on" />
            </div>
            <div className="cookie-row">
              <div>
                <strong>Analytics</strong>
                <span>Which pages are read. Off unless you allow.</span>
              </div>
              <Switch checked={analytics} label="Allow analytics cookies" onChange={setAnalytics} />
            </div>
            <div className="cookie-row">
              <div>
                <strong>Ads measurement</strong>
                <span>Measures ads we run elsewhere. No ads on this site.</span>
              </div>
              <Switch
                checked={marketing}
                label="Allow ads measurement"
                onChange={setMarketing}
              />
            </div>
            <div className="cookie-actions">
              <button className="btn outline" type="button" onClick={() => save({ analytics: false, marketing: false })}>
                Reject
              </button>
              <button className="btn" type="button" onClick={() => save({ analytics, marketing })}>
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="cookie-actions cookie-actions-main">
            <button className="btn" type="button" onClick={() => save({ analytics: true, marketing: true })}>
              Accept all
            </button>
            <button className="btn outline" type="button" onClick={() => save({ analytics: false, marketing: false })}>
              Reject
            </button>
            <button className="btn outline" type="button" onClick={() => save({ analytics: false, marketing: false })}>
              Essential only
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export function CookieSettingsButton() {
  return (
    <button className="cookie-settings" type="button" onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}

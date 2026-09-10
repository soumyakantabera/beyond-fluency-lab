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
          <p className="eyebrow">YOUR CHOICE</p>
          <h2 id="cookie-title">Cookies, plainly</h2>
          {customize ? (
            <p id="cookie-copy">Turn each optional tool on or off. Essential storage stays on so the site can run.</p>
          ) : (
            <p id="cookie-copy">
              The site works with essential storage only. Optional tools: Google Analytics, to see
              which pages help, and Bing UET, to measure ads we run <em>on Bing</em> — never ads on
              this website.
            </p>
          )}
          <p className="cookie-fine">
            Change this later in the footer.{" "}
            <a href="/legal/cookies">Cookie Policy</a>
            {" · "}
            <a href="/legal/privacy">Privacy</a>
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
                <span>Google Analytics and Tag Manager. Which pages are read. Off unless you allow.</span>
              </div>
              <Switch checked={analytics} label="Allow analytics cookies" onChange={setAnalytics} />
            </div>
            <div className="cookie-row">
              <div>
                <strong>Bing ads measurement</strong>
                <span>Only if someone clicked a Bing ad we placed. No advertisements are shown here.</span>
              </div>
              <Switch
                checked={marketing}
                label="Allow Bing ads measurement"
                onChange={setMarketing}
              />
            </div>
            <div className="cookie-actions">
              <button className="btn outline" type="button" onClick={() => save({ analytics: false, marketing: false })}>
                Essential only
              </button>
              <button className="btn" type="button" onClick={() => save({ analytics, marketing })}>
                Save my choices
              </button>
            </div>
          </div>
        ) : (
          <div className="cookie-actions cookie-actions-main">
            <button className="btn outline" type="button" onClick={() => save({ analytics: false, marketing: false })}>
              Essential only
            </button>
            <button className="btn" type="button" onClick={() => save({ analytics: true, marketing: true })}>
              Allow measurement
            </button>
            <button className="cookie-choose" type="button" onClick={() => setCustomize(true)}>
              Choose each one
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

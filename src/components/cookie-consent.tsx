import { useEffect, useState } from "react";
import {
  applyConsent,
  applyConsentDefaults,
  openCookieSettings,
  readConsent,
  writeConsent,
  type CookieConsentState,
} from "@/lib/measurement";

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

  function save(next: CookieConsentState) {
    writeConsent(next.analytics, next.marketing);
    applyConsent(next);
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
    setOpen(false);
    setCustomize(false);
  }

  if (!ready || !open) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-copy">
      <div className="cookie-banner-inner">
        <div>
          <p className="eyebrow" id="cookie-title">
            Cookies on this site
          </p>
          <p id="cookie-copy">
            We use essential storage to run the site. Analytics (Google Analytics and Tag Manager)
            and advertising measurement (Microsoft Advertising / Bing) load only if you accept.
            Read the <a href="/legal/cookies">Cookie Policy</a>.
          </p>
          {customize && (
            <div className="cookie-choices">
              <label>
                <input type="checkbox" checked disabled /> Essential — always on
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />{" "}
                Analytics — Google Analytics, Tag Manager
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />{" "}
                Advertising — Microsoft Advertising / Bing
              </label>
            </div>
          )}
        </div>
        <div className="cookie-actions">
          {customize ? (
            <button className="btn" type="button" onClick={() => save({ analytics, marketing, updated: "" })}>
              Save choices
            </button>
          ) : (
            <>
              <button
                className="btn"
                type="button"
                onClick={() => save({ analytics: true, marketing: true, updated: "" })}
              >
                Accept all
              </button>
              <button
                className="btn outline"
                type="button"
                onClick={() => save({ analytics: false, marketing: false, updated: "" })}
              >
                Essential only
              </button>
              <button className="text-link" type="button" onClick={() => setCustomize(true)}>
                Choose
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button className="cookie-settings" type="button" onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}

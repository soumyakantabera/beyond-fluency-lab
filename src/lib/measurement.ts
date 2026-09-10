/** Measurement IDs — set in env. Empty IDs mean the tag is not injected. */
export const GTM_ID = String(import.meta.env.VITE_GTM_ID || "").trim();
export const GA_ID = String(import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();
export const BING_UET_ID = String(import.meta.env.VITE_BING_UET_ID || "").trim();

export const CONSENT_KEY = "bfl-consent";

export type CookieConsentState = {
  analytics: boolean;
  marketing: boolean;
  updated: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    uetq?: unknown[];
  }
}

export function readConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentState;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean, marketing: boolean): CookieConsentState {
  const value: CookieConsentState = {
    analytics,
    marketing,
    updated: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
  return value;
}

function scriptLoaded(src: string) {
  return Boolean(document.querySelector(`script[src="${src}"]`));
}

function loadScript(src: string, extra?: Record<string, string>) {
  if (scriptLoaded(src)) return;
  const el = document.createElement("script");
  el.src = src;
  el.async = true;
  if (extra) Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}

export function applyConsentDefaults() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
}

export function applyConsent(state: CookieConsentState) {
  applyConsentDefaults();
  window.gtag?.("consent", "update", {
    analytics_storage: state.analytics ? "granted" : "denied",
    ad_storage: state.marketing ? "granted" : "denied",
    ad_user_data: state.marketing ? "granted" : "denied",
    ad_personalization: state.marketing ? "granted" : "denied",
  });
  if (state.analytics || state.marketing) loadGoogleTags();
  if (state.marketing) loadBingTag();
}

function loadGoogleTags() {
  if (GTM_ID) {
    window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
  }
  if (GA_ID && !GTM_ID) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`);
    window.gtag?.("js", new Date());
    window.gtag?.("config", GA_ID, { anonymize_ip: true });
  }
}

function loadBingTag() {
  if (!BING_UET_ID) return;
  window.uetq = window.uetq || [];
  const src = "https://bat.bing.com/bat.js";
  if (scriptLoaded(src)) return;
  const el = document.createElement("script");
  el.async = true;
  el.src = src;
  el.onload = () => {
    window.uetq = window.uetq || [];
    window.uetq.push("consent", "granted");
    window.uetq.push("pageLoad");
  };
  document.head.appendChild(el);
  window.uetq.push("ti", BING_UET_ID);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("bfl:cookie-settings"));
}

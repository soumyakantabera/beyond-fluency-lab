import type { ReactNode } from "react";
import { SiteInvitation } from "@/components/course-invitation";
import { BUSINESS, FOOTER_BLURB, ORIGIN } from "@/lib/content";
import { Signature, HeritageStrip } from "@/components/identity";
import { MotionDirector } from "@/components/editorial-motion";
import { Navigation } from "@/components/navigation";
import { LabIcon } from "@/components/lab-icon";
import { CookieConsent, CookieSettingsButton } from "@/components/cookie-consent";

export function Header() {
  return (
    <>
      <HeritageStrip />
      <header className="header">
        <a href="/" className="brand" aria-label="Beyond Fluency Lab home">
          <Signature />
        </a>
        <Navigation />
      </header>
      <div className="reading-line" aria-hidden="true" />
    </>
  );
}

export function Footer() {
  return (
    <>
      <SiteInvitation />
      <footer>
        <div className="footer-top">
          <div>
            <a href="/" className="brand">
              <Signature />
            </a>
            <p className="footer-tagline">Thoughtful practice. Lasting presence.</p>
            <p className="footer-description">{FOOTER_BLURB}</p>
            <p className="small">
              From Learn With Smile. Seven years of teaching behind a distinct new programme.
            </p>
            <div className="footer-payments" aria-label="Payment methods">
              <span>Secure payments by</span>
              <img src="/assets/payments/stripe.svg" width="72" height="30" alt="Stripe" />
              <img src="/assets/payments/visa.png" width="54" height="18" alt="Visa" />
              <img src="/assets/payments/mastercard.png" width="50" height="28" alt="Mastercard" />
              <img src="/assets/payments/amex.svg" width="36" height="36" alt="American Express" />
              <img src="/assets/payments/bancontact.svg" width="80" height="50" alt="Bancontact" />
              <img src="/assets/payments/apple-pay.svg" width="90" height="36" alt="Apple Pay" />
              <img src="/assets/payments/google-pay.svg" width="90" height="28" alt="Google Pay" />
              <img src="/assets/payments/ideal.svg" width="100" height="38" alt="iDEAL" />
            </div>
          </div>
          <div>
            <h2>Explore</h2>
            <a href="/courses">Courses</a>
            <a href="/who-its-for">Who it’s for</a>
            <a href="/our-method">Our method</a>
            <a href="/blog">Journal</a>
          </div>
          <div>
            <h2>The lab</h2>
            <a href="/about">About us</a>
            <a href="/testimonials">Learner stories</a>
            <a href="/blog">Blog & guides</a>
            <a href="/diagnostic">Plateau Diagnostic</a>
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href="/enrol">Join a course</a>
            <a href="/contact">Book a free trial</a>
            <a href="/faq">Frequently asked questions</a>
            <a href="/brand-kit">Brand assets</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Beyond Fluency Lab</span>
          <MotionDirector />
          <div>
            <a href="/legal/terms">Terms</a>
            <a href="/legal/privacy">Privacy</a>
            <a href="/legal/uk">UK</a>
            <a href="/legal/us">US</a>
            <a href="/legal/cookies">Cookies</a>
            <a href="/legal/refunds">Refunds</a>
            <a href="/legal/gdpr">GDPR</a>
            <CookieSettingsButton />
          </div>
        </div>
        <p className="legal-fields">
          EU representative (GDPR Art. 27): Currently being appointed. Until this is
          complete, EU data subjects may contact the data controller directly using
          the details below.
          <br />
          UK representative (UK GDPR Art. 27): Currently being appointed. Until this
          is complete, UK data subjects may contact the data controller directly using
          the details below.
          <br />
          Data controller: Learn With Smile, a sole proprietorship in India, trading
          as Beyond Fluency Lab · 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008,
          India · <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>
          {" "}· Prices exclude VAT; applicable VAT is added at checkout based on your
          country.
        </p>
      </footer>
    </>
  );
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Beyond Fluency Lab",
    "@id": ORIGIN + "/#organization",
    url: ORIGIN + "/",
    logo: ORIGIN + "/assets/mark.svg",
    description: BUSINESS,
    parentOrganization: {
      "@type": "Organization",
      name: "Learn With Smile",
      url: "https://www.learnwithsmile.app/",
    },
    email: "info@learnwithsmile.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "75/2/4, Raja Ram Mohan Roy Road",
      addressLocality: "Kolkata",
      postalCode: "700008",
      addressCountry: "IN",
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      {children}
      <Footer />
      <CookieConsent />
      <JsonLd />
    </>
  );
}

export function Arrow() {
  return <LabIcon name="arrow" size={17} />;
}

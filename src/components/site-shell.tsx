import { useRouterState } from "@tanstack/react-router";
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
  const path = useRouterState({select:s => s.location.pathname});
  return (
    <>
      {path !== "/" && path !== "/contact" && path !== "/enrol" && <SiteInvitation />}
      <footer>
        <div className="footer-top">
          <div>
            <a href="/" className="brand">
              <Signature />
            </a>
            <p className="footer-tagline">Thoughtful practice. Lasting presence.</p>
            <p className="footer-description">{FOOTER_BLURB}</p>
            <p className="small">
              From Learn With Smile. A new chapter in live communication coaching.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <a href="/courses">Courses</a>
            <a href="/who-its-for">Who it’s for</a>
            <a href="/our-method">Our method</a>
            <a href="/private-coaching">Private coaching</a>
            <a href="/live-classes">Live classes</a>
            <a href="/pricing">Programme fees</a>
            <a href="/blog">Journal</a>
          </div>
          <div>
            <h2>The lab</h2>
            <a href="/about">About us</a>
            <a href="/coaches">Your coach</a>
            <a href="/for-employers">For employers</a>
            <a href="/for-universities">For universities</a>
            <a href="/testimonials">Learner stories</a>
            <a href="/blog">Blog & guides</a>
            <a href="/diagnostic">Free self-check</a>
            <a href="/assessment">Individual assessment</a>
          </div>
          <div>
            <h2>Get in touch</h2>
            <a href="/enrol">Programme enquiry</a>
            <a href="/contact">Start a conversation</a>
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
          Data controller: Learn With Smile, a sole proprietorship in India, trading as Beyond
          Fluency Lab · 75/2/4, Raja Ram Mohan Roy Road, Kolkata 700008, India ·{" "}
          <a href="mailto:info@learnwithsmile.app">info@learnwithsmile.app</a>
          <br />
          Grievance officer: Soumyakanta Bera · <a href="tel:+919674479949">+91 9674479949</a> ·
          108, Shri Krishna Nagar, Kolkata 700056, India · Programme fees are indicative; applicable
          taxes and your final total are confirmed before enrolment.
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

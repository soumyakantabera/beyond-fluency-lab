import { PageHero } from "./site-pages";
import { LabIcon } from "./lab-icon";
import { iconPaths, type IconName } from "@/lib/icon-paths";

const logoAssets = [
  { file: "logo.svg", label: "Primary wordmark", note: "For light backgrounds", tone: "light" },
  { file: "logo-reversed.svg", label: "Reversed wordmark", note: "For dark backgrounds", tone: "dark" },
  { file: "mark.svg", label: "Open-ladder mark", note: "For compact applications", tone: "light" },
  { file: "favicon.svg", label: "Favicon", note: "For browser and app icons", tone: "light" },
];
const applications = [
  ["business-card.svg", "Business card · front", "85 × 55 mm"],
  ["business-card-back.svg", "Business card · reverse", "85 × 55 mm"],
  ["letterhead.svg", "A4 letterhead", "210 × 297 mm"],
] as const;
const socialCards = [
  ["og-home.png", "Home social card"],
  ["og-course.png", "Course social card"],
  ["og-blog.png", "Journal social card"],
] as const;
const colours = [
  ["Forest", "#174F46", "Primary brand and actions"],
  ["Warm stone", "#F4F1EA", "Main editorial background"],
  ["Deep ink", "#272422", "Headlines and body copy"],
  ["Blue grey", "#7C8B91", "Data and secondary details"],
  ["Rosewood", "#33282D", "Footer and deep surfaces"],
] as const;

function DownloadLink({ file, children }: { file: string; children: React.ReactNode }) {
  return <a className="text-link" href={`/assets/${file}`} download>{children}<LabIcon name="download" size={16}/></a>;
}

export function BrandPage() {
  return <main id="main">
    <PageHero eyebrow="BRAND ASSETS" title="A visual language for what comes next." description="Logos, colours, typography and ready-to-use files for presenting Beyond Fluency Lab consistently." />

    <section className="wrap brand-download-bar" aria-label="Brand kit download">
      <div><p className="eyebrow">COMPLETE TOOLKIT</p><h2>Everything in one place.</h2><p>Logos, icons, social cards, stationery templates, font licences and a concise usage guide.</p></div>
      <a className="btn" href="/assets/beyond-fluency-brand-kit.zip" download>Download brand kit <LabIcon name="download" size={18}/></a>
    </section>

    <section className="wrap section brand-section">
      <div className="brand-section-head"><div><p className="eyebrow">01 / SIGNATURE</p><h2>The mark and wordmark.</h2></div><p>Use the complete wordmark whenever space allows. The open-ladder mark is for compact moments where the brand is already understood.</p></div>
      <div className="brand-logo-grid">{logoAssets.map((asset) => <article className={`brand-logo-card ${asset.tone}`} key={asset.file} data-reveal><div className="brand-logo-preview"><img src={`/assets/${asset.file}`} alt={`${asset.label} preview`} /></div><div className="brand-asset-meta"><div><h3>{asset.label}</h3><p>{asset.note}</p></div><DownloadLink file={asset.file}>SVG</DownloadLink></div></article>)}</div>
      <div className="brand-rules"><div><LabIcon name="check" size={20}/><strong>Do</strong><p>Leave generous clear space and preserve the original proportions and colours.</p></div><div><LabIcon name="close" size={20}/><strong>Don’t</strong><p>Stretch, rotate, add effects, recolour individual letters or place the mark on a busy image.</p></div></div>
    </section>

    <section className="brand-colour-section"><div className="wrap section"><div className="brand-section-head"><div><p className="eyebrow">02 / COLOUR</p><h2>Quiet confidence, clear contrast.</h2></div><p>Forest and warm stone carry the identity. Ink keeps it readable; blue grey and rosewood support data and deeper surfaces.</p></div><div className="colour-grid">{colours.map(([name, hex, use]) => <div className="colour-swatch" key={hex}><div style={{ background: hex }} aria-hidden="true"/><strong>{name}</strong><code>{hex}</code><p>{use}</p></div>)}</div></div></section>

    <section className="wrap section brand-type-section"><div className="brand-section-head"><div><p className="eyebrow">03 / TYPOGRAPHY</p><h2>Editorial warmth. Modern clarity.</h2></div><p>Newsreader gives headlines a thoughtful voice. Schibsted Grotesk keeps navigation, forms and longer reading direct and contemporary.</p></div><div className="type-specimens"><article className="type-serif"><span>Newsreader / Regular & Italic</span><p>Fluent is only<br/><em>the beginning.</em></p></article><article className="type-sans"><span>Schibsted Grotesk / Regular, Medium & Semibold</span><p>Persuasive structure<br/>Pressure performance<br/>Register control</p></article></div><p className="fine">Both families are self-hosted and supplied with their Open Font Licences in the complete kit.</p></section>

    <section className="brand-icon-section"><div className="wrap section"><div className="brand-section-head"><div><p className="eyebrow"><LabIcon name="craft" size={18}/>04 / ICONOGRAPHY</p><h2>One stroke. A shared system.</h2></div><p>An original line family for the Plateau Framework, navigation, learning moments and communication contexts.</p></div><div className="icon-gallery">{(Object.keys(iconPaths) as IconName[]).map((name) => <div key={name}><LabIcon name={name} size={31}/><span>{name}</span></div>)}</div><DownloadLink file="iconography.svg">Download the iconography sheet</DownloadLink></div></section>

    <section className="wrap section"><div className="brand-section-head"><div><p className="eyebrow">05 / APPLICATIONS</p><h2>Ready for real use.</h2></div><p>Editable stationery and social artwork give each touchpoint the same measured, editorial character.</p></div><div className="brand-application-grid">{applications.map(([file, label, size]) => <article className="brand-application" key={file}><img src={`/assets/${file}`} alt={`${label} preview`} loading="lazy"/><div><p className="eyebrow">{size}</p><h3>{label}</h3><DownloadLink file={file}>Download SVG</DownloadLink></div></article>)}</div><a className="text-link" href="/assets/letterhead.html" target="_blank" rel="noreferrer">Open the editable letterhead <LabIcon name="arrow" size={16}/></a></section>

    <section className="brand-social-section"><div className="wrap section"><div className="brand-section-head"><div><p className="eyebrow">06 / SOCIAL CARDS</p><h2>Recognisable at a glance.</h2></div><p>Three 1200 × 630 templates for the homepage, programmes and journal.</p></div><div className="social-card-grid">{socialCards.map(([file, label]) => <article key={file}><img src={`/assets/${file}`} alt={`${label} preview`} loading="lazy"/><div><h3>{label}</h3><DownloadLink file={file}>Download PNG</DownloadLink></div></article>)}</div></div></section>

    <section className="wrap brand-help"><LabIcon name="mail" size={28}/><div><p className="eyebrow">NEED ANOTHER FORMAT?</p><h2>Keep the identity coherent.</h2><p>For partnerships, press use or a format not included here, contact the team before recreating an asset.</p></div><a className="btn" href="/contact">Contact the team <LabIcon name="arrow" size={17}/></a></section>
  </main>;
}

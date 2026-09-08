"use client";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { usePassVerticalScroll } from "@/lib/pass-vertical-scroll";

export function MobileDeck({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className: string;
  label: string;
}) {
  const items = Children.toArray(children);
  const [mobile, setMobile] = useState(false);
  const [all, setAll] = useState(false);
  const [index, setIndex] = useState(0);
  const scroller = useRef<HTMLDivElement>(null);
  const compact = mobile && !all;
  usePassVerticalScroll(scroller, compact);

  useEffect(() => {
    const m = matchMedia("(max-width: 580px)");
    const update = () => setMobile(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  function onScroll() {
    const el = scroller.current;
    if (!el || !compact) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const mark = el.getBoundingClientRect().left + el.clientWidth * 0.4;
    let next = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].getBoundingClientRect().left <= mark) next = i;
    }
    setIndex(next);
  }

  function go(i: number) {
    const el = scroller.current;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (el && slide)
      el.scrollTo({
        left: el.scrollLeft + slide.getBoundingClientRect().left - el.getBoundingClientRect().left,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
  }

  return (
    <div
      className={"mobile-deck " + (compact ? "deck-compact" : "")}
      role="region"
      aria-label={label}
    >
      {mobile && (
        <div className="deck-controls">
          <span aria-live="polite">
            {all ? `${items.length} ${label}` : `${index + 1} / ${items.length}`}
          </span>
          {!all && (
            <div className="deck-dots" role="group" aria-label={`Choose ${label}`}>
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-pressed={i === index}
                  style={i === index ? { background: "var(--primary)" } : undefined}
                  aria-label={`${label} ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          )}
          <button type="button" className="deck-expand" onClick={() => setAll(!all)}>
            {all ? "Swipe" : "Show all"}
          </button>
        </div>
      )}
      <div
        className={className}
        ref={scroller}
        onScroll={compact ? onScroll : undefined}
        tabIndex={compact ? 0 : undefined}
        aria-roledescription={compact ? "carousel" : undefined}
      >
        {items.map((item, i) => (
          <div key={i} className={"deck-item" + (compact && i === index ? " is-current" : "")}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

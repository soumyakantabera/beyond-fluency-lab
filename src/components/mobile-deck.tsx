'use client';
import { Children, useEffect, useRef, useState, type ReactNode } from 'react';

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

  useEffect(() => {
    const m = matchMedia('(max-width: 580px)');
    const update = () => setMobile(m.matches);
    update();
    m.addEventListener('change', update);
    return () => m.removeEventListener('change', update);
  }, []);

  function onScroll() {
    const el = scroller.current;
    if (!el || !compact) return;
    const w = el.clientWidth;
    if (!w) return;
    const next = Math.round(el.scrollLeft / w);
    setIndex(Math.max(0, Math.min(items.length - 1, next)));
  }

  function go(i: number) {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  }

  return (
    <div className={'mobile-deck ' + (compact ? 'deck-compact' : '')} role="region" aria-label={label}>
      {mobile && (
        <div className="deck-controls">
          <span aria-live="polite">{all ? `${items.length} ${label}` : `${index + 1} / ${items.length}`}</span>
          {!all && (
            <div className="deck-dots" role="tablist" aria-label={`Swipe ${label}`}>
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${label} ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          )}
          <button type="button" className="deck-expand" onClick={() => setAll(!all)}>
            {all ? 'Swipe' : 'Show all'}
          </button>
        </div>
      )}
      <div
        className={className}
        ref={scroller}
        onScroll={compact ? onScroll : undefined}
        tabIndex={compact ? 0 : undefined}
        aria-roledescription={compact ? 'carousel' : undefined}
      >
        {items.map((item, i) => (
          <div key={i} className="deck-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

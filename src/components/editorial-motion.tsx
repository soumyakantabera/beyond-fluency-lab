import { useEffect, useRef, useState } from "react";
import { LabIcon } from "@/components/lab-icon";
import { photos } from "@/lib/editorial";

export function MotionDirector() {
  const [paused, setPaused] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const reduced = preference.matches;
      setSystemReduced(reduced);
      let saved = false;
      try {
        saved = localStorage.getItem("bfl-motion") === "paused";
      } catch {
        /* ignore */
      }
      const next = reduced || saved;
      setPaused(next);
      document.documentElement.dataset.motion = next ? "paused" : "active";
    };
    apply();
    preference.addEventListener("change", apply);
    return () => preference.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const range = document.documentElement.scrollHeight - innerHeight;
        document.documentElement.style.setProperty(
          "--reading-progress",
          String(range > 0 ? scrollY / range : 0),
        );
      });
    };
    addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, [paused]);

  function toggle() {
    const value = !paused;
    setPaused(value);
    document.documentElement.dataset.motion = value ? "paused" : "active";
    try {
      localStorage.setItem("bfl-motion", value ? "paused" : "active");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      className="motion-control"
      onClick={toggle}
      disabled={systemReduced}
      aria-pressed={paused}
    >
      <LabIcon name={paused ? "play" : "pause"} size={14} />
      {systemReduced ? "Reduced motion" : paused ? "Enable motion" : "Pause motion"}
    </button>
  );
}

const chapters = [
  {
    number: "01",
    label: "THE FOUNDATION",
    title: "It began with the person, not the syllabus.",
    text: "Learn With Smile has spent 7 years developing its live teaching practice. More than 500 learners form the parent academy’s reported teaching history. Small groups and a teacher who knows you remain central to the work.",
    photo: photos.listening,
    link: "/about",
    linkText: "Where we come from",
  },
  {
    number: "02",
    label: "THE QUESTION",
    title: "What if fluent was only the beginning?",
    text: "You can know the language and still struggle to make your judgment visible. Beyond Fluency Lab gives that gap a name: the fluency plateau. The training follows the conversation, from a first attempt to feedback and a sharper second attempt.",
    photo: photos.mentoring,
    link: "/our-method",
    linkText: "How we teach",
  },
  {
    number: "03",
    label: "THE NEXT CHAPTER",
    title: "For the conversations that cross borders.",
    text: "The European programme is new. We carry forward the live, small-group approach while focusing on persuasive structure, pressure performance and register control. A new chapter, with an honest account of what came before.",
    photo: photos.practice,
    link: "/testimonials",
    linkText: "Our track record, in context",
  },
];

export function StoryChapters() {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  function go(i: number) {
    const next = Math.max(0, Math.min(chapters.length - 1, i));
    setIndex(next);
    const el = track.current;
    const slide = el?.children[next] as HTMLElement | undefined;
    if (el && slide) el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  }

  function onScroll() {
    const el = track.current;
    if (!el) return;
    const slides = Array.from(el.children) as HTMLElement[];
    const mark = el.scrollLeft + el.clientWidth * 0.4;
    let next = 0;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].offsetLeft <= mark) next = i;
    }
    setIndex(next);
  }

  return (
    <section className="story-section" aria-labelledby="story-title">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">
              <LabIcon name="story" size={18} />
              OUR STORY, IN THREE CHAPTERS
            </p>
            <h2 id="story-title">
              Experience gives
              <br />
              the work its depth.
            </h2>
          </div>
          <p>
            Seven years of teaching.
            <br />
            A considered next chapter.
          </p>
        </div>
        <div className="story-carousel" aria-label="The Beyond Fluency Lab story">
          <div className="story-track" ref={track} onScroll={onScroll}>
            {chapters.map((c, i) => (
              <article
                key={c.number}
                className={"story-slide" + (i === index ? " is-current" : "")}
                aria-label={"Chapter " + c.number + " of 3"}
                aria-hidden={i === index ? undefined : true}
              >
                <figure className="story-image">
                  <img src={c.photo.src} alt={c.photo.alt} width="1400" height="950" loading="lazy" />
                  <figcaption>{c.photo.caption}</figcaption>
                </figure>
                <div className="story-copy">
                  <div className="chapter-line">
                    <span className="chapter-number">{c.number}</span>
                    <span>{c.label}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a className="text-link" href={c.link} tabIndex={i === index ? 0 : -1}>
                    {c.linkText}
                    <LabIcon name="arrow" size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="story-controls">
            <div className="chapter-select" aria-label="Choose story chapter">
              {chapters.map((ch, i) => (
                <button
                  key={ch.number}
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index ? "step" : undefined}
                  aria-label={"Read chapter " + ch.number}
                >
                  <span>{ch.number}</span>
                  <i />
                </button>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">
              Chapter {index + 1} of 3
            </p>
            <div className="slide-buttons">
              <button
                type="button"
                onClick={() => go(index - 1)}
                disabled={index === 0}
                aria-label="Previous chapter"
              >
                <LabIcon name="back" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                disabled={index === chapters.length - 1}
                aria-label="Next chapter"
              >
                <LabIcon name="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

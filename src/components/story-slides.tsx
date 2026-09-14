import { Children, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { LabIcon } from "./lab-icon";
import type { IconName } from "@/lib/icon-paths";
export type StorySlide = {
  title: string;
  text: string;
  image: string;
  label?: string;
  icon?: IconName;
  href?: string;
};
export function IconPlate({ name }: { name: IconName }) {
  return (
    <span className="v4-icon-plate">
      <LabIcon name={name} size={32} />
    </span>
  );
}
export function StorySlides({ label, slides }: { label: string; slides: StorySlide[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const s = slides[active];
  const move = (delta: number) => setActive((i) => (i + delta + slides.length) % slides.length);
  return (
    <section
      className="v4-story-deck"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.target instanceof HTMLAnchorElement) return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          move(1);
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          move(-1);
        }
      }}
    >
      <div className="v4-deck-heading">
        <p className="v3-kicker">
          <LabIcon name="story" size={20} />
          {label}
        </p>
        <div className="v4-slide-controls">
          <button
            type="button"
            aria-controls={id}
            aria-label={"Previous " + label}
            onClick={() => move(-1)}
          >
            <LabIcon name="back" />
          </button>
          <span aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-controls={id}
            aria-label={"Next " + label}
            onClick={() => move(1)}
          >
            <LabIcon name="next" />
          </button>
        </div>
      </div>
      <div
        className="v4-story-stage"
        id={id}
        role="group"
        aria-roledescription="slide"
        aria-label={`${active + 1} of ${slides.length}`}
      >
        <figure>
          <img
            key={s.image}
            src={"/assets/" + s.image + ".webp"}
            alt={"Illustrative scene: " + s.title}
            width="1536"
            height="1024"
            loading="lazy"
          />
          <figcaption>Illustrative scenario · Every learner’s experience is different.</figcaption>
        </figure>
        <div className="v4-story-text" aria-live="polite">
          <IconPlate name={s.icon || "compass"} />
          <p className="v3-kicker">{s.label || "A MOMENT TO PRACTISE"}</p>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
          {s.href && (
            <a className="v3-link" href={s.href}>
              Find your next step <LabIcon name="arrow" size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="v4-chapter-tabs" aria-label={label + " chapters"}>
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <LabIcon name={slide.icon || "story"} size={20} />
            <span>
              {String(i + 1).padStart(2, "0")} · {slide.label || slide.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
export function CourseRail({
  children,
  label = "Explore programmes",
}: {
  children: ReactNode;
  label?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [end, setEnd] = useState(false);
  const id = useId();
  const count = Children.count(children);
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      setPosition(Math.round(el.scrollLeft));
      setEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  function move(delta: number) {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild;
    const width = card?.getBoundingClientRect().width || el.clientWidth;
    el.scrollBy({
      left: delta * (width + 24),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }
  return (
    <section className="v4-course-rail" aria-label={label} aria-roledescription="carousel">
      <div className="v4-rail-top">
        <p className="v3-kicker">
          <LabIcon name="compass" size={20} />
          {label}
        </p>
        <div className="v4-slide-controls">
          <button
            type="button"
            aria-controls={id}
            aria-label={"Previous " + label}
            disabled={position === 0}
            onClick={() => move(-1)}
          >
            <LabIcon name="back" />
          </button>
          <span>{count} programmes</span>
          <button
            type="button"
            aria-controls={id}
            aria-label={"Next " + label}
            disabled={end}
            onClick={() => move(1)}
          >
            <LabIcon name="next" />
          </button>
        </div>
      </div>
      <div
        id={id}
        ref={track}
        className="v4-course-track"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
        onScroll={(e) => {
          const el = e.currentTarget;
          setPosition(Math.round(el.scrollLeft));
          setEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
        }}
      >
        {children}
      </div>
      <p className="v4-swipe-note">
        Swipe, scroll or use the arrows to explore. Every course has its own live format and scope.
      </p>
    </section>
  );
}
export const globalStories: StorySlide[] = [
  {
    label: "AT WORK",
    icon: "briefcase",
    title: "The idea that stays in your notebook.",
    text: "Your team spans cultures and time zones. You have a recommendation, but wait for the perfect opening. Practise a clear first sentence, make the evidence easy to follow, and hold your place when questions arrive.",
    image: "bfl-global-work-v4",
    href: "/courses/professional-communication",
  },
  {
    label: "IN A NEW PLACE",
    icon: "globe",
    title: "Being somewhere. Feeling part of it.",
    text: "A new city brings everyday conversations that can feel unexpectedly hard. Rehearse asking for help, joining a conversation and making an invitation — small moments that make connection possible.",
    image: "bfl-global-belonging-v4",
    href: "/courses/settle-and-belong",
  },
  {
    label: "AT A TURNING POINT",
    icon: "graduate",
    title: "Your experience deserves to be understood.",
    text: "An interview or presentation asks you to turn what you know into something another person can follow. Choose a real example, explain your contribution, and practise the question you did not expect.",
    image: "student",
    href: "/courses/career-interview-intensive",
  },
  {
    label: "GROWING UP",
    icon: "mentor",
    title: "A young voice needs room to try.",
    text: "Speaking in front of others can feel like a very big moment. Age-matched groups, thoughtful listening and small speaking challenges give young learners room to practise at their own starting point.",
    image: "bfl-young-voices-v3",
    href: "/courses/confident-kids-and-teens",
  },
];

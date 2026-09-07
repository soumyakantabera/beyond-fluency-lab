import { useEffect, type RefObject } from "react";

/** Let the page scroll when the gesture is vertical, keep swipe for horizontal. */
export function usePassVerticalScroll(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let startX = 0;
    let startY = 0;
    let axis: "x" | "y" | null = null;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, behavior: "instant" });
    };

    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      axis = null;
      el.style.overflowX = "auto";
    };

    const onMove = (e: TouchEvent) => {
      if (axis || e.touches.length !== 1) return;
      const dx = Math.abs(e.touches[0].clientX - startX);
      const dy = Math.abs(e.touches[0].clientY - startY);
      if (dx < 8 && dy < 8) return;
      axis = dx > dy ? "x" : "y";
      if (axis === "y") el.style.overflowX = "hidden";
    };

    const onEnd = () => {
      axis = null;
      el.style.overflowX = "";
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    el.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
      el.style.overflowX = "";
    };
  }, [ref, enabled]);
}

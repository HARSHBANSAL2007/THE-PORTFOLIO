import React, { useEffect, useRef, useState } from "react";

/**
 * Cursor: a pinpoint dot that tracks the pointer exactly, plus a ring that
 * eases in behind it.
 *
 * Position is written straight to the DOM from the animation loop rather than
 * held in state — at 60fps, setState here would re-render this tree ~120 times
 * a second for a transform two elements care about.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Only run on devices with a real pointer and no reduced-motion preference.
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    sync();

    finePointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Start off-screen so nothing flashes at the origin before the first move.
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;
    let seen = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!seen) {
        // Snap the ring to the pointer on first sight instead of letting it
        // glide in from the corner.
        seen = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      setIsHovered(
        !!e.target?.closest?.("a, button, [role='button'], input, textarea, select, [data-cursor]")
      );
    };

    const setOpacity = (value) => {
      if (dotRef.current) dotRef.current.style.opacity = value;
      if (ringRef.current) ringRef.current.style.opacity = value;
    };

    const onLeave = () => setOpacity("0");
    const onEnter = () => { if (seen) setOpacity("1"); };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      // translate3d moves it; the trailing translate(-50%,-50%) centres it on
      // the pointer regardless of how big the ring currently is.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(animId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[999]">
      {/* Trailing ring — widens over anything interactive */}
      <div
        ref={ringRef}
        style={{ opacity: 0 }}
        className={`fixed left-0 top-0 rounded-full border transition-[width,height,background-color,box-shadow] duration-200 ease-out will-change-transform ${
          isHovered
            ? "h-11 w-11 border-sky-400 bg-blue-500/15 shadow-[0_0_18px_rgba(56,189,248,0.6)]"
            : "h-7 w-7 border-sky-400/60"
        }`}
      />

      {/* Pinpoint dot — sits exactly on the pointer */}
      <div
        ref={dotRef}
        style={{ opacity: 0 }}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] will-change-transform"
      />
    </div>
  );
}

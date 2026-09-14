import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let followX = -100;
    let followY = -100;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPos({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactive = target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      setIsHovered(!!interactive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const animate = () => {
      followX += (mouseX - followX) * 0.18;
      followY += (mouseY - followY) * 0.18;
      setFollower({ x: followX, y: followY });
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden transition-opacity duration-300">
      {/* Outer tracking ring in Electric Cyan / Blue */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-sky-400/60 transition-transform duration-100 ease-out will-change-transform ${
          isHovered
            ? "h-11 w-11 -translate-x-[22px] -translate-y-[22px] bg-blue-500/15 border-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.6)]"
            : "h-7 w-7 -translate-x-[14px] -translate-y-[14px]"
        }`}
        style={{
          transform: `translate3d(${follower.x}px, ${follower.y}px, 0) ${
            isHovered ? "scale(1.2)" : "scale(1)"
          }`,
        }}
      />

      {/* Central pinpoint electric cyan dot */}
      <div
        className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-[3px] -translate-y-[3px] rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] will-change-transform"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />
    </div>
  );
}

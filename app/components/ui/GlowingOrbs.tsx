"use client";

import { useEffect, useRef } from "react";

export default function GlowingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const orbs = container.querySelectorAll<HTMLElement>("[data-orb]");
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.02;
        const x = (e.clientX - window.innerWidth / 2) * speed;
        const y = (e.clientY - window.innerHeight / 2) * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Purple/violet orb */}
      <div
        data-orb
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 transition-transform duration-[2000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Blue orb */}
      <div
        data-orb
        className="absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full opacity-15 transition-transform duration-[2500ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Cyan orb */}
      <div
        data-orb
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 transition-transform duration-[3000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

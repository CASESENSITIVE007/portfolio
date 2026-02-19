"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export default function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      animate(
        "[data-stagger-item]",
        { opacity: 1, y: 0, filter: "blur(0px)" },
        {
          duration: 0.5,
          delay: stagger(staggerDelay, { startDelay: 0.1 }),
          ease: [0.25, 0.4, 0.25, 1],
        }
      );
    }
  }, [isInView, animate, staggerDelay]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-stagger-item
      className={className}
      style={{ opacity: 0, transform: "translateY(30px)", filter: "blur(6px)" }}
    >
      {children}
    </div>
  );
}

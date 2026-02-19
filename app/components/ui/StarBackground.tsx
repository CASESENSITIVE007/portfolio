"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface StarBackgroundProps {
  starCount?: number;
  shootingStarInterval?: number;
}

export default function StarBackground({
  starCount = 120,
  shootingStarInterval = 4000,
}: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const starsRef = useRef<
    { x: number; y: number; size: number; opacity: number; speed: number }[]
  >([]);
  const shootingStarsRef = useRef<
    {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
    }[]
  >([]);

  const initStars = useCallback(
    (width: number, height: number) => {
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
      }));
    },
    [starCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastShootingStar = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (starsRef.current.length === 0) {
        initStars(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const spawnShootingStar = () => {
      const angle = Math.PI / 4 + (Math.random() * Math.PI) / 6;
      shootingStarsRef.current.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.3,
        len: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 8,
        angle,
        opacity: 1,
        active: true,
      });
    };

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = smoothX.get();
      const my = smoothY.get();
      const parallaxX = (mx - canvas.width / 2) * 0.01;
      const parallaxY = (my - canvas.height / 2) * 0.01;

      // Draw stars with twinkling
      starsRef.current.forEach((star) => {
        const twinkle =
          star.opacity + Math.sin(timestamp * star.speed * 0.003) * 0.3;
        const drawX = star.x + parallaxX * (star.size * 2);
        const drawY = star.y + parallaxY * (star.size * 2);

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, Math.min(1, twinkle))})`;
        ctx.fill();

        // Add subtle glow to bigger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            drawX,
            drawY,
            0,
            drawX,
            drawY,
            star.size * 3
          );
          gradient.addColorStop(
            0,
            `rgba(167, 139, 250, ${twinkle * 0.15})`
          );
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Shooting stars
      if (timestamp - lastShootingStar > shootingStarInterval) {
        spawnShootingStar();
        lastShootingStar = timestamp;
      }

      shootingStarsRef.current.forEach((ss) => {
        if (!ss.active) return;

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.01;

        if (
          ss.opacity <= 0 ||
          ss.x > canvas.width + 100 ||
          ss.y > canvas.height + 100
        ) {
          ss.active = false;
          return;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.len;
        const tailY = ss.y - Math.sin(ss.angle) * ss.len;

        const gradient = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.6, `rgba(167, 139, 250, ${ss.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
        ctx.fill();
      });

      // Cleanup inactive shooting stars
      shootingStarsRef.current = shootingStarsRef.current.filter(
        (ss) => ss.active
      );

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initStars, smoothX, smoothY, mouseX, mouseY, shootingStarInterval]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 },
  },
};

export default function Hero() {
  const firstName = "Mohammad".split("");
  const lastName = "Saad".split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden"
    >
      {/* Decorative blurred orbs with animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" />
          Open to work
        </motion.div>

        {/* Name - Letter by letter animation */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)", perspective: 400 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex overflow-hidden">
            {firstName.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                className="gradient-text inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="inline-flex overflow-hidden">
            {lastName.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                className="gradient-text inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-slate-400 mb-4 font-light tracking-wide"
        >
          Full-Stack Web Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp(1.0)}
          initial="hidden"
          animate="visible"
          className="text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          MCA student at Aligarh Muslim University, building modern and
          performant web applications with Next.js, React, and cutting-edge
          technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton>
            <a
              href="mailto:mohammadsaad3498@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="relative z-10"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="relative z-10">Get in Touch</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://github.com/CASESENSITIVE007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/mohammadsaad007/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(1.4)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
        >
          {[
            { value: "3+", label: "Work Experience" },
            { value: "2+", label: "Projects" },
            { value: "10+", label: "Technologies" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="text-3xl font-bold gradient-text"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.6 },
            y: { delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg
            className="w-5 h-5 mx-auto text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

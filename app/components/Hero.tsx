export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden"
    >
      {/* Decorative blurred orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/15 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-float pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" />
          Open to work
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="gradient-text">Mohammad</span>
          <br />
          <span className="gradient-text">Saad</span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-slate-400 mb-4 font-light tracking-wide">
          Full-Stack Web Developer
        </p>

        {/* Description */}
        <p className="text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          MCA student at Aligarh Muslim University, building modern and
          performant web applications with Next.js, React, and cutting-edge
          technologies.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="mailto:mohammadsaad3498@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
          >
            <svg
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
            Get in Touch
          </a>
          <a
            href="https://github.com/CASESENSITIVE007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammadsaad007/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16">
          <div className="text-center">
            <div
              className="text-3xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              3+
            </div>
            <div className="text-sm text-slate-500 mt-1">Work Experience</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div
              className="text-3xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              2+
            </div>
            <div className="text-sm text-slate-500 mt-1">Projects</div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div
              className="text-3xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              10+
            </div>
            <div className="text-sm text-slate-500 mt-1">Technologies</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
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
        </div>
      </div>
    </section>
  );
}

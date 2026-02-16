export default function Experience() {
  const experiences = [
    {
      title: "Frontend Development",
      company: "The Original Traders",
      link: "https://theoriginaltraders.com/",
      period: "July 18, 2025 – Aug 31, 2025",
      points: [
        "Developed a responsive website for a client involved in exporting bearings, lubricants, and other industrial products from India.",
        "Used Next.js and Tailwind CSS to create a modern, clean user interface.",
        "Designed the layout to clearly showcase the client's product range for international customers.",
        "Focused on performance optimization and cross-device user experience.",
      ],
      tech: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Software Testing Intern",
      company: "Ilizien Pvt Ltd",
      link: "https://drive.google.com/file/d/1K0JUcAYNFe6wB5FPqYCBVgXLK-MHEO_w/view?usp=drivesdk",
      period: "Sept 2, 2024 – Sept 30, 2024",
      points: [
        "Conducted comprehensive testing of applications to identify and fix bugs, helping deliver smooth and reliable performance.",
        "Worked closely with the development team to ensure the application met project requirements and maintained performance standards.",
      ],
      tech: ["Testing", "QA"],
    },
    {
      title: "Frontend Development",
      company: "Nacaram",
      link: "https://www.nacaram.com/es",
      period: "Apr 2024 – July 2024",
      points: [
        "Contributed to the development of a fully responsive e-commerce website as part of a collaborative team.",
        "Used Next.js and Tailwind CSS to build a seamless and responsive user experience.",
        "Implemented dynamic routing and clean navigation across multiple product categories.",
        "Designed and styled key UI components for consistent cross-device support.",
      ],
      tech: ["Next.js", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold section-heading mb-16"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Experience
        </h2>

        <div className="space-y-8 ml-2">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm mt-1 transition-colors"
                    >
                      {exp.company}
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

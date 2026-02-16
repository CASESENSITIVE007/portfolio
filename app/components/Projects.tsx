export default function Projects() {
  const projects = [
    {
      title: "Event Website – AMUHacks 4.0",
      link: "https://amuhacks-4.vercel.app/",
      period: "Apr 1, 2025 – Apr 10, 2025",
      description:
        "Developed and deployed a fully responsive and modern website for my college hackathon event.",
      points: [
        "Used Next.js and Tailwind CSS for front-end development, ensuring a clean and scalable design.",
        "Included essential sections such as event details, team members, sponsor highlights, FAQs, and contact information.",
        "Focused on performance and user experience, enabling seamless navigation and accessibility across all devices.",
        "Hosted the website on Vercel for fast and reliable deployment throughout the event period.",
      ],
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Time Table & Automated Quiz App",
      link: null,
      period: "Feb 2025",
      description:
        "Hackathon project: backend system for a schedule management web application with AI-powered features.",
      points: [
        "Built with Express.js, PostgreSQL, Gemini API, and Llama Index for intelligent content processing.",
        "Developed and deployed a backend system providing users with real-time access to their daily timetable, lecture notes, summaries, and quizzes.",
        "Automated lecture summaries and quizzes provide instant feedback to students and teachers, highlighting areas for improvement.",
      ],
      tech: ["Express.js", "PostgreSQL", "Gemini API", "Llama Index"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold section-heading mb-16"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="gradient-border-card p-6 md:p-8 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-violet-500/10">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-violet-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-violet-400 transition-colors p-2"
                  >
                    <svg
                      width="20"
                      height="20"
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
                )}
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3">{project.period}</p>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/60 mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

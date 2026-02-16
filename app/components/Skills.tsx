export default function Skills() {
  const technicalSkills = [
    { name: "C", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { name: "C++", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    {
      name: "Python",
      color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    },
    { name: "Java", color: "text-red-400 bg-red-500/10 border-red-500/20" },
    {
      name: "HTML & CSS",
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    },
    {
      name: "JavaScript",
      color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    },
    {
      name: "MongoDB",
      color: "text-green-400 bg-green-500/10 border-green-500/20",
    },
    {
      name: "PostgreSQL",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
  ];

  const frameworks = [
    {
      name: "React.js",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      name: "Node.js",
      color: "text-green-400 bg-green-500/10 border-green-500/20",
    },
    { name: "Next.js", color: "text-white bg-white/5 border-white/10" },
    {
      name: "Prisma",
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      name: "Express.js",
      color: "text-slate-300 bg-white/5 border-white/10",
    },
    {
      name: "Tailwind CSS",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl md:text-4xl font-bold section-heading mb-16"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages & Databases */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-violet-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              Languages & Databases
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`skill-tag px-4 py-2.5 rounded-xl text-sm font-medium border ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((fw) => (
                <span
                  key={fw.name}
                  className={`skill-tag px-4 py-2.5 rounded-xl text-sm font-medium border ${fw.color}`}
                >
                  {fw.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Aligarh Muslim University",
      location: "Aligarh, India",
      period: "2024 – 2026",
      current: true,
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Aligarh Muslim University",
      location: "Aligarh, India",
      period: "2021 – 2024",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold section-heading mb-16"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Education
        </h2>

        <div className="space-y-8 ml-2">
          {education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="glass-card rounded-xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2">
                    {edu.current && (
                      <span className="px-3 py-1 text-xs rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        Current
                      </span>
                    )}
                    <span className="text-sm text-slate-500">{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    {edu.institution}, {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

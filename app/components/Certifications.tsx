export default function Certifications() {
  const certifications = [
    {
      title: "Software Testing & Development Internship",
      link: "https://drive.google.com/file/d/1K0JUcAYNFe6wB5FPqYCBVgXLK-MHEO_w/view?usp=drive_link",
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Programming",
      link: "https://drive.google.com/file/d/1pZPV2QipCKBgdKp9nhZBdcAj38Ao80vE/view?usp=drivesdk",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Web Development",
      link: "https://drive.google.com/file/d/175XEpfDv7WY6hjbd5C-G71EEiZ2M0k_s/view?usp=drive_link",
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="text-cyan-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold section-heading mb-16"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-white/5 shrink-0 group-hover:bg-violet-500/10 transition-colors">
                    {cert.icon}
                  </div>
                  <h3 className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors leading-relaxed pt-1">
                    {cert.title}
                  </h3>
                </div>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-slate-600 group-hover:text-violet-400 transition-colors shrink-0 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

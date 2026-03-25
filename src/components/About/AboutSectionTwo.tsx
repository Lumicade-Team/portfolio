const whyCards = [
  {
    id: 1,
    title: "End-to-End Development",
    description: "From initial concept and design through to deployment and maintenance — we handle the full lifecycle so you don't juggle multiple vendors.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Multi-Domain Expertise",
    description: "Web, mobile, AI, SaaS — our team works across industries and tech stacks to deliver the right solution for every challenge.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "AI-First Approach",
    description: "We embed intelligent automation into workflows from day one — not as an afterthought, but as a core design principle.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.24 9.93A4 4 0 0 1 12 2" />
        <path d="M16 16c0-2.21-1.79-4-4-4s-4 1.79-4 4" />
        <circle cx="12" cy="22" r="2" />
        <path d="M12 20v-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Subscription-Ready Services",
    description: "Our proprietary SaaS microservices are built for easy integration and available on flexible monthly plans — plug in and go.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

const techStack = [
  "Next.js", "React", "React Native", "Node.js", "Python",
  "TypeScript", "PostgreSQL", "Supabase", "AWS", "Docker",
  "TailwindCSS", "OpenAI", "LangChain", "Flutter",
];

const AboutSectionTwo = () => {
  return (
    <>
      {/* ── Why Lumicade ── */}
      <section className="relative bg-lumi-navy py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="whyGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F4F7FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whyGrid)" />
          </svg>
        </div>

        <div className="container relative">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr,2fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-teal" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  Why Us
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-lumi-offwhite sm:text-4xl md:text-[44px]">
                Built different
              </h2>
            </div>
            <p className="max-w-[540px] text-base leading-[1.8] text-body-color-dark/70 lg:text-right">
              Four pillars that define how we work — and why clients keep coming back for the next project.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const isBlue = card.id % 2 === 1;
              return (
                <div
                  key={card.id}
                  className="group relative flex h-full flex-col rounded-2xl border border-lumi-mutednav/40 bg-dark/50 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-dark/80"
                >
                  {/* Icon */}
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                    isBlue ? "bg-primary/10 text-primary" : "bg-teal/10 text-teal"
                  }`}>
                    {card.icon}
                  </div>

                  <h3 className="mb-3 text-base font-bold text-lumi-offwhite">
                    {card.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-body-color-dark/70">
                    {card.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`mt-6 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${
                    isBlue ? "bg-primary/40 group-hover:bg-primary" : "bg-teal/40 group-hover:bg-teal"
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack + CTA ── */}
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#229D94_0.5px,transparent_0.5px)] opacity-[0.012] [background-size:20px_20px] dark:opacity-[0.025]" />

        <div className="container relative">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Tech stack */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Tech Stack
                </span>
              </div>

              <h2 className="mb-4 text-2xl font-extrabold text-lumi-navy dark:text-lumi-offwhite sm:text-3xl">
                Tools we ship with
              </h2>

              <p className="mb-8 max-w-[440px] text-base leading-relaxed text-body-color">
                We pick the right tool for the job — not the trendiest. Here&apos;s what we reach for most.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, i) => (
                  <span
                    key={tech}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      i % 3 === 0
                        ? "border-primary/15 bg-primary/[0.04] text-primary hover:border-primary/30 hover:bg-primary/[0.08]"
                        : i % 3 === 1
                        ? "border-teal/15 bg-teal/[0.04] text-teal hover:border-teal/30 hover:bg-teal/[0.08]"
                        : "border-stroke-stroke bg-white text-lumi-navy hover:border-primary/20 dark:border-lumi-mutednav dark:bg-dark dark:text-body-color-dark"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="flex items-center">
              <div className="w-full rounded-2xl bg-lumi-navy p-10 dark:bg-dark md:p-12">
                <h3 className="mb-4 text-2xl font-extrabold text-lumi-offwhite">
                  Ready to build something?
                </h3>
                <p className="mb-8 max-w-[400px] text-base leading-relaxed text-body-color-dark/70">
                  Whether it&apos;s a custom platform, mobile app, AI workflow, or SaaS integration — tell us what you need and we&apos;ll show you how we&apos;d approach it.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-lumi-offwhite transition-all hover:bg-primary/90"
                  >
                    Start a Project
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a
                    href="/#services"
                    className="inline-flex items-center gap-2 rounded-xl border border-lumi-mutednav/50 px-7 py-3.5 text-sm font-semibold text-body-color-dark/80 transition-all hover:border-teal hover:text-teal"
                  >
                    View Services
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 rounded-2xl border border-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;

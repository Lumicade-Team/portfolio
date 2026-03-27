import Link from "next/link";
import { techStack } from "./aboutData";

const TechStackCTA = () => (
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

          <p className="mb-8 max-w-[440px] text-base leading-relaxed text-body-color dark:text-body-color-dark">
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
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl border border-lumi-mutednav/50 px-7 py-3.5 text-sm font-semibold text-body-color-dark/80 transition-all hover:border-teal hover:text-teal"
              >
                View Services
              </Link>
            </div>

            <div className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 rounded-2xl border border-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStackCTA;

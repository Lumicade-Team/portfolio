import { processSteps } from "./aboutData";

const ProcessSteps = () => (
  <section className="relative py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3352DA_0.5px,transparent_0.5px)] opacity-[0.015] [background-size:24px_24px] dark:opacity-[0.03]" />

    <div className="container relative">
      <div className="mb-16 flex items-center gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-lumi-navy dark:text-lumi-offwhite">
          Our Process
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-stroke-stroke to-transparent dark:from-lumi-mutednav" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <div
            key={step.number}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-feature-2 dark:bg-dark"
          >
            <div className={`absolute top-0 left-0 h-1 w-full ${
              i % 2 === 0
                ? "bg-gradient-to-r from-primary to-primary/40"
                : "bg-gradient-to-r from-teal to-teal/40"
            }`} />

            <span className={`mb-6 inline-block text-5xl font-extrabold tracking-tighter ${
              i % 2 === 0 ? "text-primary/10" : "text-teal/10"
            } transition-colors duration-300 group-hover:${i % 2 === 0 ? "text-primary/20" : "text-teal/20"}`}>
              {step.number}
            </span>

            <h3 className="mb-3 text-lg font-bold text-lumi-navy dark:text-lumi-offwhite">
              {step.title}
            </h3>

            <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
              {step.description}
            </p>

            {i < processSteps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-stroke-stroke dark:bg-lumi-mutednav lg:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;

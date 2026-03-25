import { whyCards } from "./aboutData";

const WhyCards = () => (
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

              <div className={`mt-6 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${
                isBlue ? "bg-primary/40 group-hover:bg-primary" : "bg-teal/40 group-hover:bg-teal"
              }`} />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyCards;

const whyCards = [
  {
    id: 1,
    title: "End-to-End Development",
    description: "From initial concept and design through to deployment and maintenance — we handle the full lifecycle.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Multi-Domain Expertise",
    description: "Web, mobile, AI, SaaS — our team works across industries to deliver the right solution for every challenge.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "AI-First Approach",
    description: "We embed intelligent automation into workflows from day one, not as an afterthought.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: "Our proprietary SaaS microservices are built for easy integration and available on flexible monthly plans.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[660px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-lumi-navy dark:text-lumi-offwhite sm:text-4xl md:text-[45px]">
            Why Lumicade
          </h2>
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            Four reasons businesses trust us to deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card) => {
            const iconColor = card.id % 2 === 1 ? "text-primary" : "text-teal";
            return (
              <div
                key={card.id}
                className="rounded-xl bg-white p-8 shadow-card transition-all duration-300 hover:shadow-feature-2 dark:bg-dark"
              >
                <div className={`${iconColor} mb-6`}>
                  {card.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-lumi-navy dark:text-lumi-offwhite">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-body-color">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

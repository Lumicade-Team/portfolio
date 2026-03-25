import { pricingCards } from "./pricingData";

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current">
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);

const variantStyles = {
  primary: {
    icon: "bg-primary/10 text-primary",
    cta: "bg-primary px-8 py-3 text-base font-semibold text-lumi-offwhite transition hover:bg-primary/90",
  },
  teal: {
    icon: "bg-teal/10 text-teal",
    cta: "border border-teal px-8 py-3 text-base font-semibold text-teal transition hover:bg-teal hover:text-lumi-offwhite",
  },
};

const PricingCards = () => (
  <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
    {pricingCards.map((card) => {
      const styles = variantStyles[card.variant];
      return (
        <div key={card.title} className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">
          <h3 className="mb-2 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            {card.title}
          </h3>
          <p className="mb-6 text-body-color dark:text-body-color-dark">
            {card.subtitle}
          </p>
          <ul className="space-y-3">
            {card.features.map((feature) => (
              <li key={feature} className="flex items-start text-body-color dark:text-body-color-dark">
                <span className={`mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.icon}`}>
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={card.cta.href}
            className={`mt-8 inline-block rounded-lg ${styles.cta}`}
          >
            {card.cta.label}
          </a>
        </div>
      );
    })}
  </div>
);

export default PricingCards;

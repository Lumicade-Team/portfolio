import { Check } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { pricingCards } from "./pricingData";

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
                  <Check size={12} weight="bold" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="ghost" asChild className={`mt-8 rounded-lg ${styles.cta}`}>
            <a href={card.cta.href}>
              {card.cta.label}
            </a>
          </Button>
        </div>
      );
    })}
  </div>
);

export default PricingCards;

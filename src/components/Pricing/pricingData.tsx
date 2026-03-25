export const faqData = [
  {
    question: "What is your typical project turnaround?",
    answer:
      "Most projects are scoped in 2-week sprints. A typical MVP takes 4-8 weeks depending on complexity. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you work with our existing tech stack?",
    answer:
      "Absolutely. We adapt to your current infrastructure and tools. Whether you're on AWS, GCP, or a custom stack, we integrate seamlessly with what you already have.",
  },
  {
    question: "Can we cancel a subscription anytime?",
    answer:
      "Yes. All Lumicade SaaS subscriptions are month-to-month with no long-term commitment. You can cancel anytime from your dashboard.",
  },
];

export const pricingCards = [
  {
    title: "Project-Based",
    subtitle: "Custom quote per client requirement",
    features: [
      "Discovery, design, development, and deployment",
      "Web apps, mobile apps, dashboards, AI pipelines",
      "Ongoing maintenance and support available",
    ],
    cta: { label: "Request a Quote", href: "/#contact" },
    variant: "primary" as const,
  },
  {
    title: "Subscription",
    subtitle: "Monthly access to Lumicade SaaS microservices",
    features: [
      "OCR API, and more tools coming soon",
      "Cancel anytime — no long-term contracts",
      "Developer-friendly docs and API keys",
    ],
    cta: { label: "Explore Products", href: "/#products" },
    variant: "teal" as const,
  },
];

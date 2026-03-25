"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const faqData = [
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

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="How We Work With You"
          paragraph="Two flexible engagement models to match how your business operates."
          center
          width="665px"
        />

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Project-Based */}
          <div className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">
            <h3 className="mb-2 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
              Project-Based
            </h3>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Custom quote per client requirement
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                Discovery, design, development, and deployment
              </li>
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                Web apps, mobile apps, dashboards, AI pipelines
              </li>
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                Ongoing maintenance and support available
              </li>
            </ul>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-lumi-offwhite transition hover:bg-primary/90"
            >
              Request a Quote
            </a>
          </div>

          {/* Subscription */}
          <div className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">
            <h3 className="mb-2 text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
              Subscription
            </h3>
            <p className="mb-6 text-body-color dark:text-body-color-dark">
              Monthly access to Lumicade SaaS microservices
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                OCR API, and more tools coming soon
              </li>
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                Cancel anytime — no long-term contracts
              </li>
              <li className="flex items-start text-body-color dark:text-body-color-dark">
                <span className="mr-3 mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg width="10" height="8" viewBox="0 0 8 6" className="fill-current"><path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523-0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175-0.062913 7.60585-0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" /></svg>
                </span>
                Developer-friendly docs and API keys
              </li>
            </ul>
            <a
              href="/#products"
              className="mt-8 inline-block rounded-lg border border-teal px-8 py-3 text-base font-semibold text-teal transition hover:bg-teal hover:text-lumi-offwhite"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-[700px]">
          <h3 className="mb-8 text-center text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-stroke-stroke bg-white dark:border-lumi-mutednav dark:bg-dark"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-lumi-navy dark:text-lumi-offwhite">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-body-color dark:text-body-color-dark">
                    {openFaq === index ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3352DA" />
              <stop offset="1" stopColor="#3352DA" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3352DA" />
              <stop offset="1" stopColor="#3352DA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

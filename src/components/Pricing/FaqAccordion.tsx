"use client";
import { useState } from "react";
import { faqData } from "./pricingData";

const FaqAccordion = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
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
  );
};

export default FaqAccordion;

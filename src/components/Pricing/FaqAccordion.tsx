import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./pricingData";

const FaqAccordion = () => {
  return (
    <div className="mx-auto max-w-[700px]">
      <h3 className="mb-8 text-center text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="rounded-xl border border-stroke-stroke bg-white dark:border-lumi-mutednav dark:bg-dark"
          >
            <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold text-lumi-navy hover:no-underline dark:text-lumi-offwhite">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;

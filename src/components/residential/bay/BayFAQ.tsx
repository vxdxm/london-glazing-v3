import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BayFAQ = () => {
  const faqs = [
    {
      question: "How much does bay window secondary glazing cost?",
      answer: "Costs range from £1,200-£3,200 depending on bay size and configuration - typically 50-70% cheaper than bay replacement."
    },
    {
      question: "Can I still use my bay window seat?",
      answer: "Yes, secondary glazing installs in window reveals without obstructing bay seating areas. Your bay window seat remains fully accessible and usable."
    },
    {
      question: "Do you handle complex bay angles?",
      answer: "Our specialists custom-manufacture angle adaptors for any bay configuration - box, canted, bow, or unique angles. Each unit is precision-fitted to your exact bay measurements."
    },
    {
      question: "Will it work on listed building bays?",
      answer: "Secondary glazing is usually acceptable for listed buildings as it preserves original features while adding reversible performance improvements. It's installed internally with no exterior alteration."
    },
    {
      question: "How long does installation take?",
      answer: "Most bay installations complete in 1-2 days with minimal disruption to your home. Our professional teams install panel by panel with full operation testing."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-foreground hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default BayFAQ;

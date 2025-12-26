
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OfficeFAQ = () => {
  const faqs = [
    {
      question: "Can installation be completed outside working hours?",
      answer: "Yes, we routinely work evenings, weekends, and holidays to avoid business disruption."
    },
    {
      question: "How long does installation take for a typical office?",
      answer: "Most office floors (20-30 windows) are completed in 2-3 working days."
    },
    {
      question: "What noise reduction can we expect?",
      answer: "Standard installations achieve 20-30dB reduction; acoustic laminated options reach 40-50dB."
    },
    {
      question: "Will it improve our EPC rating?",
      answer: "Secondary glazing can improve ratings by 1-2 grades (e.g., D to B), significantly impacting property value."
    },
    {
      question: "Is it suitable for listed office buildings?",
      answer: "Yes, secondary glazing is often the only viable upgrade option for heritage buildings, requiring no structural modifications."
    },
    {
      question: "What's included in the warranty?",
      answer: "10-year comprehensive warranty covering products, installation, and hardware operation."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Annual maintenance contracts available with priority response for commercial clients."
    },
    {
      question: "Can we get references from similar projects?",
      answer: "We provide references from comparable commercial installations across all London business districts."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default OfficeFAQ;

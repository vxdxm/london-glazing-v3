
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HospitalityFAQ = () => {
  const faqs = [
    {
      question: "How much noise reduction can we expect?",
      answer: "Typical reduction of 70-80% for traffic and street noise, creating peaceful environments even in central London locations."
    },
    {
      question: "Will installation disrupt guests?",
      answer: "Our hospitality protocols ensure minimal disruption. Rooms are returned to service the same day, with installation typically during low occupancy periods."
    },
    {
      question: "Is it suitable for listed buildings?",
      answer: "Yes – secondary glazing is often the only approved method for improving listed building performance while preserving original windows."
    },
    {
      question: "What energy savings are realistic?",
      answer: "Properties typically save 30-50% on heating and cooling costs, with payback periods of 2-4 years."
    },
    {
      question: "Can you match our interior design?",
      answer: "Custom powder coating matches any color scheme, with slim profiles that complement rather than dominate interior aesthetics."
    },
    {
      question: "How long does it last?",
      answer: "20+ year lifespan with minimal maintenance required. Full warranties provide additional security."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <AspectRatio ratio={3 / 1} className="mb-8">
        <OptimizedImage 
          src="https://cdn.marblism.com/HfJJNoYvPn1.webp" 
          alt="Hospitality venue with secondary glazing showing FAQ and consultation" 
          className="rounded-lg object-cover w-full h-full" 
        />
      </AspectRatio>
      
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

export default HospitalityFAQ;

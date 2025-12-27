import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HorizontalFAQ = () => {
  const faqs = [
    {
      question: "How much does horizontal sliding secondary glazing cost for a wide window?",
      answer: "Costs range from £400-£2,500+ depending on width. Standard systems (up to 2.5m) cost £400-£900, while multi-track systems for wider spans range £900-£2,500+."
    },
    {
      question: "Can I open the full width of my window?",
      answer: "Yes, panels slide completely apart to expose the entire primary window width for full access, cleaning, and maximum ventilation."
    },
    {
      question: "How many panels do I need for my window width?",
      answer: "2-3 panels suit windows up to 2.5m wide. Wider windows require 3-5 panels in multi-track configurations. We'll recommend optimal panel count during survey."
    },
    {
      question: "Is horizontal sliding quieter than vertical sliding sash?",
      answer: "Both achieve similar noise reduction (70-80%), but horizontal sliding often provides better sealing on wide windows due to overlapping panel design."
    },
    {
      question: "Does horizontal sliding suit modern or period properties?",
      answer: "Both. The contemporary aesthetic complements modern homes, while the system works excellently with wide Victorian/Georgian windows without affecting period character."
    },
    {
      question: "How does multi-track work with 3-5 panels?",
      answer: "Multiple parallel tracks accommodate overlapping panels that slide past each other, enabling wide span coverage with smooth coordinated operation."
    },
    {
      question: "What's the maintenance for horizontal sliding systems?",
      answer: "Minimal - occasional track cleaning and lubrication maintains smooth operation. Simple maintenance tasks preserve optimal performance."
    },
    {
      question: "Can horizontal sliding handle patio door sizes?",
      answer: "Yes, multi-track systems accommodate door-width openings (typically 2.5m-3m+) with excellent performance and smooth operation."
    },
    {
      question: "How wide can horizontal sliding secondary glazing go?",
      answer: "Systems can span 5 metres or more with multi-track configurations. Very wide openings may use multiple coordinated systems."
    },
    {
      question: "Is it easier to operate than vertical sash windows?",
      answer: "Many users find horizontal gliding easier than vertical lifting, particularly beneficial for mobility considerations or frequent use."
    },
    {
      question: "Can I have furniture close to the window?",
      answer: "Yes, no swing space required means furniture can remain close to windows without obstruction or operational interference."
    },
    {
      question: "Does it work for panoramic or floor-to-ceiling windows?",
      answer: "Excellent for these applications. Multi-track systems provide comprehensive coverage for architectural glazing features."
    },
    {
      question: "What's the difference between standard and multi-track systems?",
      answer: "Standard systems handle 2-3 panels up to 2.5m wide. Multi-track systems accommodate 3-5 panels for wider spans with more complex engineering."
    },
    {
      question: "How long does installation take for horizontal sliding?",
      answer: "Typically 2-4 hours per window for professional installation, including track mounting, panel fitting, and operational testing."
    },
    {
      question: "Can horizontal sliding work in commercial spaces?",
      answer: "Excellent for commercial applications. Professional appearance, durability, and performance suit offices, retail, and hospitality environments."
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

export default HorizontalFAQ;

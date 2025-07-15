
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AIOptimizedFAQ } from "@/components/seo/AIOptimizedFAQ";

export const CrittallFAQ = () => {
  const faqs = [
    {
      question: "What is secondary glazing?",
      answer: "Secondary glazing involves adding a second layer of glass to existing windows, creating an insulating barrier that improves energy efficiency and reduces noise."
    },
    {
      question: "How does secondary glazing enhance energy efficiency?",
      answer: "Secondary glazing reduces heat loss by creating an air gap between two panes of glass, helping to maintain indoor temperatures and lower energy bills."
    },
    {
      question: "Can secondary glazing help with noise reduction?",
      answer: "Yes, secondary glazing significantly reduces sound transmission, making homes quieter, especially in urban settings."
    },
    {
      question: "Is secondary glazing a cost-effective solution?",
      answer: "Secondary glazing is often more cost-effective than replacing windows, allowing homeowners to enhance performance without extensive renovations."
    },
    {
      question: "Will secondary glazing alter the appearance of my Crittall windows?",
      answer: "No, secondary glazing can be designed to blend seamlessly with existing Crittall windows, preserving their unique aesthetic while improving functionality."
    }
  ];

  return (
    <>
      <AIOptimizedFAQ 
        faqs={faqs} 
        pageTitle="Crittall Window Secondary Glazing FAQ"
        audience="Crittall window owners"
        speakableSelectors={[".faq-question", ".faq-answer"]}
      />
      <div className="mb-12 faq-content">
        <h2 className="text-3xl font-semibold mb-6" itemProp="name">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              itemScope 
              itemType="https://schema.org/Question"
            >
              <AccordionTrigger className="faq-question" itemProp="name">{faq.question}</AccordionTrigger>
              <AccordionContent 
                className="faq-answer"
                itemScope 
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div itemProp="text">{faq.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

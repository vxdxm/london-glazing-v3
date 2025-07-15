
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { AIOptimizedFAQ } from "@/components/seo/AIOptimizedFAQ";

const faqs = [
  {
    question: "What is secondary glazing?",
    answer: "Secondary glazing involves adding an additional layer of glass or acrylic to existing windows to improve insulation and energy efficiency without replacing the original windows."
  },
  {
    question: "Can secondary glazing be installed on all types of listed windows?",
    answer: "Yes, secondary glazing can be designed and customized to fit various styles of listed windows, including sash and casement windows, while preserving their historical features."
  },
  {
    question: "How does secondary glazing affect the exterior appearance of a listed building?",
    answer: "When properly installed, secondary glazing can be virtually invisible from the exterior, maintaining the original look of the building while enhancing energy performance."
  },
  {
    question: "Is secondary glazing a cost-effective solution?",
    answer: "Yes, secondary glazing can lead to significant energy savings over time, making it a cost-effective solution for improving the comfort and efficiency of listed buildings."
  },
  {
    question: "What materials are best for secondary glazing?",
    answer: "Low-emissivity (Low-E) glass is often preferred for secondary glazing due to its excellent thermal insulation properties. Acrylic can also be used for certain applications because of its lightweight and easy installation."
  }
];

export function TraditionalFAQs() {
  return (
    <>
      <AIOptimizedFAQ 
        faqs={faqs} 
        pageTitle="Traditional Secondary Glazing FAQ"
        audience="traditional property owners"
        speakableSelectors={[".faq-question", ".faq-answer"]}
      />
      <Card className="mb-8 faq-content">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-6" itemProp="name">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-left faq-question"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-gray-600 faq-answer"
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}

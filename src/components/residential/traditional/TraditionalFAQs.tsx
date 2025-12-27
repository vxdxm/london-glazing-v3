
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
    question: "What makes secondary glazing 'traditional'?",
    answer: "Traditional refers to operating styles (hinged/slider), materials (timber/slim aluminum), aesthetics (slim profiles), and heritage approach (conservation-approved)."
  },
  {
    question: "Do I need planning permission?",
    answer: "Most listed building installations require no permission as they're internal modifications. Conservation areas may require approval - traditional solutions increase likelihood."
  },
  {
    question: "How do costs compare?",
    answer: "Traditional options cost £400-£900 per window depending on material and operation. While premium over basic solutions, they're essential for heritage properties."
  },
  {
    question: "Can traditional systems match my period windows?",
    answer: "Yes - vertical sliders suit Georgian/Victorian sash windows, side-hung hinged match casements, with period-appropriate materials and colors."
  },
  {
    question: "What about maintenance?",
    answer: "Aluminum frames require minimal maintenance, timber frames need repainting every 5-7 years, hinged systems may need occasional adjustment."
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

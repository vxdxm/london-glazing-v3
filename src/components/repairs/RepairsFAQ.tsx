
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { AIOptimizedFAQ } from "@/components/seo/AIOptimizedFAQ";

const RepairsFAQ = () => {
  const faqs = [
    {
      question: "How do I know if spiral balances need replacing?",
      answer: "Key signs include sashes dropping suddenly, requiring excessive force to lift, slowly falling when positioned mid-height, uneven operation, or visible damage to balance components. If your vertical sliding sashes aren't operating smoothly, spiral balances are often the cause."
    },
    {
      question: "How long do repairs typically take?",
      answer: "Spiral balance replacement takes 30-45 minutes for the first window, plus 20-25 minutes for each additional unit. Most repairs are completed in a single visit when parts are in stock."
    },
    {
      question: "Can you repair any brand of secondary glazing?",
      answer: "Yes, we service Selectaglaze, Anglian, Storm, Everest, and custom installations. Our universal parts compatibility covers 95% of systems regardless of age or manufacturer."
    },
    {
      question: "Is it better to repair or replace?",
      answer: "Repair makes sense when addressing single component failures in systems under 15 years old, where repair costs remain under 60% of replacement cost. Multiple component failures or extensive damage may justify full replacement."
    },
    {
      question: "What warranty do you provide?",
      answer: "12 months on parts (spiral balances, hinges, locks, glass), 6 months on labor. This excludes accidental damage, normal wear and tear, or DIY interference."
    },
    {
      question: "Do I need planning permission for repairs on listed buildings?",
      answer: "Good news – like-for-like repairs typically don't require listed building consent. Spiral balance replacement, hinge repairs, and glass replacement with the same specifications are considered maintenance rather than alterations."
    },
    {
      question: "What is your call-out fee?",
      answer: "Our service call-out fee of £75-£95 covers assessment, quotation, and travel within London's M25. This cost is spread across multiple windows when we're repairing several units in one visit."
    },
    {
      question: "Do you offer emergency repairs?",
      answer: "Yes, we offer same-day emergency service (£50 surcharge) for genuine emergencies like broken glass or failed locks. Call before 12pm for availability. We also offer next-day priority service (£25 surcharge)."
    }
  ];

  return (
    <>
      <AIOptimizedFAQ 
        faqs={faqs} 
        pageTitle="Secondary Glazing Repairs FAQ"
        audience="property owners needing repairs"
        speakableSelectors={[".faq-question", ".faq-answer"]}
      />
      <section className="mb-16 faq-content">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-semibold" itemProp="name">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border border-border/50" itemScope itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`repair-faq-${index}`} 
                className="border-b border-border/50 last:border-0"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-left hover:no-underline font-medium text-foreground faq-question"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-4 text-muted-foreground faq-answer"
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
      </section>
    </>
  );
};

export default RepairsFAQ;


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
      question: "How do I know if my spiral balances need replacing?",
      answer: "Signs include windows that slam shut when opened, difficulty opening or closing, windows that won't stay in position, or visible damage to the balance mechanism. If your vertical sliding sashes aren't operating smoothly, spiral balances are often the cause."
    },
    {
      question: "How long does a spiral balance repair typically take?",
      answer: "A standard spiral balance replacement for a single window typically takes 1-2 hours. For multiple windows, we can usually complete repairs for an average home in a single day, minimizing disruption to your property."
    },
    {
      question: "Can you repair any brand of secondary glazing?",
      answer: "Yes, our technicians are trained to work with all major brands of secondary glazing including Selectaglaze, Granada, Storm, Clearview and many others. We can source and fit the correct spiral balances for your specific system."
    },
    {
      question: "How long will new spiral balances last?",
      answer: "Quality replacement spiral balances typically last 10-15 years with proper use. All our replacement balances come with a 5-year warranty for peace of mind."
    },
    {
      question: "Is it better to repair or replace the entire secondary glazing unit?",
      answer: "In most cases, repairing is more cost-effective and environmentally friendly. Secondary glazing frames are designed to last for decades, and replacing just the damaged components (like spiral balances) can restore full functionality at a fraction of the cost of replacement."
    },
    {
      question: "Can you repair other issues besides spiral balances?",
      answer: "Absolutely! We can repair or replace locks, handles, hinges, seals, and glazing panels. We also offer realignment services, fix condensation issues, and provide full servicing of secondary glazing systems."
    },
    {
      question: "Do you offer any guarantees on repairs?",
      answer: "Yes, all our repair work comes with a 12-month workmanship guarantee, and replacement parts include manufacturer warranties (typically 5 years for spiral balances and hardware components)."
    },
    {
      question: "How can I maintain my secondary glazing after repairs?",
      answer: "Regular cleaning of tracks, lubricating moving parts with a silicone-based product, checking seals, and gentle operation of the mechanisms will help prolong the life of your secondary glazing. We provide maintenance guidance after all repair work."
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
          <HelpCircle className="h-7 w-7 text-sky-600" />
          <h2 className="text-3xl font-semibold" itemProp="name">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm" itemScope itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`repair-faq-${index}`} 
                className="border-b border-gray-100 last:border-0"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-left hover:no-underline font-medium text-gray-800 faq-question"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-4 text-gray-600 faq-answer"
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

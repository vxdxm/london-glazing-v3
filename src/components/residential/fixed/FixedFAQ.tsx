import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FixedFAQ = () => {
  const faqs = [
    {
      question: "How often do I need to access between the panes?",
      answer: "Typically once or twice yearly. The sealed space stays remarkably clean with minimal dust accumulation."
    },
    {
      question: "Is removal difficult for cleaning?",
      answer: "Not at all – 4-8 screws around the perimeter, lift out the lightweight panel, clean, and replace. Most homeowners complete this in 5-10 minutes."
    },
    {
      question: "Can fixed glazing handle extreme noise like flight paths?",
      answer: "Yes, it's actually ideal. The continuous sealed perimeter provides maximum acoustic protection, especially when paired with 10.8-12.8mm acoustic glass."
    },
    {
      question: "What about ventilation in the room?",
      answer: "Fixed glazing works best where mechanical ventilation (extractors, HVAC) handles air quality rather than relying on window opening. Not suitable for rooms requiring regular natural ventilation."
    },
    {
      question: "Will it work on listed buildings?",
      answer: "Absolutely. The minimal intervention approach with no moving parts appeals to conservation officers as a simple, reversible solution that protects original windows permanently."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-8 bg-primary/5 border border-primary/20 p-6 rounded-lg">
        <p className="text-muted-foreground">
          Fixed secondary glazing represents the optimal choice for London properties prioritizing maximum performance and value over routine access convenience. <strong className="text-foreground">When your windows are never opened anyway, why pay extra for opening mechanisms you'll never use?</strong>
        </p>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LiftOutFAQ = () => {
  const faqs = [
    {
      question: "How long does removal take?",
      answer: "5-10 minutes per window using simple lift/click release — tool-free and straightforward."
    },
    {
      question: "Where do I store panels?",
      answer: "Loft storage is most common, though garage, under-bed, or basement work well. You'll need 2-3 square metres for a typical 12-window property."
    },
    {
      question: "Is lift-out cheaper than hinged?",
      answer: "Yes — you save £1,200-£2,400 on a 12-window property compared to hinged systems."
    },
    {
      question: "Can I install/remove panels myself?",
      answer: "Absolutely. Training is provided at installation, and the process is designed to be homeowner-friendly."
    },
    {
      question: "When should I install for winter?",
      answer: "October is typical as temperatures drop and heating costs rise, though you can adjust timing based on weather and lifestyle."
    },
    {
      question: "What's the difference between clip and magnetic systems?",
      answer: "Clips offer slightly better sealing and are more secure, while magnetic systems allow even faster removal. Both provide excellent performance — the choice depends on your preference for convenience vs. maximum seal."
    },
    {
      question: "Can I take my panels if I move house?",
      answer: "Yes, this is a key advantage for renters. Panels can be removed and reinstalled at a new property (assuming similar window sizes) or sold to the next tenant."
    },
    {
      question: "How do I prevent damage during storage?",
      answer: "Wrap each panel in bubble wrap or moving blankets, store vertically in a dry location, and label each panel by window. Avoid stacking heavy items on top of stored panels."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
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

export default LiftOutFAQ;

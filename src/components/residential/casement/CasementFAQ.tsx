import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CasementFAQ = () => {
  const faqs = [
    {
      question: "Can I still open my casement windows with secondary glazing installed?",
      answer: "Absolutely! With hinged secondary glazing, you have completely independent operation of both your primary casements and secondary units. Lift-out panels remove entirely for full access.",
    },
    {
      question: "Will secondary glazing interfere with my casement window handles and latches?",
      answer: "No - properly designed secondary glazing is fitted to avoid all handles, stays, and operating mechanisms. You maintain full access to all primary window functions.",
    },
    {
      question: "Can you install secondary glazing on deteriorating metal casements?",
      answer: "Yes - this is actually ideal. Secondary glazing protects deteriorating metal casements from further weather exposure while dramatically improving their performance.",
    },
    {
      question: "Do I need planning permission for casement window secondary glazing?",
      answer: "No planning permission is required as secondary glazing is an internal modification that doesn't alter the exterior appearance of your property.",
    },
    {
      question: "What secondary glazing works best with side-hung casement windows?",
      answer: "Side-hinged secondary glazing is perfect - it mirrors your existing casement operation for natural use while providing full access to the primary window.",
    },
    {
      question: "Will it work with my 1930s Art Deco metal casements?",
      answer: "Absolutely! Secondary glazing is perfect for Art Deco properties - it preserves the period character while solving the single-glazed, draughty problems common in these beautiful buildings.",
    },
    {
      question: "Can I clean between the primary casement and secondary glazing?",
      answer: "Yes - with hinged secondary glazing, you can swing open the secondary unit for full cleaning access. Lift-out panels remove completely for easy cleaning.",
    },
    {
      question: "How much does casement window secondary glazing typically cost?",
      answer: "Expect £350-£800 per casement window depending on size and glass specification. This is 50-65% cheaper than quality casement replacement.",
    },
    {
      question: "What about tilt & turn casement windows?",
      answer: "We create bespoke solutions for tilt & turn mechanisms that maintain access to both tilt and full turn operation. These require specialist design for each specific window.",
    },
    {
      question: "Will secondary glazing help protect my rusty metal casements?",
      answer: "Yes - by reducing weather exposure, secondary glazing can significantly slow further deterioration of metal casements while improving their performance dramatically.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`}
            className="bg-muted/30 rounded-lg px-4 border-none"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-semibold pr-4">{index + 1}. {faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CasementFAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommercialFAQ = () => {
  const faqs = [
    {
      question: "How much can we save on energy costs?",
      answer: "Typically 30-50% reduction in heating/cooling costs. A medium office building can save £8,000-£15,000 annually with proven ROI across our commercial portfolio."
    },
    {
      question: "Can you install without disrupting business operations?",
      answer: "Absolutely. We install around your operations with out-of-hours and weekend options. No building closure required with our phased approach maintaining business continuity."
    },
    {
      question: "Is it suitable for listed commercial buildings?",
      answer: "Yes - ideal for listed buildings as it preserves original windows and typically doesn't require planning permission as an internal modification."
    },
    {
      question: "What's the typical ROI and payback period?",
      answer: "3-5 years is typical for commercial projects based on energy savings alone. Faster payback when tenant satisfaction and retention benefits are included."
    },
    {
      question: "Do you have commercial references in our sector?",
      answer: "Yes - we have completed projects in offices, hotels, hospitals, schools, and retail premises across London. Sector-specific references available on request."
    },
    {
      question: "Will it improve our EPC rating?",
      answer: "Yes - improved thermal performance typically enhances EPC ratings, increasing building value and marketability to quality tenants."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Commercial FAQs
        </h2>

        <div className="max-w-3xl mx-auto">
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
        </div>

        <div className="mt-12">
          <img 
            src="https://cdn.marblism.com/6A0oLCZKQzB.webp" 
            alt="Commercial secondary glazing FAQ and support" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialFAQ;
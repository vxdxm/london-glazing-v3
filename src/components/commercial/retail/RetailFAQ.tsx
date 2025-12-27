import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const RetailFAQ = () => {
  const faqs = [
    {
      question: "How much can secondary glazing reduce my shop's heating costs?",
      answer: "Typically 30-50% reduction, translating to £2,000-£15,000+ annual savings depending on shop size and current efficiency. Showcase windows are often responsible for up to 60% of heat loss."
    },
    {
      question: "Will it increase customer dwell time and sales?",
      answer: "Research shows comfortable temperatures increase browsing time by 30-40%, directly correlating with higher basket values and repeat visits. Many of our retail clients report noticeable sales improvements after installation."
    },
    {
      question: "Can you install without closing my shop?",
      answer: "Yes, we guarantee minimal trading disruption with evening/weekend installation options and phased approaches that keep your business operational. Most individual windows require only 1-2 hours for installation."
    },
    {
      question: "Is it suitable for listed shop fronts?",
      answer: "Perfect for heritage retail premises: secondary glazing preserves original character while delivering modern performance without planning permission requirements. It's the ideal solution for conservation areas."
    },
    {
      question: "How does it protect showcase windows?",
      answer: "Creates thermal barrier preventing heat loss, eliminates condensation that damages displays, provides UV protection for products preventing fading, and maintains stable display temperatures year-round."
    },
    {
      question: "What's the typical payback period?",
      answer: "3-5 years from energy savings alone, often faster when considering sales improvements from enhanced customer experience. Most retailers see returns within the first few years of installation."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Retail FAQs
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about secondary glazing for retail spaces
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

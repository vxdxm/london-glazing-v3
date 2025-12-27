import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const EducationFAQ = () => {
  const faqs = [
    {
      question: "Does secondary glazing meet BB93 acoustic standards?",
      answer: "Yes, our secondary glazing systems meet and exceed Department for Education BB93 acoustic standards. We provide measured acoustic testing and documentation to demonstrate compliance during Ofsted inspections or local authority reviews."
    },
    {
      question: "Can you install during term time without disrupting lessons?",
      answer: "Yes, we offer flexible installation options. Our preferred approach schedules major work during holidays, but we can work room-by-room during term time, typically installing out-of-hours or during weekends. Each classroom installation usually takes just one day."
    },
    {
      question: "Is secondary glazing suitable for listed school buildings?",
      answer: "Absolutely. Secondary glazing is the ideal solution for listed buildings as it's completely reversible, preserves original architectural features, and typically requires no planning permission. English Heritage recognizes this approach as best practice for historic buildings."
    },
    {
      question: "What funding is available for school secondary glazing?",
      answer: "Several funding routes are available including the DfE's Condition Improvement Fund (CIF), LCVAP funding for voluntary-aided schools, and MAT investment programs. We can help with funding applications and provide the documentation needed to support your case."
    },
    {
      question: "How much can schools save on energy costs?",
      answer: "Primary schools typically save £3,000-£5,000 annually, while larger secondary schools can achieve £8,000-£15,000+ savings. With payback periods of 3-5 years and 20+ year lifespan, secondary glazing represents excellent value for educational budgets."
    },
    {
      question: "Do your installation teams have DBS checks?",
      answer: "Yes, all team members hold enhanced DBS checks and we follow strict safeguarding procedures throughout the installation process. Site security and child protection remain paramount in everything we do."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about secondary glazing for educational facilities
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

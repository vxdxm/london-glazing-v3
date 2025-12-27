import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const HealthcareFAQ = () => {
  const faqs = [
    {
      question: "Is secondary glazing compliant with NHS/CQC standards?",
      answer: "Yes, our secondary glazing meets all relevant NHS estates standards and supports CQC inspection requirements for safe, effective healthcare environments. We ensure compliance with Health Building Notes (HBN) and Health Technical Memorandums (HTM)."
    },
    {
      question: "Can you install without disrupting patients?",
      answer: "Absolutely. We specialize in phased installation working around clinical schedules, offering out-of-hours installation and room-by-room approaches that maintain patient care continuity. Our healthcare protocols ensure minimal disruption to operations."
    },
    {
      question: "How does it improve patient sleep and recovery?",
      answer: "By reducing external noise by 70-80% and maintaining stable temperatures, secondary glazing creates the peaceful environment essential for healing sleep patterns and faster recovery. This is particularly important for post-surgery patients and mental health units."
    },
    {
      question: "What about HTM compliance?",
      answer: "Our installations meet Health Technical Memorandum requirements for acoustic performance, thermal efficiency, and healthcare building standards. We provide full documentation for estates records and compliance verification."
    },
    {
      question: "What energy savings can we expect?",
      answer: "Healthcare facilities typically see 30-50% reduction in heating and cooling costs, representing significant annual savings for energy-intensive 24/7 operations. For large NHS trusts, this can mean thousands of pounds saved annually."
    },
    {
      question: "Is it suitable for listed hospital buildings?",
      answer: "Yes – secondary glazing is often the only approved method for improving listed building performance while preserving original windows. We work with conservation officers and understand heritage healthcare building requirements."
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
              Common questions about secondary glazing for healthcare facilities
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

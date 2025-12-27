import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will secondary glazing damage my original sash windows?",
    answer: "No. Secondary glazing installs on the window reveal (wall surround), not on the sash window itself. Your original windows remain completely untouched and fully operational with only discrete wall fixings required."
  },
  {
    question: "Can I still open my sash windows with secondary glazing?",
    answer: "Yes, absolutely. Vertical sliding and tilt-in styles operate independently from your primary sash windows. You can open either the primary window or secondary unit as needed, providing complete operational flexibility."
  },
  {
    question: "Do I need planning permission for listed building sash windows?",
    answer: "Typically no. Secondary glazing is an internal modification that doesn't alter external appearance, generally considered permitted development. For Grade I or II* properties, we recommend consultation with your conservation officer - we can assist with this process."
  },
  {
    question: "How much does sash window secondary glazing cost?",
    answer: "£400-£900 per window depending on size, style, and glass specification. Small Victorian sash windows typically cost £400-£600, while larger Georgian sash windows range from £600-£800. This represents significant savings compared to £1,500-£3,000 per window for quality sash replacement."
  },
  {
    question: "Can I clean between the primary and secondary glazing?",
    answer: "Yes. Opening styles provide full access for cleaning both the internal surface of your original sash window and the secondary glazing. The sealed air gap between units stays clean, while tilt-in models make cleaning particularly convenient from inside."
  },
  {
    question: "How long does installation take?",
    answer: "2-3 hours per window including protection setup, installation, adjustment, testing, and clean-up. Full house installations typically take 2-3 days with minimal disruption - you can remain in your home throughout the process."
  },
  {
    question: "Will it be visible from the street?",
    answer: "Well-designed secondary glazing is virtually invisible from outside. Your original sash windows remain the visible element with secondary units sitting discreetly behind. Color-matched frames and slim sightlines ensure minimal visual impact."
  },
  {
    question: "Does it work with Victorian, Georgian, and Edwardian sash windows?",
    answer: "Yes, perfectly. We custom-manufacture every unit to fit your exact window dimensions and architectural requirements, regardless of period. Our extensive London experience covers all heritage sash window types."
  },
  {
    question: "Will conservation officers approve secondary glazing?",
    answer: "Generally yes, because secondary glazing preserves original windows, doesn't alter external appearance, remains reversible if needed, and protects historic building fabric. We maintain positive relationships with conservation officers across London boroughs."
  },
  {
    question: "What maintenance is required?",
    answer: "Minimal ongoing maintenance - occasional glass cleaning, brief frame care, and very occasional mechanism lubrication. Much lower maintenance than original sash windows which require regular painting, sash cord replacement, and draught seal renewal."
  }
];

const SashFAQ = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
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

export default SashFAQ;

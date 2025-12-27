import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AIOptimizedFAQ } from "@/components/seo/AIOptimizedFAQ";
import { SectionHeading } from "@/components/ui/section-heading";

export const CrittallNewFAQ = () => {
  const faqs = [
    {
      question: "Will secondary glazing hide my Crittall grid pattern?",
      answer: "Absolutely not! The grid pattern is 100% preserved. From the street, your Crittall looks exactly the same with zero change to exterior appearance. From inside, you see through the transparent secondary glazing glass to the original Crittall grid behind. Both the secondary frame and Crittall grid are visible in a layered effect, with the Crittall grid remaining the dominant visual feature."
    },
    {
      question: "How much does secondary glazing cost vs replacing my Crittall?",
      answer: "Secondary glazing costs £3,500-£7,000 for typical properties versus £12,000-£18,000 for new Crittall replacement. This saves £5,000-£11,000 (50-70% cheaper) while preserving your original authentic Crittall and achieving equivalent performance."
    },
    {
      question: "Will it work for my listed Art Deco building with protected Crittall?",
      answer: "Yes, perfectly. Secondary glazing is reversible and doesn't alter your original Crittall windows, making it ideal for listed buildings. Conservation officers typically approve it because it preserves heritage fabric while improving performance. Crittall replacement is usually refused for listed buildings."
    },
    {
      question: "Does secondary glazing stop condensation on my Crittall frames?",
      answer: "Yes, completely. The warm secondary glazing becomes the interior surface, so condensation no longer forms on your Crittall frames. Your visible interior surface stays dry, eliminating the daily wipe-down routine."
    },
    {
      question: "Can my Crittall windows still open with secondary glazing?",
      answer: "Yes. We install hinged or lift-out secondary glazing that opens independently, giving full access to your Crittall windows behind. Both windows function independently for ventilation and cleaning."
    },
    {
      question: "How does it stop heat loss through the metal Crittall frames?",
      answer: "The air gap (50-100mm) between your Crittall and secondary glazing breaks the thermal bridge. While your metal frames still conduct heat, the insulating air gap prevents cold transfer to your room, reducing heat loss by 50-65%."
    },
    {
      question: "Will it look obviously 'added on' or authentic?",
      answer: "We color-match secondary frames to your Crittall (black, dark green, cream, or white). Most owners find the layered metal frames look intentional and enhance the industrial aesthetic. From the street, there's zero visible change."
    },
    {
      question: "How long does secondary glazing last on Crittall windows?",
      answer: "20-25 years typical lifespan with minimal maintenance. The secondary glazing actually protects your original Crittall from weathering and condensation damage, potentially extending your Crittall's lifespan."
    },
    {
      question: "Is there a performance difference between W20 and W40 Crittall types?",
      answer: "Not significantly. Both benefit equally from secondary glazing. We typically recommend hinged secondary for W20 opening Crittall and fixed secondary for W40 fixed Crittall, but thermal and acoustic results are equivalent."
    },
    {
      question: "Will planning permission approve secondary glazing in my conservation area?",
      answer: "Usually yes, easily. Secondary glazing is internal, reversible, and doesn't change external appearance. Most conservation areas approve it as permitted development. Crittall replacement is often refused in conservation areas."
    },
    {
      question: "How much noise reduction will I get on busy street Crittall?",
      answer: "70-80% typical reduction. Because original Crittall has thin single glazing with zero sound insulation, secondary glazing creates dramatic improvement. For extreme noise, we recommend 10.8-12.8mm acoustic glass for up to 84% reduction."
    },
    {
      question: "Can I do just some windows or need all Crittall windows done?",
      answer: "Any combination works. Many owners prioritize street-facing Crittall (noise/heat priority) or bedroom Crittall (comfort priority) and add others later. Each window is independent, though whole-property installations get better value."
    },
    {
      question: "Does secondary glazing work for large warehouse Crittall windows?",
      answer: "Yes. We accommodate very large warehouse-scale Crittall (up to 3m+ spans). Large W40 industrial Crittall are ideal candidates: huge heat/noise loss gets dramatic improvement."
    },
    {
      question: "What happens to my property value with secondary glazing vs replacement?",
      answer: "Secondary glazing typically enhances value: you keep authentic heritage Crittall (period property premium) AND add modern performance. Replacement often diminishes value by losing authentic character that period property buyers specifically seek."
    },
    {
      question: "How quickly does secondary glazing pay for itself on Crittall?",
      answer: "4-7 years typical, sometimes faster. Crittall properties have significant glass area and single glazing, so energy savings are substantial (£500-£900/year common). Some large Crittall properties report under 1-year payback."
    }
  ];

  return (
    <section className="mb-16">
      <AIOptimizedFAQ 
        faqs={faqs} 
        pageTitle="Crittall Window Secondary Glazing FAQ"
        audience="Crittall window owners seeking heritage-preserving solutions"
        speakableSelectors={[".faq-question", ".faq-answer"]}
      />
      
      <SectionHeading 
        title="Frequently Asked Questions About Crittall Secondary Glazing"
        subtitle="Expert answers to common Crittall owner concerns"
      />
      
      <Accordion type="single" collapsible className="w-full" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            itemScope 
            itemType="https://schema.org/Question"
          >
            <AccordionTrigger className="faq-question text-left" itemProp="name">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent 
              className="faq-answer"
              itemScope 
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <div itemProp="text" className="text-muted-foreground">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

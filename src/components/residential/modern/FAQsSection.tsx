
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsSection = () => {
  return (
    <section id="faq" className="mb-12 scroll-mt-20">
      <SectionHeading title="Frequently Asked Questions" />
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is secondary glazing?</AccordionTrigger>
          <AccordionContent>
            Secondary glazing involves installing a second pane of glass or acrylic to existing windows, 
            creating an insulating air gap that enhances thermal performance and reduces energy loss.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How does secondary glazing improve energy efficiency?</AccordionTrigger>
          <AccordionContent>
            By adding an additional layer of glass, secondary glazing reduces heat transfer, 
            minimizes air leakage, and significantly improves the insulation properties of windows, leading to energy savings.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Will secondary glazing alter the appearance of my historic building?</AccordionTrigger>
          <AccordionContent>
            Secondary glazing is designed to be discreet and often invisible from the exterior, 
            allowing the original windows and architectural features to remain intact while enhancing energy efficiency.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>Can secondary glazing help with noise reduction?</AccordionTrigger>
          <AccordionContent>
            Yes, secondary glazing provides excellent acoustic insulation, significantly reducing noise intrusion from outside, 
            which enhances indoor comfort, particularly in noisy environments.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Is secondary glazing suitable for all historic buildings?</AccordionTrigger>
          <AccordionContent>
            While secondary glazing is suitable for most historic buildings, it is essential to consult local preservation guidelines 
            and experts to ensure compliance with any regulations regarding modifications.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQsSection;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export const EnergyPerformanceFAQ = () => {
  return (
    <div className="mt-16 mb-16">
      <SectionHeading title="Frequently Asked Questions" />
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="what-is-secondary-glazing">
          <AccordionTrigger className="text-xl font-semibold">
            What is secondary glazing?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pt-4">
            Secondary glazing is the installation of an additional layer of glazing on the interior side of existing windows, 
            creating an insulating air gap that enhances energy efficiency and reduces noise.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="energy-savings">
          <AccordionTrigger className="text-xl font-semibold">
            How much energy can I save with secondary glazing?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pt-4">
            Studies suggest that secondary glazing can improve a window's thermal performance by up to 60%, 
            leading to significant energy savings depending on usage and local climate conditions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="window-types">
          <AccordionTrigger className="text-xl font-semibold">
            Is secondary glazing suitable for all types of windows?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pt-4">
            Yes, secondary glazing can be adapted to fit various window types, including sash, casement, 
            and fixed windows, making it a versatile solution for different properties.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="appearance">
          <AccordionTrigger className="text-xl font-semibold">
            Will secondary glazing change the appearance of my windows?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pt-4">
            Secondary glazing can be designed to complement existing windows, ensuring that the aesthetic 
            appeal of your property remains intact while improving performance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="financial-incentives">
          <AccordionTrigger className="text-xl font-semibold">
            Are there financial incentives for installing secondary glazing?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pt-4">
            Many regions offer financial incentives and rebates for homeowners who implement energy-efficient 
            solutions like secondary glazing. It is advisable to research local programs to maximize savings.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

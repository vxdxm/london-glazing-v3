
import { SectionHeading } from "@/components/ui/section-heading";
import { InfoCard } from "@/components/ui/info-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="mb-12 scroll-mt-20">
      <SectionHeading title="Energy Efficiency Benefits" />
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <InfoCard title="Introduction to Secondary Glazing as a Modern Solution">
          <div className="space-y-4">
            <p className="text-gray-600">
              Secondary glazing is a relatively simple yet effective solution that involves installing a second pane of glass or acrylic to existing windows. 
              This system creates an insulating air gap, significantly improving the thermal performance of the window while preserving the building's original appearance.
            </p>
            <p className="text-gray-600">
              Unlike replacing windows, secondary glazing allows for the retention of historic glass features, ensuring that the character of the building is maintained.
            </p>
          </div>
        </InfoCard>
        
        <InfoCard title="Improvement in Insulation and Energy Savings">
          <div className="space-y-4">
            <p className="text-gray-600">
              The installation of secondary glazing can dramatically increase a building's insulation properties. Studies have shown that secondary glazing can reduce heat loss through windows by up to 50%. 
            </p>
            <p className="text-gray-600">
              This enhancement in insulation translates to a reduced need for heating during winter months and cooling in summer, resulting in substantial energy savings. 
              For historic buildings, where original windows often contribute to energy inefficiency, secondary glazing provides a solution that respects the building's character while improving its performance.
            </p>
          </div>
        </InfoCard>
      </div>
      
      <InfoCard title="Reduction in Heating and Cooling Costs" className="mb-6">
        <div className="space-y-4">
          <p className="text-gray-600">
            By improving window insulation through secondary glazing, historic building owners can experience significant reductions in their heating and cooling costs. 
            With less energy required to maintain comfortable temperatures, the financial burden associated with energy bills diminishes.
          </p>
          <p className="text-gray-600">
            This cost-effectiveness not only benefits the owners in the short term but also contributes to the long-term sustainability of the building by making maintenance more manageable.
          </p>
        </div>
      </InfoCard>
      
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg shadow-md">
            <OptimizedImage 
              src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" 
              alt="Energy efficient secondary glazing installation" 
              aspectRatio={16/9}
              priority={false}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
            />
          </AspectRatio>
        </div>
        <p className="text-sm text-center text-gray-500 italic mt-3">Modern secondary glazing installation showing the air gap that provides thermal insulation</p>
      </div>
    </section>
  );
};

export default BenefitsSection;

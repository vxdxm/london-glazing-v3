
import { SectionHeading } from "@/components/ui/section-heading";
import { InfoCard } from "@/components/ui/info-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PreservationSection = () => {
  return (
    <section id="preservation" className="mb-12 scroll-mt-20">
      <SectionHeading title="Preservation of Historical Integrity" />
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <InfoCard title="Challenges of Retrofitting">
          <p className="text-gray-600">
            Retrofitting historic buildings presents unique challenges. It is essential to balance modern energy demands with the preservation of historical authenticity. 
            Many owners fear that alterations may detract from the architectural significance and historical context of their properties.
          </p>
        </InfoCard>
        
        <InfoCard title="Maintaining Aesthetic Value">
          <p className="text-gray-600">
            One of the most significant advantages of secondary glazing is its ability to maintain the aesthetic value of historic buildings. 
            Unlike full window replacements, which can dramatically alter the appearance of a building, secondary glazing is discreet and often invisible from the exterior.
          </p>
        </InfoCard>
        
        <InfoCard title="Case Examples">
          <p className="text-gray-600">
            Numerous successful case studies illustrate the effectiveness of secondary glazing in preserving historic buildings. 
            One notable example is the restoration of the Royal Exchange in London, where secondary glazing was used to enhance energy efficiency while preserving its grand aesthetic qualities.
          </p>
        </InfoCard>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 mb-4">
            This preservation of sightlines ensures that the building's historical features, such as decorative frames and original glass, remain intact while still benefiting from improved energy performance.
          </p>
          <p className="text-gray-600">
            Similarly, many residential homes in heritage areas have adopted secondary glazing to maintain their charm and comply with local preservation guidelines, 
            thereby demonstrating that modern solutions can complement historical integrity.
          </p>
        </div>
        <div>
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg" 
              alt="Historic window with discreet secondary glazing" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
              loading="lazy" 
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default PreservationSection;

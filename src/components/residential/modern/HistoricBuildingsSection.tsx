
import { SectionHeading } from "@/components/ui/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HistoricBuildingsSection = () => {
  return (
    <section id="historic-buildings" className="mb-12 scroll-mt-20">
      <SectionHeading title="Overview of Historic Buildings" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg" 
              alt="Historic building with classic architecture" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
              loading="lazy" 
            />
          </AspectRatio>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-gray-600 mb-4">
            Historic buildings are often cherished for their architectural significance, telling a story of the past through their design and craftsmanship. 
            These structures embody cultural heritage and historical narratives, making their preservation crucial for future generations.
          </p>
          <p className="text-gray-600">
            However, many historic buildings were constructed without consideration for modern energy standards, leading to significant energy loss and comfort issues. 
            The challenge lies in upgrading these buildings to meet contemporary energy efficiency standards without compromising their historical essence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoricBuildingsSection;

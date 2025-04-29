
import { SectionHeading } from "@/components/ui/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const IntroSection = () => {
  return (
    <section id="introduction" className="mb-12 scroll-mt-20">
      <SectionHeading title="Introduction" />
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-600 mb-4">
            The preservation of historic buildings is a delicate balance between maintaining the architectural integrity and enhancing energy efficiency. 
            As concerns over climate change and rising energy costs grow, the need for energy-efficient solutions in older structures has become more pressing.
          </p>
          <p className="text-gray-600">
            This article explores how secondary glazing can transform historic buildings, providing a modern solution that addresses both energy efficiency and 
            the preservation of aesthetic value.
          </p>
        </div>
        <div>
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png" 
              alt="Modern secondary glazing installation in a historic building" 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
              loading="lazy" 
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

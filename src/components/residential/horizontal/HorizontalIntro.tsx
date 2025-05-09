
import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HorizontalIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Horizontal Sliding Secondary Glazing</h1>
        <p className="text-gray-700 mb-6">
          Our horizontal sliding secondary glazing systems offer the perfect solution for wide window openings
          where maximum access and ventilation are essential. With smooth gliding panels that provide 
          effortless operation, these systems combine exceptional thermal performance with practical functionality.
        </p>
        <p className="text-gray-700">
          Ideal for modern properties and traditional homes alike, horizontal sliding units are particularly
          well-suited for larger windows and situations where easy access to your primary windows is important
          for cleaning or ventilation.
        </p>
      </div>
      <div className="relative h-[300px] group">
        <OptimizedImage 
          src="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
          alt="Horizontal sliding secondary glazing showing smooth operation in a modern home setting"
          className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
          width={600}
          height={300}
          priority={true}
        />
      </div>
    </div>
  );
};

export default HorizontalIntro;

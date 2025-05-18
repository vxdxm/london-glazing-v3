
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const OfficeHero = () => {
  return (
    <div className="mb-16">
      <h1 className="text-4xl font-bold mb-4">Energy Efficient Secondary Glazing for Office Buildings</h1>
      
      <div className="prose max-w-none mb-8 text-gray-600">
        <p className="text-lg">
          Our expert secondary glazing solutions for office buildings are designed to enhance workplace comfort and productivity. 
          By installing an additional layer of glazing to existing windows, we help create quieter, more energy-efficient office 
          environments that maintain comfortable temperatures year-round. Our solutions are particularly effective for city-center 
          offices where noise reduction and climate control are essential, while also providing enhanced security and maintaining 
          the building's original appearance.
        </p>
      </div>
      
      <AspectRatio ratio={21 / 9} className="mb-8">
        <OptimizedImage 
          src="/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png" 
          alt="Office interior with secondary glazing installation" 
          className="rounded-lg object-cover w-full h-full" 
          priority={true}
        />
      </AspectRatio>
      
      <p className="text-lg text-gray-600 mb-8">
        Transform your office environment with our premium secondary glazing solutions. 
        We specialize in creating comfortable, energy-efficient, and productive workspaces 
        through advanced glazing technology.
      </p>
    </div>
  );
};

export default OfficeHero;

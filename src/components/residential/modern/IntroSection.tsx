
import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const IntroSection = () => {
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold mb-6">Modern Secondary Glazing Solutions for Historic Buildings</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="text-lg mb-4">
            Secondary glazing represents an elegant solution for enhancing the 
            energy efficiency and comfort of historic buildings while preserving 
            their architectural integrity.
          </p>
          <p className="mb-4">
            For centuries, historic buildings have stood as testaments to our 
            architectural heritage. However, their traditional windows often fall 
            short of modern thermal and acoustic expectations. Modern secondary 
            glazing provides a sympathetic solution that respects the building's 
            character while improving its performance.
          </p>
        </div>
        
        <div className="md:w-1/2 relative h-[300px] group">
          <OptimizedImage 
            src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
            alt="Modern secondary glazing installed in a historic building"
            className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
            width={600}
            height={300}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

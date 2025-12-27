
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HospitalityHero = () => {
  return (
    <>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold mb-6">Premium Secondary Glazing for London Hospitality Venues</h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Transform your London hospitality venue with premium secondary glazing solutions that enhance guest satisfaction, 
          reduce energy costs, and preserve historic character. Our specialized hospitality installations deliver up to 80% 
          noise reduction, 50% energy savings, and significantly improved guest reviews – all with minimal operational disruption.
        </p>
        <p className="text-base font-semibold text-primary max-w-3xl mx-auto">
          Trusted by boutique hotels, fine dining restaurants, and heritage venues across Mayfair, Westminster, Bloomsbury, and beyond.
        </p>
      </section>

      <div className="w-full">
        <AspectRatio ratio={21/9}>
          <OptimizedImage
            src="https://cdn.marblism.com/ZJ5jnl5eN8z.webp"
            alt="Luxury London hotel with secondary glazing installation showing elegant interior"
            className="rounded-lg object-cover w-full h-full"
            priority={true}
          />
        </AspectRatio>
      </div>
    </>
  );
};

export default HospitalityHero;

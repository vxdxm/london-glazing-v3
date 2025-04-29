
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HospitalityHero = () => {
  return (
    <>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold mb-6">Hospitality Sector Glazing Solutions</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Create the perfect environment for your guests with our premium secondary glazing solutions, 
          designed specifically for hotels, restaurants, and leisure facilities.
        </p>
      </section>

      {/* Main Image */}
      <div className="w-full">
        <AspectRatio ratio={21/9}>
          <img
            src="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png"
            alt="Secondary glazing installation in a historic building"
            className="rounded-lg object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </>
  );
};

export default HospitalityHero;

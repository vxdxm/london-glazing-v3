
import React from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { DynamicSEO } from "@/components/DynamicSEO";
import { PAGE_CONFIGS } from "@/constants/pageConfigs";
import { Footer } from "@/components/Footer";

const SecondaryGlazingNoiseReduction = () => {
  useScrollToHash();
  
  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO {...PAGE_CONFIGS.noiseReduction} />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Noise Reduction Secondary Glazing</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Our noise reduction secondary glazing solutions offer exceptional sound insulation using various glass thicknesses 
            and configurations to meet your specific needs. From residential properties to commercial buildings, we provide 
            tailored solutions to combat noise pollution effectively.
          </p>
        </div>

        <div className="mb-12" id="calculator">
          <NoiseReductionCalculator />
        </div>

        <div className="bg-secondary/60 p-5 rounded-lg mt-16">
          <h2 className="text-xl font-semibold mb-2 text-primary">Learn More: Secondary Glazing Noise Reduction</h2>
          <p className="text-gray-700 mb-2">
            Want to understand how secondary glazing can cut outside noise by up to 80%? Discover detailed acoustic glass options, air gap strategies, and solutions for listed buildings on our dedicated page.
          </p>
          <a
            href="/secondary-glazing-noise-reduction"
            className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Explore Secondary Glazing Noise Reduction
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondaryGlazingNoiseReduction;

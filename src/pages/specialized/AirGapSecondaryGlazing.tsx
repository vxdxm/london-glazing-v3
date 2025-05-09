
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { AirGapSEO } from "@/components/specialized/airgap/AirGapSEO";
import { AirGapHeader } from "@/components/specialized/airgap/AirGapHeader";
import { UnderstandingAirGap } from "@/components/specialized/airgap/UnderstandingAirGap";
import { StandardCavity } from "@/components/specialized/airgap/StandardCavity";
import { EnhancedCavity } from "@/components/specialized/airgap/EnhancedCavity";
import { FactorsAffectingCavity } from "@/components/specialized/airgap/FactorsAffectingCavity";

const AirGapSecondaryGlazing = () => {
  // Add console logging for indexing verification
  useEffect(() => {
    console.log("Air Gap Secondary Glazing page loaded for indexing");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AirGapSEO />
      <MainNav />
      <main id="main-content" className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <AirGapHeader />
        
        <div className="grid gap-8">
          <UnderstandingAirGap />
          <StandardCavity />
          <EnhancedCavity />
          <FactorsAffectingCavity />

          <section id="calculator" aria-labelledby="calculator-heading" className="my-12">
            <h2 id="calculator-heading" className="text-3xl font-semibold mb-6 text-center">Calculate Your Noise Reduction</h2>
            <NoiseReductionCalculator />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AirGapSecondaryGlazing;

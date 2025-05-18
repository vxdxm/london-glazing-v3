
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

import HospitalitySEO from "@/components/commercial/hospitality/HospitalitySEO";
import HospitalityHero from "@/components/commercial/hospitality/HospitalityHero";
import BenefitsGrid from "@/components/commercial/hospitality/BenefitsGrid";
import FeaturesSection from "@/components/commercial/hospitality/FeaturesSection";
import HospitalityCTA from "@/components/commercial/hospitality/HospitalityCTA";
import { useEffect } from "react";

const HospitalitySector = () => {
  // Log page view for debugging indexing issues
  useEffect(() => {
    console.log("Hospitality Sector page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HospitalitySEO />
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="max-w-6xl mx-auto space-y-12">
          <HospitalityHero />
          <BenefitsGrid />
          <FeaturesSection />
          <HospitalityCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalitySector;

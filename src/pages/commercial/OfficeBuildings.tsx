
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import OfficeSEO from "@/components/commercial/office/OfficeSEO";
import OfficeHero from "@/components/commercial/office/OfficeHero";
import BenefitsGrid from "@/components/commercial/office/BenefitsGrid";
import TechnicalSpecs from "@/components/commercial/office/TechnicalSpecs";
import OfficeCTA from "@/components/commercial/office/OfficeCTA";
import { useEffect } from "react";

const OfficeBuildings = () => {
  // Log page view for debugging indexing issues
  useEffect(() => {
    console.log("Office Buildings page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <OfficeSEO />
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="max-w-6xl mx-auto">
          <OfficeHero />
          <BenefitsGrid />
          <TechnicalSpecs />
          <OfficeCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeBuildings;

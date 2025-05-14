
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import OfficeHero from "@/components/commercial/office/OfficeHero";
import BenefitsGrid from "@/components/commercial/office/BenefitsGrid";
import TechnicalSpecs from "@/components/commercial/office/TechnicalSpecs";
import OfficeCTA from "@/components/commercial/office/OfficeCTA";
import { DynamicSEO } from "@/components/DynamicSEO";
import { PAGE_CONFIGS } from "@/constants/pageConfigs";

const OfficeBuildings = () => {
  // Log page view for debugging indexing issues
  useEffect(() => {
    console.log("Office Buildings page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DynamicSEO {...PAGE_CONFIGS.officeBuildings} />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <OfficeHero />
        <BenefitsGrid />
        <TechnicalSpecs />
        <OfficeCTA />
      </div>
      <Footer />
    </div>
  );
};

export default OfficeBuildings;

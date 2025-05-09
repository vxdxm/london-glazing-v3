
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import ModernSolutionsSEO from "@/components/residential/modern/ModernSolutionsSEO";
import IntroSection from "@/components/residential/modern/IntroSection";
import TableOfContents from "@/components/residential/modern/TableOfContents";
import HistoricBuildingsSection from "@/components/residential/modern/HistoricBuildingsSection";
import EnergyEfficiencySection from "@/components/residential/modern/EnergyEfficiencySection";
import PreservationSection from "@/components/residential/modern/PreservationSection";
import ComfortSection from "@/components/residential/modern/ComfortSection";
import BenefitsSection from "@/components/residential/modern/BenefitsSection";
import ConclusionSection from "@/components/residential/modern/ConclusionSection";
import FAQsSection from "@/components/residential/modern/FAQsSection";
import PageFooter from "@/components/residential/modern/PageFooter";

const ModernSolutions = () => {
  // Add logging for debugging indexing issues
  useEffect(() => {
    console.log("Modern Solutions page loaded");
  }, []);

  // Implement scrollToTop function to pass to PageFooter
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ModernSolutionsSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="max-w-4xl mx-auto">
          <IntroSection />
          <TableOfContents />
          <HistoricBuildingsSection />
          <EnergyEfficiencySection />
          <PreservationSection />
          <ComfortSection />
          <BenefitsSection />
          <ConclusionSection />
          <FAQsSection />
          <PageFooter scrollToTop={scrollToTop} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModernSolutions;

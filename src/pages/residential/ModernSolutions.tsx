
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import ModernSolutionsSEO from "@/components/residential/modern/ModernSolutionsSEO";

// Import refactored components
import TableOfContents from "@/components/residential/modern/TableOfContents";
import IntroSection from "@/components/residential/modern/IntroSection";
import HistoricBuildingsSection from "@/components/residential/modern/HistoricBuildingsSection";
import EnergyEfficiencySection from "@/components/residential/modern/EnergyEfficiencySection";
import BenefitsSection from "@/components/residential/modern/BenefitsSection";
import PreservationSection from "@/components/residential/modern/PreservationSection";
import ComfortSection from "@/components/residential/modern/ComfortSection";
import ConclusionSection from "@/components/residential/modern/ConclusionSection";
import FAQsSection from "@/components/residential/modern/FAQsSection";
import PageFooter from "@/components/residential/modern/PageFooter";

const ModernSolutions = () => {
  useScrollToHash();
  
  // Log page view for debugging indexing issues
  useEffect(() => {
    console.log("Modern Solutions page loaded");
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <ModernSolutionsSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <BreadcrumbNav />
        
        <TableOfContents />

        <h1 className="text-4xl font-bold mb-8">Modern Secondary Glazing Solutions for Historic Buildings</h1>

        <IntroSection />
        <HistoricBuildingsSection />
        <EnergyEfficiencySection />
        <BenefitsSection />
        <PreservationSection />
        <ComfortSection />
        <ConclusionSection />
        <FAQsSection />
        
        {/* Original Features Section - Empty in original */}
        <section id="features" className="mb-12 scroll-mt-20">
          <Card className="hover:shadow-lg transition-shadow">
          </Card>
        </section>

        <PageFooter scrollToTop={scrollToTop} />
      </div>
    </div>
  );
};

export default ModernSolutions;

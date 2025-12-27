
import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import RepairsHero from "@/components/repairs/RepairsHero";
import CommonRepairIssues from "@/components/repairs/CommonRepairIssues";
import WarningSignsSection from "@/components/repairs/WarningSignsSection";
import RepairCostGuide from "@/components/repairs/RepairCostGuide";
import RepairProcess from "@/components/repairs/RepairProcess";
import BrandsWeRepair from "@/components/repairs/BrandsWeRepair";
import EmergencyServices from "@/components/repairs/EmergencyServices";
import HeritageRepairs from "@/components/repairs/HeritageRepairs";
import RepairCaseStudies from "@/components/repairs/RepairCaseStudies";
import MaintenancePrevention from "@/components/repairs/MaintenancePrevention";
import RepairsFAQ from "@/components/repairs/RepairsFAQ";
import RepairsCTA from "@/components/repairs/RepairsCTA";
import RepairsSEO from "@/components/repairs/RepairsSEO";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const SecondaryGlazingRepairs = () => {
  useScrollToHash();
  
  return (
    <div className="min-h-screen bg-background">
      <RepairsSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />

        <main id="main-content">
          <RepairsHero />

          <div id="common-issues" className="scroll-mt-24">
            <CommonRepairIssues />
          </div>

          <div id="warning-signs" className="scroll-mt-24">
            <WarningSignsSection />
          </div>
          
          <div id="costs" className="scroll-mt-24">
            <RepairCostGuide />
          </div>

          <div id="process" className="scroll-mt-24">
            <RepairProcess />
          </div>

          <div id="brands" className="scroll-mt-24">
            <BrandsWeRepair />
          </div>

          <div id="emergency" className="scroll-mt-24">
            <EmergencyServices />
          </div>

          <div id="heritage" className="scroll-mt-24">
            <HeritageRepairs />
          </div>

          <div id="case-studies" className="scroll-mt-24">
            <RepairCaseStudies />
          </div>

          <div id="maintenance" className="scroll-mt-24">
            <MaintenancePrevention />
          </div>
          
          <div id="faq" className="scroll-mt-24">
            <RepairsFAQ />
          </div>
          
          <div id="contact" className="scroll-mt-24">
            <RepairsCTA />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SecondaryGlazingRepairs;


import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import OfficeSEO from "@/components/commercial/office/OfficeSEO";
import OfficeHero from "@/components/commercial/office/OfficeHero";
import BenefitsGrid from "@/components/commercial/office/BenefitsGrid";
import OfficeSolutions from "@/components/commercial/office/OfficeSolutions";
import TechnicalSpecs from "@/components/commercial/office/TechnicalSpecs";
import InstallationProcess from "@/components/commercial/office/InstallationProcess";
import InvestmentROI from "@/components/commercial/office/InvestmentROI";
import CaseStudies from "@/components/commercial/office/CaseStudies";
import WhyChooseUs from "@/components/commercial/office/WhyChooseUs";
import ServiceAreas from "@/components/commercial/office/ServiceAreas";
import Testimonials from "@/components/commercial/office/Testimonials";
import OfficeFAQ from "@/components/commercial/office/OfficeFAQ";
import OfficeCTA from "@/components/commercial/office/OfficeCTA";
import { useEffect } from "react";

const OfficeBuildings = () => {
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
          <OfficeSolutions />
          <TechnicalSpecs />
          <InstallationProcess />
          <InvestmentROI />
          <CaseStudies />
          <WhyChooseUs />
          <ServiceAreas />
          <Testimonials />
          <OfficeFAQ />
          <OfficeCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfficeBuildings;


import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

import HospitalitySEO from "@/components/commercial/hospitality/HospitalitySEO";
import HospitalityHero from "@/components/commercial/hospitality/HospitalityHero";
import WhyChooseSection from "@/components/commercial/hospitality/WhyChooseSection";
import BenefitsGrid from "@/components/commercial/hospitality/BenefitsGrid";
import VenueTypes from "@/components/commercial/hospitality/VenueTypes";
import SpaceTypes from "@/components/commercial/hospitality/SpaceTypes";
import TechnicalSpecs from "@/components/commercial/hospitality/TechnicalSpecs";
import CaseStudies from "@/components/commercial/hospitality/CaseStudies";
import HeritageExpertise from "@/components/commercial/hospitality/HeritageExpertise";
import InstallationProcess from "@/components/commercial/hospitality/InstallationProcess";
import InvestmentROI from "@/components/commercial/hospitality/InvestmentROI";
import WhyChooseUs from "@/components/commercial/hospitality/WhyChooseUs";
import ServiceAreas from "@/components/commercial/hospitality/ServiceAreas";
import Testimonials from "@/components/commercial/hospitality/Testimonials";
import HospitalityFAQ from "@/components/commercial/hospitality/HospitalityFAQ";
import HospitalityCTA from "@/components/commercial/hospitality/HospitalityCTA";
import { useEffect } from "react";

const HospitalitySector = () => {
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
          <WhyChooseSection />
          <BenefitsGrid />
          <VenueTypes />
          <SpaceTypes />
          <TechnicalSpecs />
          <CaseStudies />
          <HeritageExpertise />
          <InstallationProcess />
          <InvestmentROI />
          <WhyChooseUs />
          <ServiceAreas />
          <Testimonials />
          <HospitalityFAQ />
          <HospitalityCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalitySector;

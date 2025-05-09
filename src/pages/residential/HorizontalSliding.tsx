
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import SEOHelmet from "@/components/residential/horizontal/SEOHelmet";
import HorizontalIntro from "@/components/residential/horizontal/HorizontalIntro";
import WindowTypes from "@/components/residential/horizontal/WindowTypes";
import FeaturesAndBenefits from "@/components/residential/horizontal/FeaturesAndBenefits";
import TechnicalSpecs from "@/components/residential/horizontal/TechnicalSpecs";
import CallToAction from "@/components/residential/horizontal/CallToAction";
import GlassOptions from "@/components/residential/GlassOptions";

const HorizontalSliding = () => {
  // Add logging for debugging indexing issues
  useEffect(() => {
    console.log("Horizontal Sliding page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <HorizontalIntro />
        <WindowTypes />
        <FeaturesAndBenefits />
        <TechnicalSpecs />
        <GlassOptions />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default HorizontalSliding;

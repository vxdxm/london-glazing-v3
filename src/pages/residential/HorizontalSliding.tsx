
import React from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import SEOHelmet from "@/components/residential/horizontal/SEOHelmet";
import HorizontalIntro from "@/components/residential/horizontal/HorizontalIntro";
import WindowTypes from "@/components/residential/horizontal/WindowTypes";
import FeaturesAndBenefits from "@/components/residential/horizontal/FeaturesAndBenefits";
import TechnicalSpecs from "@/components/residential/horizontal/TechnicalSpecs";
import CallToAction from "@/components/residential/horizontal/CallToAction";

const HorizontalSliding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Horizontal Sliding Windows</h1>
        
        {/* Introduction Section */}
        <HorizontalIntro />

        {/* Main Window Types */}
        <WindowTypes />

        {/* Features and Benefits Section */}
        <FeaturesAndBenefits />

        {/* Technical Specifications */}
        <TechnicalSpecs />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default HorizontalSliding;


import React from "react";
import SEOHelmet from "@/components/SEOHelmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const CasementTraditionalOptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet
        title="Traditional Casement Window Options | Secondary Glazing"
        description="Explore our heritage-friendly secondary glazing solutions for period properties with casement windows. Maintain character while improving comfort."
        canonicalPath="/residential/casement-windows/traditional-options"
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-6">Traditional Casement Window Options</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Our heritage-friendly secondary glazing solutions are designed to preserve the period character of your casement windows
            while providing modern insulation benefits and noise reduction.
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Content Coming Soon</h2>
            <p>
              We're currently updating this page with detailed information about our traditional casement window options.
              Please check back soon or contact us directly for immediate assistance with your casement window requirements.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CasementTraditionalOptions;

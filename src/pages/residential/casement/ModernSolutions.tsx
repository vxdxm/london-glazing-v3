
import React from "react";
import SEOHelmet from "@/components/SEOHelmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const CasementModernSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet
        title="Modern Casement Window Solutions | Secondary Glazing"
        description="Discover our contemporary secondary glazing options for modern properties with casement windows. Enhance thermal efficiency and reduce noise pollution."
        canonicalPath="/residential/casement-windows/modern-solutions"
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-6">Modern Casement Window Solutions</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Discover our contemporary secondary glazing designs specifically developed for modern casement windows,
            offering excellent thermal and acoustic performance without compromising on aesthetics.
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Content Coming Soon</h2>
            <p>
              We're currently updating this page with detailed information about our modern casement window solutions.
              Please check back soon or contact us directly for immediate assistance with your casement window requirements.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CasementModernSolutions;

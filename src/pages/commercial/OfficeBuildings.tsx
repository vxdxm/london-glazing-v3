
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import OfficeHero from "@/components/commercial/office/OfficeHero";
import BenefitsGrid from "@/components/commercial/office/BenefitsGrid";
import TechnicalSpecs from "@/components/commercial/office/TechnicalSpecs";
import OfficeCTA from "@/components/commercial/office/OfficeCTA";
import { SeoHead } from "@/components/ui/seo-head";

const OfficeBuildings = () => {
  // Log page view for debugging indexing issues
  useEffect(() => {
    console.log("Office Buildings page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SeoHead 
        title="Secondary Glazing for Office Buildings | Noise & Energy Solutions"
        description="Transform your office with secondary glazing - reduce workplace noise by up to 80% and improve energy efficiency. Create comfortable, productive workspaces in London."
        canonicalUrl="https://secondaryglazingspecialist.com/commercial/office-buildings"
        ogTitle="Secondary Glazing for Office Buildings"
        ogDescription="Transform your office with secondary glazing - reduce workplace noise by up to 80% and improve energy efficiency. Create comfortable, productive workspaces in London."
        ogImage="/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Office Buildings",
          "description": "Our expert secondary glazing solutions for office buildings are designed to enhance workplace comfort and productivity. By installing an additional layer of glazing to existing windows, we help create quieter, more energy-efficient office environments.",
          "image": "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-lg", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Office Building Secondary Glazing",
            "description": "Specialized glazing solutions for commercial office buildings.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "streetAddress": "Arch 141, MacFarlane Road"
              },
              "telephone": "0207 060 1572"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Commercial Solutions",
                "item": "https://secondaryglazingspecialist.com/commercial"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Office Buildings",
                "item": "https://secondaryglazingspecialist.com/commercial/office-buildings"
              }
            ]
          }
        }}
      >
        <meta name="keywords" content="office glazing, commercial glazing, office noise reduction, business energy efficiency, workspace insulation, office window improvements" />
        <meta name="robots" content="index, follow" />
      </SeoHead>
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

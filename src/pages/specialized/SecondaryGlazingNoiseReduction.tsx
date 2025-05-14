
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { SeoHead } from "@/components/ui/seo-head";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const SecondaryGlazingNoiseReduction = () => {
  // Add logging for indexing
  useEffect(() => {
    console.log("Secondary Glazing Noise Reduction page loaded for indexing");
  }, []);

  // Current domain - in a real app, you might get this from environment variables
  const domain = "https://secondaryglazingspecialist.com";
  const pagePath = "/specialized/secondary-glazing-noise-reduction";
  const canonicalUrl = `${domain}${pagePath}`;

  // Structured data for this page - LocalBusiness for service page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SpecialtyBusiness",
    "@id": canonicalUrl,
    "name": "Secondary Glazing Noise Reduction Services London",
    "description": "Professional secondary glazing noise reduction services in London. Reduce outside noise by up to 80% with our specialized glazing solutions.",
    "url": canonicalUrl,
    "telephone": "0207 060 1572",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arch 141, MacFarlane Road",
      "addressLocality": "London",
      "postalCode": "W12 7LA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "priceRange": "££",
    "image": "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 51.5074,
        "longitude": -0.1278
      },
      "geoRadius": "30"
    },
    "sameAs": [
      "https://www.facebook.com/secondaryglazingspecialist",
      "https://www.instagram.com/secondaryglazingspecialist"
    ]
  };
  
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Secondary Glazing Noise Reduction | Up to 80% Sound Reduction"
        description="Discover how secondary glazing can reduce outside noise by up to 80%. We provide expert installation of acoustic glass & optimal air gaps for maximum noise reduction."
        canonicalUrl={canonicalUrl}
        ogType="website"
        ogTitle="Secondary Glazing Noise Reduction Services | London Specialist"
        ogDescription="Transform your home with our secondary glazing solutions that reduce noise by up to 80%. Expert installation and free consultation available."
        jsonLd={structuredData}
      />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing Noise Reduction</h1>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            Secondary glazing is one of the most effective methods for reducing external noise, 
            capable of reducing sound levels by up to 80% when correctly specified and installed. 
            Our noise reduction solutions are particularly effective for properties located in busy urban areas, 
            near airports or railway lines.
          </p>
        </div>
        
        <NoiseReductionCalculator />
        
        {/* Additional content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-secondary/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Acoustic Glass Options</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard 4mm glazing - Basic noise reduction</li>
              <li>6.4mm laminated - Enhanced noise reduction</li>
              <li>6.8mm acoustic laminated - Superior noise reduction</li>
              <li>10.8mm acoustic laminated - Maximum noise reduction</li>
            </ul>
          </div>
          <div className="bg-secondary/20 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Optimal Air Gap Distance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>100mm+ air gap - Ideal for maximum noise reduction</li>
              <li>150mm+ air gap - Recommended for severe noise problems</li>
              <li>200mm+ air gap - Ultimate performance for extreme cases</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecondaryGlazingNoiseReduction;


import React from "react";
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SingleDoubleGlazedIntro } from "@/components/residential/single-double/SingleDoubleGlazedIntro";
import { SingleDoubleGlazedBenefits } from "@/components/residential/single-double/SingleDoubleGlazedBenefits";
import { SingleDoubleGlazedComparison } from "@/components/residential/single-double/SingleDoubleGlazedComparison";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

// Define structured data for the page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Single & Double Glazed Secondary Windows",
  "description": "Learn about single and double glazed secondary windows - compare options, benefits, and find the perfect solution for your property.",
  "category": "Window Solutions",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "brand": {
    "@type": "Brand",
    "name": "Heritage Window Solutions"
  }
};

const SingleDoubleGlazed = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Single & Double Glazed Secondary Windows | Heritage Window Solutions</title>
        <meta 
          name="description" 
          content="Learn about single and double glazed secondary windows - compare options, benefits, and find the perfect solution for your property." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/single-double-glazed" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png" 
          as="image" 
          type="image/png" 
        />
        {/* Inline critical CSS */}
        <style type="text/css">{`
          .critical-header { 
            font-weight: bold; 
            margin-bottom: 2rem;
            line-height: 1.2;
          }
          @media (max-width: 640px) {
            .critical-header {
              font-size: 1.875rem;
            }
          }
        `}</style>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 critical-header">
          Single (4mm Toughened Glass) &amp; Double Glazed (mm Low E/Argon Gas Filled Cavity/4mm Toughened Glass) Secondary Windows
        </h1>
        
        <section className="mb-12">
          <picture>
            <source srcSet="/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png" type="image/png" />
            <OptimizedImage 
              src="/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png"
              alt="Secondary glazing installation example" 
              width={800}
              height={450}
              className="w-full h-auto rounded-lg mb-6" 
              loading="eager"
              priority={true}
            />
          </picture>
          
          <SingleDoubleGlazedIntro />
        </section>
        
        <section className="mb-12" aria-labelledby="benefits-section">
          <h2 id="benefits-section" className="text-3xl font-semibold mb-6">Key Benefits</h2>
          <SingleDoubleGlazedBenefits />
        </section>
        
        <section className="mb-12">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-4 text-xl font-medium text-left border-b border-gray-200">
              <span>Compare Single vs Double Glazing</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <SingleDoubleGlazedComparison />
            </CollapsibleContent>
          </Collapsible>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Request a Consultation</h2>
          <p className="mb-4">
            Speak with our experts to determine the ideal glazing solution for your specific requirements.
          </p>
          <a 
            href="/quote-request" 
            className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Request Quote
          </a>
        </section>
      </div>
      <Footer />
      
      {/* Deferred script loading */}
      <script defer src="/src/main.js"></script>
    </div>
  );
};

// Export for static site generation
export const pageMetadata = {
  title: "Single & Double Glazed Secondary Windows | Heritage Window Solutions",
  description: "Learn about single and double glazed secondary windows - compare options, benefits, and find the perfect solution for your property.",
  canonical: "https://secondaryglazingspecialist.com/residential/single-double-glazed"
};

export default SingleDoubleGlazed;

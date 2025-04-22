import React from "react";
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import RepairsHero from "@/components/repairs/RepairsHero";
import SpiralBalanceSection from "@/components/repairs/SpiralBalanceSection";
import CommonIssues from "@/components/repairs/CommonIssues";
import AdditionalServices from "@/components/repairs/AdditionalServices";
import RepairsFAQ from "@/components/repairs/RepairsFAQ";
import RepairsCTA from "@/components/repairs/RepairsCTA";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecondaryGlazingRepairs = () => {
  useScrollToHash();
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Repairs | Window Repair Services London</title>
        <meta name="description" content="Expert secondary glazing repair services in London, specializing in spiral balance replacements, alignment fixes, and hardware repairs. Book a repair assessment today." />
        <meta name="keywords" content="secondary glazing repairs, spiral balance repairs, window hardware fix, glazing maintenance, vertical sliding unit repair, London glazing service" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
        <meta property="og:title" content="Secondary Glazing Repairs | Window Repair Specialists London" />
        <meta property="og:description" content="Professional repair service for all secondary glazing systems. Specializing in spiral balance replacements, hardware upgrades, and alignment corrections." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
        <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secondary Glazing Repairs | Window Repair Specialists London" />
        <meta name="twitter:description" content="Professional repair service for all secondary glazing systems. Specializing in spiral balance replacements, hardware upgrades, and alignment corrections." />
        <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Secondary Glazing Repair Service",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Arch 141, MacFarlane Road",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "addressCountry": "UK"
              },
              "telephone": "0207 060 1572",
              "url": "https://secondaryglazingspecialist.com"
            },
            "description": "Professional repair services for all types of secondary glazing systems, specializing in spiral balance replacements and hardware repairs.",
            "areaServed": "London",
            "serviceType": "Window Repair",
            "offers": {
              "@type": "Offer",
              "price": "75.00",
              "priceCurrency": "GBP",
              "description": "Starting price for basic repair assessment",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      
      <div className="container mx-auto px-4 py-12">
        <BreadcrumbNav />

        <RepairsHero />

        <div id="spiral-balances">
          <SpiralBalanceSection />
        </div>
        
        <CommonIssues />
        <AdditionalServices />
        <RepairsFAQ />
        <RepairsCTA />
      </div>
      
      <Footer />
    </div>
  );
};

export default SecondaryGlazingRepairs;

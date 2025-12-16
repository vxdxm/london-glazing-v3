
import React from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import HorizontalIntro from "@/components/residential/horizontal/HorizontalIntro";
import WindowTypes from "@/components/residential/horizontal/WindowTypes";
import FeaturesAndBenefits from "@/components/residential/horizontal/FeaturesAndBenefits";
import TechnicalSpecs from "@/components/residential/horizontal/TechnicalSpecs";
import CallToAction from "@/components/residential/horizontal/CallToAction";
import GlassOptions from "@/components/residential/GlassOptions";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { HorizontalSlidingIcon } from "@/components/icons/GlazingTypeIcons";

const HorizontalSliding = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Horizontal Sliding Secondary Glazing | Smooth Operating Window Solutions",
    description: "Discover our horizontal sliding secondary glazing - ideal for wide windows with smooth operation and excellent ventilation. Combines thermal insulation with easy access.",
    canonicalPath: "/residential/horizontal-sliding",
    imageUrl: "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["horizontal sliding windows", "sliding secondary glazing", "thermal insulation", "noise reduction", "wide window openings", "residential glazing"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
        
        {/* Add breadcrumb structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
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
                "name": "Residential Solutions",
                "item": "https://secondaryglazingspecialist.com/residential"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Horizontal Sliding",
                "item": "https://secondaryglazingspecialist.com/residential/horizontal-sliding"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-6">
          <HorizontalSlidingIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Horizontal Sliding Secondary Glazing</h1>
        </div>
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

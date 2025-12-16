
import React from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import CombinationIntro from "@/components/residential/combination/CombinationIntro";
import AvailableCombinations from "@/components/residential/combination/AvailableCombinations";
import TechnicalSpecs from "@/components/residential/combination/TechnicalSpecs";
import CombinationCTA from "@/components/residential/combination/CombinationCTA";
import GlassOptions from "@/components/residential/GlassOptions";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { TiltTurnIcon } from "@/components/icons/GlazingTypeIcons";

const Combination = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Combination Secondary Glazing Window Solutions",
    description: "Bespoke combination secondary glazing that blends different window styles. Perfect for complex configurations in period properties and mixed architectural designs.",
    canonicalPath: "/residential/combination",
    imageUrl: "/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["combination windows", "mixed window styles", "secondary glazing", "sash windows", "casement windows", "bay windows", "noise reduction", "thermal insulation"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title} | Secondary Glazing Specialist</title>
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
                "name": "Combination",
                "item": "https://secondaryglazingspecialist.com/residential/combination"
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
          <TiltTurnIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Combination Secondary Glazing</h1>
        </div>
        <CombinationIntro />
        <AvailableCombinations />
        <TechnicalSpecs />
        <GlassOptions />
        <CombinationCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Combination;

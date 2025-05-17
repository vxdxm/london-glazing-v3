
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { AirGapHeader } from "@/components/specialized/airgap/AirGapHeader";
import { UnderstandingAirGap } from "@/components/specialized/airgap/UnderstandingAirGap";
import { StandardCavity } from "@/components/specialized/airgap/StandardCavity";
import { EnhancedCavity } from "@/components/specialized/airgap/EnhancedCavity";
import { FactorsAffectingCavity } from "@/components/specialized/airgap/FactorsAffectingCavity";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const AirGapSecondaryGlazing = () => {
  const pageMetadata = {
    title: "Air Gap Secondary Glazing | Optimal Cavity Spacing Guide",
    description: "Learn about optimal air gap distances in secondary glazing installations. Expert guide on 100mm and 150mm cavity spacing for maximum thermal and acoustic performance.",
    canonicalPath: "/specialized/air-gap-secondary-glazing",
    imageUrl: "https://secondaryglazingspecialist.com/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png",
    type: "article" as const,
    publishedDate: "2024-07-10",
    modifiedDate: "2025-05-17",
    keywords: ["air gap secondary glazing", "cavity spacing", "window insulation", "thermal performance", "acoustic insulation", "100mm cavity", "150mm cavity"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Add console logging for indexing verification
  useEffect(() => {
    console.log("Air Gap Secondary Glazing page loaded for indexing");
  }, []);

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
        {pageMetadata.imageUrl && <meta property="og:image" content={pageMetadata.imageUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={pageMetadata.imageUrl} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
        
        {/* Breadcrumb structured data */}
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
                "name": "Specialized Services",
                "item": "https://secondaryglazingspecialist.com/specialized"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Air Gap Secondary Glazing",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <main id="main-content" className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <AirGapHeader />
        
        <div className="grid gap-8">
          <UnderstandingAirGap />
          <StandardCavity />
          <EnhancedCavity />
          <FactorsAffectingCavity />

          <section id="calculator" aria-labelledby="calculator-heading" className="my-12">
            <h2 id="calculator-heading" className="text-3xl font-semibold mb-6 text-center">Calculate Your Noise Reduction</h2>
            <NoiseReductionCalculator />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AirGapSecondaryGlazing;

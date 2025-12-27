import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { FixedHero } from "@/components/residential/fixed/FixedHero";
import { WhatIsFixed } from "@/components/residential/fixed/WhatIsFixed";
import { WhenToChooseFixed } from "@/components/residential/fixed/WhenToChooseFixed";
import { FixedCostValue } from "@/components/residential/fixed/FixedCostValue";
import { FixedAccessCleaning } from "@/components/residential/fixed/FixedAccessCleaning";
import { FixedPerformance } from "@/components/residential/fixed/FixedPerformance";
import { FixedIdealApplications } from "@/components/residential/fixed/FixedIdealApplications";
import { FixedGlassSpecs } from "@/components/residential/fixed/FixedGlassSpecs";
import { FixedInstallation } from "@/components/residential/fixed/FixedInstallation";
import { FixedComparison } from "@/components/residential/fixed/FixedComparison";
import { FixedFAQ } from "@/components/residential/fixed/FixedFAQ";
import { FixedCTA } from "@/components/residential/fixed/FixedCTA";

const FixedSecondaryGlazing = () => {
  const pageMetadata = {
    title: "Fixed Secondary Glazing | Maximum Performance, Lowest Cost | London",
    description: "Fixed secondary glazing offers maximum thermal (60-70% heat reduction) and acoustic performance (75-85% noise reduction) at the lowest cost from £250-£550 per window. Perfect for never-opened windows and extreme noise environments.",
    canonicalPath: "/residential/fixed-secondary-glazing",
    imageUrl: "/lovable-uploads/79704a01-b2d6-4a7a-bafa-92ca6af81c70.png",
    type: "article" as const,
    publishedDate: "2024-01-01",
    modifiedDate: "2025-06-15",
    keywords: ["fixed secondary glazing", "permanent glazing", "window insulation", "thermal efficiency", "noise reduction", "flight path windows", "listed buildings", "London"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often do I need to access between the panes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically once or twice yearly. The sealed space stays remarkably clean with minimal dust accumulation."
        }
      },
      {
        "@type": "Question",
        "name": "Is removal difficult for cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all – 4-8 screws around the perimeter, lift out the lightweight panel, clean, and replace. Most homeowners complete this in 5-10 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Can fixed glazing handle extreme noise like flight paths?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it's actually ideal. The continuous sealed perimeter provides maximum acoustic protection, especially when paired with 10.8-12.8mm acoustic glass."
        }
      },
      {
        "@type": "Question",
        "name": "What about ventilation in the room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixed glazing works best where mechanical ventilation (extractors, HVAC) handles air quality rather than relying on window opening. Not suitable for rooms requiring regular natural ventilation."
        }
      },
      {
        "@type": "Question",
        "name": "Will it work on listed buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The minimal intervention approach with no moving parts appeals to conservation officers as a simple, reversible solution that protects original windows permanently."
        }
      }
    ]
  };

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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        
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
                "name": "Residential",
                "item": "https://secondaryglazingspecialist.com/residential"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Fixed Secondary Glazing",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <div className="grid gap-8">
          <FixedHero />
          <WhatIsFixed />
          <WhenToChooseFixed />
          <FixedCostValue />
          <FixedAccessCleaning />
          <FixedPerformance />
          <FixedIdealApplications />
          <FixedGlassSpecs />
          <FixedInstallation />
          <FixedComparison />
          <FixedFAQ />
          <FixedCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FixedSecondaryGlazing;

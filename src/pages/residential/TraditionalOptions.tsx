import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { TraditionalHero } from "@/components/residential/traditional/TraditionalHero";
import { WhatIsTraditional } from "@/components/residential/traditional/WhatIsTraditional";
import { TraditionalOperatingStyles } from "@/components/residential/traditional/TraditionalOperatingStyles";
import { TraditionalMaterials } from "@/components/residential/traditional/TraditionalMaterials";
import { HeritagePropertyApplications } from "@/components/residential/traditional/HeritagePropertyApplications";
import { PlanningPermission } from "@/components/residential/traditional/PlanningPermission";
import { TraditionalCostAnalysis } from "@/components/residential/traditional/TraditionalCostAnalysis";
import { TraditionalCaseStudies } from "@/components/residential/traditional/TraditionalCaseStudies";
import { TraditionalInstallation } from "@/components/residential/traditional/TraditionalInstallation";
import { TraditionalFAQs } from "@/components/residential/traditional/TraditionalFAQs";
import { TraditionalCTA } from "@/components/residential/traditional/TraditionalCTA";

const TraditionalOptions = () => {
  const pageMetadata = {
    title: "Traditional Secondary Glazing for Heritage Properties | London Specialists",
    description: "Traditional secondary glazing for London's period properties. Heritage-approved solutions with authentic operating styles, period materials, and conservation-friendly aesthetics. £400-£900 per window.",
    canonicalPath: "/residential/traditional-options",
    imageUrl: "/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png",
    type: "article" as const,
    publishedDate: "2025-01-01",
    modifiedDate: "2025-01-15",
    keywords: ["traditional secondary glazing", "heritage windows", "listed buildings", "conservation areas", "Victorian windows", "Georgian windows", "Edwardian properties", "timber frames", "vertical slider", "side-hung hinged"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes secondary glazing 'traditional'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional refers to operating styles (hinged/slider), materials (timber/slim aluminum), aesthetics (slim profiles), and heritage approach (conservation-approved)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need planning permission for traditional secondary glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most listed building installations require no permission as they're internal modifications. Conservation areas may require approval - traditional solutions increase likelihood."
        }
      },
      {
        "@type": "Question",
        "name": "How much does traditional secondary glazing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional options cost £400-£900 per window depending on material and operation. Side-hung hinged aluminum costs £400-£700, vertical slider aluminum £450-£750, and timber frames £500-£900."
        }
      },
      {
        "@type": "Question",
        "name": "Can traditional systems match my period windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - vertical sliders suit Georgian/Victorian sash windows, side-hung hinged match casements, with period-appropriate materials and colors."
        }
      },
      {
        "@type": "Question",
        "name": "What maintenance do traditional secondary glazing systems require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aluminum frames require minimal maintenance, timber frames need repainting every 5-7 years, hinged systems may need occasional adjustment."
        }
      }
    ]
  };

  const breadcrumbSchema = {
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
        "name": "Traditional Options",
        "item": "https://secondaryglazingspecialist.com/residential/traditional-options"
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
        
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        <script type="application/ld+json">{pageSchema}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <TraditionalHero />
        <WhatIsTraditional />
        <TraditionalOperatingStyles />
        <TraditionalMaterials />
        <HeritagePropertyApplications />
        <PlanningPermission />
        <TraditionalCostAnalysis />
        <TraditionalCaseStudies />
        <TraditionalInstallation />
        <TraditionalFAQs />
        <TraditionalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default TraditionalOptions;

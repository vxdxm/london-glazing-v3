import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { CrittallHero } from "@/components/residential/crittall/CrittallHero";
import { WhatAreCrittallWindows } from "@/components/residential/crittall/WhatAreCrittallWindows";
import { CrittallDilemma } from "@/components/residential/crittall/CrittallDilemma";
import { CrittallAestheticPreservation } from "@/components/residential/crittall/CrittallAestheticPreservation";
import { CrittallComprehensiveBenefits } from "@/components/residential/crittall/CrittallComprehensiveBenefits";
import { CrittallOptions } from "@/components/residential/crittall/CrittallOptions";
import { CrittallGlassSpecs } from "@/components/residential/crittall/CrittallGlassSpecs";
import { CrittallInstallation } from "@/components/residential/crittall/CrittallInstallation";
import { CrittallInvestment } from "@/components/residential/crittall/CrittallInvestment";
import { CrittallCaseStudies } from "@/components/residential/crittall/CrittallCaseStudies";
import { CrittallComparison } from "@/components/residential/crittall/CrittallComparison";
import { CrittallNewFAQ } from "@/components/residential/crittall/CrittallNewFAQ";
import { CrittallCTA } from "@/components/residential/crittall/CrittallCTA";
import { Helmet } from "react-helmet-async";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const CrittallWindows = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Crittall Windows | Heritage Window Solutions London",
    description: "Preserve your iconic Crittall grids while achieving 50-65% energy reduction and avoiding £12,000-£18,000 replacement costs. Listed building approved. 70-80% noise reduction.",
    canonicalPath: "/residential/crittall-windows",
    imageUrl: "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
    keywords: ["crittall windows", "secondary glazing", "art deco windows", "heritage windows", "listed building", "W20 crittall", "W40 crittall", "noise reduction", "energy efficiency", "condensation", "London"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will secondary glazing hide my Crittall grid pattern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely not! The grid pattern is 100% preserved. From the street, your Crittall looks exactly the same with zero change to exterior appearance."
        }
      },
      {
        "@type": "Question",
        "name": "How much does secondary glazing cost vs replacing my Crittall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing costs £3,500-£7,000 for typical properties versus £12,000-£18,000 for new Crittall replacement. This saves £5,000-£11,000 (50-70% cheaper)."
        }
      },
      {
        "@type": "Question",
        "name": "Will it work for my listed Art Deco building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, perfectly. Secondary glazing is reversible and doesn't alter your original Crittall windows, making it ideal for listed buildings."
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
        "item": "https://secondaryglazingspecialist.com"
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
        "name": "Crittall Windows",
        "item": "https://secondaryglazingspecialist.com/residential/crittall-windows"
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <CrittallHero />
        <WhatAreCrittallWindows />
        <CrittallDilemma />
        <CrittallAestheticPreservation />
        <CrittallComprehensiveBenefits />
        <CrittallOptions />
        <CrittallGlassSpecs />
        <CrittallInstallation />
        <CrittallInvestment />
        <CrittallCaseStudies />
        <CrittallComparison />
        <CrittallNewFAQ />
        <CrittallCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CrittallWindows;

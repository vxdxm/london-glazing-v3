import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import BayHero from "@/components/residential/bay/BayHero";
import WhyBayNeedsGlazing from "@/components/residential/bay/WhyBayNeedsGlazing";
import BayWindowTypes from "@/components/residential/bay/BayWindowTypes";
import BayBenefits from "@/components/residential/bay/BayBenefits";
import BayConfigurationOptions from "@/components/residential/bay/BayConfigurationOptions";
import BayInstallationProcess from "@/components/residential/bay/BayInstallationProcess";
import BayInvestment from "@/components/residential/bay/BayInvestment";
import BayCaseStudies from "@/components/residential/bay/BayCaseStudies";
import BayComparison from "@/components/residential/bay/BayComparison";
import BayFAQ from "@/components/residential/bay/BayFAQ";
import BayWindowCTANew from "@/components/residential/bay/BayWindowCTANew";
import GlassOptions from "@/components/residential/GlassOptions";
import { Helmet } from "react-helmet";
import { HingedPanelIcon } from "@/components/icons/GlazingTypeIcons";

const BayWindows = () => {
  const pageMetadata = {
    title: "Bay Window Secondary Glazing London | Victorian & Edwardian Bays",
    description: "Transform cold, draughty bay windows into warm, comfortable spaces. 45-60% heat loss reduction, 70-80% noise reduction. Specialist bay window secondary glazing for Victorian and Edwardian properties across London.",
    canonicalPath: "/residential/bay-windows",
    imageUrl: "/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png",
    keywords: ["bay window secondary glazing", "Victorian bay windows", "Edwardian bay windows", "box bay glazing", "canted bay windows", "bow window glazing", "heritage bay windows", "London bay window specialists"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does bay window secondary glazing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from £1,200-£3,200 depending on bay size and configuration - typically 50-70% cheaper than bay replacement."
        }
      },
      {
        "@type": "Question",
        "name": "Can I still use my bay window seat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, secondary glazing installs in window reveals without obstructing bay seating areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle complex bay angles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our specialists custom-manufacture angle adaptors for any bay configuration - box, canted, bow, or unique angles."
        }
      },
      {
        "@type": "Question",
        "name": "Will it work on listed building bays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Secondary glazing is usually acceptable for listed buildings as it preserves original features while adding reversible performance improvements."
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most bay installations complete in 1-2 days with minimal disruption to your home."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bay Window Secondary Glazing",
    "description": "Professional secondary glazing for Victorian and Edwardian bay windows. Transform cold, draughty bays into warm, comfortable living spaces while preserving heritage character.",
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png",
    "brand": {
      "@type": "Brand",
      "name": "Secondary Glazing Specialist"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "1200",
      "highPrice": "3500",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
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
        "name": "Residential Solutions",
        "item": "https://secondaryglazingspecialist.com/residential"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bay Windows",
        "item": "https://secondaryglazingspecialist.com/residential/bay-windows"
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-6">
          <HingedPanelIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Bay Window Secondary Glazing</h1>
        </div>
        
        <BayHero />
        <WhyBayNeedsGlazing />
        <BayWindowTypes />
        <BayBenefits />
        <BayConfigurationOptions />
        <BayInstallationProcess />
        <BayInvestment />
        <BayCaseStudies />
        <BayComparison />
        <GlassOptions />
        <BayFAQ />
        <BayWindowCTANew />
      </div>
      <Footer />
    </div>
  );
};

export default BayWindows;

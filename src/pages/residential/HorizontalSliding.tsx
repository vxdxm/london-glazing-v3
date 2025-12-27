import React from "react";
import { MainNav } from "@/components/MainNav";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import HorizontalHero from "@/components/residential/horizontal/HorizontalHero";
import WhatIsHorizontalSliding from "@/components/residential/horizontal/WhatIsHorizontalSliding";
import WhyChooseHorizontal from "@/components/residential/horizontal/WhyChooseHorizontal";
import HorizontalBenefits from "@/components/residential/horizontal/HorizontalBenefits";
import HorizontalSystems from "@/components/residential/horizontal/HorizontalSystems";
import HorizontalGlassSpecs from "@/components/residential/horizontal/HorizontalGlassSpecs";
import HorizontalInstallation from "@/components/residential/horizontal/HorizontalInstallation";
import HorizontalInvestment from "@/components/residential/horizontal/HorizontalInvestment";
import HorizontalCaseStudies from "@/components/residential/horizontal/HorizontalCaseStudies";
import HorizontalComparison from "@/components/residential/horizontal/HorizontalComparison";
import HorizontalFAQ from "@/components/residential/horizontal/HorizontalFAQ";
import HorizontalCTA from "@/components/residential/horizontal/HorizontalCTA";
import { Helmet } from "react-helmet";
import { HorizontalSlidingIcon } from "@/components/icons/GlazingTypeIcons";

const HorizontalSliding = () => {
  const pageMetadata = {
    title: "Horizontal Sliding Secondary Glazing London | Wide Windows & Modern Properties",
    description: "Horizontal sliding secondary glazing for wide windows 2-5m+. 50-65% energy reduction, 70-80% noise reduction. Smooth gliding operation ideal for modern properties and large glass areas.",
    canonicalPath: "/residential/horizontal-sliding",
    imageUrl: "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
    keywords: ["horizontal sliding secondary glazing", "wide window glazing", "multi-track glazing", "modern secondary glazing", "panoramic window glazing", "patio door secondary glazing"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does horizontal sliding secondary glazing cost?", "acceptedAnswer": { "@type": "Answer", "text": "Costs range from £400-£2,500+ depending on width. Standard systems up to 2.5m cost £400-£900, multi-track systems £900-£2,500+." }},
      { "@type": "Question", "name": "Can I open the full width of my window?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, panels slide completely apart to expose the entire primary window width for full access, cleaning, and maximum ventilation." }},
      { "@type": "Question", "name": "How wide can horizontal sliding secondary glazing go?", "acceptedAnswer": { "@type": "Answer", "text": "Systems can span 5 metres or more with multi-track configurations." }}
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://secondaryglazingspecialist.com/" },
      { "@type": "ListItem", "position": 2, "name": "Residential Solutions", "item": "https://secondaryglazingspecialist.com/residential" },
      { "@type": "ListItem", "position": 3, "name": "Horizontal Sliding", "item": "https://secondaryglazingspecialist.com/residential/horizontal-sliding" }
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-6">
          <HorizontalSlidingIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Horizontal Sliding Secondary Glazing</h1>
        </div>
        
        <HorizontalHero />
        <WhatIsHorizontalSliding />
        <WhyChooseHorizontal />
        <HorizontalBenefits />
        <HorizontalSystems />
        <HorizontalGlassSpecs />
        <HorizontalInstallation />
        <HorizontalInvestment />
        <HorizontalCaseStudies />
        <HorizontalComparison />
        <HorizontalFAQ />
        <HorizontalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default HorizontalSliding;


import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import IntroSection from "@/components/residential/modern/IntroSection";
import TableOfContents from "@/components/residential/modern/TableOfContents";
import HistoricBuildingsSection from "@/components/residential/modern/HistoricBuildingsSection";
import EnergyEfficiencySection from "@/components/residential/modern/EnergyEfficiencySection";
import PreservationSection from "@/components/residential/modern/PreservationSection";
import ComfortSection from "@/components/residential/modern/ComfortSection";
import BenefitsSection from "@/components/residential/modern/BenefitsSection";
import ConclusionSection from "@/components/residential/modern/ConclusionSection";
import FAQsSection from "@/components/residential/modern/FAQsSection";
import PageFooter from "@/components/residential/modern/PageFooter";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";
import { HorizontalSlidingIcon } from "@/components/icons/GlazingTypeIcons";

const ModernSolutions = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Modern Secondary Glazing Solutions for Heritage Properties",
    description: "Discover how modern secondary glazing techniques can enhance historic properties with improved energy efficiency and noise reduction while preserving architectural integrity.",
    canonicalPath: "/residential/modern-solutions",
    imageUrl: "/lovable-uploads/c23f8df7-ca5f-4d5d-913a-5d6c11eae435.jpg",
    type: "article" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["modern secondary glazing", "heritage properties", "energy efficiency", "noise reduction", "window preservation", "architectural integrity", "thermal performance"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Implement scrollToTop function to pass to PageFooter
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="flex items-center gap-4 mb-6">
          <HorizontalSlidingIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Modern Secondary Glazing Solutions</h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <IntroSection />
          <TableOfContents />
          <HistoricBuildingsSection />
          <EnergyEfficiencySection />
          <PreservationSection />
          <ComfortSection />
          <BenefitsSection />
          <ConclusionSection />
          <FAQsSection />
          <PageFooter scrollToTop={scrollToTop} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModernSolutions;

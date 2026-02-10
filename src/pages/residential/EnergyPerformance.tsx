
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnergyPerformanceIntro } from "@/components/residential/energy/EnergyPerformanceIntro";
import { EnergyPerformanceBenefits } from "@/components/residential/energy/EnergyPerformanceBenefits";
import { EnergyPerformanceCalculator } from "@/components/residential/energy/EnergyPerformanceCalculator";
import { EnergyPerformanceHero } from "@/components/residential/energy/EnergyPerformanceHero";
import { EnergyPerformanceArticle } from "@/components/residential/energy/EnergyPerformanceArticle";
import { EnergyPerformanceFAQ } from "@/components/residential/energy/EnergyPerformanceFAQ";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";
import { MagneticIcon } from "@/components/icons/GlazingTypeIcons";

const EnergyPerformance = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Energy Performance & Secondary Glazing | Improve Your Home's Efficiency",
    description: "Boost your home's energy performance with secondary glazing. Calculate your potential savings from improved insulation and reduced heat loss - up to 60% more efficient.",
    canonicalPath: "/residential/energy-performance",
    imageUrl: "/lovable-uploads/580ad3ed-9e6a-4a69-81ad-2a84b36a0150.jpg",
    type: "article" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["secondary glazing", "energy efficiency", "thermal performance", "energy savings", "window insulation", "home improvement"]
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
        
        {/* Additional structured data for article */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Energy Performance & Secondary Glazing Guide",
            "description": "Comprehensive guide to improving home energy efficiency with secondary glazing, including benefits, installation techniques, and cost analysis.",
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://secondaryglazingspecialist.com/residential/energy-performance"
            }
          }
        `}
        </script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <MagneticIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Energy Performance & Secondary Glazing</h1>
        </div>
        <EnergyPerformanceHero />
        <EnergyPerformanceIntro />
        <EnergyPerformanceBenefits />
        <EnergyPerformanceCalculator />
        <EnergyPerformanceArticle />
        <EnergyPerformanceFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default EnergyPerformance;

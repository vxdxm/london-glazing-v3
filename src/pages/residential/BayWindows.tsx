
import React from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import BayWindowHeader from "@/components/residential/bay/BayWindowHeader";
import BayWindowStyles from "@/components/residential/bay/BayWindowStyles";
import BayWindowFeatures from "@/components/residential/bay/BayWindowFeatures";
import BayWindowCTA from "@/components/residential/bay/BayWindowCTA";
import GlassOptions from "@/components/residential/GlassOptions";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const BayWindows = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Bay Window Secondary Glazing | Enhance Heritage Windows",
    description: "Expert secondary glazing for bay windows that preserves period features while enhancing thermal and acoustic performance. Bespoke solutions for London properties.",
    canonicalPath: "/residential/bay-windows",
    imageUrl: "/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["bay window secondary glazing", "bay window insulation", "heritage bay windows", "thermal performance", "acoustic glazing", "traditional bay window solutions"]
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
                "name": "Bay Windows",
                "item": "https://secondaryglazingspecialist.com/residential/bay-windows"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <BayWindowHeader />
        <BayWindowStyles />
        <BayWindowFeatures />
        <GlassOptions />
        <BayWindowCTA />
      </div>
      <Footer />
    </div>
  );
};

export default BayWindows;

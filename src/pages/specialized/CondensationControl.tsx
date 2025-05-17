
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import ContactUsButton from "@/components/ContactUsButton";
import { CondensationHeader } from "@/components/specialized/condensation/CondensationHeader";
import { CondensationInfoCards } from "@/components/specialized/condensation/CondensationInfoCards";
import { CondensationExplanationCards } from "@/components/specialized/condensation/CondensationExplanationCards";
import { VentilationOptions } from "@/components/specialized/condensation/VentilationOptions";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const CondensationControl = () => {
  const pageMetadata = {
    title: "Condensation Control Secondary Glazing | Window Moisture Solutions",
    description: "Expert condensation control solutions through secondary glazing. Prevent moisture buildup, mold growth and protect your windows with our specialized installations.",
    canonicalPath: "/specialized/condensation-control",
    imageUrl: "/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png",
    type: "article" as const,
    publishedDate: "2024-07-15",
    modifiedDate: "2025-05-17",
    keywords: ["condensation control", "secondary glazing", "moisture control", "window protection", "mold prevention", "ventilation", "London glazing specialist"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Add logging for indexing
  useEffect(() => {
    console.log("Condensation Control page loaded for indexing");
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
                "name": "Condensation Control",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <CondensationHeader />
        <CondensationInfoCards />
        <CondensationExplanationCards />
        <VentilationOptions />
      </div>
      <WhatsAppButton />
      <GetQuoteButton />
      <ContactUsButton />
      <Footer />
    </div>
  );
};

export default CondensationControl;

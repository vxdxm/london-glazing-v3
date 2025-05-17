
import React from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const OfficeSEO = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Office Buildings | Noise & Energy Solutions",
    description: "Transform your office with secondary glazing - reduce workplace noise by up to 80% and improve energy efficiency. Create comfortable, productive workspaces in London.",
    canonicalPath: "/commercial/office-buildings",
    imageUrl: "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
    type: "website" as const,
    publishedDate: "2024-10-15",
    modifiedDate: "2025-05-17",
    keywords: ["office glazing", "commercial glazing", "office noise reduction", "business energy efficiency", "workspace insulation", "office window improvements"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta 
        name="description" 
        content={pageMetadata.description} 
      />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <meta name="twitter:image" content={pageMetadata.imageUrl} />
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Office Buildings",
          "description": "Our expert secondary glazing solutions for office buildings are designed to enhance workplace comfort and productivity. By installing an additional layer of glazing to existing windows, we help create quieter, more energy-efficient office environments.",
          "image": "${pageMetadata.imageUrl}",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-lg", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Office Building Secondary Glazing",
            "description": "Specialized glazing solutions for commercial office buildings.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "streetAddress": "Arch 141, MacFarlane Road"
              },
              "telephone": "0207 060 1572"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            }
          },
          "breadcrumb": {
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
                "name": "Commercial Solutions",
                "item": "https://secondaryglazingspecialist.com/commercial"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Office Buildings",
                "item": "https://secondaryglazingspecialist.com/commercial/office-buildings"
              }
            ]
          }
        }
      `}
      </script>
    </Helmet>
  );
};

export default OfficeSEO;

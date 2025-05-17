
import React from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const HospitalitySEO = () => {
  const pageMetadata = {
    title: "Hospitality Secondary Glazing | Hotels & Restaurants Solutions",
    description: "Specialist secondary glazing for hotels and restaurants. Create peaceful guest environments, reduce street noise, and enhance energy efficiency in your hospitality venue.",
    canonicalPath: "/commercial/hospitality-sector",
    imageUrl: "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
    type: "website" as const,
    publishedDate: "2024-11-10",
    modifiedDate: "2025-05-17",
    keywords: ["hotel glazing", "restaurant glazing", "hospitality windows", "noise reduction", "hotel sound insulation", "thermal glazing"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for the Hospitality Industry",
          "description": "Create the perfect environment for your guests with our premium secondary glazing solutions, designed specifically for hotels, restaurants, and leisure facilities.",
          "image": "${pageMetadata.imageUrl}",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-lg", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Hospitality Secondary Glazing",
            "description": "Specialized glazing solutions for hotels, restaurants, and bars.",
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
          }
        }
      `}
      </script>
    </Helmet>
  );
};

export default HospitalitySEO;

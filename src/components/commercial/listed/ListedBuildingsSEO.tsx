
import React from "react";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const ListedBuildingsSEO = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Listed Buildings | Heritage Conservation London",
    description: "Conservation-compliant secondary glazing for listed buildings. Improve thermal and acoustic performance while preserving architectural heritage - planning permission friendly.",
    canonicalPath: "/commercial/listed-buildings",
    imageUrl: "https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-09",
    keywords: ["listed buildings secondary glazing", "conservation area windows", "heritage glazing London", "historic window solutions", "planning permission secondary glazing", "thermal insulation listed buildings", "noise reduction heritage properties"]
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
      
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <meta name="twitter:image" content={pageMetadata.imageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Listed Buildings and Conservation Areas",
          "description": "Our specialist secondary glazing solutions are designed to meet strict conservation requirements while providing modern comfort benefits to listed and heritage properties in London.",
          "image": pageMetadata.imageUrl,
          "datePublished": pageMetadata.publishedDate,
          "dateModified": pageMetadata.modifiedDate,
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-4xl", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Listed Building Secondary Glazing",
            "description": "Specialized glazing solutions for listed buildings and conservation areas.",
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
        })}
      </script>
    </Helmet>
  );
};

export default ListedBuildingsSEO;

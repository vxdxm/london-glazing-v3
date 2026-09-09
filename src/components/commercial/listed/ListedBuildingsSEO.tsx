
import React from "react";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const ListedBuildingsSEO = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Listed Buildings | Heritage Conservation London",
    description: "Conservation-compliant secondary glazing for listed buildings.",
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

export const PAGE_FAQS = [
  { question: "Is secondary glazing acceptable in listed buildings?", answer: "Yes. Historic England and most LPAs prefer secondary glazing over primary window replacement in Grade I, II* and II properties because it is internal, reversible and does not alter the historic fabric or external appearance." },
  { question: "Do I need Listed Building Consent?", answer: "Listed Building Consent is generally required for any works to a listed building. Applications for slimline internal secondary glazing are routinely approved when supported by a Heritage Statement demonstrating reversibility and minimal visual impact." },
  { question: "How does it comply with conservation area rules?", answer: "As secondary glazing sits internally, it is invisible from the public realm and does not require planning permission in conservation areas. Article 4 directions restricting primary window replacement do not affect internal secondary glazing." },
  { question: "Can sightlines match original glazing bars?", answer: "Yes. Slimline aluminium systems with 20–25mm frames can be aligned with existing muntins and painted to match, keeping the historic elevation reading unchanged." },
  { question: "What thermal and acoustic performance is achievable?", answer: "Typical listed-building installations achieve U-values of 1.6–1.9 W/m²K and 45–52dB Rw with laminated acoustic glass, meeting Part L retrofit and BS 8233 residential noise criteria without altering primary joinery." }
];

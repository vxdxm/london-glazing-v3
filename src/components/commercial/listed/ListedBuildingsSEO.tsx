
import React from "react";
import { Helmet } from "react-helmet";

const ListedBuildingsSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing for Listed Buildings | Heritage Conservation London</title>
      <meta 
        name="description" 
        content="Conservation-compliant secondary glazing for listed buildings. Improve thermal and acoustic performance while preserving architectural heritage - planning permission friendly." 
      />
      <meta name="keywords" content="listed buildings secondary glazing, conservation area windows, heritage glazing London, historic window solutions, planning permission secondary glazing, thermal insulation listed buildings, noise reduction heritage properties" />
      
      <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/listed-buildings" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/commercial/listed-buildings" />
      <meta property="og:title" content="Secondary Glazing for Listed Buildings | Heritage Conservation" />
      <meta property="og:description" content="Conservation-compliant secondary glazing for listed buildings. Improve thermal and acoustic performance while preserving architectural heritage - planning permission friendly." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/commercial/listed-buildings" />
      <meta name="twitter:title" content="Secondary Glazing for Listed Buildings | Heritage Conservation" />
      <meta name="twitter:description" content="Conservation-compliant secondary glazing for listed buildings. Improve thermal and acoustic performance while preserving architectural heritage - planning permission friendly." />
      <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Listed Buildings and Conservation Areas",
          "description": "Our specialist secondary glazing solutions are designed to meet strict conservation requirements while providing modern comfort benefits to listed and heritage properties in London.",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
          "datePublished": "2025-05-09",
          "dateModified": "2025-05-09",
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


import React from "react";
import { Helmet } from "react-helmet";

const ListedBuildingsSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing for Listed Buildings | Heritage Conservation Solutions</title>
      <meta name="description" content="Specialist secondary glazing solutions for listed buildings and conservation areas. Maintain architectural heritage while improving thermal and acoustic performance." />
      <meta name="keywords" content="listed buildings, conservation areas, heritage glazing, historic windows, planning permission, thermal insulation, noise reduction" />
      <meta property="og:title" content="Secondary Glazing for Listed Buildings" />
      <meta property="og:description" content="Specialist secondary glazing solutions that meet conservation requirements while enhancing comfort in listed buildings." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/commercial/listed-buildings" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/listed-buildings" />
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Listed Buildings",
          "description": "Our specialist secondary glazing solutions are designed to meet strict conservation requirements while providing modern comfort benefits to listed and heritage properties.",
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
        }
      `}
      </script>
    </Helmet>
  );
};

export default ListedBuildingsSEO;

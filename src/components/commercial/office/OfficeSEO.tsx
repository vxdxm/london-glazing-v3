
import React from "react";
import { Helmet } from "react-helmet";

const OfficeSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing for Office Buildings | Noise & Energy Solutions</title>
      <meta name="description" content="Transform your office with premium secondary glazing solutions. Reduce noise by up to 80%, improve energy efficiency, and create a more comfortable working environment." />
      <meta name="keywords" content="office glazing, commercial glazing, office noise reduction, business energy efficiency, workspace insulation, office window improvements" />
      <meta property="og:title" content="Secondary Glazing for Office Buildings" />
      <meta property="og:description" content="Transform your office environment with our premium secondary glazing solutions for improved acoustics and energy efficiency." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Secondary Glazing for Office Buildings" />
      <meta name="twitter:description" content="Premium secondary glazing solutions for office buildings." />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/office-buildings" />
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for Office Buildings",
          "description": "Our expert secondary glazing solutions for office buildings are designed to enhance workplace comfort and productivity. By installing an additional layer of glazing to existing windows, we help create quieter, more energy-efficient office environments.",
          "image": "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
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
          }
        }
      `}
      </script>
    </Helmet>
  );
};

export default OfficeSEO;

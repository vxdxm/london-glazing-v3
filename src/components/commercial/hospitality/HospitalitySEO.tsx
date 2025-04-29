
import React from "react";
import { Helmet } from "react-helmet";

const HospitalitySEO = () => {
  return (
    <Helmet>
      <title>Hospitality Secondary Glazing | Hotels & Restaurants Solutions</title>
      <meta name="description" content="Specialized secondary glazing solutions for the hospitality industry. Create peaceful environments for hotels and restaurants with our premium acoustic and thermal glazing." />
      <meta name="keywords" content="hotel glazing, restaurant glazing, hospitality windows, noise reduction, hotel sound insulation, thermal glazing" />
      <meta property="og:title" content="Secondary Glazing for Hospitality Industry" />
      <meta property="og:description" content="Create the perfect environment for your guests with our premium secondary glazing solutions for hotels and restaurants." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Secondary Glazing for Hospitality Industry" />
      <meta name="twitter:description" content="Premium secondary glazing solutions for hotels and restaurants." />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/hospitality-sector" />
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for the Hospitality Industry",
          "description": "Create the perfect environment for your guests with our premium secondary glazing solutions, designed specifically for hotels, restaurants, and leisure facilities.",
          "image": "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
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

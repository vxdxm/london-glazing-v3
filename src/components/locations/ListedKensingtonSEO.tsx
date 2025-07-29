import React from "react";
import { Helmet } from "react-helmet";

const ListedKensingtonSEO = () => {
  const currentDate = "2025-01-29";

  return (
    <Helmet>
      <title>Listed Building Secondary Glazing Kensington | Conservation Approved</title>
      <meta 
        name="description" 
        content="Conservation-approved secondary glazing for listed buildings in Kensington. Discreet, reversible designs meeting heritage requirements. Expert planning support included." 
      />
      <meta 
        name="keywords" 
        content="listed building secondary glazing, Kensington conservation area, heritage glazing, conservation approved, listed building consent, RBKC planning" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/listed-kensington" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/listed-kensington" />
      <meta property="og:title" content="Listed Building Secondary Glazing Kensington | Conservation Approved" />
      <meta property="og:description" content="Conservation-approved secondary glazing for listed buildings in Kensington. Discreet, reversible designs meeting heritage requirements." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/locations/listed-kensington" />
      <meta name="twitter:title" content="Listed Building Secondary Glazing Kensington | Conservation Approved" />
      <meta name="twitter:description" content="Conservation-approved secondary glazing for listed buildings in Kensington. Discreet, reversible designs meeting heritage requirements." />
      <meta property="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Listed Buildings Kensington",
          "description": "Conservation-approved secondary glazing for listed buildings in Kensington. Discreet, reversible designs meeting heritage requirements.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kensington",
            "addressRegion": "London",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "City",
            "name": "Kensington, London"
          },
          "serviceType": "Listed Building Secondary Glazing",
          "datePublished": currentDate,
          "dateModified": currentDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/locations/listed-kensington"
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
                "name": "Locations",
                "item": "https://secondaryglazingspecialist.com/locations"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Listed Buildings Kensington",
                "item": "https://secondaryglazingspecialist.com/locations/listed-kensington"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default ListedKensingtonSEO;
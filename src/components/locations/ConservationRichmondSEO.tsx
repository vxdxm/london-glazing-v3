import React from "react";
import { Helmet } from "react-helmet";

const ConservationRichmondSEO = () => {
  const currentDate = "2025-01-29";

  return (
    <Helmet>
      <title>Conservation Area Secondary Glazing Richmond | Planning Approved Solutions</title>
      <meta 
        name="description" 
        content="Planning-compliant secondary glazing for Richmond conservation areas. Expert noise reduction & energy efficiency solutions with full local authority support." 
      />
      <meta 
        name="keywords" 
        content="Richmond conservation area secondary glazing, conservation area planning, Richmond planning permission, heritage secondary glazing, Richmond council approved" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/conservation-richmond" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/conservation-richmond" />
      <meta property="og:title" content="Conservation Area Secondary Glazing Richmond | Planning Approved Solutions" />
      <meta property="og:description" content="Planning-compliant secondary glazing for Richmond conservation areas. Expert noise reduction & energy efficiency solutions with full local authority support." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/locations/conservation-richmond" />
      <meta name="twitter:title" content="Conservation Area Secondary Glazing Richmond | Planning Approved Solutions" />
      <meta name="twitter:description" content="Planning-compliant secondary glazing for Richmond conservation areas. Expert noise reduction & energy efficiency solutions with full local authority support." />
      <meta property="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Conservation Areas Richmond",
          "description": "Planning-compliant secondary glazing for Richmond conservation areas. Expert noise reduction & energy efficiency solutions with full local authority support.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Richmond upon Thames",
            "addressRegion": "London",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "City",
            "name": "Richmond upon Thames, London"
          },
          "serviceType": "Conservation Area Secondary Glazing",
          "datePublished": currentDate,
          "dateModified": currentDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/locations/conservation-richmond"
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
                "name": "Conservation Areas Richmond",
                "item": "https://secondaryglazingspecialist.com/locations/conservation-richmond"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default ConservationRichmondSEO;
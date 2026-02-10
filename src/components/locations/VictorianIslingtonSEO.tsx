import React from "react";
import { Helmet } from "react-helmet-async";

const VictorianIslingtonSEO = () => {
  const currentDate = "2025-01-29";

  return (
    <Helmet>
      <title>Victorian Terrace Secondary Glazing Islington | Sash Window Specialists</title>
      <meta 
        name="description" 
        content="Expert secondary glazing for Victorian terraces in Islington. Specialist sash window solutions, draught proofing & period-sympathetic designs. Free quotes available." 
      />
      <meta 
        name="keywords" 
        content="Victorian terrace secondary glazing, Islington sash windows, period property glazing, draught proofing, Victorian windows Islington, heritage glazing" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/victorian-islington" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/victorian-islington" />
      <meta property="og:title" content="Victorian Terrace Secondary Glazing Islington | Sash Window Specialists" />
      <meta property="og:description" content="Expert secondary glazing for Victorian terraces in Islington. Specialist sash window solutions, draught proofing & period-sympathetic designs." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/locations/victorian-islington" />
      <meta name="twitter:title" content="Victorian Terrace Secondary Glazing Islington | Sash Window Specialists" />
      <meta name="twitter:description" content="Expert secondary glazing for Victorian terraces in Islington. Specialist sash window solutions, draught proofing & period-sympathetic designs." />
      <meta property="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Victorian Terraces Islington",
          "description": "Expert secondary glazing for Victorian terraces in Islington. Specialist sash window solutions, draught proofing & period-sympathetic designs.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Islington",
            "addressRegion": "London",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "City",
            "name": "Islington, London"
          },
          "serviceType": "Secondary Glazing for Victorian Properties",
          "datePublished": currentDate,
          "dateModified": currentDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/locations/victorian-islington"
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
                "name": "Victorian Terraces Islington",
                "item": "https://secondaryglazingspecialist.com/locations/victorian-islington"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default VictorianIslingtonSEO;
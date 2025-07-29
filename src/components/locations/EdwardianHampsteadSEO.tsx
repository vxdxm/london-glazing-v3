import React from "react";
import { Helmet } from "react-helmet";

const EdwardianHampsteadSEO = () => {
  const currentDate = "2025-01-29";

  return (
    <Helmet>
      <title>Edwardian Home Secondary Glazing Hampstead | Bay Window Specialists</title>
      <meta 
        name="description" 
        content="Expert secondary glazing for Edwardian homes in Hampstead. Specialist bay window solutions balancing thermal efficiency with heritage preservation. Free quotes." 
      />
      <meta 
        name="keywords" 
        content="Edwardian home secondary glazing, Hampstead bay windows, period property thermal efficiency, heritage glazing, conservation area glazing Hampstead" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/edwardian-hampstead" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/edwardian-hampstead" />
      <meta property="og:title" content="Edwardian Home Secondary Glazing Hampstead | Bay Window Specialists" />
      <meta property="og:description" content="Expert secondary glazing for Edwardian homes in Hampstead. Specialist bay window solutions balancing thermal efficiency with heritage preservation." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/locations/edwardian-hampstead" />
      <meta name="twitter:title" content="Edwardian Home Secondary Glazing Hampstead | Bay Window Specialists" />
      <meta name="twitter:description" content="Expert secondary glazing for Edwardian homes in Hampstead. Specialist bay window solutions balancing thermal efficiency with heritage preservation." />
      <meta property="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Edwardian Homes Hampstead",
          "description": "Expert secondary glazing for Edwardian homes in Hampstead. Specialist bay window solutions balancing thermal efficiency with heritage preservation.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hampstead",
            "addressRegion": "London",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "City",
            "name": "Hampstead, London"
          },
          "serviceType": "Secondary Glazing for Edwardian Properties",
          "datePublished": currentDate,
          "dateModified": currentDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/locations/edwardian-hampstead"
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
                "name": "Edwardian Homes Hampstead",
                "item": "https://secondaryglazingspecialist.com/locations/edwardian-hampstead"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default EdwardianHampsteadSEO;
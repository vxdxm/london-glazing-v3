import React from "react";
import { Helmet } from "react-helmet-async";

const GeorgianBelgraviaSEO = () => {
  const currentDate = "2025-01-29";

  return (
    <Helmet>
      <title>Georgian Property Secondary Glazing Belgravia | Period Window Specialists</title>
      <meta 
        name="description" 
        content="Expert secondary glazing for Georgian properties in Belgravia. Unobtrusive solutions for noise reduction, heat retention & heritage preservation. Westminster approved." 
      />
      <meta 
        name="keywords" 
        content="Georgian property secondary glazing, Belgravia heritage windows, Georgian sash windows, Westminster conservation, period property glazing, classical architecture" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/georgian-belgravia" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/locations/georgian-belgravia" />
      <meta property="og:title" content="Georgian Property Secondary Glazing Belgravia | Period Window Specialists" />
      <meta property="og:description" content="Expert secondary glazing for Georgian properties in Belgravia. Unobtrusive solutions for noise reduction, heat retention & heritage preservation." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/locations/georgian-belgravia" />
      <meta name="twitter:title" content="Georgian Property Secondary Glazing Belgravia | Period Window Specialists" />
      <meta name="twitter:description" content="Expert secondary glazing for Georgian properties in Belgravia. Unobtrusive solutions for noise reduction, heat retention & heritage preservation." />
      <meta property="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Secondary Glazing Specialist - Georgian Properties Belgravia",
          "description": "Expert secondary glazing for Georgian properties in Belgravia. Unobtrusive solutions for noise reduction, heat retention & heritage preservation.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Belgravia",
            "addressRegion": "London",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "City",
            "name": "Belgravia, London"
          },
          "serviceType": "Georgian Property Secondary Glazing",
          "datePublished": currentDate,
          "dateModified": currentDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/locations/georgian-belgravia"
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
                "name": "Georgian Properties Belgravia",
                "item": "https://secondaryglazingspecialist.com/locations/georgian-belgravia"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default GeorgianBelgraviaSEO;
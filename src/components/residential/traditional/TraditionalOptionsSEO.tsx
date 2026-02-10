
import React from "react";
import { Helmet } from "react-helmet-async";

const TraditionalOptionsSEO = () => {
  return (
    <Helmet>
      <title>Traditional Secondary Glazing for Listed Buildings | Secondary Glazing Specialist</title>
      <meta 
        name="description" 
        content="Discover how secondary glazing solutions can enhance energy efficiency and preserve the historical integrity of listed buildings. Expert installation and customization for period properties." 
      />
      <meta name="keywords" content="traditional secondary glazing, listed buildings, energy efficiency, historical windows, window insulation, period properties, heritage preservation" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/traditional-options" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/traditional-options" />
      <meta property="og:title" content="Traditional Secondary Glazing for Listed Buildings | Secondary Glazing Specialist" />
      <meta property="og:description" content="Expert secondary glazing solutions for listed buildings. Enhance energy efficiency while preserving historical integrity. Customized solutions for period properties." />
      <meta property="og:image" content="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/residential/traditional-options" />
      <meta name="twitter:title" content="Traditional Secondary Glazing for Listed Buildings | Secondary Glazing Specialist" />
      <meta name="twitter:description" content="Expert secondary glazing solutions for listed buildings. Enhance energy efficiency while preserving historical integrity. Customized solutions for period properties." />
      <meta name="twitter:image" content="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Traditional Secondary Glazing for Listed Buildings",
          "description": "Discover how secondary glazing solutions can enhance energy efficiency and preserve the historical integrity of listed buildings. Expert installation and customization for period properties.",
          "image": "/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png",
          "author": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist",
            "logo": {
              "@type": "ImageObject",
              "url": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
            }
          },
          "datePublished": "2025-05-09",
          "dateModified": "2025-05-09",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/residential/traditional-options"
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
                "name": "Residential Solutions",
                "item": "https://secondaryglazingspecialist.com/residential"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Traditional Options",
                "item": "https://secondaryglazingspecialist.com/residential/traditional-options"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default TraditionalOptionsSEO;

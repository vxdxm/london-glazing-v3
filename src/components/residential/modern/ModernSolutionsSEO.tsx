
import React from "react";
import { Helmet } from "react-helmet";

const ModernSolutionsSEO = () => {
  return (
    <Helmet>
      <title>Modern Secondary Glazing Solutions | Energy Efficiency for Historic Buildings</title>
      <meta 
        name="description" 
        content="Discover how modern secondary glazing solutions can transform historic buildings, providing energy efficiency while preserving architectural integrity." 
      />
      <meta 
        name="keywords" 
        content="secondary glazing, energy efficiency, historic buildings, window insulation, noise reduction, thermal efficiency, modern solutions" 
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/modern-solutions" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/modern-solutions" />
      <meta property="og:title" content="Modern Secondary Glazing Solutions | Energy Efficiency for Historic Buildings" />
      <meta property="og:description" content="Discover how modern secondary glazing solutions can transform historic buildings, providing energy efficiency while preserving architectural integrity." />
      <meta property="og:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://secondaryglazingspecialist.com/residential/modern-solutions" />
      <meta name="twitter:title" content="Modern Secondary Glazing Solutions | Energy Efficiency for Historic Buildings" />
      <meta name="twitter:description" content="Discover how modern secondary glazing solutions can transform historic buildings, providing energy efficiency while preserving architectural integrity." />
      <meta name="twitter:image" content="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Modern Secondary Glazing Solutions for Historic Buildings",
          "description": "Discover how modern secondary glazing solutions can transform historic buildings, providing energy efficiency while preserving architectural integrity.",
          "image": "/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png",
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
            "@id": "https://secondaryglazingspecialist.com/residential/modern-solutions"
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
                "name": "Modern Solutions",
                "item": "https://secondaryglazingspecialist.com/residential/modern-solutions"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default ModernSolutionsSEO;

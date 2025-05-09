
import React from 'react';
import { Helmet } from 'react-helmet';

const SashWindowsSEO = () => {
  // Update the current date for freshness signals
  const currentDate = "2025-05-09";

  return (
    <Helmet>
      <title>Sash Window Secondary Glazing | Period Property Solutions</title>
      <meta 
        name="description" 
        content="Preserve your period property's character with sash window secondary glazing. Enhance thermal and acoustic performance while maintaining original Victorian and Georgian features." 
      />
      <meta name="keywords" content="sash window secondary glazing, period property glazing, victorian window insulation, georgian windows, sliding sash windows, noise reduction, thermal insulation" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/sash-windows" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/sash-windows" />
      <meta property="og:title" content="Sash Window Secondary Glazing | Period Property Solutions" />
      <meta property="og:description" content="Preserve your period property's character with sash window secondary glazing. Enhance thermal and acoustic performance while maintaining original Victorian and Georgian features." />
      <meta property="og:image" content="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/residential/sash-windows" />
      <meta property="twitter:title" content="Sash Window Secondary Glazing | Period Property Solutions" />
      <meta property="twitter:description" content="Preserve your period property's character with sash window secondary glazing. Enhance thermal and acoustic performance while maintaining original Victorian and Georgian features." />
      <meta property="twitter:image" content="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Sash Window Secondary Glazing Solutions",
          "description": "Our sash window secondary glazing solutions are designed to preserve the original character of your period property while providing modern insulation benefits.",
          "image": "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
          "url": "https://secondaryglazingspecialist.com/residential/sash-windows",
          "dateModified": currentDate,
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-4xl", ".text-3xl", ".text-gray-700"]
          },
          "mainEntity": {
            "@type": "Product",
            "name": "Sash Window Secondary Glazing",
            "description": "Secondary glazing systems designed specifically for traditional sash windows, preserving period features while improving insulation.",
            "image": "/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            }
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
                "name": "Sash Windows",
                "item": "https://secondaryglazingspecialist.com/residential/sash-windows"
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SashWindowsSEO;

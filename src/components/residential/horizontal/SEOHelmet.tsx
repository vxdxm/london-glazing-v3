
import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHelmet = () => {
  // Update the current date for freshness signals
  const currentDate = "2026-01-01";
  
  return (
    <Helmet>
      <title>Horizontal Sliding Secondary Glazing | Smooth Operating Window Solutions</title>
      <meta 
        name="description" 
        content="Discover our horizontal sliding secondary glazing - ideal for wide windows with smooth operation and excellent ventilation. Combines thermal insulation with easy access." 
      />
      <meta name="keywords" content="horizontal sliding windows, sliding secondary glazing, thermal insulation, noise reduction, wide window openings, residential glazing" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/horizontal-sliding" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Horizontal Sliding Secondary Glazing" />
      <meta property="og:description" content="Discover our horizontal sliding secondary glazing - ideal for wide windows with smooth operation and excellent ventilation. Combines thermal insulation with easy access." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/horizontal-sliding" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Horizontal Sliding Secondary Glazing" />
      <meta name="twitter:description" content="Discover our horizontal sliding secondary glazing - ideal for wide windows with smooth operation and excellent ventilation. Combines thermal insulation with easy access." />
      <meta name="twitter:image" content="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png" />
      
      {/* Structured Data - Enhanced with proper product markup */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "Horizontal Sliding Secondary Glazing Solutions",
        "description": "Our horizontal sliding secondary glazing systems offer a perfect blend of functionality and aesthetics. These systems are designed to provide excellent thermal insulation and noise reduction while maintaining easy access to your existing windows.",
        "image": "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
        "url": "https://secondaryglazingspecialist.com/residential/horizontal-sliding",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".text-lg", ".card-title", ".card-description"]
        },
        "mainEntity": {
          "@type": "Product",
          "name": "Horizontal Sliding Secondary Glazing",
          "description": "Smooth-operating horizontal sliding panels that provide excellent insulation and easy access to primary windows.",
          "image": "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
          "brand": {
            "@type": "Brand",
            "name": "Secondary Glazing Specialist"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock"
          },
          "datePublished": currentDate,
          "dateModified": currentDate
        }
      })}
      </script>
      
      {/* Add breadcrumb structured data */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
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
            "name": "Horizontal Sliding",
            "item": "https://secondaryglazingspecialist.com/residential/horizontal-sliding"
          }
        ]
      })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;

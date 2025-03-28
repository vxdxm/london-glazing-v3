
import React from 'react';
import { Helmet } from 'react-helmet';

const CombinationSEO = () => {
  return (
    <Helmet>
      <title>Combination Secondary Glazing Window Solutions | Secondary Glazing Specialist</title>
      <meta name="description" content="Custom combination secondary glazing solutions that blend different window styles for maximum versatility. Perfect for complex window configurations and mixed architectural styles." />
      <meta name="keywords" content="combination windows, mixed window styles, secondary glazing, sash windows, casement windows, bay windows, noise reduction, thermal insulation" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/combination" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Combination Secondary Glazing Window Solutions" />
      <meta property="og:description" content="Custom combination secondary glazing solutions that blend different window styles for maximum functionality and aesthetic appeal." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/combination" />
      <meta property="og:image" content="/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/residential/combination" />
      <meta property="twitter:title" content="Combination Secondary Glazing Window Solutions" />
      <meta property="twitter:description" content="Custom combination secondary glazing solutions that blend different window styles for maximum versatility." />
      <meta property="twitter:image" content="/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Combination Secondary Glazing",
          "description": "Custom combination secondary glazing solutions that blend different window styles for maximum versatility.",
          "image": "/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png",
          "brand": {
            "@type": "Brand",
            "name": "Secondary Glazing Specialist"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
    </Helmet>
  );
};

export default CombinationSEO;


import React from 'react';
import { Helmet } from 'react-helmet';

const BayWindowsSEO = () => {
  return (
    <Helmet>
      <title>Bay Window Secondary Glazing | Enhance Heritage Windows</title>
      <meta name="description" content="Specialized secondary glazing solutions for bay windows that preserve architectural beauty while improving thermal and acoustic performance." />
      <meta name="keywords" content="bay window secondary glazing, bay window insulation, heritage bay windows, thermal performance, acoustic glazing, traditional bay window solutions" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/bay-windows" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/bay-windows" />
      <meta property="og:title" content="Bay Window Secondary Glazing | Enhance Heritage Windows" />
      <meta property="og:description" content="Specialized secondary glazing solutions for bay windows that preserve architectural beauty while improving thermal and acoustic performance." />
      <meta property="og:image" content="/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/residential/bay-windows" />
      <meta property="twitter:title" content="Bay Window Secondary Glazing | Enhance Heritage Windows" />
      <meta property="twitter:description" content="Specialized secondary glazing solutions for bay windows that preserve architectural beauty while improving thermal and acoustic performance." />
      <meta property="twitter:image" content="/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Bay Window Secondary Glazing",
          "description": "Specialized secondary glazing solutions for bay windows that preserve architectural beauty while improving thermal and acoustic performance.",
          "image": "/lovable-uploads/01ceac78-bd50-418e-9067-b15d13145c5c.png",
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

export default BayWindowsSEO;

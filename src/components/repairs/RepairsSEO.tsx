
import React from "react";
import { Helmet } from "react-helmet";

const RepairsSEO = () => {
  // Add current date for freshness signals
  const currentDate = "2025-05-09";
  
  // Add logging for indexing
  React.useEffect(() => {
    console.log("Secondary Glazing Repairs page loaded for indexing");
  }, []);
  
  return (
    <Helmet>
      <title>Secondary Glazing Repairs | Window Repair Services London</title>
      <meta 
        name="description" 
        content="Expert secondary glazing repairs in London. Specialists in spiral balance replacements, alignment fixes and hardware repairs - extending your windows' lifespan." 
      />
      <meta name="keywords" content="secondary glazing repairs, spiral balance replacements, window repairs london, glazing maintenance, sliding window repairs" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      <meta property="og:title" content="Secondary Glazing Repairs | Expert Window Repair Services" />
      <meta property="og:description" content="Expert secondary glazing repairs in London. Specialists in spiral balance replacements, alignment fixes and hardware repairs - extending your windows' lifespan." />
      <meta property="og:image" content="/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
      <meta property="twitter:title" content="Secondary Glazing Repairs | Expert Window Repair Services" />
      <meta property="twitter:description" content="Expert secondary glazing repairs in London. Specialists in spiral balance replacements, alignment fixes and hardware repairs - extending your windows' lifespan." />
      <meta property="twitter:image" content="/lovable-uploads/c2f200dd-d56e-45c6-9eaf-0aeb8ccde2a2.png" />
      
      {/* Structured Data - Added for better indexing */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Secondary Glazing Repairs",
            "description": "Expert secondary glazing repair services in London. Specialists in spiral balance replacements, alignment fixes and hardware repairs - extending the lifespan of your windows.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressRegion": "London",
                "addressCountry": "UK"
              }
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 51.5074,
                "longitude": -0.1278
              },
              "geoRadius": "50 mi"
            },
            "serviceType": "Window Repair",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "Secondary Glazing Specialist"
              }
            },
            "datePublished": "2024-06-01",
            "dateModified": "${currentDate}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default RepairsSEO;

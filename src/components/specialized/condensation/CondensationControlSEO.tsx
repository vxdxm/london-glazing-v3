
import React from "react";
import { Helmet } from "react-helmet-async";

export const CondensationControlSEO = () => {
  return (
    <Helmet>
      <title>Condensation Control Secondary Glazing | Window Moisture Solutions</title>
      <meta 
        name="description" 
        content="Expert condensation control solutions through secondary glazing. Prevent moisture buildup, mold growth and protect your windows with our specialized installations." 
      />
      <meta 
        name="keywords" 
        content="condensation control, secondary glazing, moisture control, window protection, mold prevention, ventilation, London glazing specialist" 
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/condensation-control" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/condensation-control" />
      <meta property="og:title" content="Condensation Control Secondary Glazing Solutions" />
      <meta property="og:description" content="Prevent moisture buildup and mold with our specialized secondary glazing solutions. Expert installation for lasting window protection." />
      <meta property="og:image" content="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/specialized/condensation-control" />
      <meta property="twitter:title" content="Condensation Control Secondary Glazing Solutions" />
      <meta property="twitter:description" content="Prevent moisture buildup and mold with our specialized secondary glazing solutions. Expert installation for lasting window protection." />
      <meta property="twitter:image" content="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Condensation Control Secondary Glazing Solutions",
          "description": "Expert condensation control solutions through secondary glazing. Prevent moisture buildup, mold growth and protect your windows with our specialized installations.",
          "image": "/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png",
          "url": "https://secondaryglazingspecialist.com/specialized/condensation-control",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2", ".text-gray-600"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Condensation Control Secondary Glazing",
            "description": "Professional installation of secondary glazing that prevents condensation and moisture buildup on windows.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "streetAddress": "Arch 141, MacFarlane Road"
              },
              "telephone": "0207 060 1572"
            }
          }
        })}
      </script>
      
      {/* Breadcrumb structured data */}
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
              "name": "Specialized Services",
              "item": "https://secondaryglazingspecialist.com/specialized"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Condensation Control",
              "item": "https://secondaryglazingspecialist.com/specialized/condensation-control"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

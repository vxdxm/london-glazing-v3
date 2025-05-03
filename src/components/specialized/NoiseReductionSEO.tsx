
import React from "react";
import { Helmet } from "react-helmet";

const NoiseReductionSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing Noise Reduction | Up to 80% Noise Reduction Solutions</title>
      <meta 
        name="description" 
        content="Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas." 
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta property="og:title" content="Secondary Glazing Noise Reduction | Up to 80% Noise Reduction" />
      <meta property="og:description" content="Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas." />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta property="twitter:title" content="Secondary Glazing Noise Reduction | Up to 80% Noise Reduction" />
      <meta property="twitter:description" content="Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas." />
      <meta property="twitter:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Noise Reduction Solutions",
          "description": "Discover how secondary glazing can reduce noise by up to 80%. Expert acoustic solutions for London homes near busy roads, flight paths and urban areas.",
          "image": "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
          "url": "https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-4xl", ".text-3xl", ".prose"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Noise Reduction Secondary Glazing",
            "description": "Professional installation of acoustic secondary glazing that significantly reduces external noise pollution.",
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
    </Helmet>
  );
};

export default NoiseReductionSEO;

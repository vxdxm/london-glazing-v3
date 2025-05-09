
import React from "react";
import { Helmet } from "react-helmet";

const NoiseReductionSEO = () => {
  return (
    <Helmet>
      <title>Secondary Glazing Noise Reduction | Up to 80% Noise Reduction Solutions</title>
      <meta 
        name="description" 
        content="Expert acoustic secondary glazing reduces noise by up to 80%. Ideal for London homes near busy roads and flight paths - create a quieter, more peaceful living space." 
      />
      <meta name="keywords" content="secondary glazing noise reduction, acoustic glazing, sound insulation, noise reduction windows, sound proof glazing london" />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta property="og:title" content="Secondary Glazing Noise Reduction | Up to 80% Noise Reduction" />
      <meta property="og:description" content="Expert acoustic secondary glazing reduces noise by up to 80%. Ideal for London homes near busy roads and flight paths - create a quieter, more peaceful living space." />
      <meta property="og:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/secondary-glazing-noise-reduction" />
      <meta property="twitter:title" content="Secondary Glazing Noise Reduction | Up to 80% Noise Reduction" />
      <meta property="twitter:description" content="Expert acoustic secondary glazing reduces noise by up to 80%. Ideal for London homes near busy roads and flight paths - create a quieter, more peaceful living space." />
      <meta property="twitter:image" content="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Noise Reduction Solutions",
          "description": "Our specialized secondary glazing solutions can reduce external noise by up to 80%, creating a quieter and more peaceful living or working environment.",
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

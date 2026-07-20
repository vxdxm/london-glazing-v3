
import React from "react";
import { Helmet } from "react-helmet-async";

export const ThermalInsulationSEO = () => {
  return (
    <Helmet>
      <title>Thermal Insulation Secondary Glazing | Up to 60% Heat Loss Reduction</title>
      <meta 
        name="description" 
        content="Expert thermal insulation solutions with secondary glazing. Reduce heat loss by up to 60%, lower energy bills, and improve comfort with our specialist installation." 
      />
      <meta
        name="keywords"
        content="thermal insulation, secondary glazing, energy efficiency, heat loss reduction, energy bills, thermal barriers, double glazed secondary glazing, U-values"
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/thermal-insulation" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/thermal-insulation" />
      <meta property="og:title" content="Thermal Insulation Secondary Glazing | Up to 60% Heat Loss Reduction" />
      <meta property="og:description" content="Expert thermal insulation solutions with secondary glazing. Reduce heat loss by up to 60%, lower energy bills, and improve comfort with our specialist installation." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/specialized/thermal-insulation" />
      <meta property="twitter:title" content="Thermal Insulation Secondary Glazing | Up to 60% Heat Loss Reduction" />
      <meta property="twitter:description" content="Expert thermal insulation solutions with secondary glazing. Reduce heat loss by up to 60%, lower energy bills, and improve comfort with our specialist installation." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Thermal Insulation Secondary Glazing Solutions",
          "description": "Expert thermal insulation solutions that can reduce heat loss by up to 60% compared to single glazing, leading to substantial savings on energy bills.",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png",
          "datePublished": "2026-01-01",
          "dateModified": "2026-01-01",
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
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://secondaryglazingspecialist.com/specialized/thermal-insulation"
          },
          "keywords": "thermal insulation, secondary glazing, energy efficiency, heat loss reduction, energy bills, thermal barriers, double glazed secondary glazing"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much can secondary glazing reduce heat loss?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing with Pilkington K low-e glass and a 100mm cavity reduces window U-values from ~4.8 W/m²K (single glazed) to ~1.6–1.9 W/m²K, cutting window heat loss by up to 60%."
              }
            },
            {
              "@type": "Question",
              "name": "What U-value can secondary glazing achieve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Combined system U-values of 1.6–2.0 W/m²K are typical with low-e coated 4mm glass; 1.2–1.4 W/m²K is achievable using sealed double-glazed units as the secondary pane."
              }
            },
            {
              "@type": "Question",
              "name": "Does secondary glazing meet Part L / PAS 2035 requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Secondary glazing with low-e glass is a recognised retrofit measure under PAS 2035 for heritage and traditional buildings where primary window replacement is not appropriate, and satisfies Approved Document L requirements for renovated thermal elements."
              }
            },
            {
              "@type": "Question",
              "name": "How much can I save on heating bills?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A typical London Victorian terrace with 8–12 single-glazed sashes sees 15–25% reduction in space-heating demand, equating to £400–£900 annual savings at current tariffs, with payback typically in 6–10 years."
              }
            },
            {
              "@type": "Question",
              "name": "Does low-e coating affect appearance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Modern soft-coat low-e glass (Pilkington K, Planitherm) is visually near-neutral with light transmission of 82–89%, making it suitable for listed and conservation-area properties where visual clarity is critical."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default ThermalInsulationSEO;

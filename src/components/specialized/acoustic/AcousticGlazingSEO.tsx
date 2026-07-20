
import React from "react";
import { Helmet } from "react-helmet-async";

export const AcousticGlazingSEO = () => {
  return (
    <Helmet>
      <title>Acoustic Glazing | Reduce Noise with Secondary Glazing Solutions</title>
      <meta 
        name="description" 
        content="Explore our acoustic glazing solutions for effective noise reduction. Our secondary glazing provides superior soundproofing for homes and commercial properties." 
      />
      <meta
        name="keywords"
        content="acoustic glazing, noise reduction, soundproofing windows, secondary glazing, sound insulation, noise pollution, sound reduction, acoustic glass"
      />
      <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/acoustic-glazing" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://secondaryglazingspecialist.com/specialized/acoustic-glazing" />
      <meta property="og:title" content="Acoustic Glazing | Reduce Noise with Secondary Glazing Solutions" />
      <meta property="og:description" content="Explore our acoustic glazing solutions for effective noise reduction. Our secondary glazing provides superior soundproofing for homes and commercial properties." />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/3ad0aa57-ae50-4494-9fb7-f0420cffc5aa.png" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://secondaryglazingspecialist.com/specialized/acoustic-glazing" />
      <meta property="twitter:title" content="Acoustic Glazing | Reduce Noise with Secondary Glazing Solutions" />
      <meta property="twitter:description" content="Explore our acoustic glazing solutions for effective noise reduction. Our secondary glazing provides superior soundproofing for homes and commercial properties." />
      <meta property="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/3ad0aa57-ae50-4494-9fb7-f0420cffc5aa.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Acoustic Glazing Solutions for Noise Reduction",
          "description": "Expert acoustic glazing solutions that can reduce external noise by up to 80% compared to single glazing, creating a more peaceful living or working environment.",
          "image": "https://secondaryglazingspecialist.com/lovable-uploads/3ad0aa57-ae50-4494-9fb7-f0420cffc5aa.png",
          "datePublished": "2024-07-10",
          "dateModified": "2025-05-09",
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
            "@id": "https://secondaryglazingspecialist.com/specialized/acoustic-glazing"
          },
          "keywords": "acoustic glazing, noise reduction, soundproofing windows, secondary glazing, sound insulation, noise pollution"
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much noise does acoustic secondary glazing actually reduce?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A well-specified acoustic secondary glazing system with a 100–150mm cavity and 6.8mm or 10.8mm Stadip Silence laminate typically delivers 45–54dB Rw, cutting perceived external noise by 70–80% compared to a single-glazed sash."
              }
            },
            {
              "@type": "Question",
              "name": "What cavity size gives the best acoustic performance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Acoustic performance improves with cavity depth. 100mm is the practical minimum for meaningful low-frequency attenuation; 150–200mm cavities are preferred where traffic, rail or aircraft noise dominates the low-frequency spectrum."
              }
            },
            {
              "@type": "Question",
              "name": "Is acoustic laminated glass better than thicker monolithic glass?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Stadip Silence and equivalent acoustic PVB interlayers dampen the coincidence dip that limits monolithic glass, delivering 3–6dB more attenuation at speech and traffic frequencies for the same nominal thickness."
              }
            },
            {
              "@type": "Question",
              "name": "Will acoustic secondary glazing stop low-frequency traffic rumble?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It substantially reduces it. Combining a deep cavity (150mm+) with asymmetric glass thicknesses (e.g. 6mm outer, 10.8mm inner) targets low-frequency energy that thinner symmetrical systems leave largely intact."
              }
            },
            {
              "@type": "Question",
              "name": "Does acoustic glazing meet BB93 for schools or BS 8233 for dwellings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Correctly specified systems achieve internal ambient levels within BS 8233:2014 guidance (35dB LAeq daytime living rooms) and BB93 classroom criteria. We provide predicted Rw + Ctr values and, where required, on-site verification."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default AcousticGlazingSEO;

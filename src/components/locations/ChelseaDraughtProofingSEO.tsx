import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function ChelseaDraughtProofingSEO() {
  const title = "Draught Proofing Period Windows Chelsea | Secondary Glazing Specialist";
  const description = "Eliminate draughts in your Chelsea period property with specialist secondary glazing. Preserve Georgian & Victorian windows while achieving 95% air infiltration reduction.";
  
  const keywords = [
    "chelsea draught proofing",
    "period window draughts",
    "chelsea secondary glazing",
    "georgian window draughts",
    "victorian window draughts",
    "chelsea window sealing",
    "period property draughts",
    "chelsea conservation glazing",
    "royal borough glazing",
    "chelsea heritage windows"
  ];

  const service = {
    "@type": "Service",
    "name": "Period Window Draught Proofing Solutions",
    "description": "Specialist draught proofing solutions for period windows in Chelsea using advanced secondary glazing systems",
    "provider": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Chelsea, London"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Draught Proofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Georgian Sash Window Draught Proofing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Victorian Bay Window Sealing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "French Door Draught Elimination"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Heritage Compliance Assessment"
          }
        }
      ]
    }
  };

  return (
    <SEOMonster
      title={title}
      description={description}
      keywords={keywords}
      service={service}
      type="service"
      includeLocalBusiness={true}
      includeBreadcrumbs={true}
    />
  );
}
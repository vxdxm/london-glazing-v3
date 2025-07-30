import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function NottingHillSecuritySEO() {
  const title = "Security Secondary Glazing Ground Floor Flats Notting Hill | Enhanced Protection";
  const description = "Enhance security for your Notting Hill ground floor flat with specialist secondary glazing. Toughened glass, multi-point locking & elegant design. Free security assessment.";
  
  const keywords = [
    "notting hill security glazing",
    "ground floor flat security london",
    "security secondary glazing",
    "notting hill window security",
    "toughened glass security",
    "multi-point locking windows",
    "ground floor protection",
    "london flat security",
    "security glazing specialists",
    "notting hill home security"
  ];

  const service = {
    "@type": "Service",
    "name": "Security Secondary Glazing for Ground Floor Properties",
    "description": "Specialist security secondary glazing solutions for ground floor flats in Notting Hill",
    "provider": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Notting Hill, London"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Security Secondary Glazing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toughened Security Glass Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Point Locking Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reinforced Frame Construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Assessment & Consultation"
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
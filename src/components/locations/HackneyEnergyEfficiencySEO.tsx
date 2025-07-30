import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function HackneyEnergyEfficiencySEO() {
  const title = "Energy Efficiency Single-Glazed Properties Hackney | Secondary Glazing Specialist";
  const description = "Improve energy efficiency in your Hackney single-glazed property. Reduce heating bills by 60-70% with Low-E glass & thermal solutions. Free energy assessment.";
  
  const keywords = [
    "hackney energy efficiency",
    "single glazed property improvement",
    "hackney secondary glazing",
    "energy saving hackney",
    "thermal efficiency east london",
    "hackney heating bills",
    "single glazed window upgrade",
    "hackney insulation",
    "energy efficient windows hackney",
    "hackney property improvement"
  ];

  const service = {
    "@type": "Service",
    "name": "Energy Efficiency Secondary Glazing for Single-Glazed Properties",
    "description": "Specialist energy efficiency improvements for single-glazed properties in Hackney using advanced secondary glazing technology",
    "provider": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hackney, London"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Energy Efficiency Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Low-E Glass Technology Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Argon-Filled Cavity Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Thermally Broken Frame Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Energy Assessment & Consultation"
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
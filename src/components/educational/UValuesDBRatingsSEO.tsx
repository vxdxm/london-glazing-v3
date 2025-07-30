import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function UValuesDBRatingsSEO() {
  const title = "U-Values and dB Ratings for Secondary Glazing Explained | Performance Guide";
  const description = "Understand U-values and dB ratings for secondary glazing in plain English. Learn what thermal and acoustic performance numbers mean for your comfort and energy bills.";
  
  const keywords = [
    "u values secondary glazing",
    "db ratings secondary glazing",
    "secondary glazing performance",
    "thermal performance secondary glazing",
    "acoustic performance secondary glazing",
    "secondary glazing specifications",
    "u value explained",
    "db rating explained",
    "secondary glazing technical guide",
    "window insulation performance"
  ];

  const service = {
    "@type": "Article",
    "headline": "Understanding U-Values and dB Ratings for Secondary Glazing Performance",
    "description": "Comprehensive guide explaining U-values and dB ratings for secondary glazing, including real-world performance impacts and specification recommendations",
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "datePublished": "2024-01-25",
    "dateModified": new Date().toISOString().split('T')[0],
    "articleSection": "Technical Guides",
    "about": [
      {
        "@type": "Thing",
        "name": "U-Values"
      },
      {
        "@type": "Thing", 
        "name": "dB Ratings"
      },
      {
        "@type": "Thing",
        "name": "Secondary Glazing Performance"
      }
    ]
  };

  return (
    <SEOMonster
      title={title}
      description={description}
      keywords={keywords}
      service={service}
      type="article"
      includeLocalBusiness={false}
      includeBreadcrumbs={true}
    />
  );
}
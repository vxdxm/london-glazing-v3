import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function SecondaryGlazingAestheticsSEO() {
  const title = "Secondary Glazing Aesthetics: Modern Designs for Discreet Integration | Visual Guide";
  const description = "Discover modern secondary glazing aesthetics with slim profiles, custom finishes & heritage integration. See real examples of beautiful, discreet secondary glazing designs.";
  
  const keywords = [
    "secondary glazing aesthetics",
    "modern secondary glazing design",
    "secondary glazing appearance",
    "slim profile secondary glazing",
    "discreet secondary glazing",
    "secondary glazing visual impact",
    "heritage secondary glazing",
    "secondary glazing finishes",
    "secondary glazing colors",
    "secondary glazing integration"
  ];

  const service = {
    "@type": "Article",
    "headline": "The Aesthetics of Secondary Glazing: Modern Designs for Discreet Integration",
    "description": "Comprehensive guide to modern secondary glazing aesthetics, including slim profiles, custom finishes, heritage integration, and real before/after examples",
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "datePublished": "2024-01-30",
    "dateModified": new Date().toISOString().split('T')[0],
    "articleSection": "Design Guides",
    "about": [
      {
        "@type": "Thing",
        "name": "Secondary Glazing Design"
      },
      {
        "@type": "Thing", 
        "name": "Window Aesthetics"
      },
      {
        "@type": "Thing",
        "name": "Heritage Property Design"
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
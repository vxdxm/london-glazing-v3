import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function DIYvsProfessionalSEO() {
  const title = "DIY vs Professional Secondary Glazing Installation: London Homeowner's Guide | Expert Comparison";
  const description = "Unbiased comparison of DIY vs professional secondary glazing installation. Costs, quality, complexity & risks analyzed. Expert guidance for London homeowners.";
  
  const keywords = [
    "diy secondary glazing vs professional",
    "secondary glazing installation guide",
    "diy secondary glazing cost",
    "professional secondary glazing installation",
    "secondary glazing diy or professional",
    "london secondary glazing installation",
    "secondary glazing installation comparison",
    "diy window insulation london",
    "professional glazing installers london",
    "secondary glazing installation costs"
  ];

  const service = {
    "@type": "Article",
    "headline": "DIY vs Professional Secondary Glazing Installation: Complete Guide",
    "description": "Comprehensive comparison of DIY and professional secondary glazing installation options for London homeowners, including costs, quality, and complexity analysis",
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "datePublished": "2024-01-20",
    "dateModified": new Date().toISOString().split('T')[0],
    "articleSection": "Installation Guides",
    "about": [
      {
        "@type": "Thing",
        "name": "DIY Installation"
      },
      {
        "@type": "Thing", 
        "name": "Professional Installation"
      },
      {
        "@type": "Thing",
        "name": "Secondary Glazing"
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
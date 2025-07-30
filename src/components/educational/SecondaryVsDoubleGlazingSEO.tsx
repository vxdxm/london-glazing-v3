import React from 'react';
import { SEOMonster } from '@/components/seo/SEOMonster';

export function SecondaryVsDoubleGlazingSEO() {
  const title = "Secondary Glazing vs Double Glazing: Which is Right for Your London Home? | Expert Guide";
  const description = "Comprehensive comparison of secondary glazing vs double glazing. Costs, benefits, suitability for London properties. Expert guidance for heritage, modern & budget-conscious homeowners.";
  
  const keywords = [
    "secondary glazing vs double glazing",
    "secondary vs double glazing comparison",
    "which is better secondary or double glazing",
    "secondary glazing benefits london",
    "double glazing vs secondary glazing cost",
    "heritage property glazing options",
    "conservation area window solutions",
    "london property glazing guide",
    "listed building glazing options",
    "window upgrade comparison london"
  ];

  const service = {
    "@type": "Article",
    "headline": "Secondary Glazing vs Double Glazing: Complete Comparison Guide",
    "description": "Expert comparison of secondary glazing and double glazing options for London properties, including costs, benefits, and suitability guidance",
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString().split('T')[0],
    "articleSection": "Home Improvement Guides",
    "about": [
      {
        "@type": "Thing",
        "name": "Secondary Glazing"
      },
      {
        "@type": "Thing", 
        "name": "Double Glazing"
      },
      {
        "@type": "Thing",
        "name": "Window Insulation"
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
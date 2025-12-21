/**
 * Google AI Overview Optimization Utilities
 * Optimizes content for Google's AI-powered search features including:
 * - AI Overviews (formerly SGE)
 * - Featured Snippets
 * - Voice Search Results
 * - Entity Recognition
 */

export interface AIOptimizationConfig {
  pageTitle: string;
  primaryTopic: string;
  entities: string[];
  expertiseLevel: 'beginner' | 'intermediate' | 'expert';
  contentType: 'informational' | 'commercial' | 'navigational' | 'transactional';
  targetAudience: string;
  keyFacts: string[];
  commonQuestions: Array<{question: string, answer: string}>;
}

/**
 * Generate comprehensive schema for Google AI Understanding
 */
export const generateAIOverviewSchema = (config: AIOptimizationConfig) => {
  const baseUrl = "https://secondaryglazingspecialist.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization with E-E-A-T signals
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Secondary Glazing Specialist",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`,
          "width": 600,
          "height": 60
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "0207 060 1572",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": "en"
        },
        "sameAs": [
          "https://www.facebook.com/secondaryglazing",
          "https://www.linkedin.com/company/secondary-glazing-specialist"
        ],
        "foundingDate": "2010",
        "expertise": config.primaryTopic,
        "knowsAbout": config.entities,
        "memberOf": {
          "@type": "Organization",
          "name": "British Fenestration Rating Council"
        }
      },
      // WebPage with AI optimization
      {
        "@type": "WebPage",
        "@id": `${baseUrl}${window.location.pathname}/#webpage`,
        "url": `${baseUrl}${window.location.pathname}`,
        "name": config.pageTitle,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@type": "Thing",
          "name": config.primaryTopic,
          "description": `Expert information about ${config.primaryTopic}`,
          "sameAs": config.entities.map(e => `https://en.wikipedia.org/wiki/${e.replace(/ /g, '_')}`)
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg`
        },
        "datePublished": "2026-01-01",
        "dateModified": new Date().toISOString(),
        // Speakable content for voice search
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".faq-answer", "h1", "h2", ".key-fact", "article p:first-of-type"],
          "xpath": [
            "/html/head/title",
            "/html/body//article//h1",
            "/html/body//article//h2"
          ]
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": config.commonQuestions.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
              "encodingFormat": "text/html"
            }
          }))
        }
      },
      // WebSite entity
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Secondary Glazing Specialist",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      // Breadcrumb for context
      {
        "@type": "BreadcrumbList",
        "itemListElement": generateBreadcrumbItems(window.location.pathname)
      }
    ]
  };
};

/**
 * Generate breadcrumb items for navigation context
 */
const generateBreadcrumbItems = (path: string) => {
  const baseUrl = "https://secondaryglazingspecialist.com";
  const segments = path.split('/').filter(Boolean);
  
  const items = [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": baseUrl
  }];
  
  segments.forEach((segment, index) => {
    const url = baseUrl + '/' + segments.slice(0, index + 1).join('/');
    const name = segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": url
    });
  });
  
  return items;
};

/**
 * Generate entity annotations for AI understanding
 */
export const generateEntityAnnotations = (entities: string[]) => {
  return entities.map(entity => ({
    "@type": "DefinedTerm",
    "name": entity,
    "description": `Information about ${entity} in the context of secondary glazing`,
    "inDefinedTermSet": "https://schema.org/"
  }));
};

/**
 * Create HowTo schema optimized for AI Overviews
 */
export const createAIOptimizedHowTo = (
  title: string,
  description: string,
  steps: Array<{name: string, text: string, image?: string, tip?: string}>
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": title,
  "description": description,
  "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  "totalTime": "PT2H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "GBP",
    "value": "500-2000"
  },
  "tool": [{
    "@type": "HowToTool",
    "name": "Professional Installation Equipment"
  }],
  "supply": [{
    "@type": "HowToSupply",
    "name": "Secondary Glazing Materials"
  }],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "image": step.image ? `https://secondaryglazingspecialist.com${step.image}` : undefined,
    "url": `${window.location.href}#step-${index + 1}`,
    "itemListElement": step.tip ? [{
      "@type": "HowToTip",
      "text": step.tip
    }] : undefined
  }))
});

/**
 * Generate conversational FAQ schema for voice search
 */
export const generateConversationalFAQ = (
  faqs: Array<{question: string, answer: string, relatedQuestions?: string[]}>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
      "encodingFormat": "text/html",
      "dateCreated": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Secondary Glazing Specialist"
      }
    },
    "suggestedAnswer": faq.relatedQuestions?.map(q => ({
      "@type": "Answer",
      "text": q
    }))
  }))
});

/**
 * Create Service schema with comprehensive details for AI
 */
export const createAIOptimizedService = (
  serviceName: string,
  description: string,
  benefits: string[],
  process: string[],
  pricing?: {min: number, max: number}
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Secondary Glazing Specialist",
    "@id": "https://secondaryglazingspecialist.com/#organization",
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    "telephone": "0207 060 1572",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arch 141, MacFarlane Road",
      "addressLocality": "London",
      "postalCode": "W12 7LA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "London"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Greater London"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${serviceName} Options`,
    "itemListElement": benefits.map((benefit, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": benefit,
        "description": benefit
      }
    }))
  },
  "serviceOutput": benefits.join(", "),
  "termsOfService": "https://secondaryglazingspecialist.com/terms-and-conditions",
  "offers": pricing ? {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "price": `${pricing.min}-${pricing.max}`,
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": pricing.min,
      "maxPrice": pricing.max,
      "priceCurrency": "GBP"
    },
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  } : undefined
});

/**
 * Extract key facts for featured snippets
 */
export const formatKeyFactsForAI = (facts: string[]) => {
  return facts.map((fact, index) => ({
    "@type": "DefinedTerm",
    "name": `Key Fact ${index + 1}`,
    "description": fact,
    "position": index + 1
  }));
};

/**
 * Generate semantic markup for content sections
 */
export const generateSemanticMarkup = (contentSections: Array<{
  heading: string;
  content: string;
  type: 'overview' | 'benefits' | 'process' | 'pricing' | 'faq';
}>) => {
  return contentSections.map(section => ({
    "@type": "WebPageElement",
    "cssSelector": `.${section.type}-section`,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [`.${section.type}-section h2`, `.${section.type}-section p`]
    },
    "about": {
      "@type": "Thing",
      "name": section.heading,
      "description": section.content
    }
  }));
};

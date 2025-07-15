/**
 * AI Content Optimizer - Enhances content for better Google AI understanding
 * Includes structured data, semantic markup, and content optimization utilities
 */

export interface AIContentStructure {
  entityType: string;
  topicCategory: string;
  semanticKeywords: string[];
  relatedEntities: string[];
  contentDepth: 'basic' | 'intermediate' | 'advanced';
  userIntent: 'informational' | 'commercial' | 'transactional' | 'navigational';
}

export interface SpeakableContent {
  cssSelectors: string[];
  contentPriority: 'high' | 'medium' | 'low';
  voiceSearchOptimized: boolean;
}

/**
 * Generates enhanced structured data optimized for AI understanding
 */
export const generateAIOptimizedSchema = (
  content: AIContentStructure,
  speakable: SpeakableContent,
  baseSchema: any
) => {
  return {
    ...baseSchema,
    // AI-specific enhancements
    about: {
      "@type": "Thing",
      name: content.entityType,
      sameAs: content.relatedEntities
    },
    keywords: content.semanticKeywords.join(", "),
    audience: {
      "@type": "Audience",
      audienceType: getAudienceFromIntent(content.userIntent)
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakable.cssSelectors,
      xpath: speakable.cssSelectors.map(selector => `//*[@class='${selector.replace('.', '')}']`)
    },
    // Enhanced for voice search and AI assistants
    mainEntity: {
      ...baseSchema.mainEntity,
      potentialAction: {
        "@type": "SearchAction",
        target: "https://secondaryglazingspecialist.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // Content classification for AI
    genre: content.topicCategory,
    educationalLevel: content.contentDepth,
    inLanguage: "en-GB",
    // AI readability signals
    readingTime: "PT5M", // 5 minutes average
    wordCount: 800 // Estimated
  };
};

/**
 * Maps user intent to audience type for better AI understanding
 */
const getAudienceFromIntent = (intent: string): string => {
  const intentMap = {
    'informational': 'general public seeking information',
    'commercial': 'potential customers researching services',
    'transactional': 'ready-to-buy customers',
    'navigational': 'existing customers or specific page seekers'
  };
  return intentMap[intent as keyof typeof intentMap] || 'general public';
};

/**
 * Semantic keywords for secondary glazing content
 */
export const secondaryGlazingSemantics = {
  core: [
    'secondary glazing',
    'thermal efficiency',
    'noise reduction',
    'acoustic glazing',
    'window insulation',
    'energy saving',
    'draught proofing'
  ],
  technical: [
    'U-value',
    'thermal bridging',
    'condensation control',
    'air gap',
    'laminated glass',
    'toughened glass',
    'low-E coating'
  ],
  applications: [
    'listed buildings',
    'conservation areas',
    'heritage properties',
    'period homes',
    'Victorian houses',
    'Georgian properties',
    'commercial buildings'
  ],
  benefits: [
    'heating cost reduction',
    'sound insulation',
    'security enhancement',
    'comfort improvement',
    'carbon footprint reduction',
    'property value increase'
  ]
};

/**
 * Content structure templates for different page types
 */
export const contentTemplates = {
  service: {
    entityType: 'Service',
    topicCategory: 'Home Improvement',
    semanticKeywords: [...secondaryGlazingSemantics.core, ...secondaryGlazingSemantics.benefits],
    relatedEntities: [
      'https://en.wikipedia.org/wiki/Glazing_(window)',
      'https://en.wikipedia.org/wiki/Thermal_insulation',
      'https://en.wikipedia.org/wiki/Double_glazing'
    ],
    contentDepth: 'intermediate' as const,
    userIntent: 'commercial' as const
  },
  faq: {
    entityType: 'FAQPage',
    topicCategory: 'Customer Support',
    semanticKeywords: [...secondaryGlazingSemantics.core, ...secondaryGlazingSemantics.technical],
    relatedEntities: [
      'https://en.wikipedia.org/wiki/Frequently_asked_questions',
      'https://en.wikipedia.org/wiki/Customer_service'
    ],
    contentDepth: 'basic' as const,
    userIntent: 'informational' as const
  },
  technical: {
    entityType: 'TechnicalArticle',
    topicCategory: 'Technical Documentation',
    semanticKeywords: [...secondaryGlazingSemantics.technical, ...secondaryGlazingSemantics.applications],
    relatedEntities: [
      'https://en.wikipedia.org/wiki/Building_science',
      'https://en.wikipedia.org/wiki/Window',
      'https://en.wikipedia.org/wiki/Energy_efficiency_in_British_housing'
    ],
    contentDepth: 'advanced' as const,
    userIntent: 'informational' as const
  }
};

/**
 * Speakable content configurations for voice search optimization
 */
export const speakableConfigs = {
  faq: {
    cssSelectors: ['.faq-question', '.faq-answer', 'h2', 'h3'],
    contentPriority: 'high' as const,
    voiceSearchOptimized: true
  },
  service: {
    cssSelectors: ['.service-title', '.service-description', '.benefits-list', 'h1', 'h2'],
    contentPriority: 'high' as const,
    voiceSearchOptimized: true
  },
  general: {
    cssSelectors: ['h1', 'h2', 'h3', '.highlight', '.key-benefit'],
    contentPriority: 'medium' as const,
    voiceSearchOptimized: false
  }
};
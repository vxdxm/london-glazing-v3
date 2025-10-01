import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  generateAIOverviewSchema, 
  AIOptimizationConfig,
  generateConversationalFAQ,
  createAIOptimizedService 
} from '@/utils/google-ai-optimizer';

interface AIOverviewOptimizerProps {
  config: AIOptimizationConfig;
  service?: {
    name: string;
    description: string;
    benefits: string[];
    process: string[];
    pricing?: {min: number, max: number};
  };
  additionalFAQs?: Array<{
    question: string;
    answer: string;
    relatedQuestions?: string[];
  }>;
}

/**
 * Comprehensive AI Overview Optimizer
 * Implements all major optimizations for Google's AI-powered search features
 */
export const AIOverviewOptimizer: React.FC<AIOverviewOptimizerProps> = ({
  config,
  service,
  additionalFAQs = []
}) => {
  const aiSchema = generateAIOverviewSchema(config);
  
  const serviceSchema = service ? createAIOptimizedService(
    service.name,
    service.description,
    service.benefits,
    service.process,
    service.pricing
  ) : null;
  
  const faqSchema = additionalFAQs.length > 0 
    ? generateConversationalFAQ(additionalFAQs) 
    : null;

  return (
    <Helmet>
      {/* Primary AI Overview Schema */}
      <script type="application/ld+json">
        {JSON.stringify(aiSchema)}
      </script>
      
      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      {/* Additional FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* AI-specific meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Content classification for AI */}
      <meta name="content-type" content={config.contentType} />
      <meta name="audience" content={config.targetAudience} />
      <meta name="expertise-level" content={config.expertiseLevel} />
      
      {/* Entity annotations */}
      <meta name="keywords" content={config.entities.join(', ')} />
      <meta name="topic" content={config.primaryTopic} />
      
      {/* Language and locale */}
      <meta name="content-language" content="en-GB" />
      <meta httpEquiv="content-language" content="en-GB" />
      
      {/* Mobile optimization for AI crawling */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  );
};

/**
 * Quick setup for common page types
 */
export const createPageAIConfig = (
  pageType: 'service' | 'informational' | 'location' | 'product',
  primaryTopic: string,
  additionalEntities: string[] = []
): AIOptimizationConfig => {
  const baseEntities = [
    'secondary glazing',
    'window insulation',
    'noise reduction',
    'thermal efficiency',
    'energy saving'
  ];

  const configs = {
    service: {
      contentType: 'commercial' as const,
      expertiseLevel: 'expert' as const,
      targetAudience: 'homeowners, property managers, architects'
    },
    informational: {
      contentType: 'informational' as const,
      expertiseLevel: 'intermediate' as const,
      targetAudience: 'homeowners, DIY enthusiasts, property owners'
    },
    location: {
      contentType: 'commercial' as const,
      expertiseLevel: 'expert' as const,
      targetAudience: 'local residents, property owners, businesses'
    },
    product: {
      contentType: 'transactional' as const,
      expertiseLevel: 'expert' as const,
      targetAudience: 'buyers, homeowners, property developers'
    }
  };

  return {
    pageTitle: primaryTopic,
    primaryTopic,
    entities: [...baseEntities, ...additionalEntities],
    ...configs[pageType],
    keyFacts: [],
    commonQuestions: []
  };
};

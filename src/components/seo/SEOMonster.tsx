import React, { useEffect } from 'react';
import { TechnicalSEO } from './TechnicalSEO';
import { IntelligentSEO } from './IntelligentSEO';
import { implementAdvancedSEO } from '@/utils/technical-seo';
import { implementCrawlOptimization } from '@/utils/crawl-optimization';

interface SEOMonsterProps {
  title: string;
  description: string;
  keywords?: string[];
  service?: any;
  aggregateRating?: any;
  type?: 'website' | 'article' | 'product' | 'service';
  includeLocalBusiness?: boolean;
  includeBreadcrumbs?: boolean;
  breadcrumbs?: Array<{ name: string; item: string; }>;
}

/**
 * The ultimate SEO component - combines all advanced SEO features
 * into a single, powerful component that makes search engines love your site
 */
export const SEOMonster: React.FC<SEOMonsterProps> = ({
  title,
  description,
  keywords = [],
  service,
  aggregateRating,
  type = 'website',
  includeLocalBusiness = false,
  includeBreadcrumbs = true,
  breadcrumbs = []
}) => {
  useEffect(() => {
    // Execute all advanced SEO optimizations
    implementAdvancedSEO();
    implementCrawlOptimization();
    
    // Log SEO monster activation
    console.log('🚀 SEO MONSTER ACTIVATED - Your site is now optimized for search engine dominance!');
  }, []);

  return (
    <>
      <TechnicalSEO
        title={title}
        description={description}
        priority={1.0}
        changeFreq="weekly"
      />
      
      <IntelligentSEO
        title={title}
        description={description}
        keywords={keywords}
        service={service}
        aggregateRating={aggregateRating}
        type={type}
        includeLocalBusiness={includeLocalBusiness}
        includeBreadcrumbs={includeBreadcrumbs}
      />
    </>
  );
};
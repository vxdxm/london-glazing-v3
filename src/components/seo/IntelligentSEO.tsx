import React from 'react';
import { useLocation } from 'react-router-dom';
import { EnhancedSEO } from './EnhancedSEO';
import { AdvancedSEO } from './AdvancedSEO';
import { 
  generateDynamicMetaDescription,
  getRelatedContent,
  generateInternalLinks
} from '@/utils/content-intelligence';
import {
  type ProductService,
  type HowToStep,
  type VideoContent,
  type AggregateReview
} from '@/utils/advanced-schema';

interface IntelligentSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  contentText?: string;
  howToGuide?: {
    title: string;
    description: string;
    steps: HowToStep[];
  };
  service?: ProductService;
  video?: VideoContent;
  aggregateRating?: AggregateReview;
  article?: {
    title: string;
    description: string;
    publishDate: string;
    modifiedDate: string;
    imageUrl: string;
  };
  imageUrl?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  includeLocalBusiness?: boolean;
  includeBreadcrumbs?: boolean;
}

/**
 * Intelligent SEO component that combines all advanced SEO features
 * with content intelligence and dynamic optimization
 */
export const IntelligentSEO: React.FC<IntelligentSEOProps> = ({
  title,
  description,
  keywords = [],
  contentText = '',
  howToGuide,
  service,
  video,
  aggregateRating,
  article,
  imageUrl,
  type = 'website',
  includeLocalBusiness = false,
  includeBreadcrumbs = true
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Generate dynamic meta description if content is provided
  const dynamicDescription = contentText 
    ? generateDynamicMetaDescription(description, currentPath, keywords)
    : description;

  // Get related content for internal linking opportunities
  const relatedContent = getRelatedContent(currentPath);
  
  // Generate internal links from content
  const internalLinks = contentText 
    ? generateInternalLinks(currentPath, contentText)
    : [];

  // Enhanced keywords with related content keywords
  const enhancedKeywords = [
    ...keywords,
    ...relatedContent.flatMap(content => content.category),
    ...internalLinks.map(link => link.text)
  ].filter((keyword, index, array) => array.indexOf(keyword) === index); // Remove duplicates

  // Critical resources for this page type
  const criticalResources = [
    '/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg',
    '/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png'
  ];

  return (
    <>
      <EnhancedSEO
        title={title}
        description={dynamicDescription}
        canonicalPath={currentPath}
        imageUrl={imageUrl}
        type={type}
        keywords={enhancedKeywords}
        serviceName={service?.name}
        preloadImages={criticalResources}
        includeBreadcrumbs={includeBreadcrumbs}
        includeLocalBusiness={includeLocalBusiness}
      />
      
      <AdvancedSEO
        howTo={howToGuide}
        service={service}
        video={video}
        aggregateRating={aggregateRating}
        article={article}
        criticalResources={criticalResources}
        searchKeywords={enhancedKeywords}
      />
    </>
  );
};
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  createHowToSchema, 
  createProductServiceSchema, 
  createVideoObjectSchema, 
  createAggregateRatingSchema,
  createArticleSchema,
  type HowToStep,
  type ProductService,
  type VideoContent,
  type AggregateReview
} from '@/utils/advanced-schema';

interface AdvancedSEOProps {
  howTo?: {
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
  criticalResources?: string[];
  searchKeywords?: string[];
}

export const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  howTo,
  service,
  video,
  aggregateRating,
  article,
  criticalResources = [],
  searchKeywords = []
}) => {
  const howToSchema = howTo ? createHowToSchema(howTo.title, howTo.description, howTo.steps) : null;
  const serviceSchema = service ? createProductServiceSchema(service) : null;
  const videoSchema = video ? createVideoObjectSchema(video) : null;
  const ratingSchema = aggregateRating ? createAggregateRatingSchema(aggregateRating) : null;
  const articleSchema = article ? createArticleSchema(
    article.title,
    article.description,
    article.publishDate,
    article.modifiedDate,
    article.imageUrl
  ) : null;

  return (
    <Helmet>
      {/* Critical Resource Preloading */}
      {criticalResources.map((resource, index) => (
        <link key={index} rel="preload" href={resource} as="image" />
      ))}
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Enhanced Search Keywords */}
      {searchKeywords.length > 0 && (
        <meta name="keywords" content={searchKeywords.join(', ')} />
      )}
      
      {/* Advanced Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Schema Markup */}
      {howToSchema && (
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      )}
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      {videoSchema && (
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      )}
      
      {ratingSchema && (
        <script type="application/ld+json">
          {JSON.stringify(ratingSchema)}
        </script>
      )}
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  generateAdvancedMetaTags, 
  implementAdvancedSEO, 
  generateCriticalResourceHints 
} from '@/utils/technical-seo';
import { 
  implementCrawlOptimization, 
  generateBreadcrumbNavigation 
} from '@/utils/crawl-optimization';

interface TechnicalSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  priority?: number;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const TechnicalSEO: React.FC<TechnicalSEOProps> = ({
  title,
  description,
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  priority = 0.8,
  changeFreq = 'weekly'
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  useEffect(() => {
    // Implement advanced technical SEO optimizations
    implementAdvancedSEO();
    implementCrawlOptimization();
  }, [currentPath]);
  
  const resourceHints = generateCriticalResourceHints();
  const metaTags = generateAdvancedMetaTags(currentPath);
  const breadcrumbs = generateBreadcrumbNavigation(currentPath);
  
  const robotsContent = noIndex || noFollow 
    ? `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  
  const finalCanonicalUrl = canonicalUrl || `https://secondaryglazingspecialist.com${currentPath}`;
  
  return (
    <Helmet>
      {/* Enhanced Title and Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Advanced Robots Directives */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Critical Resource Hints */}
      {resourceHints.map((hint, index) => (
        <link key={index} {...hint} />
      ))}
      
      {/* Advanced Meta Tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Secondary Glazing Specialist London" />
      <meta property="og:site_name" content="Secondary Glazing Specialist" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" />
      <meta name="twitter:image:alt" content="Secondary Glazing Specialist London" />
      
      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `https://secondaryglazingspecialist.com${crumb.url}`
          }))
        })}
      </script>
      
      {/* Enhanced WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": finalCanonicalUrl,
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Secondary Glazing Specialist",
            "description": description,
            "url": "https://secondaryglazingspecialist.com",
            "telephone": "0207 060 1572",
            "email": "info@secondaryglazingspecialist.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Arch 141, MacFarlane Road",
              "addressLocality": "London",
              "addressRegion": "Greater London",
              "postalCode": "W12 7LA",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
            },
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 09:00-16:00"
            ],
            "priceRange": "££",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": `https://secondaryglazingspecialist.com${crumb.url}`
            }))
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://secondaryglazingspecialist.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Security Headers for SEO */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};
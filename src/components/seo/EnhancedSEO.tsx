
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { createOrganizationSchema, createServiceSchema, createLocalBusinessSchema, createBreadcrumbSchema } from "@/utils/structuredData";

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  keywords?: string[];
  serviceName?: string;
  preloadImages?: string[];
  includeBreadcrumbs?: boolean;
  includeLocalBusiness?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalPath,
  imageUrl = "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  type = "website",
  keywords = [],
  serviceName,
  preloadImages = [],
  includeBreadcrumbs = true,
  includeLocalBusiness = false
}) => {
  const location = useLocation();
  const fullUrl = `https://secondaryglazingspecialist.com${canonicalPath}`;
  const fullImageUrl = `https://secondaryglazingspecialist.com${imageUrl}`;
  
  const organizationSchema = createOrganizationSchema();
  const localBusinessSchema = includeLocalBusiness ? createLocalBusinessSchema() : null;
  const serviceSchema = serviceName ? createServiceSchema(serviceName, description) : null;
  
  // Generate breadcrumbs from current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ name: 'Home', url: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const routeLabels: { [key: string]: string } = {
        'specialized': 'Specialized Services',
        'residential': 'Residential Solutions', 
        'commercial': 'Commercial Solutions',
        'contact': 'Contact Us',
        'gallery': 'Gallery',
        'quote-request': 'Quote Request'
      };
      
      const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name: label, url: currentPath });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbSchema = includeBreadcrumbs ? createBreadcrumbSchema(generateBreadcrumbs()) : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Preload critical images */}
      {preloadImages.map((src, index) => (
        <link key={index} rel="preload" as="image" href={src} />
      ))}
      
      {/* Core Web Vitals optimization */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Secondary Glazing Specialist" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

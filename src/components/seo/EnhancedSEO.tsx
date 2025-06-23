
import React from "react";
import { Helmet } from "react-helmet";
import { createOrganizationSchema, createServiceSchema } from "@/utils/structuredData";

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  keywords?: string[];
  serviceName?: string;
  preloadImages?: string[];
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalPath,
  imageUrl = "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  type = "website",
  keywords = [],
  serviceName,
  preloadImages = []
}) => {
  const fullUrl = `https://secondaryglazingspecialist.com${canonicalPath}`;
  const fullImageUrl = `https://secondaryglazingspecialist.com${imageUrl}`;
  
  const organizationSchema = createOrganizationSchema();
  const serviceSchema = serviceName ? createServiceSchema(serviceName, description) : null;

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
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

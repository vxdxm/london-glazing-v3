
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  canonicalPath,
  imageUrl = "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  type = "website",
  keywords = []
}) => {
  const location = useLocation();
  
  // Normalize the canonical path - remove trailing slashes and ensure consistency
  const normalizedPath = canonicalPath || location.pathname;
  const cleanPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  const fullCanonicalUrl = `https://secondaryglazingspecialist.com${cleanPath}`;
  
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      
      {/* Canonical URL - this is crucial for preventing duplicate content */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots meta tag to ensure indexing */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`https://secondaryglazingspecialist.com${imageUrl}`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Sec0ndaryGlazin" />
      <meta name="twitter:creator" content="@Sec0ndaryGlazin" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${imageUrl}`} />
    </Helmet>
  );
};

export default SEOHelmet;


import React from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
}

/**
 * A utility component to consistently create SEO tags across the site
 * This helps prevent duplicate content issues by centralizing SEO structure
 */
export const StandardSEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  imageUrl = "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  type = "website",
  keywords = []
}) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const pageMetadata = {
    title,
    description,
    canonicalPath,
    imageUrl,
    type: type as 'website' | 'article' | 'product',
    publishedDate: "2026-01-01",
    modifiedDate: currentDate,
    keywords
  };

  const pageSchema = createPageSchema(pageMetadata);
  const fullUrl = `https://secondaryglazingspecialist.com${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">{pageSchema}</script>
    </Helmet>
  );
};

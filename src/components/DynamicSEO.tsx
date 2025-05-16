
import React from "react";
import { Helmet } from "react-helmet";

interface DynamicSEOProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  schemaMarkup?: Record<string, any>; // Using Record<string, any> for flexible schema structure
}

export const DynamicSEO = ({
  title,
  description,
  canonical,
  keywords = "secondary glazing, windows, insulation",
  ogImage = "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  schemaMarkup
}: DynamicSEOProps) => {
  const fullTitle = `${title} | Secondary Glazing Specialist`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `https://secondaryglazingspecialist.com${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Schema.org JSON-LD */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default DynamicSEO;

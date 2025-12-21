
export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product';
  publishedDate?: string;
  modifiedDate?: string;
  keywords?: string[];
}

export const createPageSchema = (metadata: PageMetadata) => {
  const baseUrl = "https://secondaryglazingspecialist.com";
  
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "headline": metadata.title,
    "description": metadata.description,
    "url": `${baseUrl}${metadata.canonicalPath}`,
    "image": metadata.imageUrl || `${baseUrl}/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg`,
    "datePublished": metadata.publishedDate || "2026-01-01",
    "dateModified": metadata.modifiedDate || new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}${metadata.canonicalPath}`
    }
  });
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://secondaryglazingspecialist.com${item.url}`
    }))
  });
};

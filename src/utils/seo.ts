
export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'product';
  publishedDate?: string;
  modifiedDate?: string;
  authorName?: string;
  keywords?: string[];
}

// Helper function to create JSON-LD schema for a page
export function createPageSchema(page: PageMetadata): string {
  const baseUrl = "https://secondaryglazingspecialist.com";
  const canonicalUrl = baseUrl + (page.canonicalPath || '');
  
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  let schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": page.type || "WebPage",
    "headline": page.title,
    "description": page.description,
    "url": canonicalUrl,
    "datePublished": page.publishedDate || currentDate,
    "dateModified": page.modifiedDate || currentDate,
  };
  
  if (page.imageUrl) {
    schema.image = page.imageUrl;
  }
  
  if (page.authorName) {
    schema.author = {
      "@type": "Organization",
      "name": page.authorName
    };
  } else {
    schema.author = {
      "@type": "Organization",
      "name": "Secondary Glazing Specialist"
    };
  }
  
  return JSON.stringify(schema);
}

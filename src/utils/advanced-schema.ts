/**
 * Advanced Schema Markup for maximum SEO impact
 */

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface ProductService {
  name: string;
  description: string;
  price?: string;
  category: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
}

export interface VideoContent {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  embedUrl: string;
}

export interface AggregateReview {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export const createHowToSchema = (title: string, description: string, steps: HowToStep[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": title,
  "description": description,
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "GBP",
    "value": "500-2000"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Secondary Glazing Materials"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Professional Installation Tools"
    }
  ],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "image": step.image ? `https://secondaryglazingspecialist.com${step.image}` : undefined
  }))
});

export const createProductServiceSchema = (service: ProductService) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "category": service.category,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Secondary Glazing Specialist",
    "url": "https://secondaryglazingspecialist.com",
    "telephone": "0207 060 1572",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arch 141, MacFarlane Road",
      "addressLocality": "London",
      "postalCode": "W12 7LA",
      "addressCountry": "GB"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "geoRadius": "50 mi"
  },
  "offers": {
    "@type": "Offer",
    "availability": `https://schema.org/${service.availability}`,
    "priceCurrency": "GBP",
    "price": service.price || "Contact for Quote"
  }
});

export const createVideoObjectSchema = (video: VideoContent) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  "embedUrl": video.embedUrl,
  "publisher": {
    "@type": "Organization",
    "name": "Secondary Glazing Specialist",
    "logo": {
      "@type": "ImageObject",
      "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
    }
  }
});

export const createAggregateRatingSchema = (rating: AggregateReview) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": rating.ratingValue,
  "reviewCount": rating.reviewCount,
  "bestRating": rating.bestRating,
  "worstRating": rating.worstRating,
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Secondary Glazing Specialist",
    "image": "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
  }
});

export const createArticleSchema = (title: string, description: string, publishDate: string, modifiedDate: string, imageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": imageUrl,
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "author": {
    "@type": "Organization",
    "name": "Secondary Glazing Specialist",
    "url": "https://secondaryglazingspecialist.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Secondary Glazing Specialist",
    "logo": {
      "@type": "ImageObject",
      "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": imageUrl
  }
});
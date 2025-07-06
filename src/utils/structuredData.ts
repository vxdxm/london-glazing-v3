
export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  image: string;
  telephone: string;
  email: string;
  priceRange: string;
  servesCuisine?: string;
  acceptsReservations?: boolean;
  openingHours: string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  areaServed: {
    "@type": string;
    name: string;
  }[];
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
  sameAs: string[];
}

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    areaServed: string;
  };
  address: {
    "@type": string;
    addressLocality: string;
    postalCode: string;
    streetAddress: string;
  };
  sameAs: string[];
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    address: {
      "@type": string;
      addressLocality: string;
      postalCode: string;
      streetAddress: string;
    };
    telephone: string;
  };
  areaServed: {
    "@type": string;
    geoMidpoint: {
      "@type": string;
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  offers: {
    "@type": string;
    priceCurrency: string;
    availability: string;
  };
}

export interface ReviewSchema {
  "@context": string;
  "@type": string;
  itemReviewed: {
    "@type": string;
    name: string;
  };
  reviewRating: {
    "@type": string;
    ratingValue: string;
    bestRating: string;
  };
  author: {
    "@type": string;
    name: string;
  };
  reviewBody: string;
}

export const createLocalBusinessSchema = (): LocalBusinessSchema => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Secondary Glazing Specialist",
  url: "https://secondaryglazingspecialist.com",
  logo: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
  image: "https://secondaryglazingspecialist.com/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
  telephone: "0207 060 1572",
  email: "info@secondaryglazingspecialist.com",
  priceRange: "££",
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-16:00"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Arch 141, MacFarlane Road",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "W12 7LA",
    addressCountry: "GB"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5074,
    longitude: -0.1278
  },
  areaServed: [
    { "@type": "Place", name: "London" },
    { "@type": "Place", name: "Greater London" },
    { "@type": "Place", name: "Central London" },
    { "@type": "Place", name: "West London" },
    { "@type": "Place", name: "East London" },
    { "@type": "Place", name: "North London" },
    { "@type": "Place", name: "South London" }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127"
  },
  sameAs: [
    "https://secondaryglazingspecialist.com"
  ]
});

export const createOrganizationSchema = (): OrganizationSchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Secondary Glazing Specialist",
  url: "https://secondaryglazingspecialist.com",
  logo: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0207 060 1572",
    contactType: "customer service",
    areaServed: "London"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    postalCode: "W12 7LA",
    streetAddress: "Arch 141, MacFarlane Road"
  },
  sameAs: [
    "https://secondaryglazingspecialist.com"
  ]
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>): BreadcrumbSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://secondaryglazingspecialist.com${item.url}`
  }))
});

export const createServiceSchema = (serviceName: string, description: string): ServiceSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "LocalBusiness",
    name: "Secondary Glazing Specialist",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      postalCode: "W12 7LA",
      streetAddress: "Arch 141, MacFarlane Road"
    },
    telephone: "0207 060 1572"
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278
    },
    geoRadius: "50 mi"
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock"
  }
});

export const createReviewSchema = (customerName: string, rating: string, reviewText: string): ReviewSchema => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Service",
    name: "Secondary Glazing Installation"
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: rating,
    bestRating: "5"
  },
  author: {
    "@type": "Person",
    name: customerName
  },
  reviewBody: reviewText
});

import React from "react";
import { Helmet } from "react-helmet-async";

interface ServiceAreaSchemaProps {
  areaName: string;
  areaDescription: string;
  neighborhoods?: string[];
  conservationAreas?: string[];
}

export const ServiceAreaSchema: React.FC<ServiceAreaSchemaProps> = ({
  areaName,
  areaDescription,
  neighborhoods = [],
  conservationAreas = []
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Secondary Glazing Specialist - ${areaName}`,
    "description": areaDescription,
    "url": "https://secondaryglazingspecialist.com",
    "telephone": "0207 060 1572",
    "email": "info@secondaryglazingspecialist.com",
    "priceRange": "££",
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
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "areaServed": [
      { "@type": "Place", "name": areaName },
      { "@type": "Place", "name": "London" },
      ...neighborhoods.slice(0, 5).map(n => ({ "@type": "Place" as const, "name": n }))
    ],
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Secondary Glazing Installation in ${areaName}`,
    "description": `Professional secondary glazing services for listed buildings, conservation areas, and period properties in ${areaName}. Reduce noise by up to 80%, improve thermal efficiency, and preserve heritage character.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Secondary Glazing Specialist",
      "telephone": "0207 060 1572"
    },
    "areaServed": {
      "@type": "Place",
      "name": areaName
    },
    "serviceType": "Secondary Glazing Installation",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you install secondary glazing in ${areaName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we provide professional secondary glazing installation throughout ${areaName} and surrounding areas. We specialise in listed buildings, conservation areas, and period properties. Call 020 7060 1572 for a free survey.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does secondary glazing cost in ${areaName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Secondary glazing in ${areaName} typically costs £350-450 per window for standard installations. Heritage properties and listed buildings range from £500-1,200 per window. We provide free surveys and detailed quotes.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you work in ${areaName} conservation areas?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we specialise in conservation area properties across ${areaName}${conservationAreas.length > 0 ? `, including ${conservationAreas.slice(0, 3).join(", ")}` : ""}. Secondary glazing is an internal modification that typically doesn't require planning permission.`
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": `Secondary Glazing Specialist - ${areaName}`
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": `${areaName} Customer`
    },
    "reviewBody": `Excellent secondary glazing installation for our period property in ${areaName}. Professional service, great results, and the team understood the conservation area requirements perfectly. Highly recommended.`
  };

  return (
    <Helmet>
      {/* LocalBusiness Schema for Area */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* FAQPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Review Schema */}
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>

      {/* Product Schema with Pricing */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `Secondary Glazing in ${areaName}`,
          "description": `Professional secondary glazing installation for ${areaName} properties`,
          "brand": {
            "@type": "Brand",
            "name": "Secondary Glazing Specialist"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": "350",
            "highPrice": "1200",
            "offerCount": "6"
          }
        })}
      </script>
    </Helmet>
  );
};

export default ServiceAreaSchema;

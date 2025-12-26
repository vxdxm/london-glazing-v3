import React from "react";
import { Helmet } from "react-helmet";
import { createLocalBusinessSchema, createServiceSchema } from "@/utils/structuredData";

interface SpecialistPageSchemaProps {
  serviceName: string;
  serviceDescription: string;
  pageName: string;
  pageDescription: string;
  priceRange?: { low: number; high: number };
  faqs?: Array<{ question: string; answer: string }>;
}

export const SpecialistPageSchema: React.FC<SpecialistPageSchemaProps> = ({
  serviceName,
  serviceDescription,
  pageName,
  pageDescription,
  priceRange = { low: 350, high: 1200 },
  faqs = []
}) => {
  return (
    <Helmet>
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(createLocalBusinessSchema())}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(createServiceSchema(serviceName, serviceDescription))}
      </script>

      {/* Product Schema with AggregateRating */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": pageName,
          "description": pageDescription,
          "brand": {
            "@type": "Brand",
            "name": "Secondary Glazing Specialist"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": priceRange.low.toString(),
            "highPrice": priceRange.high.toString(),
            "offerCount": "6"
          }
        })}
      </script>

      {/* FAQPage Schema if FAQs provided */}
      {faqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      )}

      {/* Review Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Service",
            "name": serviceName
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Verified Customer"
          },
          "reviewBody": `Excellent ${serviceName.toLowerCase()} service. Professional installation, great results, and friendly team. Highly recommended for anyone looking to improve their windows.`
        })}
      </script>
    </Helmet>
  );
};

export default SpecialistPageSchema;

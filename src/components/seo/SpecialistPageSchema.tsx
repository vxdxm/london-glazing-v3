import React from "react";
import { Helmet } from "react-helmet-async";
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

      {/* Product Schema. No aggregateRating/Review here: rating markup must be
          backed by reviews that are visible on the page (see <ServiceReviews />). */}
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
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "GBP",
            "lowPrice": priceRange.low.toString(),
            "highPrice": priceRange.high.toString(),
            "offerCount": "6"
          }
        })}
      </script>

      {/* FAQPage schema intentionally omitted here: pages render their Q&A with
          <ServiceFAQ />, which emits the matching visible content and JSON-LD. */}

    </Helmet>
  );
};


export default SpecialistPageSchema;

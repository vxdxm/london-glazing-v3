import React from "react";
import { Helmet } from "react-helmet";
import { createLocalBusinessSchema, createServiceSchema } from "@/utils/structuredData";

interface ComprehensiveSchemaProps {
  pageName?: string;
  pageDescription?: string;
  includeLocalBusiness?: boolean;
  includeService?: boolean;
  includeAggregateRating?: boolean;
  includeReviews?: boolean;
  serviceName?: string;
  serviceDescription?: string;
}

export const ComprehensiveSchema: React.FC<ComprehensiveSchemaProps> = ({
  pageName = "Secondary Glazing Specialist",
  pageDescription = "Professional secondary glazing installation for London properties",
  includeLocalBusiness = true,
  includeService = true,
  includeAggregateRating = true,
  includeReviews = true,
  serviceName = "Secondary Glazing Installation",
  serviceDescription = "Expert secondary glazing services for listed buildings, conservation areas, and heritage properties across London. Reduce noise by up to 80%, improve thermal efficiency, and preserve your property's character."
}) => {
  const reviews = [
    {
      name: "James H.",
      rating: "5",
      text: "Excellent service from start to finish. The secondary glazing has dramatically reduced traffic noise in our Victorian terrace. Highly recommended for anyone in a conservation area."
    },
    {
      name: "Sarah M.",
      rating: "5",
      text: "Professional team who understood the requirements of our Grade II listed property. The secondary glazing is virtually invisible and has made a huge difference to our heating bills."
    },
    {
      name: "David R.",
      rating: "5",
      text: "Outstanding workmanship on our Edwardian home in Hampstead. The noise reduction is remarkable - we can finally sleep with the windows facing the road."
    }
  ];

  return (
    <Helmet>
      {/* LocalBusiness Schema */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(createLocalBusinessSchema())}
        </script>
      )}

      {/* Service Schema */}
      {includeService && (
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(serviceName, serviceDescription))}
        </script>
      )}

      {/* Product with AggregateRating Schema */}
      {includeAggregateRating && (
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
              "lowPrice": "350",
              "highPrice": "1200",
              "offerCount": "6"
            }
          })}
        </script>
      )}

      {/* Review Schema */}
      {includeReviews && reviews.map((review, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Secondary Glazing Specialist"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating,
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "reviewBody": review.text
          })}
        </script>
      ))}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Secondary Glazing Specialist",
          "url": "https://secondaryglazingspecialist.com",
          "logo": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-20-7060-1572",
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://secondaryglazingspecialist.com"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default ComprehensiveSchema;

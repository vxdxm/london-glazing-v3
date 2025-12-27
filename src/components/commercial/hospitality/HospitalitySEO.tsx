
import React from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const HospitalitySEO = () => {
  const pageMetadata = {
    title: "Hospitality Secondary Glazing London | Hotels & Restaurant Solutions",
    description: "Transform your London hospitality venue with premium secondary glazing. Up to 80% noise reduction, 50% energy savings. Trusted by boutique hotels and fine dining across Mayfair, Westminster, Bloomsbury.",
    canonicalPath: "/commercial/hospitality-sector",
    imageUrl: "https://cdn.marblism.com/ZJ5jnl5eN8z.webp",
    type: "website" as const,
    publishedDate: "2024-11-10",
    modifiedDate: "2025-06-27",
    keywords: ["hospitality secondary glazing", "hotel glazing London", "restaurant glazing", "noise reduction hotels", "listed hotel windows", "boutique hotel glazing", "heritage hotel windows", "fine dining noise reduction"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much noise reduction can we expect from hospitality secondary glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical reduction of 70-80% for traffic and street noise, creating peaceful environments even in central London locations."
        }
      },
      {
        "@type": "Question",
        "name": "Will secondary glazing installation disrupt hotel guests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hospitality protocols ensure minimal disruption. Rooms are returned to service the same day, with installation typically during low occupancy periods."
        }
      },
      {
        "@type": "Question",
        "name": "Is secondary glazing suitable for listed hotels and heritage buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes – secondary glazing is often the only approved method for improving listed building performance while preserving original windows."
        }
      },
      {
        "@type": "Question",
        "name": "What energy savings are realistic for hotels with secondary glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Properties typically save 30-50% on heating and cooling costs, with payback periods of 2-4 years."
        }
      }
    ]
  });

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">{faqSchema}</script>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Hospitality Secondary Glazing London",
          "description": "Premium secondary glazing solutions for hotels, restaurants, and hospitality venues in London. Up to 80% noise reduction and 50% energy savings.",
          "provider": {
            "@type": "Organization",
            "name": "Secondary Glazing Specialist",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "postalCode": "W12 7LA",
              "streetAddress": "Arch 141, MacFarlane Road"
            },
            "telephone": "0207 060 1572"
          },
          "areaServed": {
            "@type": "City",
            "name": "London"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "priceRange": "£300-£700 per window",
            "availability": "https://schema.org/InStock"
          }
        }
      `}
      </script>
    </Helmet>
  );
};

export default HospitalitySEO;


import React from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const OfficeSEO = () => {
  const pageMetadata = {
    title: "Secondary Glazing for Office Buildings London | 70-80% Noise Reduction",
    description: "Transform your London office with professional secondary glazing. 70-80% noise reduction, 30-50% energy savings, minimal disruption. Trusted by City, Canary Wharf & West End firms.",
    canonicalPath: "/commercial/office-buildings",
    imageUrl: "/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png",
    type: "website" as const,
    publishedDate: "2024-10-15",
    modifiedDate: "2026-01-01",
    keywords: ["office secondary glazing London", "commercial glazing City of London", "office noise reduction", "business energy efficiency", "Canary Wharf glazing", "West End office windows", "commercial acoustic glazing", "EPC rating improvement"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <meta name="twitter:image" content={pageMetadata.imageUrl} />
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing for Office Buildings in London",
          "description": "Transform your London office building with professional secondary glazing solutions that deliver immediate results: 70-80% noise reduction, 30-50% energy savings, and minimal business disruption.",
          "image": "${pageMetadata.imageUrl}",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-lg", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Commercial Office Secondary Glazing",
            "description": "Professional secondary glazing solutions for London office buildings with 70-80% noise reduction and 30-50% energy savings.",
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
            "areaServed": [
              "City of London",
              "Canary Wharf",
              "West End",
              "Mayfair",
              "Westminster",
              "Victoria",
              "Holborn",
              "Bloomsbury",
              "Shoreditch",
              "Clerkenwell"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "priceRange": "£400-£800 per window",
              "availability": "https://schema.org/InStock"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Commercial Solutions",
                "item": "https://secondaryglazingspecialist.com/commercial"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Office Buildings",
                "item": "https://secondaryglazingspecialist.com/commercial/office-buildings"
              }
            ]
          }
        }
      `}
      </script>
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can installation be completed outside working hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we routinely work evenings, weekends, and holidays to avoid business disruption."
              }
            },
            {
              "@type": "Question",
              "name": "How long does installation take for a typical office?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most office floors (20-30 windows) are completed in 2-3 working days."
              }
            },
            {
              "@type": "Question",
              "name": "What noise reduction can we expect?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard installations achieve 20-30dB reduction; acoustic laminated options reach 40-50dB."
              }
            },
            {
              "@type": "Question",
              "name": "Will secondary glazing improve our EPC rating?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Secondary glazing can improve ratings by 1-2 grades (e.g., D to B), significantly impacting property value."
              }
            },
            {
              "@type": "Question",
              "name": "Is secondary glazing suitable for listed office buildings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, secondary glazing is often the only viable upgrade option for heritage buildings, requiring no structural modifications."
              }
            }
          ]
        }
      `}
      </script>
    </Helmet>
  );
};

export default OfficeSEO;

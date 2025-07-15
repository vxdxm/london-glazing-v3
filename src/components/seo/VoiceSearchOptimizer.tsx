import React from 'react';

interface VoiceSearchOptimizerProps {
  primaryKeywords: string[];
  conversationalQueries: string[];
  localContext?: {
    city: string;
    region: string;
    serviceArea: string[];
  };
}

/**
 * Voice Search Optimizer - Enhances content for voice search and AI assistants
 * Optimizes for conversational queries and featured snippets
 */
export const VoiceSearchOptimizer: React.FC<VoiceSearchOptimizerProps> = ({
  primaryKeywords,
  conversationalQueries,
  localContext = {
    city: "London",
    region: "UK",
    serviceArea: ["London", "Greater London", "South East England"]
  }
}) => {
  const generateVoiceSearchSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".voice-optimized",
        ".faq-question",
        ".faq-answer",
        "h1",
        "h2",
        "h3",
        ".key-benefit",
        ".service-description"
      ],
      "xpath": [
        "//*[contains(@class, 'voice-optimized')]",
        "//*[contains(@class, 'faq-question')]",
        "//*[contains(@class, 'faq-answer')]"
      ]
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": conversationalQueries.map(query => ({
        "@type": "Question",
        "name": query,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we provide ${primaryKeywords.join(", ")} services in ${localContext.city} and surrounding areas.`
        },
        "inLanguage": "en-GB",
        "audience": {
          "@type": "Audience",
          "audienceType": "homeowners and property managers",
          "geographicArea": {
            "@type": "Place",
            "name": localContext.serviceArea.join(", ")
          }
        }
      }))
    },
    "about": {
      "@type": "Service",
      "name": "Secondary Glazing Services",
      "serviceType": primaryKeywords,
      "areaServed": {
        "@type": "Place",
        "name": localContext.serviceArea
      },
      "provider": {
        "@type": "Organization",
        "name": "Secondary Glazing Specialist"
      }
    },
    "keywords": [
      ...primaryKeywords,
      ...conversationalQueries,
      `${primaryKeywords[0]} near me`,
      `${primaryKeywords[0]} in ${localContext.city}`,
      `best ${primaryKeywords[0]} ${localContext.city}`
    ].join(", ")
  });

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVoiceSearchSchema())
        }}
      />
      
      {/* Hidden content optimized for voice search */}
      <div style={{ display: 'none' }} className="voice-search-content">
        {conversationalQueries.map((query, index) => (
          <div key={index} className="voice-optimized">
            <h3>{query}</h3>
            <p>
              Yes, we provide {primaryKeywords.join(", ")} services in {localContext.city}. 
              Our team specializes in {primaryKeywords[0]} for properties throughout {localContext.serviceArea.join(", ")}.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
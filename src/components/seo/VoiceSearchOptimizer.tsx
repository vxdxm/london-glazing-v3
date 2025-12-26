import React from 'react';

interface VoiceSearchQuery {
  question: string;
  answer: string;
}

interface VoiceSearchOptimizerProps {
  primaryKeywords: string[];
  /**
   * Each query must have a unique, specific answer - no generic templates!
   * This is critical for SEO to avoid duplicate/thin content penalties.
   */
  conversationalQueries: VoiceSearchQuery[];
  localContext?: {
    city: string;
    region: string;
    serviceArea: string[];
  };
}

/**
 * Voice Search Optimizer - Enhances content for voice search and AI assistants
 * Optimizes for conversational queries and featured snippets
 * 
 * IMPORTANT: Each question MUST have a unique, specific answer.
 * Generic/duplicate answers will hurt SEO rankings.
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
        "name": query.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": query.answer
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
      ...conversationalQueries.map(q => q.question),
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
      
      {/* Hidden content optimized for voice search - each answer is unique */}
      <div style={{ display: 'none' }} className="voice-search-content">
        {conversationalQueries.map((query, index) => (
          <div key={index} className="voice-optimized">
            <h3>{query.question}</h3>
            <p>{query.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

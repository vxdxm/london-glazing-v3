import React from 'react';
import { createFAQSchema } from '@/utils/faq-schema';

interface AIOptimizedFAQProps {
  faqs: Array<{question: string, answer: string}>;
  pageTitle?: string;
  audience?: string;
  speakableSelectors?: string[];
}

/**
 * AI-Optimized FAQ component that enhances structured data for better Google AI understanding
 * Includes speakable content, enhanced schema markup, and AI-friendly content structure
 */
export const AIOptimizedFAQ: React.FC<AIOptimizedFAQProps> = ({
  faqs,
  pageTitle,
  audience = "property owners and installers",
  speakableSelectors = [".faq-question", ".faq-answer", "h2", "h3"]
}) => {
  const faqSchema = createFAQSchema(faqs, {
    includeAIOptimization: true,
    speakableSelectors,
    audience,
    language: "en-GB"
  });

  // Enhanced structured data for AI understanding
  const enhancedSchema = {
    ...faqSchema,
    about: {
      "@type": "Thing",
      name: "Secondary Glazing",
      description: "Internal window systems that improve thermal efficiency, reduce noise, and enhance security"
    },
    keywords: faqs.map(faq => faq.question.toLowerCase()).join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: "Secondary Glazing Specialist",
      url: "https://secondaryglazingspecialist.com"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: ".faq-content"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(enhancedSchema)
      }}
    />
  );
};
export interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
    // AI-optimized fields for better understanding
    speakable?: {
      "@type": string;
      cssSelector: string[];
    };
    inLanguage?: string;
    audience?: {
      "@type": string;
      audienceType: string;
    };
  }>;
  // Enhanced for AI search
  inLanguage?: string;
  speakable?: {
    "@type": string;
    cssSelector: string[];
  };
  potentialAction?: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export const createFAQSchema = (
  faqs: Array<{question: string, answer: string}>,
  options?: {
    includeAIOptimization?: boolean;
    speakableSelectors?: string[];
    audience?: string;
    language?: string;
  }
): FAQSchema => {
  const { 
    includeAIOptimization = true, 
    speakableSelectors = [".faq-question", ".faq-answer"],
    audience = "general public",
    language = "en-GB"
  } = options || {};

  const schema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => {
      const question: any = {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      };

      if (includeAIOptimization) {
        question.speakable = {
          "@type": "SpeakableSpecification",
          cssSelector: speakableSelectors
        };
        question.inLanguage = language;
        question.audience = {
          "@type": "Audience",
          audienceType: audience
        };
      }

      return question;
    })
  };

  if (includeAIOptimization) {
    schema.inLanguage = language;
    schema.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors
    };
    schema.potentialAction = {
      "@type": "SearchAction",
      target: "https://secondaryglazingspecialist.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    };
  }

  return schema;
};
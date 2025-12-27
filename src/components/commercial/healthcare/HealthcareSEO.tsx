import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { createFAQSchema } from "@/utils/faq-schema";

export const HealthcareSEO = () => {
  const pageMetadata = {
    title: "Healthcare Secondary Glazing Solutions | NHS & Hospital Windows London",
    description: "Specialized secondary glazing for healthcare facilities. CQC compliant solutions with 80% noise reduction, 50% energy savings for NHS hospitals, care homes, and private clinics across London.",
    canonicalPath: "/commercial/healthcare-industry",
    imageUrl: "/images/commercial/healthcare-hospital-ward.webp",
    type: "website" as const,
    publishedDate: "2025-02-15",
    modifiedDate: "2025-05-17",
    keywords: [
      "healthcare glazing",
      "hospital windows",
      "NHS secondary glazing",
      "CQC compliant glazing",
      "care home windows",
      "medical facility glazing",
      "patient room noise reduction",
      "hospital energy efficiency",
      "HTM compliant windows",
      "private hospital glazing",
      "GP surgery windows",
      "mental health unit glazing"
    ]
  };

  const faqs = [
    {
      question: "Is secondary glazing compliant with NHS/CQC standards?",
      answer: "Yes, our secondary glazing meets all relevant NHS estates standards and supports CQC inspection requirements for safe, effective healthcare environments."
    },
    {
      question: "Can you install without disrupting patients?",
      answer: "Absolutely. We specialize in phased installation working around clinical schedules, offering out-of-hours installation and room-by-room approaches that maintain patient care continuity."
    },
    {
      question: "How does it improve patient sleep and recovery?",
      answer: "By reducing external noise by 70-80% and maintaining stable temperatures, secondary glazing creates the peaceful environment essential for healing sleep patterns and faster recovery."
    },
    {
      question: "What about HTM compliance?",
      answer: "Our installations meet Health Technical Memorandum requirements for acoustic performance, thermal efficiency, and healthcare building standards."
    },
    {
      question: "What energy savings can we expect?",
      answer: "Healthcare facilities typically see 30-50% reduction in heating and cooling costs, representing significant annual savings for energy-intensive 24/7 operations."
    },
    {
      question: "Is it suitable for listed hospital buildings?",
      answer: "Yes – secondary glazing is often the only approved method for improving listed building performance while preserving original windows."
    }
  ];

  const pageSchema = createPageSchema(pageMetadata);
  const faqSchema = createFAQSchema(faqs, { includeAIOptimization: true });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Secondary Glazing",
    "description": "Specialized secondary glazing solutions for NHS hospitals, private hospitals, care homes, and medical facilities across London.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Secondary Glazing Specialist",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "serviceType": "Healthcare Secondary Glazing Installation"
  };

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
      <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:description" content={pageMetadata.description} />
      <meta property="og:type" content={pageMetadata.type} />
      <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
      <meta property="og:image" content={pageMetadata.imageUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <meta name="twitter:image" content={pageMetadata.imageUrl} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">{pageSchema}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};

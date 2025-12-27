import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { createFAQSchema } from "@/utils/faq-schema";

export const RetailSEO = () => {
  const pageMetadata = {
    title: "Retail Secondary Glazing Solutions | Shop & Store Windows London",
    description: "Specialized secondary glazing for retail spaces and shops. Boost customer comfort, reduce energy costs by 50%, enhance security, and preserve heritage shopfronts across London.",
    canonicalPath: "/commercial/retail-spaces",
    imageUrl: "/images/commercial/retail-heritage.webp",
    type: "website" as const,
    keywords: [
      "retail glazing",
      "shop windows",
      "store glazing",
      "retail security",
      "display window glazing",
      "London retail",
      "commercial shop windows",
      "heritage shopfront",
      "boutique glazing",
      "showcase windows",
      "retail energy savings"
    ]
  };

  const faqs = [
    {
      question: "How much can secondary glazing reduce my shop's heating costs?",
      answer: "Typically 30-50% reduction, translating to £2,000-£15,000+ annual savings depending on shop size."
    },
    {
      question: "Will it increase customer dwell time and sales?",
      answer: "Research shows comfortable temperatures increase browsing time by 30-40%, directly correlating with higher basket values."
    },
    {
      question: "Can you install without closing my shop?",
      answer: "Yes, we guarantee minimal trading disruption with evening/weekend installation options."
    },
    {
      question: "Is it suitable for listed shop fronts?",
      answer: "Perfect for heritage retail premises: preserves original character without planning permission requirements."
    },
    {
      question: "What's the typical payback period?",
      answer: "3-5 years from energy savings alone, often faster with sales improvements."
    }
  ];

  const pageSchema = createPageSchema(pageMetadata);
  const faqSchema = createFAQSchema(faqs, { includeAIOptimization: true });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail Secondary Glazing",
    "description": "Specialized secondary glazing solutions for retail spaces, shops, and commercial storefronts across London.",
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
    "serviceType": "Retail Secondary Glazing Installation"
  };

  return (
    <Helmet>
      <title>{pageMetadata.title}</title>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
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
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};

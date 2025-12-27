import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { createFAQSchema } from "@/utils/faq-schema";

export const EducationSEO = () => {
  const pageMetadata = {
    title: "Educational Sector Secondary Glazing | School & University Windows London",
    description: "BB93 compliant secondary glazing for schools, colleges, and universities. Improve student learning outcomes with 80% noise reduction, 50% energy savings. CIF funding eligible.",
    canonicalPath: "/commercial/educational-sector",
    imageUrl: "/lovable-uploads/90c68028-9503-4ba2-b65b-9cfce4cd13a0.jpg",
    type: "website" as const,
    publishedDate: "2025-02-15",
    modifiedDate: "2025-05-17",
    keywords: [
      "school secondary glazing",
      "BB93 compliant windows",
      "educational glazing",
      "university windows",
      "school noise reduction",
      "CIF funding glazing",
      "listed school buildings",
      "SEND school environment",
      "exam hall acoustics",
      "school energy savings",
      "heritage school windows",
      "London school glazing"
    ]
  };

  const faqs = [
    {
      question: "Does secondary glazing meet BB93 acoustic standards?",
      answer: "Yes, our secondary glazing systems meet and exceed Department for Education BB93 acoustic standards."
    },
    {
      question: "Can you install during term time without disrupting lessons?",
      answer: "Yes, we offer flexible installation options including out-of-hours and weekend work. Each classroom typically takes just one day."
    },
    {
      question: "Is secondary glazing suitable for listed school buildings?",
      answer: "Absolutely. Secondary glazing is completely reversible, preserves original features, and typically requires no planning permission."
    },
    {
      question: "What funding is available for school secondary glazing?",
      answer: "CIF funding, LCVAP for voluntary-aided schools, and MAT investment programs are available. We can help with applications."
    },
    {
      question: "How much can schools save on energy costs?",
      answer: "Primary schools typically save £3,000-£5,000 annually, secondary schools £8,000-£15,000+, with 3-5 year payback periods."
    },
    {
      question: "Do your installation teams have DBS checks?",
      answer: "Yes, all team members hold enhanced DBS checks and follow strict safeguarding procedures."
    }
  ];

  const pageSchema = createPageSchema(pageMetadata);
  const faqSchema = createFAQSchema(faqs, { includeAIOptimization: true });

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Educational Sector Secondary Glazing",
    "description": "BB93 compliant secondary glazing solutions for schools, colleges, and universities across London.",
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
    "serviceType": "Educational Secondary Glazing Installation"
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

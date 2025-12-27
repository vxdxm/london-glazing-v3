import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { createPageSchema } from "@/utils/seo";
import { createLocalBusinessSchema, createServiceSchema } from "@/utils/structuredData";
import CommercialHero from "@/components/commercial/CommercialHero";
import WhyCommercialNeeds from "@/components/commercial/WhyCommercialNeeds";
import CommercialBenefits from "@/components/commercial/CommercialBenefits";
import CommercialSectors from "@/components/commercial/CommercialSectors";
import CommercialCaseStudies from "@/components/commercial/CommercialCaseStudies";
import CommercialProcess from "@/components/commercial/CommercialProcess";
import WhyChooseCommercial from "@/components/commercial/WhyChooseCommercial";
import CommercialInvestment from "@/components/commercial/CommercialInvestment";
import CommercialFAQ from "@/components/commercial/CommercialFAQ";
import CommercialCTA from "@/components/commercial/CommercialCTA";

const CommercialSolutions = () => {
  const pageMetadata = {
    title: "Commercial Secondary Glazing London | Business & Office Solutions",
    description: "Reduce energy costs by 30-50%, improve occupant comfort, and preserve heritage properties with secondary glazing trusted by 100+ London businesses. 3-5 year payback typical.",
    canonicalPath: "/commercial",
    imageUrl: "/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg",
    type: "website" as const,
    publishedDate: "2024-12-15",
    modifiedDate: "2025-05-17",
    keywords: ["commercial glazing", "office glazing", "business windows", "hotel windows", "commercial property", "noise reduction", "energy efficiency", "London commercial", "heritage buildings", "listed buildings"]
  };

  const pageSchema = createPageSchema(pageMetadata);
  
  return (
    <div className="min-h-screen bg-background">
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
        {pageMetadata.imageUrl && <meta property="og:image" content={pageMetadata.imageUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={pageMetadata.imageUrl} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createLocalBusinessSchema())}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            "Commercial Secondary Glazing Installation",
            "Reduce energy costs by 30-50%, improve occupant comfort, and preserve heritage properties with secondary glazing trusted by 100+ London businesses."
          ))}
        </script>
        
        {/* Product Schema with Offers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Commercial Secondary Glazing",
            "description": "Professional secondary glazing for commercial properties with 30-50% energy savings",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "GBP",
              "lowPrice": "8000",
              "highPrice": "100000",
              "offerCount": "8"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much can we save on energy costs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically 30-50% reduction in heating/cooling costs. A medium office building can save £8,000-£15,000 annually."
                }
              },
              {
                "@type": "Question",
                "name": "Can you install without disrupting business operations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We install around your operations with out-of-hours and weekend options. No building closure required."
                }
              },
              {
                "@type": "Question",
                "name": "Is it suitable for listed commercial buildings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes - ideal for listed buildings as it preserves original windows and typically doesn't require planning permission."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <MainNav />
      
      <main>
        <CommercialHero />
        <WhyCommercialNeeds />
        <CommercialBenefits />
        <CommercialSectors />
        <CommercialCaseStudies />
        <CommercialProcess />
        <WhyChooseCommercial />
        <CommercialInvestment />
        <CommercialFAQ />
        <CommercialCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CommercialSolutions;
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { CasementIcon } from "@/components/icons/GlazingTypeIcons";
import CasementHero from "@/components/residential/casement/CasementHero";
import WhyCasementNeedsGlazing from "@/components/residential/casement/WhyCasementNeedsGlazing";
import CasementBenefits from "@/components/residential/casement/CasementBenefits";
import CasementOptions from "@/components/residential/casement/CasementOptions";
import CasementGlassSpecs from "@/components/residential/casement/CasementGlassSpecs";
import CasementInstallation from "@/components/residential/casement/CasementInstallation";
import CasementInvestment from "@/components/residential/casement/CasementInvestment";
import CasementCaseStudies from "@/components/residential/casement/CasementCaseStudies";
import CasementComparison from "@/components/residential/casement/CasementComparison";
import CasementFAQ from "@/components/residential/casement/CasementFAQ";
import CasementCTA from "@/components/residential/casement/CasementCTA";

const CasementWindows = () => {
  const pageMetadata = {
    title: "Casement Window Secondary Glazing London | 45-60% Energy Savings",
    description: "Expert casement window secondary glazing for London properties. Reduce energy bills by 45-60%, achieve 70-80% noise reduction. Works with metal, timber & uPVC casements. Free assessment.",
    canonicalPath: "/residential/casement-windows",
    imageUrl: "/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png",
    keywords: [
      "casement window secondary glazing",
      "casement window insulation London",
      "metal casement secondary glazing",
      "Art Deco window glazing",
      "1930s casement windows",
      "hinged secondary glazing",
      "casement noise reduction",
      "period casement windows",
      "steel casement glazing",
      "casement draught proofing"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I still open my casement windows with secondary glazing installed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! With hinged secondary glazing, you have completely independent operation of both your primary casements and secondary units. Lift-out panels remove entirely for full access."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need planning permission for casement window secondary glazing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No planning permission is required as secondary glazing is an internal modification that doesn't alter the exterior appearance of your property."
        }
      },
      {
        "@type": "Question",
        "name": "How much does casement window secondary glazing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect £350-£800 per casement window depending on size and glass specification. This is 50-65% cheaper than quality casement replacement."
        }
      },
      {
        "@type": "Question",
        "name": "Will it work with my 1930s Art Deco metal casements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Secondary glazing is perfect for Art Deco properties - it preserves the period character while solving the single-glazed, draughty problems common in these beautiful buildings."
        }
      },
      {
        "@type": "Question",
        "name": "Can you install secondary glazing on deteriorating metal casements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - this is actually ideal. Secondary glazing protects deteriorating metal casements from further weather exposure while dramatically improving their performance."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Casement Window Secondary Glazing",
    "description": "Professional secondary glazing for casement windows delivering 45-60% energy savings and 70-80% noise reduction. Works with metal, timber, and uPVC casements.",
    "brand": {
      "@type": "Brand",
      "name": "Secondary Glazing Specialist"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "350",
      "highPrice": "800",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Casement Window Secondary Glazing Installation",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Casement Secondary Glazing Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hinged Secondary Glazing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lift-Out Panel Secondary Glazing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fixed Secondary Glazing"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-6">
          <CasementIcon size={56} className="text-primary" />
          <h1 className="text-4xl font-bold">Casement Window Secondary Glazing</h1>
        </div>
        
        <article className="prose lg:prose-xl max-w-none prose-headings:font-bold prose-p:text-foreground/80">
          <CasementHero />
          <WhyCasementNeedsGlazing />
          <CasementBenefits />
          <CasementOptions />
          <CasementGlassSpecs />
          <CasementInstallation />
          <CasementInvestment />
          <CasementCaseStudies />
          <CasementComparison />
          <CasementFAQ />
          <CasementCTA />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default CasementWindows;


import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SingleDoubleGlazedIntro } from "@/components/residential/single-double/SingleDoubleGlazedIntro";
import { SingleDoubleGlazedBenefits } from "@/components/residential/single-double/SingleDoubleGlazedBenefits";
import { SingleDoubleGlazedComparison } from "@/components/residential/single-double/SingleDoubleGlazedComparison";
import { SeoHead } from "@/components/ui/seo-head";

const SingleDoubleGlazed = () => {
  // Current domain - in a real app, you might get this from environment variables
  const domain = "https://secondaryglazingspecialist.com";
  const pagePath = "/residential/single-double-glazed";
  const canonicalUrl = `${domain}${pagePath}`;
  
  // Structured data for products page
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Secondary Windows - Single & Double Glazed",
    "description": "High-quality single and double glazed secondary windows offering superior thermal and acoustic performance for residential properties.",
    "image": "/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png",
    "brand": {
      "@type": "Brand",
      "name": "Heritage Window Solutions"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "250",
      "highPrice": "800",
      "offerCount": "20",
      "offers": [
        {
          "@type": "Offer",
          "name": "Single Glazed Secondary Window (4mm Toughened Glass)",
          "price": "250",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Double Glazed Secondary Window (4mm Low E/Argon Gas Filled Cavity/4mm Toughened Glass)",
          "price": "450",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Thompson"
      },
      "reviewBody": "The double glazed secondary windows have made a remarkable difference to both noise levels and heating costs in our Victorian property."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Single & Double Glazed Secondary Windows | Heritage Window Solutions"
        description="Compare single glazed (4mm toughened) and double glazed (4mm Low E/Argon Gas Filled Cavity/4mm) secondary windows - benefits, performance and suitability for your property."
        canonicalUrl={canonicalUrl}
        ogType="product"
        ogTitle="Single vs Double Glazed Secondary Windows | Expert Comparison"
        ogDescription="Discover the differences between single and double glazed secondary windows. Compare energy efficiency, noise reduction, and find the perfect solution for your property."
        ogImage="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png"
        jsonLd={productSchema}
      />
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Single (4mm Toughened Glass) &amp; Double Glazed (mm Low E/Argon Gas Filled Cavity/4mm Toughened Glass) Secondary Windows</h1>
        <SingleDoubleGlazedIntro />
        <SingleDoubleGlazedBenefits />
        <SingleDoubleGlazedComparison />
      </div>
      <Footer />
    </div>
  );
};

export default SingleDoubleGlazed;

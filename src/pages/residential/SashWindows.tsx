import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import SashWindowGlassOptions from "@/components/residential/SashWindowGlassOptions";
import SashHero from "@/components/residential/sash/SashHero";
import WhySashNeedsGlazing from "@/components/residential/sash/WhySashNeedsGlazing";
import SashBenefits from "@/components/residential/sash/SashBenefits";
import SashWindowOptions from "@/components/residential/sash/SashWindowOptions";
import SashInstallationProcess from "@/components/residential/sash/SashInstallationProcess";
import SashInvestment from "@/components/residential/sash/SashInvestment";
import SashFAQ from "@/components/residential/sash/SashFAQ";
import SashWindowCTA from "@/components/residential/sash/SashWindowCTA";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Helmet } from "react-helmet";
import { VerticalSlidingIcon } from "@/components/icons/GlazingTypeIcons";

const SashWindows = () => {
  const currentDate = "2025-05-15";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will secondary glazing damage my original sash windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Secondary glazing installs on the window reveal (wall surround), not on the sash window itself. Your original windows remain completely untouched and fully operational with only discrete wall fixings required."
        }
      },
      {
        "@type": "Question",
        "name": "How much does sash window secondary glazing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "£400-£900 per window depending on size, style, and glass specification. Small Victorian sash windows typically cost £400-£600, while larger Georgian sash windows range from £600-£800."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need planning permission for listed building sash windows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically no. Secondary glazing is an internal modification that doesn't alter external appearance, generally considered permitted development."
        }
      },
      {
        "@type": "Question",
        "name": "How long does installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2-3 hours per window including protection setup, installation, adjustment, testing, and clean-up. Full house installations typically take 2-3 days with minimal disruption."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sash Window Secondary Glazing",
    "description": "Secondary glazing solutions for Victorian, Georgian, and Edwardian sash windows. Reduce energy bills by 50-65% and noise by 70-80% while preserving heritage windows.",
    "brand": {
      "@type": "Brand",
      "name": "Secondary Glazing Specialist"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "400",
      "highPrice": "900",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sash Window Secondary Glazing London | 50-65% Energy Savings | Period Property Specialists</title>
        <meta 
          name="description" 
          content="Transform your period property with sash window secondary glazing. Cut energy bills by 50-65%, reduce noise by 70-80%, preserve heritage windows. Ideal for listed buildings. From £400 per window." 
        />
        <meta 
          name="keywords" 
          content="sash window secondary glazing, period property glazing London, Victorian window insulation, Georgian sash windows, listed building glazing, noise reduction sash windows, thermal insulation period windows, secondary glazing cost" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/sash-windows" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sash Window Secondary Glazing London | Period Property Specialists" />
        <meta property="og:description" content="Transform your period property with sash window secondary glazing. Cut energy bills by 50-65%, reduce noise by 70-80%. Ideal for listed buildings and conservation areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/sash-windows" />
        <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sash Window Secondary Glazing London | Period Property Specialists" />
        <meta name="twitter:description" content="Transform your period property with sash window secondary glazing. Cut energy bills by 50-65%, reduce noise by 70-80%." />
        <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <article className="prose lg:prose-xl max-w-none">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <VerticalSlidingIcon size={56} className="text-primary" />
                <h1 className="text-3xl md:text-4xl font-bold">Sash Window Secondary Glazing</h1>
              </div>
            </div>
            <div className="flex-1">
              <OptimizedImage 
                src="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png"
                alt="Victorian sash windows with secondary glazing installed, showing elegant period property features preserved"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                priority={true}
                width={800}
                height={400}
              />
            </div>
          </div>

          <SashHero />

          <WhySashNeedsGlazing />

          {/* Image break */}
          <div className="mb-12">
            <OptimizedImage 
              src="https://cdn.marblism.com/UKMLGp0xS8X.webp"
              alt="Georgian sash window with secondary glazing installation"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              width={1200}
              height={400}
            />
          </div>

          <SashBenefits />

          {/* Image break */}
          <div className="mb-12">
            <OptimizedImage 
              src="https://cdn.marblism.com/BBwk14Z2Aok.webp"
              alt="Period property interior showing sash windows with secondary glazing"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              width={1200}
              height={400}
            />
          </div>

          <SashWindowOptions />

          <SashInstallationProcess />

          <SashInvestment />

          {/* Image break */}
          <div className="mb-12">
            <OptimizedImage 
              src="https://cdn.marblism.com/Puy5qG_4nyG.webp"
              alt="Completed sash window secondary glazing installation in London period property"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              width={1200}
              height={400}
            />
          </div>

          <SashWindowGlassOptions />

          <SashFAQ />

          <SashWindowCTA />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default SashWindows;

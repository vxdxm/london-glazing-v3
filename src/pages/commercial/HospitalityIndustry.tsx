
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/ui/seo-head";

const HospitalityIndustry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="Hospitality Secondary Glazing | Hotels & Restaurants Solutions"
        description="Specialist secondary glazing for hotels and restaurants. Create peaceful guest environments, reduce street noise, and enhance energy efficiency in your hospitality venue."
        canonicalUrl="https://secondaryglazingspecialist.com/commercial/hospitality-sector"
        ogTitle="Secondary Glazing for Hospitality Industry"
        ogDescription="Specialist secondary glazing for hotels and restaurants. Create peaceful guest environments, reduce street noise, and enhance energy efficiency in your hospitality venue."
        ogImage="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "headline": "Secondary Glazing Solutions for the Hospitality Industry",
          "description": "Create the perfect environment for your guests with our premium secondary glazing solutions, designed specifically for hotels, restaurants, and leisure facilities.",
          "image": "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".text-lg", ".card-title", ".card-content"]
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Hospitality Secondary Glazing",
            "description": "Specialized glazing solutions for hotels, restaurants, and bars.",
            "provider": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "postalCode": "W12 7LA",
                "streetAddress": "Arch 141, MacFarlane Road"
              },
              "telephone": "0207 060 1572"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock"
            }
          }
        }}
      >
        <meta name="keywords" content="hotel glazing, restaurant glazing, hospitality windows, noise reduction, hotel sound insulation, thermal glazing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secondary Glazing for Hospitality Industry" />
        <meta name="twitter:description" content="Specialist secondary glazing for hotels and restaurants. Create peaceful guest environments, reduce street noise, and enhance energy efficiency in your hospitality venue." />
      </SeoHead>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing for Hospitality Industry</h1>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              alt="Modern hotel building facade"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Our premium secondary glazing solutions are specifically designed for the hospitality sector,
              helping create comfortable and peaceful environments for your guests.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Key Benefits of Hospitality Secondary Glazing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Superior noise reduction for peaceful guest rooms</li>
              <li>Enhanced temperature control for year-round comfort</li>
              <li>Elegant aesthetics that complement your property</li>
              <li>Energy efficiency to reduce operational costs</li>
              <li>UV protection to prevent furniture fading</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Perfect For Hospitality Buildings</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hotels and resorts</li>
              <li>Restaurants and cafes</li>
              <li>Bars and lounges</li>
              <li>Spa and wellness centers</li>
              <li>Conference facilities</li>
            </ul>
          </div>

          <div className="mt-12 space-x-4">
            <Button 
              onClick={() => navigate("/quote-request")}
              className="bg-primary text-primary-foreground"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/commercial")}
            >
              Back to Commercial Solutions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalityIndustry;

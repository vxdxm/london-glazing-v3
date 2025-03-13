
import { MainNav } from "@/components/MainNav";
import { Helmet } from "react-helmet";
import RepairsHero from "@/components/repairs/RepairsHero";
import CommonIssues from "@/components/repairs/CommonIssues";
import SpiralBalanceSection from "@/components/repairs/SpiralBalanceSection";
import AdditionalServices from "@/components/repairs/AdditionalServices";
import RepairsCTA from "@/components/repairs/RepairsCTA";
import RepairsFAQ from "@/components/repairs/RepairsFAQ";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SecondaryGlazingRepairs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Repairs & Maintenance | Spiral Balance Specialists | UK</title>
        <meta 
          name="description" 
          content="Professional secondary glazing repair services for spiral balances, hardware replacement, and alignment issues. 10+ years experience with all major brands. Free quotes available." 
        />
        <meta name="keywords" content="secondary glazing repairs, spiral balance replacement, vertical sliding unit repairs, window maintenance, secondary glazing specialists" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
        
        {/* Open Graph / Social Media tags */}
        <meta property="og:title" content="Secondary Glazing Repairs & Maintenance | Spiral Balance Specialists" />
        <meta property="og:description" content="Expert secondary glazing repair services in the UK. We fix spiral balances, hardware issues and misalignments for all major brands. Free quotes & nationwide service." />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/secondary-glazing-repairs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://secondaryglazingspecialist.com/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secondary Glazing Repairs & Maintenance | Spiral Balance Specialists" />
        <meta name="twitter:description" content="Expert secondary glazing repair services in the UK. We fix spiral balances, hardware issues and misalignments for all major brands." />
        <meta name="twitter:image" content="https://secondaryglazingspecialist.com/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png" />
        
        {/* Structured data for rich snippets */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Secondary Glazing Specialist - Repair Services",
            "image": "https://secondaryglazingspecialist.com/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png",
            "description": "Professional secondary glazing repair services specializing in spiral balances for vertical sliding units. Expert repairs to extend the lifespan of your glazing.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            },
            "priceRange": "££",
            "telephone": "+44-XXXX-XXXXXX",
            "openingHours": "Mo-Fr 08:00-17:00",
            "sameAs": [
              "https://www.facebook.com/secondaryglazingspecialist",
              "https://www.instagram.com/secondaryglazingspecialist"
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 52.3555,
                "longitude": -1.1743
              },
              "geoRadius": "500 km"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Secondary Glazing Repair Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spiral Balance Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hardware Repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Alignment Issues"
                  }
                }
              ]
            }
          }
        `}</script>
      </Helmet>
      <MainNav />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumbs for better SEO and navigation */}
        <nav className="flex mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-sky-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-gray-700 font-medium">Secondary Glazing Repairs</span>
              </div>
            </li>
          </ol>
        </nav>
        
        {/* Add main article tag for better semantic structure */}
        <article>
          <RepairsHero />
          <CommonIssues />
          <SpiralBalanceSection />
          <AdditionalServices />
          <RepairsFAQ />
          <RepairsCTA />
        </article>
      </div>
    </div>
  );
};

export default SecondaryGlazingRepairs;

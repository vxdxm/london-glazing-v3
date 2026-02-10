import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Info } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const SecondaryGlazingBuildingRegulations = () => {
  // Add current date for SEO freshness signals
  const currentDate = "2025-05-17";
  
  const pageMetadata = {
    title: "Secondary Glazing Building Regulations | Compliance Guide",
    description: "Comprehensive guide to UK building regulations for secondary glazing installations. Learn about thermal performance requirements, ventilation standards, and fire safety compliance.",
    canonicalPath: "/specialized/secondary-glazing-building-regulations",
    imageUrl: "https://secondaryglazingspecialist.com/lovable-uploads/b435a0a1-65cb-4dd3-9596-37ce74c9378e.png",
    type: "article" as const,
    publishedDate: "2024-07-10",
    modifiedDate: currentDate,
    keywords: ["secondary glazing regulations", "building regulations", "Part L", "Part F", "Part B", "Part K", "compliance guide", "thermal performance", "ventilation", "fire safety", "window regulations"]
  };

  const pageSchema = createPageSchema(pageMetadata);
  
  // Add logging for indexing
  useEffect(() => {
    console.log("Secondary Glazing Building Regulations page loaded for indexing");
  }, []);
  
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
        
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Specialized Services",
                "item": "https://secondaryglazingspecialist.com/specialized"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Building Regulations",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <main id="main-content">
          <h1 className="text-4xl font-bold mb-8">Secondary Glazing Building Regulations</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <AspectRatio ratio={16/9} className="mb-6">
                  <OptimizedImage
                    src="/lovable-uploads/b435a0a1-65cb-4dd3-9596-37ce74c9378e.png"
                    alt="Building regulations compliance diagram"
                    className="rounded-lg"
                    objectFit="cover"
                    priority={true}
                  />
                </AspectRatio>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Info className="h-6 w-6 mr-3 text-blue-500" aria-hidden="true" />
                      <h2 className="text-2xl font-semibold" id="planning-permission">Planning Permission</h2>
                    </div>
                    
                    <div className="space-y-4 text-gray-600">
                      <p>
                        In most cases, installing secondary glazing does not require planning permission. 
                        This is because secondary glazing is considered an internal alteration that does not 
                        change the external appearance of your property.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">When You Might Need Permission</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Listed Buildings: You may need listed building consent</li>
                          <li>Conservation Areas: Special considerations may apply</li>
                          <li>Properties with Article 4 Directions: Additional restrictions might exist</li>
                        </ul>
                      </div>
                      
                      <p>
                        While planning permission is typically not required, we always recommend 
                        consulting with your local planning authority if you have any doubts, 
                        especially for properties in conservation areas or with special designations.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <section aria-labelledby="building-regulations">
                  <h2 className="text-2xl font-semibold mb-4" id="building-regulations">Key Building Regulations</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part L - Conservation of Fuel and Power</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Minimum U-value requirements for thermal performance</li>
                        <li>Secondary glazing must contribute to overall window energy efficiency</li>
                        <li>Compliance with current Building Regulations Document L1B for existing dwellings</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part F - Ventilation</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Adequate ventilation must be maintained</li>
                        <li>Trickle ventilators may be required</li>
                        <li>Background ventilation requirements for habitable rooms</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part B - Fire Safety</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Emergency egress requirements for habitable rooms</li>
                        <li>Minimum openable area specifications</li>
                        <li>Fire escape compliance for multi-story buildings</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part K - Protection from Falling</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Safety requirements for cleaning access</li>
                        <li>Guard requirements for low-level glazing</li>
                        <li>Impact safety standards compliance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
                    <p className="text-gray-600">
                      Our installations are carried out by certified professionals who ensure full compliance with all relevant building regulations. We provide comprehensive documentation and certificates upon completion.
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SecondaryGlazingBuildingRegulations;

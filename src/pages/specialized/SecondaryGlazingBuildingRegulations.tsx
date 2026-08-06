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
import RelatedResources from "@/components/seo/RelatedResources";

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

                  <div className="mt-8 space-y-6 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part L in practice: what assessors accept</h3>
                      <p className="mb-2">
                        Approved Document L1B treats secondary glazing as a controlled fitting only when the whole
                        window assembly is altered; a reversible internal secondary unit is normally assessed as an
                        improvement measure rather than a replacement. In practice, an original single-glazed sash at
                        roughly 4.8 W/m²K improves to about 1.9 W/m²K with a low-emissivity secondary pane, and to
                        about 1.6 W/m²K where a wider cavity and Pilkington K glass are combined. Those figures are
                        sufficient for SAP and RdSAP uplift, which is why the measure is routinely used to lift a
                        rented property over the MEES minimum EPC threshold without touching the façade.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part F: keeping background ventilation intact</h3>
                      <p className="mb-2">
                        Where the primary window has trickle vents, the secondary unit must not seal them off.
                        The two compliant details are an aligned acoustic-attenuated trickle vent through the secondary
                        frame, or a deliberately ventilated cavity that leaves the existing vent path open. Habitable
                        rooms require 8,000mm² equivalent area and wet rooms 4,000mm²; acoustic vents typically cost
                        3–5dB of measured performance, so on noise-critical elevations we specify mechanical extract
                        instead and record the decision in the handover pack.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part B: egress and escape windows</h3>
                      <p className="mb-2">
                        Any opening relied on for escape must retain a clear openable area of at least 0.33m² with a
                        minimum 450mm clear height and width, and a cill no higher than 1,100mm above floor level.
                        On escape openings we specify side-hung or lift-out secondary panels with a single-action
                        release that can be operated without a key, so the escape route stays usable in darkness.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Part K and Part N: impact safety glazing</h3>
                      <p className="mb-2">
                        Critical locations — glazing below 800mm from floor level, and glazing within 300mm of a door
                        edge below 1,500mm — must meet BS EN 12600 Class 2(B)2 or better. Laminated glass satisfies
                        this while also carrying the acoustic and security benefits, so it is our default in
                        low-cill Georgian and Victorian reveals rather than a toughened alternative.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Listed buildings, Article 4 and consent</h3>
                      <p className="mb-2">
                        Building Regulations and planning consent are separate consents. Listed Building Consent is
                        usually required for Grade I and Grade II properties and is normally granted because the
                        installation is reversible and the historic fabric is preserved. In conservation areas and
                        Article 4 zones a short pre-application enquiry removes the risk; our compliance hub carries a
                        borough-by-borough contact directory and a ready-to-send enquiry template.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Documentation issued on completion</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Glass specification sheet with U-value, Rw and C<sub>tr</sub> figures per opening</li>
                        <li>BS EN 12600 impact classification certificates for critical locations</li>
                        <li>Ventilation strategy record demonstrating Part F equivalent areas</li>
                        <li>Egress schedule for any opening forming part of the escape route</li>
                        <li>Reversibility statement for listed building and conservation area files</li>
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
          <RelatedResources
            title="Related compliance resources"
            intro="Standards, consent routes and performance data referenced above."
            links={[
              { title: "Compliance hub", href: "/compliance-hub", description: "Planning, PAS 2035, Article 4 and LPA contact directory." },
              { title: "Heritage & listed buildings", href: "/heritage-listed", description: "Consent-friendly specification for protected fabric." },
              { title: "Listed buildings secondary glazing", href: "/listed-buildings-secondary-glazing", description: "Reversible upgrades for Grade I and II properties." },
              { title: "Conservation areas", href: "/conservation-areas-secondary-glazing", description: "What conservation officers look for in an application." },
              { title: "Thermal insulation", href: "/specialized/thermal-insulation", description: "U-value improvement and EPC uplift detail." },
              { title: "Sound insulation", href: "/sound-insulation", description: "BS 8233 internal noise targets and glass selection." },
              { title: "Condensation control", href: "/specialized/condensation-control", description: "Dew point, surface temperature and Part F interaction." },
              { title: "Cost guide", href: "/cost-guide", description: "Budget ranges by opening type and glass specification." },
              { title: "Request a survey", href: "/quote-request", description: "Opening-by-opening compliance and performance schedule." },
            ]}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SecondaryGlazingBuildingRegulations;

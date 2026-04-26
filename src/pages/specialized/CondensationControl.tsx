
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { CondensationHeader } from "@/components/specialized/condensation/CondensationHeader";
import { CondensationInfoCards } from "@/components/specialized/condensation/CondensationInfoCards";
import { CondensationExplanationCards } from "@/components/specialized/condensation/CondensationExplanationCards";
import { VentilationOptions } from "@/components/specialized/condensation/VentilationOptions";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const CondensationControl = () => {
  const pageMetadata = {
    title: "Condensation Control Secondary Glazing | Window Moisture Solutions",
    description: "Expert condensation control solutions through secondary glazing. Prevent moisture buildup, mold growth and protect your windows with our specialized installations.",
    canonicalPath: "/specialized/condensation-control",
    imageUrl: "/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png",
    type: "article" as const,
    publishedDate: "2024-07-15",
    modifiedDate: "2025-05-17",
    keywords: ["condensation control", "secondary glazing", "moisture control", "window protection", "mold prevention", "ventilation", "London glazing specialist"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Add logging for indexing
  useEffect(() => {
    console.log("Condensation Control page loaded for indexing");
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
                "name": "Condensation Control",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <CondensationHeader />
        <CondensationInfoCards />
        <CondensationExplanationCards />
        <VentilationOptions />

        <section className="my-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Dew-point, Psychrometrics & Specification Targets</h2>
          <p className="text-muted-foreground mb-4">
            Surface condensation forms when the internal pane temperature falls below the dew-point of the adjacent air,
            calculated under the Magnus-Tetens approximation in BS EN ISO 13788:2012 (Hygrothermal performance of building
            components — Internal surface temperature to avoid critical surface humidity). For a typical UK living room
            held at 21°C and 50% RH, the dew-point is 10.2°C — meaning any pane surface below this threshold will attract
            condensate. Single-glazed primary windows in occupied dwellings routinely operate at 6–9°C in winter, placing
            them well inside the condensation risk band.
          </p>
          <p className="text-muted-foreground mb-4">
            Secondary glazing addresses this by raising the inner-pane surface temperature to 16–18°C. The intervening
            cavity must remain unsealed to the room (vented to the outside) to allow any residual moisture between panes
            to dissipate via natural buoyancy. Our standard heritage detail incorporates a 6mm vent slot to the external
            reveal, satisfying the cavity ventilation requirements outlined in BS 8213-4:2016 Code of Practice for the
            survey and installation of windows and external doorsets.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="border border-border p-3 text-left">Window System</th>
                  <th className="border border-border p-3 text-left">Inner-pane Surface Temp</th>
                  <th className="border border-border p-3 text-left">Critical RH (at 21°C)</th>
                  <th className="border border-border p-3 text-left">Mould Risk (BS EN ISO 13788)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Single Glazing (control)</td>
                  <td className="border border-border p-3">7°C</td>
                  <td className="border border-border p-3">39%</td>
                  <td className="border border-border p-3">High — fSi &lt; 0.50</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Single + Secondary (100mm)</td>
                  <td className="border border-border p-3">16°C</td>
                  <td className="border border-border p-3">73%</td>
                  <td className="border border-border p-3">Low — fSi ≈ 0.78</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Single + Secondary (150mm + K Glass)</td>
                  <td className="border border-border p-3">18°C</td>
                  <td className="border border-border p-3">82%</td>
                  <td className="border border-border p-3">Negligible — fSi ≈ 0.85</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            fSi is the temperature factor at the internal surface, with 0.75 the threshold value cited in BRE IP 1/06 for
            avoiding mould growth in dwellings. All three configurations are compatible with the Approved Document F
            (Ventilation, 2021) requirement of 0.5 ACH continuous extract in occupied rooms.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Specification for Heritage & PAS 2035 Retrofit</h3>
          <p className="text-muted-foreground">
            On listed and pre-1919 stock undergoing PAS 2035:2019 deep-retrofit, secondary glazing is the preferred
            interstitial-condensation mitigation because it preserves vapour-open performance of the primary sash and
            avoids the moisture-trap risk associated with replacement IGUs in lime-mortar reveals. The installation must
            be coordinated with whole-house ventilation strategy (typically MVHR or dMEV) under PAS 2035 Risk Path B to
            ensure the dew-point gradient through the build-up remains in the safe envelope defined in WUFI hygrothermal
            modelling.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CondensationControl;
export default CondensationControl;

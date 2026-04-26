
import React, { useEffect } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { AirGapHeader } from "@/components/specialized/airgap/AirGapHeader";
import { UnderstandingAirGap } from "@/components/specialized/airgap/UnderstandingAirGap";
import { StandardCavity } from "@/components/specialized/airgap/StandardCavity";
import { EnhancedCavity } from "@/components/specialized/airgap/EnhancedCavity";
import { FactorsAffectingCavity } from "@/components/specialized/airgap/FactorsAffectingCavity";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const AirGapSecondaryGlazing = () => {
  const pageMetadata = {
    title: "Air Gap Secondary Glazing | Optimal Cavity Spacing Guide",
    description: "Learn about optimal air gap distances in secondary glazing installations. Expert guide on 100mm and 150mm cavity spacing for maximum thermal and acoustic performance.",
    canonicalPath: "/specialized/air-gap-secondary-glazing",
    imageUrl: "https://secondaryglazingspecialist.com/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png",
    type: "article" as const,
    publishedDate: "2024-07-10",
    modifiedDate: "2025-05-17",
    keywords: ["air gap secondary glazing", "cavity spacing", "window insulation", "thermal performance", "acoustic insulation", "100mm cavity", "150mm cavity"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  // Add console logging for indexing verification
  useEffect(() => {
    console.log("Air Gap Secondary Glazing page loaded for indexing");
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
                "name": "Air Gap Secondary Glazing",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <main id="main-content" className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <AirGapHeader />
        
        <div className="grid gap-8">
          <UnderstandingAirGap />
          <StandardCavity />
          <EnhancedCavity />
          <FactorsAffectingCavity />

          <section id="calculator" aria-labelledby="calculator-heading" className="my-12">
            <h2 id="calculator-heading" className="text-3xl font-semibold mb-6 text-center">Calculate Your Noise Reduction</h2>
            <NoiseReductionCalculator />
          </section>

          <section aria-labelledby="cavity-spec-heading" className="my-12">
            <h2 id="cavity-spec-heading" className="text-3xl font-semibold mb-6">Cavity Performance Specification</h2>
            <p className="text-muted-foreground mb-6">
              The air cavity between the primary window and the secondary glazed unit is the single largest variable
              influencing acoustic and thermal performance. Acoustic performance is governed by the mass-air-mass (MAM)
              resonance frequency, defined in ISO 10140-2 and BS EN 12354-3. As cavity depth increases, the MAM resonance
              shifts to lower frequencies — moving destructive interference below the speech and traffic-noise band
              (typically 100–3,150 Hz weighted under BS EN ISO 717-1).
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left">Cavity Depth</th>
                    <th className="border border-border p-3 text-left">MAM Resonance (approx.)</th>
                    <th className="border border-border p-3 text-left">Acoustic Rw (with 6.8mm laminate)</th>
                    <th className="border border-border p-3 text-left">Combined U-value</th>
                    <th className="border border-border p-3 text-left">Typical Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">20mm</td>
                    <td className="border border-border p-3">~150 Hz</td>
                    <td className="border border-border p-3">30 dB</td>
                    <td className="border border-border p-3">2.4 W/m²K</td>
                    <td className="border border-border p-3">Reveal-restricted retrofit</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">100mm</td>
                    <td className="border border-border p-3">~70 Hz</td>
                    <td className="border border-border p-3">38 dB</td>
                    <td className="border border-border p-3">1.9 W/m²K</td>
                    <td className="border border-border p-3">Standard residential</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">150mm</td>
                    <td className="border border-border p-3">~55 Hz</td>
                    <td className="border border-border p-3">42 dB</td>
                    <td className="border border-border p-3">1.7 W/m²K</td>
                    <td className="border border-border p-3">BS 8233 'good' bedrooms</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">200mm</td>
                    <td className="border border-border p-3">~45 Hz</td>
                    <td className="border border-border p-3">45 dB</td>
                    <td className="border border-border p-3">1.6 W/m²K</td>
                    <td className="border border-border p-3">Heritage / heavy traffic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mb-3">Compliance & Specification Notes</h3>
            <p className="text-muted-foreground mb-3">
              For projects targeting the BS 8233:2014 indoor ambient noise levels (35 dB LAeq,16h living rooms, 30 dB
              LAeq,8h bedrooms), a 100mm cavity is the practical minimum where façade levels exceed 65 dB LAeq. Where
              external levels exceed 70 dB LAeq — common on TfL Red Routes, A-roads, and within the Heathrow 57 dB Lden
              contour — a 150–200mm cavity paired with 8.8mm or 10.8mm acoustic laminate is required to satisfy WHO
              Community Noise Guidelines and the Agent of Change principle under NPPF Paragraph 187.
            </p>
            <p className="text-muted-foreground">
              Thermal U-value figures are calculated to BS EN ISO 12567-1 against a single-glazed primary window of
              U = 4.8 W/m²K. The diminishing returns above 200mm reflect convective heat loss within the cavity once
              the Rayleigh number exceeds the critical threshold for laminar airflow (typically Ra ≈ 1,700) — a phenomenon
              documented in CIBSE Guide A Section 3.3.6.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AirGapSecondaryGlazing;

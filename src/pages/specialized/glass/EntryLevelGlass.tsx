import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { createPageSchema } from "@/utils/seo";

const EntryLevelGlass = () => {
  const navigate = useNavigate();
  const pageMetadata = {
    title: "6.4mm Entry-Level Laminated Glass | Rw 32dB | Standard Spec",
    description: "6.4mm laminated safety glass — Rw 32dB single-pane, P1A security rating. Standard entry-level spec for thermal-led briefs and quiet residential properties.",
    canonicalPath: "/specialized/glass/entry-level-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["6.4mm laminated glass", "Rw 32dB glass", "entry level secondary glazing", "P1A safety glass", "thermal secondary glazing glass"]
  };
  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        <meta property="og:image" content={pageMetadata.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">6.4mm Entry-Level Laminated Safety Glass</h1>

        <p className="text-lg text-muted-foreground mb-8">
          6.4mm standard laminated safety glass is the entry-level pane in our specification range — a 3+0.38+3 build-up
          (two 3mm float panes bonded with a 0.38mm standard PVB safety interlayer) delivering Rw 32 dB. It is the
          cost-leading product in the range and is specified primarily for thermal-led briefs where acoustic performance
          is a secondary requirement, for properties in genuinely quiet locations, and for budget-constrained projects
          where the additional 3 dB of acoustic PVB cannot be accommodated. It meets Approved Document K critical-location
          requirements, achieves Class 2(B)2 to BS EN 12600 (impact safety), and provides Class P1A security to BS EN 356.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acoustic Test Data — 6.4mm Standard Laminated</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Rw (single pane):</strong> 32 dB per BS EN ISO 717-1</li>
              <li><strong>Rw + Ctr:</strong> 28 dB (traffic-spectrum corrected)</li>
              <li><strong>Rw + C:</strong> 31 dB (pink-noise spectrum)</li>
              <li><strong>Combined Rw with 4mm primary, 100mm gap:</strong> 39 dB</li>
              <li><strong>Combined Rw with 4mm primary, 200mm gap + cavity absorption:</strong> 43 dB</li>
              <li><strong>Combined Rw with existing IGU primary, 150mm gap:</strong> 44 dB</li>
              <li><strong>Glass weight:</strong> 16 kg/m²</li>
              <li><strong>Light transmittance:</strong> 90% (Lt)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">When to Specify 6.4mm Standard vs 6.8mm Acoustic</h2>
        <p className="mb-6">
          For any brief where noise reduction is part of the requirement, 6.8mm acoustic laminated is the recommended
          minimum — the 3 dB Rw uplift from the acoustic PVB interlayer is the best value-for-money in the range, at
          only 8–12% additional cost. We specify 6.4mm standard laminated where: (a) the brief is primarily thermal,
          driven by U-value and EPC targets rather than dB; (b) the property is in a genuinely quiet location with
          measured façade levels below 55 dBA; (c) budget is constrained and the client is prepared to accept reduced
          acoustic performance in exchange for cost saving; or (d) the secondary glazing is being specified to meet
          Approved Document K safety requirements rather than for acoustic or thermal benefit.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Thermal Performance and Energy Briefs</h2>
        <p className="mb-6">
          6.4mm laminated has a centre-pane U-value of 5.6 W/m²K — identical to 6mm monolithic float, because PVB
          interlayers have negligible thermal effect. Whole-window U-value performance is determined by the secondary
          glazing system rather than the glass spec: in a 150mm cavity behind a single-glazed primary, expect Uw 1.8–2.0
          W/m²K, a 60–65% reduction over the unaltered single-glazed primary. For thermal-led briefs targeting EPC band
          uplift (E to C, or C to B), 6.4mm laminated paired with a Low-E coating and a 150mm cavity will deliver
          Uw 1.5–1.7 W/m²K — sufficient for most SAP score improvement targets.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Safety and Security Properties</h2>
        <p className="mb-6">
          The 0.38mm safety PVB interlayer puts 6.4mm into Class 2(B)2 of BS EN 12600 (impact resistance) and Class P1A
          of BS EN 356 (manual attack). It is suitable for use in all critical locations under Approved Document K
          (door panels, side panels, glazing below 800mm, glazing in wet areas), and may be used at ground-floor and
          basement applications without further security upgrade. The interlayer also blocks &gt;99% of UV-A and UV-B
          radiation, providing furniture and artwork protection equivalent to higher-spec acoustic products.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Typical Applications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Thermal-led briefs (EPC uplift, MEES compliance, fuel-poverty retrofits)</li>
          <li>Genuinely quiet rural and suburban properties (façade &lt;55 dBA)</li>
          <li>Loft conversions and rear-aspect rooms shielded from primary noise sources</li>
          <li>Holiday homes, weekend properties, and second homes with limited budget</li>
          <li>Listed buildings where the LBC brief is thermal rather than acoustic</li>
          <li>Critical-location safety glazing where Approved Document K compliance is the driver</li>
          <li>Outbuildings, garden rooms, and conservatories with secondary thermal upgrade requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Practical Properties</h2>
        <p className="mb-6">
          At 16 kg/m², 6.4mm is the lightest pane in the range — comfortably accommodated on standard friction stays,
          lift-out clips, and slim-line aluminium frames at any sash size we typically encounter. Light transmittance
          of 90% is visually indistinguishable from single-pane float. The slim profile also makes it the preferred
          spec for tightly constrained heritage reveal depths where larger air gaps are not achievable and the additional
          mass of thicker glass would offer no acoustic benefit at the available cavity depth.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Specification Survey</h3>
          <p className="mb-4">
            Most clients who initially ask for entry-level glass benefit from a measured façade survey before
            specification — in the majority of urban locations the 8–12% cost premium for 6.8mm acoustic is the
            better-value choice. Where 6.4mm is genuinely the right answer, we'll confirm that on survey.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book a Specification Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EntryLevelGlass;

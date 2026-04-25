import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { createPageSchema } from "@/utils/seo";

const EnhancedEntryGlass = () => {
  const navigate = useNavigate();
  const pageMetadata = {
    title: "6.8mm Enhanced Entry Acoustic Glass | Rw 35dB Stadip Silence",
    description: "6.8mm acoustic laminated glass — Rw 35dB single-pane, up to Rw 47dB combined. Step-up from standard laminated for suburban and quieter urban residential briefs.",
    canonicalPath: "/specialized/glass/enhanced-entry-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["6.8mm acoustic glass", "Rw 35dB glass", "Stadip Silence 6.8", "enhanced entry acoustic", "suburban noise reduction"]
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
        <h1 className="text-4xl font-bold mb-6">6.8mm Enhanced Entry Acoustic Laminated Glass</h1>

        <p className="text-lg text-muted-foreground mb-8">
          6.8mm acoustic laminated glass is the entry point into our acoustic-PVB range — a meaningful upgrade over
          standard 6.4mm laminated safety glass at modest additional cost. It is manufactured as two 3mm float panes
          bonded with a 0.76mm acoustic PVB interlayer (typically Stadip Silence 33.1A or Pilkington Optiphon 6.8) and
          delivers Rw 35 dB single-pane — a 3 dB improvement over standard 6.4mm laminated, achieved entirely through
          the upgraded interlayer chemistry. In a secondary glazing build-up with a 100–150mm cavity, combined whole-window
          performance reaches Rw 44–47 dB, suitable for the majority of suburban residential briefs.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acoustic Test Data — 6.8mm Stadip Silence / Optiphon</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Rw (single pane):</strong> 35 dB per BS EN ISO 717-1</li>
              <li><strong>Rw + Ctr:</strong> 32 dB (traffic-spectrum corrected)</li>
              <li><strong>Rw + C:</strong> 34 dB (pink-noise spectrum)</li>
              <li><strong>Combined Rw with 4mm primary, 100mm gap:</strong> 42 dB</li>
              <li><strong>Combined Rw with 4mm primary, 200mm gap + cavity absorption:</strong> 46 dB</li>
              <li><strong>Combined Rw with existing IGU primary, 150mm gap:</strong> 47 dB</li>
              <li><strong>Glass weight:</strong> 17 kg/m²</li>
              <li><strong>Light transmittance:</strong> 90% (Lt)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">When to Specify 6.8mm vs 6.4mm Standard Laminated</h2>
        <p className="mb-6">
          The choice between 6.8mm acoustic and 6.4mm standard laminated is the single most cost-effective acoustic
          decision in any residential brief. Both provide P1A security and meet Approved Document K critical-location
          glazing requirements. Both use the same 0.76mm interlayer thickness. The only difference is the chemistry of
          the interlayer — acoustic PVB versus standard safety PVB — and the 3 dB Rw uplift this delivers (Rw 32 dB for
          standard, Rw 35 dB for acoustic). At our typical glass margins, the cost premium is around 8–12% — the best
          acoustic value-for-money in the range. For any brief where noise reduction is mentioned at all, 6.8mm acoustic
          is the minimum sensible specification.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Performance vs Air Gap Trade-off</h2>
        <p className="mb-6">
          For 6.8mm specifically, cavity depth has an outsized effect on combined Rw because the glass alone provides
          a relatively modest 35 dB. Widening the air gap from 100mm to 200mm typically adds 4–5 dB combined Rw — the
          same gain you would get by stepping up to 8.8mm acoustic glass at unchanged 100mm gap. Where reveal depth
          permits, we always recommend the wider gap with 6.8mm in preference to the thicker glass with a narrow gap;
          the resulting system is lighter (17 kg/m² vs 22), cheaper, and acoustically equivalent.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Typical Applications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Suburban residential streets in zones 3–6</li>
          <li>Quieter mews and back-of-terrace properties in central London</li>
          <li>Top-floor flats away from primary noise sources</li>
          <li>Garden-side bedrooms in family homes</li>
          <li>Home offices in suburban areas</li>
          <li>Heritage and listed cottages where the brief is primarily thermal rather than acoustic</li>
          <li>Properties on quiet residential side streets near A-roads (cross-street effect)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Thermal and UV Performance</h2>
        <p className="mb-6">
          6.8mm has a centre-pane U-value of 5.6 W/m²K (the same as monolithic 6mm float — laminated PVB has negligible
          thermal effect). Whole-window performance therefore depends entirely on the secondary glazing system: with a
          150mm air gap and a single-glazed primary, expect Uw 1.7–1.9 W/m²K. For combined acoustic-and-thermal briefs
          in moderately exposed properties, 6.8mm acoustic in a 150mm cavity is often the optimal specification. The
          PVB interlayer also blocks &gt;99% of UV-A and UV-B radiation, which is the same UV protection as the higher-spec
          products — UV blocking is a function of the interlayer, not the glass thickness.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Practical and Aesthetic Properties</h2>
        <p className="mb-6">
          At 17 kg/m², 6.8mm is light enough to fit on standard friction stays and lift-out clips for sashes up to
          2m² without ironmongery upgrades. The slim profile suits Georgian and Victorian sash openings where the
          internal sightline must remain visually subordinate to the original primary window. Light transmittance of
          90% is the highest in the range — visually indistinguishable from single-pane float at any viewing angle.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Acoustic Survey Before Specification</h3>
          <p className="mb-4">
            We measure your façade dBA Leq and frequency profile before recommending glass spec. For most quieter
            urban and suburban briefs, 6.8mm in a wider cavity is the most cost-effective answer.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book an Acoustic Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnhancedEntryGlass;

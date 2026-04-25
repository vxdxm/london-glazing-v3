import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { createPageSchema } from "@/utils/seo";

const MediumPerformanceGlass = () => {
  const navigate = useNavigate();
  const pageMetadata = {
    title: "8.8mm Medium Performance Acoustic Glass | Rw 38dB | Stadip Silence",
    description: "8.8mm acoustic laminated glass — Rw 38dB single-pane, up to Rw 50dB combined with secondary glazing. The most-specified mid-tier product for urban residential briefs across London.",
    canonicalPath: "/specialized/glass/medium-performance-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["8.8mm acoustic glass", "Rw 38dB glass", "Stadip Silence 8.8", "medium performance laminated", "urban noise reduction glass"]
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
        <h1 className="text-4xl font-bold mb-6">8.8mm Medium Performance Acoustic Laminated Glass</h1>

        <p className="text-lg text-muted-foreground mb-8">
          8.8mm acoustic laminated glass is the workhorse of our urban residential portfolio. It is the most-specified
          glass spec we install across the inner London boroughs because it hits the price-performance sweet spot for
          the majority of urban noise environments — busy streets, secondary A-roads, mews properties facing main roads,
          and flats above ground-floor commercial. Manufactured as two 4mm float panes bonded with a 0.76mm acoustic
          PVB interlayer (typically Stadip Silence 44.1A, Optiphon 8.8, or LamiGlass Acoustic 8.8), it delivers Rw 38 dB
          single-pane and Rw 48–50 dB when fitted with a 150–200mm cavity behind your existing primary window.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acoustic Test Data — 8.8mm Stadip Silence / Optiphon</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Rw (single pane):</strong> 38 dB per BS EN ISO 717-1</li>
              <li><strong>Rw + Ctr:</strong> 34 dB (traffic-spectrum corrected)</li>
              <li><strong>Rw + C:</strong> 37 dB (pink-noise spectrum)</li>
              <li><strong>Combined Rw with 4mm primary, 100mm gap:</strong> 44 dB</li>
              <li><strong>Combined Rw with 4mm primary, 200mm gap + cavity absorption:</strong> 48 dB</li>
              <li><strong>Combined Rw with existing IGU primary, 150mm gap:</strong> 50 dB</li>
              <li><strong>Glass weight:</strong> 22 kg/m²</li>
              <li><strong>Light transmittance:</strong> 89% (Lt)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">When to Specify 8.8mm</h2>
        <p className="mb-6">
          8.8mm is the right specification for the majority of urban residential noise briefs where the dominant source
          is general traffic, distant rail, and ambient city soundscape. It will reliably deliver an indoor LAeq below
          35 dBA against a 65–70 dBA façade — more than sufficient to meet BS 8233:2014 internal targets for living
          rooms (35 dBA daytime, 30 dBA bedrooms night). It only falls short where the external level exceeds 72 dBA,
          where there is significant low-frequency content from lorries or freight trains, or where the brief specifies
          WHO Lnight &lt;40 dBA in directly-affected bedrooms. In those cases we step up to 10.8mm or 12.8mm.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Acoustic PVB Outperforms Standard Laminated</h2>
        <p className="mb-6">
          A standard 8.8mm laminated glass uses two 4mm panes bonded with a 0.76mm safety PVB. It achieves Rw 35 dB.
          Substituting the safety PVB for an acoustic PVB of the same thickness lifts performance to Rw 38 dB — a 3 dB
          gain at no additional thickness. Acoustic PVB is a three-layer construction: two stiff outer skins for safety
          adhesion, with a soft viscoelastic core that damps glass-pane vibration across the 1,000–4,000 Hz range. The
          gain is most pronounced in the speech-intelligibility band and at the coincidence dip, where the soft core
          absorbs the resonant energy that standard PVB transmits.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Typical Applications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Victorian and Edwardian terraces on busy residential streets</li>
          <li>Mansion blocks in Marylebone, Bayswater, Fitzrovia, and Bloomsbury</li>
          <li>Mews houses with primary frontage onto main roads</li>
          <li>Flats above ground-floor retail, restaurants, and gyms</li>
          <li>New-build apartments where developer spec did not include acoustic glass</li>
          <li>Hotel guest rooms in zones 2–3 (zone 1 typically requires 10.8mm)</li>
          <li>Conservation-area properties where BS 8233 internal targets must be met</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Cost-Performance Position</h2>
        <p className="mb-6">
          8.8mm sits at our cost-performance index 1.0× — the baseline against which we benchmark adjacent specs. Stepping
          down to 6.8mm saves around 15% on glass cost but loses 2–3 dB Rw. Stepping up to 10.8mm adds around 30% to glass
          cost for a 2 dB Rw gain. For most residential briefs the marginal cost of stepping up is not justified by the
          marginal acoustic gain — which is why 8.8mm remains the most-specified product in the range. Where you need
          significantly more performance, the right move is usually to widen the air gap from 100mm to 200mm rather than
          spend on thicker glass: cavity depth typically delivers 3–5 dB more reduction at no glass cost.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Visual and Practical Properties</h2>
        <p className="mb-6">
          At 22 kg/m², 8.8mm is significantly lighter than 10.8mm (27) or 12.8mm (32), which keeps standard friction
          stays and slim-line aluminium frames within their working range for sash sizes up to 1.6m². Light transmittance
          of 89% is visually identical to clear float in normal viewing conditions. The PVB interlayer blocks &gt;99%
          UV-A and UV-B, providing meaningful protection for soft furnishings and wall finishes.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Acoustic Survey Before Specification</h3>
          <p className="mb-4">
            Glass spec follows façade measurement — we'll measure your specific dBA Leq and frequency content before
            recommending 6.8mm, 8.8mm, 10.8mm, or 12.8mm. The wrong choice in either direction wastes money or
            under-delivers on the brief.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book an Acoustic Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MediumPerformanceGlass;

import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { createPageSchema } from "@/utils/seo";

const HighPerformanceGlass = () => {
  const navigate = useNavigate();
  const pageMetadata = {
    title: "10.8mm High Performance Acoustic Glass | Rw 40dB | Stadip Silence",
    description: "10.8mm acoustic laminated glass — Rw 40dB single-pane, up to Rw 52dB combined with secondary glazing. Specified for mainline rail, A-road, and high-end residential acoustic briefs.",
    canonicalPath: "/specialized/glass/high-performance-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["10.8mm acoustic glass", "Rw 40dB glass", "Stadip Silence 10.8", "high performance laminated glass", "mainline rail noise glass", "premium acoustic lamination"]
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
        <h1 className="text-4xl font-bold mb-6">10.8mm High Performance Acoustic Laminated Glass</h1>

        <p className="text-lg text-muted-foreground mb-8">
          10.8mm acoustic laminated glass occupies a specific tier in our specification ladder: above the 8.8mm
          medium-performance product (Rw 38dB) but below the 12.8mm premium pane (Rw 41dB). Manufactured as two 5mm
          float panes bonded with a 0.76mm acoustic PVB interlayer — typically Saint-Gobain Stadip Silence 55.1A,
          Pilkington Optiphon 10.8, or Guardian LamiGlass Acoustic 10.8 — it delivers a single-pane sound reduction
          index of Rw 40 dB (Rw + Ctr 36 dB) per BS EN ISO 717-1. In a secondary glazing build-up with a 150–200mm
          cavity, whole-window performance reaches Rw 50–52 dB combined, which is the spec we issue for the majority
          of our mainline-rail and primary A-road residential briefs across London.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acoustic Test Data — 10.8mm Stadip Silence / Optiphon</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Rw (single pane):</strong> 40 dB per BS EN ISO 717-1</li>
              <li><strong>Rw + Ctr:</strong> 36 dB (traffic-spectrum corrected)</li>
              <li><strong>Rw + C:</strong> 39 dB (pink-noise spectrum)</li>
              <li><strong>Combined Rw with 4mm primary, 100mm gap:</strong> 46 dB</li>
              <li><strong>Combined Rw with 4mm primary, 200mm gap + cavity absorption:</strong> 50 dB</li>
              <li><strong>Combined Rw with existing IGU primary, 150mm gap:</strong> 52 dB</li>
              <li><strong>Glass weight:</strong> 27 kg/m²</li>
              <li><strong>Light transmittance:</strong> 89% (Lt)</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">When to Specify 10.8mm vs 8.8mm vs 12.8mm</h2>
        <p className="mb-6">
          The decision between 8.8mm, 10.8mm, and 12.8mm is rarely about maximum dB — it's about matching glass mass to
          the dominant external noise spectrum. 10.8mm sits at the sweet spot for traffic noise (which is dominated by
          mid-frequency content in the 250–1,000 Hz band) because the additional mass over 8.8mm pushes the coincidence
          dip out of the speech-intelligibility range. For tonal noise sources — music venues, heat pumps, industrial
          plant — the asymmetric construction of 10.8mm (5+0.76+5) outperforms a symmetric 10mm monolithic by 4–5 dB
          in the 500–2,000 Hz octave bands.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Coincidence Dip Behaviour</h2>
        <p className="mb-6">
          Every glass thickness has a critical frequency at which it resonates and lets sound pass through almost
          unimpeded — the coincidence dip. For 4mm float, this sits around 3,150 Hz, directly in the speech-intelligibility
          band. For 6mm float it falls to 2,100 Hz. The acoustic PVB interlayer in 10.8mm Stadip Silence flattens this
          dip substantially: across the 1,000–4,000 Hz range the dip is 3–6 dB shallower than equivalent non-acoustic
          laminated. This is why 10.8mm acoustic outperforms a 10mm toughened monolithic by 5–7 dB Rw despite identical
          surface mass.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Typical Specifications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Properties within 50–150m of mainline rail (LSWR, GWR, ECML, MML, Southern, Southeastern)</li>
          <li>Homes on TfL primary A-road network (A4, A40, A11, A2, A3, A406, A205)</li>
          <li>High-end residential targeting WHO night-noise compliance (Lnight &lt;40 dBA)</li>
          <li>Recording studios — control rooms and live rooms (NC 25 target)</li>
          <li>Hotel suites and spa treatment rooms requiring NR 30</li>
          <li>Embassy, diplomatic, and high-security ground-floor residential</li>
          <li>Properties under City Airport and Biggin Hill flight paths (rather than full Heathrow exposure)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Comparison vs Adjacent Specifications</h2>
        <Card className="mb-8">
          <CardContent className="pt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Spec</th>
                  <th className="text-left py-2">Single-pane Rw</th>
                  <th className="text-left py-2">Combined Rw (200mm gap)</th>
                  <th className="text-left py-2">Weight (kg/m²)</th>
                  <th className="text-left py-2">Cost Index</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="py-2">8.8mm acoustic</td><td>38 dB</td><td>50 dB</td><td>22</td><td>1.0×</td></tr>
                <tr className="border-b font-semibold"><td className="py-2">10.8mm acoustic</td><td>40 dB</td><td>52 dB</td><td>27</td><td>1.3×</td></tr>
                <tr><td className="py-2">12.8mm acoustic</td><td>41 dB</td><td>54 dB</td><td>32</td><td>1.7×</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Security and Safety Properties</h2>
        <p className="mb-6">
          The 0.76mm laminated PVB construction puts 10.8mm into the P1A category of BS EN 356 (manual attack resistance)
          and Class 2(B)2 of BS EN 12600 (impact safety). It is suitable for ground-floor and basement applications
          without additional security upgrades, and meets the Approved Document K requirements for critical-location
          glazing without needing toughened substrates. The interlayer also blocks &gt;99% of UV-A and UV-B radiation,
          providing meaningful protection for furniture, artwork, and timber finishes.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Acoustic Survey & Specification</h3>
          <p className="mb-4">
            We carry calibrated Class 1 sound level meters and issue a written acoustic report with each quotation —
            including measured dBA façade levels, frequency analysis, and a recommendation between 8.8mm, 10.8mm, and
            12.8mm based on your specific external spectrum.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book an Acoustic Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HighPerformanceGlass;

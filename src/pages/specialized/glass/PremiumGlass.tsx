import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { useNavigate } from "react-router-dom";

const PremiumGlass = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="12.8mm Premium Acoustic Laminated Glass | Rw 41dB | London"
        description="12.8mm Stadip Silence acoustic laminated glass — Rw 41dB single pane, up to 54dB combined Rw with secondary glazing. Specified for airport, rail, and studio acoustic environments."
        canonicalPath="/specialized/glass/premium-glass"
        type="product"
        serviceName="12.8mm Premium Acoustic Laminated Glass"
        keywords={["12.8mm acoustic glass", "Stadip Silence London", "Rw 41dB glass", "premium laminated acoustic glass", "airport noise glass spec"]}
        includeLocalBusiness
      />
      <MainNav />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">12.8mm Premium Acoustic Laminated Glass</h1>

        <p className="text-lg text-muted-foreground mb-8">
          12.8mm acoustic laminated glass is the highest-performing single-pane glazing product we specify for residential
          and light-commercial secondary glazing. It is manufactured as two 6mm float panes bonded with a 0.76mm acoustic
          PVB (polyvinyl butyral) interlayer — typically Saint-Gobain Stadip Silence, Pilkington Optiphon, or Guardian
          LamiGlass Acoustic. The product delivers a single-pane sound reduction index of Rw 41 dB (Ctr -2), and when
          fitted to an existing single- or double-glazed primary window with a 150–200mm cavity it lifts whole-window
          performance to Rw 50–54 dB. This is the spec we issue for properties under flight paths, immediately adjacent
          to mainline rail, on the TfL red-route network, and for professional recording studios and broadcast facilities.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acoustic Test Data — 12.8mm Stadip Silence</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Rw (single pane):</strong> 41 dB per BS EN ISO 717-1</li>
              <li><strong>Rw + Ctr:</strong> 39 dB (traffic-spectrum corrected)</li>
              <li><strong>Rw + C:</strong> 41 dB (pink-noise spectrum)</li>
              <li><strong>Combined Rw with 4mm primary, 100mm gap:</strong> 47 dB</li>
              <li><strong>Combined Rw with 4mm primary, 200mm gap + cavity absorption:</strong> 52 dB</li>
              <li><strong>Combined Rw with existing IGU primary, 150mm gap:</strong> 54 dB</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">Construction and Interlayer Chemistry</h2>
        <p className="mb-6">
          Standard PVB interlayers are designed for safety performance — they hold glass fragments in place if the pane
          is broken. Acoustic PVB is a chemically modified, three-layer film: two stiff outer skins bond to the glass,
          while a soft viscoelastic core damps vibration across a wide frequency band. This damping is most effective
          in the 1,000–4,000 Hz range, where the human ear is most sensitive and where the coincidence dip — the
          frequency at which a glass pane resonates and lets sound through almost unimpeded — would otherwise sit. By
          shifting and flattening the coincidence dip, acoustic PVB delivers 3–6 dB more reduction than standard PVB
          of the same thickness across the speech and traffic-noise spectrum.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Specification Comparison</h2>
        <Card className="mb-8">
          <CardContent className="pt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Glass Spec</th>
                  <th className="text-left py-2">Single-pane Rw</th>
                  <th className="text-left py-2">Combined Rw (200mm gap)</th>
                  <th className="text-left py-2">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="py-2">4mm float</td><td>29 dB</td><td>39 dB</td><td>Mild urban</td></tr>
                <tr className="border-b"><td className="py-2">6.4mm laminated</td><td>34 dB</td><td>44 dB</td><td>Standard urban</td></tr>
                <tr className="border-b"><td className="py-2">6.8mm acoustic lam</td><td>36 dB</td><td>47 dB</td><td>Busy roads</td></tr>
                <tr className="border-b"><td className="py-2">8.8mm Stadip Silence</td><td>38 dB</td><td>50 dB</td><td>A-roads, light rail</td></tr>
                <tr className="border-b"><td className="py-2">10.8mm acoustic lam</td><td>40 dB</td><td>52 dB</td><td>Mainline rail, busy junctions</td></tr>
                <tr className="font-semibold"><td className="py-2">12.8mm premium acoustic</td><td>41 dB</td><td>54 dB</td><td>Airports, studios, broadcast</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mb-4">When to Specify 12.8mm</h2>
        <p className="mb-4">
          12.8mm is the right specification when the brief requires more than 50 dB combined Rw, when the dominant noise
          source has significant low-frequency content (lorries, freight trains, aircraft), or when the WHO night-noise
          guideline of Lnight &lt;40 dBA cannot be met with thinner specs. It also adds a useful security benefit — the
          1.52mm of bonded interlayer puts the pane into the P1A category to BS EN 356 (manual attack resistance), making
          it suitable for ground-floor and basement applications.
        </p>
        <p className="mb-6">
          The trade-off is weight (32 kg/m²) and visible thickness in the rebate. For sash openings smaller than 1.2m²
          the additional weight is manageable on standard friction stays; above this size we specify upgraded ironmongery
          or recommend stepping down to 10.8mm.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Typical Applications</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Properties under Heathrow, City Airport, and Biggin Hill flight paths</li>
          <li>Flats overlooking the West Coast Main Line, Southeastern High Speed, and Crossrail surface sections</li>
          <li>Homes on TfL red routes (A40, A2, A3, A12, A406)</li>
          <li>Professional recording studios, podcast studios, and broadcast suites</li>
          <li>Embassy and high-security ground-floor residential</li>
          <li>Hotel suites adjacent to nightclub and live-music venues</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Light Transmittance and Aesthetics</h2>
        <p className="mb-6">
          Despite the additional thickness, 12.8mm Stadip Silence retains 88% visible light transmittance — visually
          indistinguishable from clear float in normal viewing conditions. The PVB interlayer also blocks &gt;99% of
          UV-A and UV-B radiation, providing furniture and artwork protection as a secondary benefit.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Acoustic Survey & Glass Selection</h3>
          <p className="mb-4">
            Glass spec should always follow an on-site dB measurement and frequency analysis — over-specifying 12.8mm
            where 8.8mm would meet the brief is a common waste. We carry calibrated Class 1 sound level meters and
            issue a written acoustic report with the quotation.
          </p>
          <Button onClick={() => navigate("/quote-request")}>Book an Acoustic Survey</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PremiumGlass;

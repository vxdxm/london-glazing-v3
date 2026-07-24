import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://secondaryglazingspecialist.com/sash-windows";

const SashWindowsService = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does secondary glazing for sash windows preserve the original box frame and sashes?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our vertical-sliding secondary units are fitted to the internal reveal and never touch the primary box sash. All original glazing bars, horns, cords, weights and staff/parting beads remain in situ, keeping the fabric fully reversible for Listed Building Consent." } },
      { "@type": "Question", name: "What acoustic performance can I expect on a Victorian sash window?", acceptedAnswer: { "@type": "Answer", text: "With a 100–150mm cavity and 6.8mm or 10.8mm Stadip Silence laminated acoustic glass, we routinely achieve 45–54 dB Rw — a 70–80% perceived reduction in traffic and rail noise, tested to BS EN ISO 10140-2." } },
      { "@type": "Question", name: "How does it compare thermally to a replacement double-glazed sash?", acceptedAnswer: { "@type": "Answer", text: "A single-glazed sash typically has a U-value of 4.8–5.2 W/m²K. Adding secondary glazing with Pilkington K low-e reduces the combined U-value to 1.6–1.9 W/m²K — comparable to modern IGUs and compliant with Approved Document L for existing dwellings." } },
      { "@type": "Question", name: "Will the sash still open normally after installation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our vertical sliders mirror the primary sash operation and can be raised for ventilation independently. Original cords, weights and pulleys remain fully functional." } },
      { "@type": "Question", name: "How much does secondary glazing for a sash window cost?", acceptedAnswer: { "@type": "Answer", text: "Vertical-sliding secondary units for a typical London sash range from £550 to £1,100 supplied and installed, depending on cavity depth, glass specification (4mm float, 6.8mm laminate or 10.8mm Stadip Silence) and frame finish." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing for Sash Windows | London Specialist</title>
        <meta name="description" content="Vertical-sliding secondary glazing for Victorian, Georgian and Edwardian sash windows. Up to 54 dB Rw acoustic reduction and 1.6 W/m²K U-value, LBC-compliant." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Secondary Glazing for Sash Windows | London Specialist" />
        <meta property="og:description" content="Reversible vertical-sliding secondary units for Victorian, Georgian & Edwardian sash windows — 54 dB Rw acoustic, 1.6 W/m²K thermal." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Secondary Glazing for Sash Windows</h1>
          <p className="text-lg text-muted-foreground mb-6">Reversible vertical-sliding secondary units engineered for Victorian, Georgian and Edwardian sash windows across London and the Home Counties — acoustic, thermal and draught performance without altering the primary box sash.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Specifier summary</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Acoustic performance:</strong> up to 54 dB Rw with 10.8mm Stadip Silence and 150mm cavity (BS EN ISO 10140-2).</li>
            <li><strong>Thermal performance:</strong> combined U-value 1.6–1.9 W/m²K with Pilkington K low-e — compliant with Approved Document L1B.</li>
            <li><strong>Air permeability:</strong> ≤3 m³/(h·m²) at 100 Pa when paired with brush-seal draught proofing to the primary sash.</li>
            <li><strong>Reversibility:</strong> mechanically fixed to the timber reveal — no intervention to the primary window; suitable for Listed Building Consent and Article 4 areas.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Why sash windows need a bespoke approach</h2>
          <p>Traditional London sash windows are inherently leaky. The sliding meeting rail, parting bead and staff bead form multiple air paths, and single 3mm crown glass provides negligible acoustic or thermal resistance. Straightforward casement-style secondary glazing rarely suits a sash reveal — the horns, sash cords and pulleys demand a vertical-sliding secondary unit that mirrors the primary operation and clears the pulley wheels.</p>
          <p>Our sash-specific vertical sliders use 20mm slim aluminium sections, colour-matched to the joinery (RAL or Farrow &amp; Ball equivalents), fitted to the internal timber lining. The two sashes counter-balance on stainless-steel spiral springs, allowing tilt-in cleaning without removing the unit — a critical detail on upper-floor Georgian townhouses where external access is restricted.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Acoustic engineering for London sash windows</h2>
          <p>Independent BRE testing on a 1,200 × 1,800mm sash aperture recorded the following Rw values (weighted sound reduction index, third-octave averaged 100–3,150 Hz):</p>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Configuration</th>
                <th className="border p-2 text-left">Cavity</th>
                <th className="border p-2 text-left">Rw (dB)</th>
                <th className="border p-2 text-left">Traffic noise C<sub>tr</sub></th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">Original sash only (3mm float)</td><td className="border p-2">—</td><td className="border p-2">27</td><td className="border p-2">-5</td></tr>
              <tr><td className="border p-2">+ 4mm float secondary</td><td className="border p-2">100mm</td><td className="border p-2">38</td><td className="border p-2">-3</td></tr>
              <tr><td className="border p-2">+ 6.8mm laminated secondary</td><td className="border p-2">100mm</td><td className="border p-2">45</td><td className="border p-2">-3</td></tr>
              <tr><td className="border p-2">+ 10.8mm Stadip Silence</td><td className="border p-2">150mm</td><td className="border p-2">54</td><td className="border p-2">-2</td></tr>
            </tbody>
          </table>
          <p>For properties within 50m of an A-road or a rail corridor, we specify the 10.8mm Stadip Silence build as standard. Its acoustic PVB interlayer damps the coincidence dip around 2,000 Hz that dominates road-traffic spectra.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Thermal upgrade and condensation control</h2>
          <p>The trapped air cavity between the primary sash and secondary unit provides the majority of the thermal benefit; low-e coatings on the secondary pane suppress radiative loss. Typical measured U-values (centre-pane, hot-box tested):</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Original single glazing: 5.0 W/m²K</li>
            <li>+ 4mm float secondary, 100mm cavity: 2.1 W/m²K</li>
            <li>+ 4mm Pilkington K low-e, 100mm cavity: 1.7 W/m²K</li>
            <li>+ 6.8mm laminate low-e, 150mm cavity: 1.6 W/m²K</li>
          </ul>
          <p>To manage interstitial condensation, we always specify a ventilated cavity — a 4mm slot to the outer sash side — and confirm dew-point margin with a Glaser calculation for the specific room's internal humidity load. Bathrooms and kitchens require mechanical extract to comply with Approved Document F.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Heritage and planning</h2>
          <p>Because the secondary unit is entirely internal and mechanically reversible, it is generally accepted by London LPAs under Historic England's <em>Traditional Windows: Their Care, Repair and Upgrading</em> (2017) and does not usually require Listed Building Consent — though we recommend a pre-application enquiry for Grade I/II* buildings. See our <Link to="/compliance-hub" className="underline">Compliance Hub</Link> for the borough-by-borough LPA contact directory and a copy-ready LPA email template.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Related resources</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/residential/sash-windows" className="underline">Sash windows — full product page</Link></li>
            <li><Link to="/specialist/sash-window-secondary-glazing" className="underline">Sash window secondary glazing (specialist)</Link></li>
            <li><Link to="/blog/acoustic-glass-noise-reduction-comparison" className="underline">Acoustic glass for noise reduction: complete comparison</Link></li>
            <li><Link to="/blog/best-acoustic-glass-secondary-glazing-compared" className="underline">Best acoustic glass compared</Link></li>
          </ul>

          <div className="mt-10 flex gap-3">
            <Button asChild><Link to="/quote-request">Request a sash window survey</Link></Button>
            <Button asChild variant="outline"><Link to="/compliance-hub">Planning &amp; LBC guidance</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SashWindowsService;
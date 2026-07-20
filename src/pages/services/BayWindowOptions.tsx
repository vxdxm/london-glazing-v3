import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://secondaryglazingspecialist.com/bay-window-options";

const BayWindowOptions = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Can secondary glazing be fitted to a curved or splayed bay?", acceptedAnswer: { "@type": "Answer", text: "Yes. We survey each facet independently and fabricate matching horizontal-sliders, casements or fixed panels. Splayed bays (90–135°) receive purpose-made angled couplings; curved Victorian bays are approximated with a five- or seven-facet arrangement, each unit ≤600mm wide." } },
      { "@type": "Question", name: "Should the bay be treated as one continuous unit or separate windows?", acceptedAnswer: { "@type": "Answer", text: "Separate units per facet — always. Continuous glazing across the corner mullions would defeat the thermal break at the structural post and complicate future removal. Discrete units also allow selective ventilation and cleaning." } },
      { "@type": "Question", name: "How is the head detail handled where the bay meets a curved cornice?", acceptedAnswer: { "@type": "Answer", text: "We fit a bespoke aluminium sub-frame scribed to the plaster cornice line; a compressible EPDM gasket accommodates 3–5mm of tolerance without damaging decorative mouldings. On Grade II bays we agree the head profile with the conservation officer in advance." } },
      { "@type": "Question", name: "What does bay window secondary glazing cost?", acceptedAnswer: { "@type": "Answer", text: "Typical three-facet Victorian bays cost £2,400–£4,200 supplied and installed. Five-facet Edwardian bays cost £3,800–£6,500. Pricing depends on glass specification, frame finish and access requirements at bay-window heights above ground-floor level." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bay Window Secondary Glazing | Options &amp; Specifications</title>
        <meta name="description" content="Bay window secondary glazing for Victorian, Edwardian and splayed bays. Facet-by-facet survey, colour-matched frames, up to 54 dB acoustic reduction." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Bay Window Secondary Glazing | Options &amp; Specifications" />
        <meta property="og:description" content="Facet-by-facet bay window secondary glazing — acoustic, thermal and heritage-compliant installations across London." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Bay Window Secondary Glazing Options</h1>
          <p className="text-lg text-muted-foreground mb-6">Bay windows account for up to 35% of a Victorian or Edwardian room's external envelope. Left untreated they dominate heat loss and street-noise ingress. Our facet-by-facet approach delivers measurable acoustic, thermal and draught performance without altering the primary joinery.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Bay geometries we specify for</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Square bay (90°):</strong> three facets, typical Victorian terrace ground floor.</li>
            <li><strong>Splayed bay (135°):</strong> three facets with 45° returns, common in Edwardian semi-detached houses.</li>
            <li><strong>Segmental / curved bay:</strong> five- or seven-facet approximation, mid-Victorian and Regency properties.</li>
            <li><strong>Oriel bay:</strong> upper-floor cantilever, requiring lightweight aluminium sub-frame ≤14 kg/m².</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Frame configurations by facet</h2>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Facet type</th>
                <th className="border p-2 text-left">Recommended secondary</th>
                <th className="border p-2 text-left">Ventilation</th>
                <th className="border p-2 text-left">Cleaning access</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">Central sash (openable)</td><td className="border p-2">Vertical slider</td><td className="border p-2">Full</td><td className="border p-2">Tilt-in</td></tr>
              <tr><td className="border p-2">Side sashes (rarely opened)</td><td className="border p-2">Fixed lift-out</td><td className="border p-2">None</td><td className="border p-2">Seasonal removal</td></tr>
              <tr><td className="border p-2">Casement side lights</td><td className="border p-2">Horizontal slider</td><td className="border p-2">Half-open</td><td className="border p-2">Slide + lift</td></tr>
              <tr><td className="border p-2">Fanlight / transom</td><td className="border p-2">Fixed panel</td><td className="border p-2">None</td><td className="border p-2">Panel removal</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Acoustic and thermal performance</h2>
          <p>Because each facet is treated as an independent aperture, performance is aggregated area-weighted across the bay. On a typical three-facet Victorian bay (2.8m² total glazing) we measure the following combined performance with 6.8mm laminated secondary at 100mm cavity:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Weighted acoustic reduction Rw: 43–46 dB (vs 26–28 dB untreated).</li>
            <li>Combined U-value: 1.7–1.9 W/m²K.</li>
            <li>Room-total heat loss reduction: 55–65% for the bay elevation.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Detailing at mullions and head</h2>
          <p>The critical junctions in any bay installation are the corner mullions (where facets meet) and the head — usually a plastered curved cornice on Victorian bays. We fabricate mitred aluminium coupling posts at each mullion with a 2mm EPDM compression seal, then scribe the head sub-frame to the cornice using a laser template survey. This avoids the "flat headboard" look that betrays a poor installation and preserves the visual continuity of the cornice from within the room.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Heritage and Article 4 considerations</h2>
          <p>Bay windows on conservation-area terraces are often subject to Article 4 Directions restricting external alteration. Because our secondary glazing is entirely internal, it falls outside those restrictions in almost every London borough. See the <Link to="/compliance-hub" className="underline">Compliance Hub</Link> for borough-by-borough LPA guidance, including Kensington &amp; Chelsea, Westminster, Camden and Islington.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Related pages</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/residential/bay-windows" className="underline">Bay windows — full product overview</Link></li>
            <li><Link to="/sash-windows" className="underline">Sash window secondary glazing</Link></li>
            <li><Link to="/heritage-listed" className="underline">Secondary glazing for listed buildings</Link></li>
          </ul>

          <div className="mt-10 flex gap-3">
            <Button asChild><Link to="/quote-request">Book a bay window survey</Link></Button>
            <Button asChild variant="outline"><Link to="/cost-guide">See cost guide</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BayWindowOptions;
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { LondonServiceAreas } from "@/components/seo/LondonServiceAreas";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://secondaryglazingspecialist.com/cost-guide";

const CostGuide = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How much does secondary glazing cost per window in London (2026)?", acceptedAnswer: { "@type": "Answer", text: "Typical London installed prices range from £450 for a small fixed panel with 4mm float glass to £1,400 for a large vertical-sliding sash unit with 10.8mm acoustic laminated glass. Most three-bed terraces fall between £4,500 and £9,500 for a whole-house install." } },
      { "@type": "Question", name: "Is secondary glazing cheaper than replacement double glazing?", acceptedAnswer: { "@type": "Answer", text: "For heritage or listed windows, yes — typically 40–60% cheaper. Replacement sash windows cost £2,200–£4,500 per opening; secondary glazing achieves comparable thermal performance at £550–£1,100 while preserving the primary window." } },
      { "@type": "Question", name: "What drives the price difference between quotes?", acceptedAnswer: { "@type": "Answer", text: "Four variables dominate: glass specification (4mm float vs 10.8mm acoustic laminate can double the price), frame finish (mill anodised vs RAL powder-coat), opening type (fixed vs vertical slider), and access (ground floor vs upper-floor with scaffolding)." } },
      { "@type": "Question", name: "Are there any VAT reductions available?", acceptedAnswer: { "@type": "Answer", text: "Secondary glazing installed as an energy-saving material in a residential dwelling qualifies for the reduced 5% VAT rate under HMRC Notice 708/6 until March 2027. Commercial installations remain at 20%. Listed building repairs may qualify for zero-rating under specific conditions." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Cost Guide 2026 | London Prices Per Window</title>
        <meta name="description" content="Transparent 2026 secondary glazing costs — £450 to £1,400 per window installed. Full price breakdown by glass spec, frame type, opening style and property size." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Secondary Glazing Cost Guide 2026 | London Prices Per Window" />
        <meta property="og:description" content="Full 2026 price breakdown for London secondary glazing — by glass, frame, opening style and property size." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Secondary Glazing Cost Guide (2026)</h1>
          <p className="text-lg text-muted-foreground mb-6">A transparent, specifier-focused breakdown of secondary glazing prices across London and the Home Counties. All figures are supplied and installed, inclusive of survey and VAT at the 5% energy-saving-materials rate where applicable.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Per-window installed price ranges</h2>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Configuration</th>
                <th className="border p-2 text-left">Glass</th>
                <th className="border p-2 text-left">Typical size</th>
                <th className="border p-2 text-left">Installed price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">Fixed panel</td><td className="border p-2">4mm float</td><td className="border p-2">≤1.0m²</td><td className="border p-2">£450–£650</td></tr>
              <tr><td className="border p-2">Fixed lift-out</td><td className="border p-2">6.4mm laminate</td><td className="border p-2">1.0–1.5m²</td><td className="border p-2">£550–£800</td></tr>
              <tr><td className="border p-2">Horizontal slider (2-pane)</td><td className="border p-2">4mm float low-e</td><td className="border p-2">1.2–1.8m²</td><td className="border p-2">£650–£950</td></tr>
              <tr><td className="border p-2">Vertical slider (sash)</td><td className="border p-2">6.4mm laminate</td><td className="border p-2">1.0–1.6m²</td><td className="border p-2">£750–£1,100</td></tr>
              <tr><td className="border p-2">Vertical slider — acoustic</td><td className="border p-2">10.8mm Stadip Silence</td><td className="border p-2">1.0–1.6m²</td><td className="border p-2">£950–£1,400</td></tr>
              <tr><td className="border p-2">Casement (side-hung)</td><td className="border p-2">6.4mm laminate</td><td className="border p-2">≤1.2m²</td><td className="border p-2">£650–£950</td></tr>
              <tr><td className="border p-2">Bay window (per facet)</td><td className="border p-2">6.4mm laminate</td><td className="border p-2">0.8–1.2m²</td><td className="border p-2">£700–£1,100</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Whole-property price bands</h2>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Property type</th>
                <th className="border p-2 text-left">Openings</th>
                <th className="border p-2 text-left">Standard spec</th>
                <th className="border p-2 text-left">Acoustic spec</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">1-bed flat</td><td className="border p-2">4–6</td><td className="border p-2">£2,600–£4,800</td><td className="border p-2">£4,200–£7,200</td></tr>
              <tr><td className="border p-2">2-bed terrace</td><td className="border p-2">6–10</td><td className="border p-2">£4,200–£8,500</td><td className="border p-2">£6,800–£12,500</td></tr>
              <tr><td className="border p-2">3-bed Victorian house</td><td className="border p-2">10–14</td><td className="border p-2">£6,500–£12,500</td><td className="border p-2">£10,500–£18,500</td></tr>
              <tr><td className="border p-2">4-bed Edwardian house</td><td className="border p-2">14–20</td><td className="border p-2">£10,500–£18,500</td><td className="border p-2">£16,000–£28,000</td></tr>
              <tr><td className="border p-2">Listed townhouse (Grade II)</td><td className="border p-2">16–24</td><td className="border p-2">£14,000–£24,000</td><td className="border p-2">£22,000–£36,000</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-3">What drives the price?</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Glass specification (30–45% of unit cost):</strong> 10.8mm Stadip Silence is 3.2× the price of 4mm float per m².</li>
            <li><strong>Frame finish (10–15%):</strong> mill anodised is cheapest; RAL / Farrow &amp; Ball colour-match adds £45–£90 per unit.</li>
            <li><strong>Opening type (15–25%):</strong> vertical sliders on spiral springs are the most complex; fixed panels are cheapest.</li>
            <li><strong>Access &amp; scaffolding (5–20%):</strong> upper-floor bay windows requiring external scaffold access add £600–£1,800 to a project.</li>
            <li><strong>Survey and installation (fixed):</strong> £180 survey (refunded on order), 1–2 days installation per 10 openings.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Payback and ROI</h2>
          <p>Typical measured energy savings on a 3-bed Victorian terrace with untreated single glazing: £340–£520/yr at 2026 Ofgem cap prices. Payback on a £8,500 project therefore lands in the 16–25 year range — but the acoustic and comfort benefits deliver value on day one, and DCLG research shows a 1.5–3% property-value uplift on heritage properties fitted with secondary glazing.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">VAT and grants</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>5% VAT under HMRC Notice 708/6 for domestic energy-saving materials (until 31 March 2027).</li>
            <li>ECO4 flex funding available in eligible boroughs — see our <Link to="/compliance-hub" className="underline">Compliance Hub</Link>.</li>
            <li>Listed building repair works may qualify for zero-rating; we advise a specialist VAT consultant.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Related pages</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/blog/london-cost-guide" className="underline">London-specific cost breakdown</Link></li>
            <li><Link to="/sash-windows" className="underline">Sash window secondary glazing</Link></li>
            <li><Link to="/sound-insulation" className="underline">Acoustic window inserts</Link></li>
            <li><Link to="/heritage-listed" className="underline">Listed building secondary glazing</Link></li>
            <li><Link to="/blog/acoustic-glass-noise-reduction-comparison" className="underline">Acoustic glass comparison guide</Link></li>
          </ul>

          <div className="mt-10 flex gap-3">
            <Button asChild><Link to="/quote-request">Get a fixed-price quote</Link></Button>
            <Button asChild variant="outline"><Link to="/compliance-hub">Compliance Hub</Link></Button>
          </div>
        </article>
      </main>
      <LondonServiceAreas
        heading="Local Pricing Across London"
        subheading="Access, parking and heritage requirements vary borough by borough — see the areas we cover."
        compact
      />
      <Footer />
    </div>
  );
};

export default CostGuide;
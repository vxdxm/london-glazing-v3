import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { LondonServiceAreas } from "@/components/seo/LondonServiceAreas";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://secondaryglazingspecialist.com/heritage-listed";

const HeritageListed = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does secondary double glazing require Listed Building Consent?", acceptedAnswer: { "@type": "Answer", text: "In most cases no — because the installation is entirely internal, mechanically reversible and does not alter the historic fabric. However, Grade I and Grade II* buildings, or any works involving alteration to internal joinery, do require LBC. We recommend a formal pre-application enquiry for every listed property." } },
      { "@type": "Question", name: "What does Historic England say about secondary glazing?", acceptedAnswer: { "@type": "Answer", text: "Historic England's guidance Traditional Windows: Their Care, Repair and Upgrading (2017) explicitly endorses secondary glazing as the preferred energy-efficiency upgrade for listed windows, describing it as 'a reversible intervention that retains the original window and its significance'." } },
      { "@type": "Question", name: "How thin can the secondary frame be to satisfy conservation officers?", acceptedAnswer: { "@type": "Answer", text: "Our slim aluminium sash-line profile is 20mm face-width, with an 8mm interlock. From within the room the primary window's glazing bars remain the dominant visual element. We supply full-scale profile drawings and mock-ups for pre-application submissions." } },
      { "@type": "Question", name: "Will it damage the primary window when removed?", acceptedAnswer: { "@type": "Answer", text: "No. Fixings are made into the timber lining or plaster reveal — never the primary window itself. Removal leaves only pilot-drilled holes in the internal reveal, easily filled and redecorated. This satisfies the reversibility test central to LBC assessments." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Double Glazing for Listed Buildings | LBC-Compliant</title>
        <meta name="description" content="Reversible, LBC-compliant secondary double glazing for listed buildings. Historic England-endorsed approach with 54 dB acoustic and 1.6 W/m²K thermal performance." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Secondary Double Glazing for Listed Buildings" />
        <meta property="og:description" content="Reversible, LBC-compliant secondary double glazing endorsed by Historic England." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Secondary Double Glazing for Listed Buildings</h1>
          <p className="text-lg text-muted-foreground mb-6">A reversible, Historic England-endorsed route to modern thermal and acoustic performance on Grade I, Grade II* and Grade II listed buildings — without altering a single element of the primary window.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Why secondary glazing is the specifier default for listed buildings</h2>
          <p>Replacement double glazing on a listed window fails three tests conservation officers apply routinely: it removes historic fabric, it alters the window's significance, and it is not reversible. Slim-profile IGUs (14–16mm units) still require deeper rebates than a historic sash accommodates, and cylinder or crown glass cannot be reproduced in a sealed unit. Secondary glazing sidesteps all three objections: the primary window is untouched, the intervention sits entirely inside the reveal, and removal leaves the historic fabric intact.</p>
          <p>Historic England's <em>Traditional Windows: Their Care, Repair and Upgrading</em> (2017) reflects this consensus. It ranks interventions by reversibility and, for glazing upgrades, places secondary glazing above all replacement options — a position echoed by SPAB, the Georgian Group and the Victorian Society.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">The three tests we design against</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Reversibility:</strong> all fixings into the internal reveal (timber lining or plaster), never the primary joinery.</li>
            <li><strong>Visual subordination:</strong> 20mm slim profile, RAL or Farrow &amp; Ball colour-match, positioned to align with primary meeting rails.</li>
            <li><strong>Fabric protection:</strong> ventilated cavity to prevent interstitial condensation on the historic timber; dew-point margin verified per BS EN ISO 13788.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Performance on listed apertures</h2>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Building age</th>
                <th className="border p-2 text-left">Typical primary</th>
                <th className="border p-2 text-left">Rw achieved</th>
                <th className="border p-2 text-left">Combined U-value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">Georgian (1714–1830)</td><td className="border p-2">6-over-6 sash, crown glass</td><td className="border p-2">45–48 dB</td><td className="border p-2">1.7 W/m²K</td></tr>
              <tr><td className="border p-2">Victorian (1837–1901)</td><td className="border p-2">2-over-2 sash, cylinder glass</td><td className="border p-2">46–50 dB</td><td className="border p-2">1.6 W/m²K</td></tr>
              <tr><td className="border p-2">Edwardian (1901–1914)</td><td className="border p-2">Casement or sash, drawn glass</td><td className="border p-2">44–48 dB</td><td className="border p-2">1.6 W/m²K</td></tr>
              <tr><td className="border p-2">Interwar Crittall (1920–1939)</td><td className="border p-2">Steel casement, single glass</td><td className="border p-2">42–46 dB</td><td className="border p-2">1.8 W/m²K</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-3">LBC evidence pack we provide</h2>
          <p>For every listed installation we prepare a submission pack you can attach to a pre-application enquiry or formal LBC:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>1:5 profile drawings of frame, sub-frame and reveal detail.</li>
            <li>Photomontage from the interior showing visual impact.</li>
            <li>Materials schedule with reversibility statement.</li>
            <li>Ventilation and condensation risk assessment (Glaser method).</li>
            <li>Acoustic performance certificate from BRE-accredited testing.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Related resources</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/compliance-hub" className="underline">Compliance Hub — LBC and Article 4 guidance</Link></li>
            <li><Link to="/specialist/listed-buildings-secondary-glazing" className="underline">Listed buildings specialist page</Link></li>
            <li><Link to="/blog/listed-building-planning-approved-guide" className="underline">Listed building planning guide</Link></li>
            <li><Link to="/blog/acoustic-glass-noise-reduction-comparison" className="underline">Acoustic glass comparison for heritage properties</Link></li>
          </ul>

          <div className="mt-10 flex gap-3">
            <Button asChild><Link to="/quote-request">Request LBC-ready survey</Link></Button>
            <Button asChild variant="outline"><Link to="/compliance-hub">Compliance Hub</Link></Button>
          </div>
        </article>
      </main>
      <LondonServiceAreas
        heading="Listed Building Coverage Across London"
        subheading="Conservation officers, LPA liaison and heritage installers in every borough."
      />
      <Footer />
    </div>
  );
};

export default HeritageListed;
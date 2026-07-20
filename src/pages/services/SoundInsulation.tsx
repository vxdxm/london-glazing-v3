import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Button } from "@/components/ui/button";

const CANONICAL = "https://secondaryglazingspecialist.com/sound-insulation";

const SoundInsulation = () => {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What are acoustic window inserts?", acceptedAnswer: { "@type": "Answer", text: "Acoustic window inserts are secondary glazing units fitted inside the room reveal, forming a sealed air cavity behind the primary window. The mass of laminated acoustic glass plus the decoupled cavity delivers 40–54 dB Rw sound reduction — the same principle used in recording studios." } },
      { "@type": "Question", name: "How much noise reduction do acoustic window inserts provide?", acceptedAnswer: { "@type": "Answer", text: "With 10.8mm Stadip Silence laminated glass and a 150–200mm cavity, we routinely measure 50–54 dB Rw — a perceived reduction of 75–80%. A 60 dB traffic noise level at the window drops to 6–10 dB inside the room, quieter than a library." } },
      { "@type": "Question", name: "What cavity depth is optimal for sound insulation?", acceptedAnswer: { "@type": "Answer", text: "Acoustically, wider is better. 100mm is the practical minimum; 150–200mm is optimal; beyond 200mm the mass-air-mass resonance frequency drops below 60 Hz and further gains are minimal. Deep reveals in London townhouses often permit 200mm without joinery modification." } },
      { "@type": "Question", name: "Do acoustic window inserts help with low-frequency noise?", acceptedAnswer: { "@type": "Answer", text: "Yes — laminated acoustic glass with PVB interlayer specifically targets the 125–500 Hz band that dominates traffic, rail and aircraft noise. The C_tr correction on our 10.8mm build is only -2 dB, versus -5 to -8 dB for equivalent-thickness IGUs." } },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Acoustic Window Inserts | Sound Insulation Secondary Glazing</title>
        <meta name="description" content="Acoustic window inserts delivering up to 54 dB Rw sound reduction. Stadip Silence laminated glass, 100–200mm cavity — 75–80% perceived noise reduction." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Acoustic Window Inserts | Sound Insulation Secondary Glazing" />
        <meta property="og:description" content="Up to 54 dB Rw with laminated acoustic glass and decoupled cavity — engineered for London traffic, rail and aircraft noise." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faq)}</script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <article className="prose prose-lg max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Acoustic Window Inserts &amp; Sound Insulation</h1>
          <p className="text-lg text-muted-foreground mb-6">Purpose-engineered secondary glazing inserts that turn a single-glazed London window into a laboratory-verified 54 dB Rw acoustic barrier — without touching the primary window or requiring planning consent.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">The physics: mass, air, mass</h2>
          <p>Sound transmission through a window is governed by three variables: the mass of each glass leaf, the depth of the air cavity between them, and the mechanical decoupling of the two systems. Sealed IGUs are limited to a 6–20mm cavity — insufficient to decouple below 500 Hz — which is why replacement double glazing rarely resolves traffic-noise complaints. Acoustic window inserts break this ceiling by placing a second glazing plane 100–200mm behind the primary, forming a resonant cavity tuned below the audible speech range.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Glass specifications we specify for sound insulation</h2>
          <table className="w-full border-collapse text-sm my-4">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Glass build</th>
                <th className="border p-2 text-left">Weight</th>
                <th className="border p-2 text-left">Rw (single leaf)</th>
                <th className="border p-2 text-left">Best use</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-2">4mm float</td><td className="border p-2">10 kg/m²</td><td className="border p-2">29 dB</td><td className="border p-2">Baseline thermal upgrade</td></tr>
              <tr><td className="border p-2">6.4mm laminated</td><td className="border p-2">16 kg/m²</td><td className="border p-2">33 dB</td><td className="border p-2">Urban traffic (secondary A-road)</td></tr>
              <tr><td className="border p-2">6.8mm Stadip Silence</td><td className="border p-2">17 kg/m²</td><td className="border p-2">37 dB</td><td className="border p-2">Primary A-road, mainline rail</td></tr>
              <tr><td className="border p-2">10.8mm Stadip Silence</td><td className="border p-2">27 kg/m²</td><td className="border p-2">40 dB</td><td className="border p-2">Flight path, elevated rail</td></tr>
              <tr><td className="border p-2">12.8mm Stadip Silence</td><td className="border p-2">32 kg/m²</td><td className="border p-2">42 dB</td><td className="border p-2">Extreme (recording studio)</td></tr>
            </tbody>
          </table>
          <p>Combined with the primary window's existing 3–4mm float pane and a 150mm cavity, these builds deliver system-level Rw values of 40–54 dB — verified by BRE hot-box testing to BS EN ISO 10140-2.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Frame acoustics — decoupling matters</h2>
          <p>A 54 dB glass build fitted into a poorly sealed frame will deliver only 35–38 dB in situ. We specify:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Twin EPDM compression seals to primary and secondary frame perimeters.</li>
            <li>Neoprene isolation gaskets between sub-frame and reveal — decouples structure-borne flanking transmission.</li>
            <li>Acoustic mineral wool cavity absorber (30 mm) around the reveal perimeter, unseen from the room.</li>
            <li>Butt-jointed corners with silicone acoustic sealant, not mitred foam gaskets.</li>
          </ul>

          <h2 className="text-2xl function mt-8 mb-3 text-2xl font-semibold">Verification: field measurement</h2>
          <p>On completion we can arrange a UKAS-accredited third-party field test to BS EN ISO 16283-3 (façade sound insulation), producing a D<sub>2m,nT,w</sub> value directly comparable to Building Regulations Approved Document E and BB93 (schools). Typical London acoustic-glazing projects achieve D<sub>2m,nT,w</sub> ≥ 43 dB — sufficient to bring a bedroom overlooking the A40 within WHO night-noise guidelines.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Common noise sources and target Rw</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Suburban street traffic (55 dB LAeq): target Rw ≥ 38 dB — 4mm secondary sufficient.</li>
            <li>Primary A-road (65–70 dB LAeq): target Rw ≥ 45 dB — 6.8mm laminate at 100mm cavity.</li>
            <li>Mainline rail (70–75 dB): target Rw ≥ 48 dB — 6.8mm Stadip Silence at 150mm.</li>
            <li>Heathrow flight path (75–80 dB): target Rw ≥ 52 dB — 10.8mm Stadip Silence at 200mm.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3">Related resources</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><Link to="/specialized/acoustic-glazing" className="underline">Acoustic glazing service overview</Link></li>
            <li><Link to="/specialized/sound-transmission-guide" className="underline">Sound transmission guide</Link></li>
            <li><Link to="/blog/best-acoustic-glass-secondary-glazing-compared" className="underline">Best acoustic glass compared</Link></li>
            <li><Link to="/blog/physics-of-silence-guide" className="underline">The physics of silence</Link></li>
          </ul>

          <div className="mt-10 flex gap-3">
            <Button asChild><Link to="/quote-request">Get an acoustic survey</Link></Button>
            <Button asChild variant="outline"><Link to="/specialized/noise-reduction#calculator">Use the noise calculator</Link></Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SoundInsulation;
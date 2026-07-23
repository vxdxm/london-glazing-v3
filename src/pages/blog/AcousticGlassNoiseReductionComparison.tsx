import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { RelatedGuides } from "@/components/blog/RelatedGuides";

const SLUG = "acoustic-glass-noise-reduction-comparison";
const URL = `https://secondaryglazingspecialist.com/blog/${SLUG}`;
const HERO = "https://cdn.marblism.com/Ps-0xlRMa8q.webp";

const faqs = [
  {
    q: "Which acoustic glass gives the biggest noise reduction in secondary glazing?",
    a: "10.8mm Stadip Silence laminated glass with a PVB acoustic interlayer, paired with a 100–150mm air gap to the primary window, delivers the highest measured reduction — typically 48–54 dB Rw and up to 80% perceived noise reduction against traffic, trains and low-frequency sources.",
  },
  {
    q: "Is 6.4mm laminated glass enough for London traffic noise?",
    a: "For general A-road and inner-city traffic, 6.4mm laminated with a standard PVB interlayer performs well (about 37–40 dB Rw at 100mm air gap). For heavy lorries, night buses, HGVs or rail rumble, step up to 6.8mm or 10.8mm acoustic laminate to control the low-frequency band where standard glass fails.",
  },
  {
    q: "Does thicker glass always mean quieter?",
    a: "Not linearly. Mass Law says doubling mass gains roughly 6 dB, but the coincidence dip (around 3–4 kHz for float glass) puts a ceiling on monolithic panes. Laminated glass with an acoustic PVB interlayer damps that dip and outperforms a thicker monolithic pane at the same weight.",
  },
  {
    q: "How much difference does the air gap make?",
    a: "The cavity does the heavy lifting. Moving from a 20mm gap (double glazing) to 100–150mm (secondary glazing) can add 8–12 dB Rw at the same glass spec — often more than upgrading the glass itself.",
  },
  {
    q: "Can I use acoustic glass in a listed building?",
    a: "Yes. Secondary glazing is fitted internally and is fully reversible, so 6.4mm–10.8mm acoustic laminate is routinely approved for Grade II (and often Grade II* / I) properties without altering the original sash.",
  },
  {
    q: "What Rw rating do I need for a bedroom on a busy road?",
    a: "Aim for 40 dB Rw or better at the window. On the A40, A4, A2, or a Night Tube route, 45–54 dB Rw (10.8mm Stadip Silence + 100mm gap) is the specification that consistently produces 'library quiet' bedrooms.",
  },
];

const AcousticGlassNoiseReductionComparison = () => {
  return (
    <>
      <EnhancedSEO
        title="Acoustic Glass for Noise Reduction: Full Comparison Guide"
        description="Compare 4mm float, 6.4mm laminated, 6.8mm and 10.8mm Stadip Silence acoustic glass for secondary glazing. Rw values, third-octave data, air-gap effects and specifier recommendations."
        canonicalPath={`/blog/${SLUG}`}
        type="article"
        keywords={[
          "acoustic glass comparison",
          "noise reduction glass",
          "10.8mm Stadip Silence",
          "6.4mm laminated glass acoustic",
          "Rw values secondary glazing",
          "PVB acoustic interlayer",
          "soundproof window glass",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Acoustic Glass for Noise Reduction: The Complete Comparison Guide",
            description:
              "Specifier-focused comparison of acoustic glass options for secondary glazing — 4mm float, 6.4mm and 6.8mm laminated, and 10.8mm Stadip Silence — with Rw ratings, third-octave performance and air-gap sensitivity.",
            image: HERO,
            datePublished: "2026-07-23",
            dateModified: "2026-07-23",
            author: { "@type": "Organization", name: "Secondary Glazing Specialist", url: "https://secondaryglazingspecialist.com" },
            publisher: {
              "@type": "Organization",
              name: "Secondary Glazing Specialist",
              logo: { "@type": "ImageObject", url: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": URL },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <MainNav />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Acoustic Glazing</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 23 July 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Acoustic Glass for Noise Reduction: The Complete Comparison Guide
          </h1>

          <img
            src={HERO}
            alt="Cross-section of laminated acoustic glass showing PVB interlayer between glass panes"
            className="w-full rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choosing acoustic glass is not a product decision — it is a <strong>system</strong> decision. The pane, the interlayer, the cavity width, the frame seal and the primary window all interact. Get one wrong and a 54 dB Rw specification will behave like 32 dB on site. This guide compares every acoustic glass option we routinely specify for secondary glazing in London, with laboratory Rw values, third-octave notes, and the air-gap conditions that make each one work.
            </p>

            <h2>The four acoustic glass options that matter</h2>

            <p>
              We specify from a shortlist of four. Anything else is either a variant of these or a marketing name for the same product.
            </p>

            <ul>
              <li><strong>4mm annealed float</strong> — baseline reference, used only where noise is not a driver.</li>
              <li><strong>6.4mm laminated (standard PVB)</strong> — 3mm / 0.38mm PVB / 3mm. General urban noise.</li>
              <li><strong>6.8mm laminated acoustic (Stadip Silence 33.1)</strong> — 3mm / 0.76mm acoustic PVB / 3mm. Better low-frequency control at similar weight.</li>
              <li><strong>10.8mm laminated acoustic (Stadip Silence 55.1)</strong> — 5mm / 0.76mm acoustic PVB / 5mm. Our default for road, rail and aircraft exposure.</li>
            </ul>

            <h2>Head-to-head performance table</h2>

            <p>
              Rw values below are for the glass pane in isolation (EN ISO 717-1), followed by the measured system Rw when installed as secondary glazing behind a typical single-glazed timber sash with a 100mm air cavity and compressed EPDM seals.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left">Glass spec</th>
                    <th className="border border-border p-3 text-left">Pane Rw (C; Ctr)</th>
                    <th className="border border-border p-3 text-left">System Rw @ 100mm gap</th>
                    <th className="border border-border p-3 text-left">Weight kg/m²</th>
                    <th className="border border-border p-3 text-left">Typical use case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">4mm float</td>
                    <td className="border border-border p-3">29 (−1; −3)</td>
                    <td className="border border-border p-3">36 dB</td>
                    <td className="border border-border p-3">10.0</td>
                    <td className="border border-border p-3">Suburban, thermal-only</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">6.4mm laminated (PVB)</td>
                    <td className="border border-border p-3">35 (−1; −4)</td>
                    <td className="border border-border p-3">41 dB</td>
                    <td className="border border-border p-3">15.4</td>
                    <td className="border border-border p-3">Inner-city traffic, A-roads</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">6.8mm Stadip Silence 33.1</td>
                    <td className="border border-border p-3">37 (−1; −3)</td>
                    <td className="border border-border p-3">45 dB</td>
                    <td className="border border-border p-3">16.3</td>
                    <td className="border border-border p-3">Bus routes, night traffic</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">10.8mm Stadip Silence 55.1</td>
                    <td className="border border-border p-3">40 (−1; −3)</td>
                    <td className="border border-border p-3"><strong>50–54 dB</strong></td>
                    <td className="border border-border p-3">26.0</td>
                    <td className="border border-border p-3">Rail, HGV, Heathrow flight paths</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground">
              Ctr (traffic-noise spectrum adjustment) is the number to watch for road and rail exposure — it is where standard laminated glass loses ground to acoustic PVB.
            </p>

            <h2>Why laminated glass beats thicker monolithic glass</h2>

            <p>
              A monolithic pane's Rw is capped by the <strong>coincidence dip</strong> — a resonance where bending waves in the glass match the wavelength of incident sound. For 6mm float that dip sits around 2 kHz and can cost 6–8 dB in the speech-critical band. A PVB acoustic interlayer damps the two glass sheets against each other, flattens the dip and lifts performance in the 1–4 kHz band where the human ear is most sensitive.
            </p>

            <p>
              Two 3mm sheets bonded with 0.76mm acoustic PVB (6.8mm Stadip Silence) outperform a solid 8mm pane by around 3–4 dB Rw, at roughly the same weight — see our{" "}
              <Link to="/blog/physics-of-silence-acoustic-glass" className="text-primary hover:underline">
                Physics of Silence
              </Link>{" "}deep dive.
            </p>

            <h2>The air gap: the multiplier no glass upgrade can beat</h2>

            <p>
              The cavity between the primary window and the secondary unit is the largest single variable in the system. Below is the same 6.4mm laminated pane tested behind an existing single-glazed timber sash at four cavity depths:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border p-3 text-left">Air gap</th>
                    <th className="border border-border p-3 text-left">System Rw</th>
                    <th className="border border-border p-3 text-left">Perceived reduction</th>
                    <th className="border border-border p-3 text-left">Practical fit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border p-3">20mm</td><td className="border border-border p-3">33 dB</td><td className="border border-border p-3">~55%</td><td className="border border-border p-3">Slim-line only, not recommended</td></tr>
                  <tr><td className="border border-border p-3">50mm</td><td className="border border-border p-3">37 dB</td><td className="border border-border p-3">~65%</td><td className="border border-border p-3">Shallow reveals</td></tr>
                  <tr><td className="border border-border p-3">100mm</td><td className="border border-border p-3">41 dB</td><td className="border border-border p-3">~75%</td><td className="border border-border p-3"><strong>Our default</strong></td></tr>
                  <tr><td className="border border-border p-3">150–200mm</td><td className="border border-border p-3">44 dB</td><td className="border border-border p-3">~80%</td><td className="border border-border p-3">Deep Georgian/Victorian reveals</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              For any project where you can specify a 100mm+ cavity, spend the budget on the gap before you spend it on the glass. A 6.4mm pane at 150mm outperforms a 10.8mm pane at 20mm.
            </p>

            <h2>Third-octave behaviour: reading beyond Rw</h2>

            <p>
              Rw is a single-figure average. For traffic and rail, the low-frequency band (63–250 Hz) matters more. This is where 10.8mm Stadip Silence pulls ahead:
            </p>

            <ul>
              <li><strong>63 Hz</strong> — 6.4mm laminated: 18 dB. 10.8mm Stadip Silence: 24 dB. Bus and lorry rumble.</li>
              <li><strong>125 Hz</strong> — 6.4mm: 24 dB. 10.8mm: 30 dB. Heavy diesel idle, tube rumble.</li>
              <li><strong>500 Hz</strong> — 6.4mm: 38 dB. 10.8mm: 43 dB. Speech intelligibility from the street.</li>
              <li><strong>2 kHz</strong> — 6.4mm: 39 dB (coincidence dip). 10.8mm: 46 dB. Sirens, brake squeal.</li>
            </ul>

            <h2>Specification decision tree</h2>

            <ol>
              <li><strong>Suburban / quiet street</strong> → 4mm float or 6.4mm laminated at 100mm. Rw 36–41.</li>
              <li><strong>Urban A-road, mixed traffic</strong> → 6.4mm laminated at 100mm minimum. Rw 41. Consider 6.8mm Stadip Silence for bedrooms.</li>
              <li><strong>Bus route, night traffic, tube-adjacent</strong> → 6.8mm Stadip Silence at 100–150mm. Rw 45–47.</li>
              <li><strong>Rail, HGV corridor,{" "}
                <Link to="/locations/heathrow-aircraft" className="text-primary hover:underline">
                  Heathrow flight paths
                </Link>
              </strong> → 10.8mm Stadip Silence at 100–150mm. Rw 50–54. Our default for{" "}
                <Link to="/locations/kings-cross-train-noise" className="text-primary hover:underline">
                  King's Cross
                </Link>
                ,{" "}
                <Link to="/locations/clapham-busy-roads" className="text-primary hover:underline">
                  Clapham
                </Link>{" "}and{" "}
                <Link to="/locations/shoreditch-urban-noise" className="text-primary hover:underline">
                  Shoreditch
                </Link>{" "}bedrooms.
              </li>
              <li><strong>Studios, hospitality, healthcare</strong> → 10.8mm Stadip Silence at 150–200mm, with staggered glass thicknesses if double-secondary is feasible. Rw 55+.</li>
            </ol>

            <h2>What ruins the specification on site</h2>

            <ul>
              <li><strong>Air leakage &gt; 2 m³/h·m²</strong> at the perimeter — a 5 dB penalty is normal, 10 dB not unusual.</li>
              <li><strong>Rigid seals</strong> — hard EPDM or foam sags within 18 months. Specify compression brush seals or dual-durometer EPDM.</li>
              <li><strong>Flanking transmission</strong> through window boards, shutter boxes and lath-and-plaster reveals. Seal reveals before glazing.</li>
              <li><strong>Primary window in poor condition</strong> — a rattling sash undoes 8–10 dB. Draught-proof the primary first, then measure again.</li>
            </ul>

            <h2>Building Regs and standards to reference</h2>

            <ul>
              <li><strong>Approved Document E</strong> — internal sound insulation targets; use as a floor for habitable rooms.</li>
              <li><strong>BS 8233:2014</strong> — internal ambient noise targets: 30 dB LAeq night, 35 dB LAeq day for bedrooms.</li>
              <li><strong>WHO Night Noise Guidelines</strong> — 40 dB LAeq outside bedroom facades. Where facade exposure exceeds 68 dB LAeq, 10.8mm Stadip Silence is the minimum defensible spec.</li>
              <li><strong>EN ISO 10140 / 717-1</strong> — laboratory test method and single-number Rw derivation. Always specify Rw, C and Ctr on drawings, not Rw alone.</li>
            </ul>

            <h2>Related technical reading</h2>

            <p>
              For the underlying physics, see{" "}
              <Link to="/blog/physics-of-silence-acoustic-glass" className="text-primary hover:underline">
                The Physics of Silence
              </Link>. For a broader treatment of the acoustic system, see our{" "}
              <Link to="/blog/acoustic-secondary-glazing-guide" className="text-primary hover:underline">
                acoustic secondary glazing guide
              </Link>. For product-level comparisons, see{" "}
              <Link to="/blog/best-acoustic-glass-secondary-glazing-compared" className="text-primary hover:underline">
                best acoustic glass compared
              </Link>.
            </p>

            <h2>FAQs</h2>
            {faqs.map((f) => (
              <div key={f.q} className="my-4">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <p className="mt-8">
              <strong>
                Ready to specify?{" "}
                <Link to="/quote-request" className="text-primary hover:underline">
                  Request an acoustic survey
                </Link>{" "}
                and we will return a room-by-room Rw prediction with the glass and cavity we recommend.
              </strong>
            </p>
          </div>

          <RelatedGuides currentSlug={SLUG} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AcousticGlassNoiseReductionComparison;
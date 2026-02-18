import React from "react";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { ArrowRight, ArrowLeft, Waves, Layers, Ruler } from "lucide-react";

const PhysicsOfSilenceGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="The Physics of Silence: How Acoustic Glass Blocks Low-Frequency Noise"
        description="Technical deep dive into how 10.8mm acoustic laminate glass blocks low-frequency bus and lorry rumble. Understand Mass Law, PVB interlayers, and the 100mm air gap."
        canonicalPath="/blog/physics-of-silence-acoustic-glass"
        type="article"
        keywords={[
          "acoustic glass physics",
          "low frequency noise reduction",
          "Mass Law glazing",
          "PVB interlayer acoustic",
          "10.8mm Stadip Silence",
          "soundproof windows London"
        ]}
        serviceName="Acoustic Glazing"
      />

      <MainNav />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link to="/blog" className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <span className="text-sm font-medium text-primary mb-2 block">Technical Guide</span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Physics of Silence: How to Block Low-Frequency Bus and Lorry Rumbling
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Published 18 February 2026 · 16 min read
            </p>
            <img
              src="https://cdn.marblism.com/96HLWaKW8Kw.webp"
              alt="Sound wave diagram illustrating acoustic glass noise reduction principles"
              className="w-full rounded-xl aspect-video object-cover"
            />
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              You can hear it right now if you live on a London bus route: that deep, persistent rumble that seems to pass straight through your walls and windows. High-pitched sounds — sirens, car horns — are annoying, but they're relatively easy to block. Low-frequency noise is the real enemy. It has longer wavelengths, more energy, and a nasty habit of vibrating through solid materials like they're not even there.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guide explains the actual physics behind why certain glass types block noise and others don't. No marketing fluff — just the science that determines whether your windows work or not.
            </p>
          </section>

          {/* Mass Law */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Layers className="h-7 w-7 text-primary" />
              Understanding Mass Law
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The single most important principle in acoustic glazing is the <strong className="text-foreground">Mass Law</strong>: doubling the mass of a barrier increases its sound insulation by approximately 6dB. It sounds simple because it is. Heavier glass = more noise blocked.
            </p>
            <div className="bg-card border rounded-xl overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-foreground font-semibold">Glass Type</th>
                    <th className="text-left p-4 text-foreground font-semibold">Thickness</th>
                    <th className="text-left p-4 text-foreground font-semibold">Mass (kg/m²)</th>
                    <th className="text-left p-4 text-foreground font-semibold">Rw Rating</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 text-muted-foreground">Standard float</td>
                    <td className="p-4 text-muted-foreground">4mm</td>
                    <td className="p-4 text-muted-foreground">10</td>
                    <td className="p-4 text-muted-foreground">29dB</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-muted-foreground">Laminated</td>
                    <td className="p-4 text-muted-foreground">6.4mm</td>
                    <td className="p-4 text-muted-foreground">16</td>
                    <td className="p-4 text-muted-foreground">34dB</td>
                  </tr>
                  <tr className="border-t bg-primary/5">
                    <td className="p-4 text-foreground font-medium">Stadip Silence</td>
                    <td className="p-4 text-foreground font-medium">10.8mm</td>
                    <td className="p-4 text-foreground font-medium">27</td>
                    <td className="p-4 text-foreground font-medium">42dB</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              But Mass Law has a catch: it works best at higher frequencies. Below about 200Hz — exactly where bus and lorry engines operate — mass alone isn't enough. That's where the next two principles come in.
            </p>
          </section>

          {/* PVB Interlayer */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Waves className="h-7 w-7 text-primary" />
              The PVB Acoustic Interlayer: Damping What Mass Can't
            </h2>
            <img
              src="https://cdn.marblism.com/129r5xgGvjS.webp"
              alt="Detailed cross-section of acoustic laminate glass showing PVB damping interlayer between glass panes"
              className="w-full rounded-xl aspect-video object-cover mb-6"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every rigid material has a <strong className="text-foreground">coincidence frequency</strong> — a point where sound waves align with the natural vibration of the material and pass straight through it. For standard 4mm glass, this happens around 3,000Hz. For thicker glass, it drops into the speech-frequency range, which can actually make things <em>worse</em>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">10.8mm Stadip Silence</Link> glass solves this with a special polyvinyl butyral (PVB) acoustic interlayer. Unlike standard PVB used in safety glass, this acoustic-grade film is specifically engineered to convert sound energy into heat energy through viscoelastic damping.
            </p>
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <h3 className="font-semibold text-foreground mb-3">How the PVB interlayer works:</h3>
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Sound waves hit the outer glass pane and cause it to vibrate</li>
                <li>The PVB film absorbs these vibrations and converts kinetic energy to thermal energy (heat)</li>
                <li>The inner glass pane receives significantly reduced vibration</li>
                <li>The effect is most pronounced at the coincidence frequency, exactly where standard glass fails</li>
              </ol>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The result is a glass that performs consistently across the entire frequency spectrum — from the 80Hz rumble of a diesel engine to the 4,000Hz screech of brakes. No weak spots. No frequency gaps.
            </p>
          </section>

          {/* The Air Gap */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Ruler className="h-7 w-7 text-primary" />
              The 100mm Air Gap: Why Distance Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's the part most people get wrong: they assume double glazing and secondary glazing work the same way. They don't. A standard sealed double-glazed unit has a 12-20mm gap between panes. That's fine for thermal insulation, but acoustically, it's almost useless at low frequencies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Secondary glazing creates a <strong className="text-foreground">100-150mm air gap</strong> — ten times wider than double glazing. This is critical because of the <strong className="text-foreground">mass-air-mass resonance</strong> principle: the resonant frequency of the system drops as the air gap increases. With a 100mm gap, the resonance frequency falls below 80Hz — below the range of most urban noise sources.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Double Glazing (16mm gap)</h3>
                <p className="text-3xl font-bold text-muted-foreground/60 mb-1">25-30dB</p>
                <p className="text-sm text-muted-foreground">Resonance at ~400Hz — right in the traffic noise band. Poor low-frequency performance.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-primary/30">
                <h3 className="font-semibold text-foreground mb-2">Secondary Glazing (100mm gap)</h3>
                <p className="text-3xl font-bold text-primary mb-1">45-54dB</p>
                <p className="text-sm text-muted-foreground">Resonance at ~60Hz — well below traffic noise. Excellent across all frequencies.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This is why <Link to="/blog/secondary-glazing-london-cost-guide" className="text-primary hover:underline">secondary glazing outperforms double glazing</Link> for noise reduction every single time. It's not marketing — it's physics.
            </p>
          </section>

          {/* Putting It All Together */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Complete System: How All Three Work Together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you combine all three principles — mass, damping, and air gap — you get a system that's greater than the sum of its parts:
            </p>
            <div className="bg-muted/30 p-6 rounded-xl mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Original window (4mm glass)</h4>
                    <p className="text-sm text-muted-foreground">Provides initial mass barrier. Reduces noise by ~25dB on its own.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-foreground">100mm air cavity</h4>
                    <p className="text-sm text-muted-foreground">Decouples the two glass layers. Drops resonance frequency below audible urban noise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-foreground">10.8mm Stadip Silence (acoustic laminate)</h4>
                    <p className="text-sm text-muted-foreground">Heavy mass + PVB damping layer. Eliminates coincidence dip and absorbs residual vibration.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Combined result: <strong className="text-foreground">up to 54dB noise reduction</strong>. A busy London road at 78dB drops to 24dB inside — quieter than a whisper. This is the specification we recommend for properties near <Link to="/locations/heathrow-aircraft" className="text-primary hover:underline">Heathrow flight paths</Link>, <Link to="/locations/kings-cross-train-noise" className="text-primary hover:underline">railway lines</Link>, and <Link to="/locations/clapham-busy-roads" className="text-primary hover:underline">major A-roads</Link>.
            </p>
          </section>

          {/* Practical Applications */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Where This Matters Most in London
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Low-frequency noise is concentrated along specific corridors. If your property is near any of these, standard glazing simply won't cut it:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Bus routes</strong> — diesel engines produce 80-100Hz rumble that travels through walls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">HGV corridors</strong> — the A40, A2, A13 carry heavy goods vehicles through residential areas 24/7</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Rail lines</strong> — Overground and mainline trains produce sustained low-frequency vibration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Aircraft</strong> — Heathrow approach paths affect a wide swathe of <Link to="/areas/west-london" className="text-primary hover:underline">West London</Link></span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For heritage properties in these areas, secondary glazing with acoustic laminate is often the only permitted solution that actually works. <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Listed building owners</Link> and <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation area residents</Link> consistently choose this specification because it delivers real-world results without compromising their property's character.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Want to Know What Noise Reduction You'd Get?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Every property is different. Get a free acoustic assessment and find out exactly what specification your windows need.
            </p>
            <Link
              to="/quote-request"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              Request a Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default PhysicsOfSilenceGuide;

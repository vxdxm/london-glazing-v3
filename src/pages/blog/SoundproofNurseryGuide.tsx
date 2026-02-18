import React from "react";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { ArrowRight, ArrowLeft, Baby, Moon, Volume2, ShieldCheck } from "lucide-react";

const SoundproofNurseryGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="The Silent Nursery: 54dB Noise Reduction for Your Baby's Sleep | London"
        description="Discover why a 54dB noise reduction is the best gift for your new arrival. Expert guide to soundproofing nurseries in London period homes with secondary glazing."
        canonicalPath="/blog/soundproof-nursery-54db-reduction"
        type="article"
        keywords={[
          "soundproof nursery London",
          "baby sleep noise reduction",
          "secondary glazing nursery",
          "54dB noise reduction",
          "soundproof baby room",
          "London traffic noise baby"
        ]}
        serviceName="Nursery Soundproofing"
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
            <span className="text-sm font-medium text-primary mb-2 block">Baby & Family</span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Silent Nursery: Why a 54dB Noise Reduction Is the Best Gift for Your New Arrival
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Published 18 February 2026 · 14 min read
            </p>
            <img
              src="https://cdn.marblism.com/p_JLSZ_DV64.webp"
              alt="Peaceful nursery in a London period home with secondary glazing installed on sash windows"
              className="w-full rounded-xl aspect-video object-cover"
            />
          </header>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              You've painted the walls, assembled the cot, and arranged the tiny clothes in neat little piles. Everything's perfect — until a bus rumbles past at 2am and your newborn jolts awake. Sound familiar? If you live anywhere near a London main road, you already know that traffic noise and infant sleep don't mix.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here's the thing most new parents don't realise: the World Health Organisation recommends night-time noise levels below 30 decibels for healthy sleep. A typical London street sits at 70-80dB. That's a 40-50dB gap you need to close. Standard double glazing knocks off about 25-30dB. Secondary glazing with 10.8mm acoustic laminate glass? That delivers a full 54dB reduction. That's the difference between "the baby woke up six times" and "wait, did the baby actually sleep through?"
            </p>
          </section>

          {/* The Science Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Babies Are So Sensitive to Low-Frequency Noise
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border text-center">
                <Baby className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Lighter Sleep Cycles</h3>
                <p className="text-sm text-muted-foreground">Newborns spend 50% of sleep in REM — the lightest, most easily disrupted phase.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Volume2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Bus & Lorry Rumble</h3>
                <p className="text-sm text-muted-foreground">Low-frequency noise (under 250Hz) passes straight through standard glass. It's the hardest sound to block.</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Moon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Cortisol Response</h3>
                <p className="text-sm text-muted-foreground">Noise disruption triggers stress hormones in infants, affecting development and daytime mood.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Research from the London School of Hygiene shows that children in noisier London boroughs — think Hackney, Islington, Camden — are significantly more likely to experience fragmented sleep patterns. It's not just about volume; it's about the <em>type</em> of noise. The deep rumble of a night bus or an HGV operates at frequencies that standard glazing barely touches.
            </p>
          </section>

          {/* How Secondary Glazing Solves This */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              How 10.8mm Acoustic Glass Creates a Silent Room
            </h2>
            <img
              src="https://cdn.marblism.com/dRBZDMPo8ni.webp"
              alt="Cross-section diagram of 10.8mm acoustic laminate glass showing PVB soundproofing interlayer"
              className="w-full rounded-xl aspect-video object-cover mb-6"
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our go-to specification for nursery soundproofing is <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">10.8mm Stadip Silence acoustic laminate glass</Link> paired with a 100mm air gap. Here's why this combination is so effective:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">The PVB interlayer</strong> — a special acoustic film sandwiched between two glass layers — absorbs vibrations rather than transmitting them. It's particularly effective against the 100-500Hz range where traffic rumble sits.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">The 100mm air gap</strong> between your original window and the secondary pane acts as a decoupled buffer. Sound waves lose energy crossing this cavity because air is a poor conductor of vibration.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Mass Law principle</strong> — heavier glass = more sound blocked. At 10.8mm, you're getting nearly three times the mass of standard 4mm glass.</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The result? A nursery that drops from 75dB (busy London road) to around 21dB (quieter than a library). Your baby sleeps. You sleep. Everyone wins.
            </p>
          </section>

          {/* Real-World Results */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What London Parents Are Saying
            </h2>
            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary mb-6">
              <blockquote className="text-muted-foreground italic mb-2">
                "We live on a bus route in Islington. Before the secondary glazing, our daughter would wake up 4-5 times a night. After installation, she started sleeping through within a week. It genuinely changed our lives."
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— Sarah & James, Victorian terrace, Islington N1</cite>
            </div>
            <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
              <blockquote className="text-muted-foreground italic mb-2">
                "Our flat overlooks the A40 in Shepherd's Bush. The nursery was unusable before. Now it's the quietest room in the house. Worth every penny."
              </blockquote>
              <cite className="text-sm text-foreground font-medium">— Tom, Edwardian conversion, W12</cite>
            </div>
          </section>

          {/* Listed Building Note */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What If You're in a Listed Building or Conservation Area?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Good news: secondary glazing is almost always approved for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> because it's fully reversible and doesn't alter the external appearance. You don't need planning permission in most cases. Even in strict <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link> like <Link to="/areas/kensington-chelsea" className="text-primary hover:underline">Kensington & Chelsea</Link> or <Link to="/locations/conservation-richmond" className="text-primary hover:underline">Richmond</Link>, conservation officers consistently approve well-designed secondary glazing because it <em>protects</em> original windows rather than replacing them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our slim aluminium frames (just 20mm sightline) are virtually invisible from inside the room, and completely invisible from outside. Your Georgian sash windows look exactly the same — they just perform dramatically better.
            </p>
          </section>

          {/* Cost Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Does Nursery Soundproofing Cost?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a typical London nursery with 1-2 windows, you're looking at:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Single Window</h3>
                <p className="text-2xl font-bold text-primary mb-1">£350 – £500</p>
                <p className="text-sm text-muted-foreground">With 10.8mm acoustic laminate glass and horizontal slider mechanism</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-foreground mb-2">Two Windows</h3>
                <p className="text-2xl font-bold text-primary mb-1">£650 – £950</p>
                <p className="text-sm text-muted-foreground">Including installation, usually completed in half a day</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Compare that to a year of broken sleep, and it starts to look like the best investment you'll make as a new parent. Check our <Link to="/blog/secondary-glazing-london-cost-guide" className="text-primary hover:underline">full 2026 cost guide</Link> for detailed pricing.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Give Your Baby the Gift of Silence?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get a free, no-obligation survey and quote for acoustic secondary glazing. We'll visit your nursery, measure up, and recommend the right solution.
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

export default SoundproofNurseryGuide;

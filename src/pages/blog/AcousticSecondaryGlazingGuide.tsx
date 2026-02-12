import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft, Volume2, VolumeX, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SoundComparison = () => {
  const [isBefore, setIsBefore] = useState(true);

  return (
    <div className="my-12 rounded-2xl overflow-hidden border border-border">
      <div className="bg-muted/50 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Sound Comparison</h2>
        <p className="text-muted-foreground mb-6">Experience the difference acoustic secondary glazing makes.</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setIsBefore(true)}
            className={`px-6 py-3 rounded-l-full font-semibold transition-all text-sm ${
              isBefore
                ? "bg-destructive text-destructive-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <Volume2 className="inline h-4 w-4 mr-2" />
            Before
          </button>
          <button
            onClick={() => setIsBefore(false)}
            className={`px-6 py-3 rounded-r-full font-semibold transition-all text-sm ${
              !isBefore
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <VolumeX className="inline h-4 w-4 mr-2" />
            After
          </button>
        </div>

        {/* Visualization */}
        <div className="relative bg-background rounded-xl p-6 md:p-8 min-h-[220px] flex flex-col items-center justify-center transition-all duration-500">
          {isBefore ? (
            <div className="text-center animate-in fade-in duration-500">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-destructive rounded-full animate-pulse"
                    style={{
                      height: `${20 + Math.random() * 60}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${0.5 + Math.random() * 0.5}s`,
                    }}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-destructive mb-1">75 dB</p>
              <p className="text-foreground font-semibold">London Traffic Noise</p>
              <p className="text-sm text-muted-foreground mt-1">Buses, taxis, motorbikes — constant disruption</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="bg-destructive/10 rounded-lg p-2">
                  <p className="font-semibold text-destructive">Disrupted Sleep</p>
                </div>
                <div className="bg-destructive/10 rounded-lg p-2">
                  <p className="font-semibold text-destructive">Can't Concentrate</p>
                </div>
                <div className="bg-destructive/10 rounded-lg p-2">
                  <p className="font-semibold text-destructive">Stress & Fatigue</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center animate-in fade-in duration-500">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary/60 rounded-full"
                    style={{ height: `${8 + Math.random() * 12}px` }}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-primary mb-1">25 dB</p>
              <p className="text-foreground font-semibold">Peaceful Home</p>
              <p className="text-sm text-muted-foreground mt-1">Quieter than a whisper — true sanctuary</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="bg-primary/10 rounded-lg p-2">
                  <p className="font-semibold text-primary">Restful Sleep</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <p className="font-semibold text-primary">Focus & Clarity</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-2">
                  <p className="font-semibold text-primary">Total Comfort</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Based on real measurements from London installations using 10.8mm Stadip Silence glass with 100mm air gap.
        </p>
      </div>
    </div>
  );
};

const TechnicalCallout = () => (
  <div className="my-12 bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8">
    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
      <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">!</span>
      Technical Specification
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-foreground mb-2">10.8mm Stadip Silence Glass</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Specialized acoustic PVB interlayer</li>
          <li>• Converts sound energy into micro-thermal heat</li>
          <li>• 45–50dB noise reduction (vs 35–40dB for 6.4mm)</li>
          <li>• Gold standard for high-end residential properties</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">100mm Air Gap</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• 5–8× wider than standard double glazing</li>
          <li>• Acoustic decoupling effect</li>
          <li>• 70–80% total noise reduction</li>
          <li>• Also delivers 60% thermal insulation improvement</li>
        </ul>
      </div>
    </div>
  </div>
);

const AcousticSecondaryGlazingGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="Acoustic Secondary Glazing: The Ultimate Guide to Soundproofing London Period Homes"
        description="Expert guide to acoustic secondary glazing for London period homes. Learn how 10.8mm Stadip Silence glass and 100mm air gaps deliver 70-80% noise reduction for listed buildings and conservation areas."
        canonicalPath="/blog/acoustic-secondary-glazing-guide"
        type="article"
        keywords={[
          "acoustic secondary glazing",
          "soundproofing London homes",
          "secondary glazing sash windows",
          "noise reduction windows London",
          "10.8mm acoustic laminate glass",
          "Stadip Silence",
          "listed building secondary glazing",
          "conservation area windows",
          "secondary glazing sash windows cost",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Acoustic Secondary Glazing: The Ultimate Guide to Soundproofing London Period Homes",
            "description": "Expert guide to acoustic secondary glazing for London period homes using 10.8mm Stadip Silence glass and 100mm air gaps.",
            "image": "https://cdn.marblism.com/p_JLSZ_DV64.webp",
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15",
            "author": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "url": "https://secondaryglazingspecialist.com",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png",
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://secondaryglazingspecialist.com/blog/acoustic-secondary-glazing-guide",
            },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Link to="/quote-request">
          <Button size="lg" className="shadow-2xl gap-2 rounded-full px-6">
            <Phone className="h-4 w-4" />
            Get a Noise Reduction Quote
          </Button>
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-3">
        <Link to="/quote-request" className="block">
          <Button size="lg" className="w-full gap-2">
            <Phone className="h-4 w-4" />
            Get a Noise Reduction Quote
          </Button>
        </Link>
      </div>

      <main className="pt-24 pb-24 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Acoustic Glazing</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 15 January 2025</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 20 min read</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Acoustic Secondary Glazing: The Ultimate Guide to Soundproofing London Period Homes
          </h1>

          {/* Lead */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Living in a beautiful Georgian townhouse in Chelsea or a Victorian terrace in Kensington comes with undeniable charm. But let's be honest, those stunning original sash windows weren't designed to handle the relentless noise of 21st-century London. Between the early morning traffic on the King's Road, the Heathrow flight path, and the constant hum of city life, even the most elegant period home can feel like it's under sonic siege.
            </p>

            <p>
              The problem is that your typical soundproofing solutions, modern double glazing or complete window replacement, are often off the table. Whether you're in a <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation area</Link> or simply want to preserve the architectural integrity of your property, you need a solution that delivers serious noise reduction without compromising your home's heritage character.
            </p>

            <p>
              That's where <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">acoustic secondary glazing</Link> comes in. And not just any secondary glazing, we're talking about the high-performance stuff that actually works.
            </p>

            <h2>Why Standard Solutions Fall Short for Period Properties</h2>

            <p>
              If you've done any research into soundproof secondary glazing, you've probably come across DIY kits promising easy installation and decent results. Here's the reality: those kits are designed for garden offices and spare bedrooms, not for £2 million properties in Westminster.
            </p>

            <p>
              The issue isn't just about aesthetics (though those plastic frames certainly don't belong near your original timber sashes). It's about performance. Most DIY secondary glazing uses thin glass, typically 4mm, and minimal air gaps. That might knock off a few decibels, but it won't give you the peaceful sanctuary you're paying for in one of London's prime postcodes.
            </p>

            <p>
              Professional-grade <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic secondary glazing</Link> is a different beast entirely. It's engineered specifically to combat the low-frequency rumble of buses on Sloane Street and the high-pitched whine of aircraft over Richmond Park. And it does this while remaining completely invisible from the street.
            </p>

            <img
              src="https://cdn.marblism.com/p_JLSZ_DV64.webp"
              alt="Secondary glazing installed on Victorian sash window in London period home interior"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>The Science of Silence: How 100mm Air Gaps Change Everything</h2>

            <p>
              The secret to effective <Link to="/specialized/noise-reduction" className="text-primary hover:underline">noise reduction windows</Link> London residents actually notice comes down to two critical factors: the air gap and the glass specification.
            </p>

            <p>
              Standard double glazing, the kind you'd find in a new-build flat, typically has a 12-20mm gap between panes. Secondary glazing, when done properly, creates a <Link to="/specialized/air-gap-secondary-glazing" className="text-primary hover:underline">100mm cavity</Link> between your existing window and the new internal pane. This isn't just "more space." It's a fundamental shift in how sound waves behave.
            </p>

            <p>
              Sound travels through vibration. When noise hits your original window, the glass vibrates and transmits that energy through to your room. With secondary glazing, those vibrations hit the first pane, then have to travel across 100mm of dead air space before reaching the second pane. During that journey, the sound waves lose energy, lots of it.
            </p>

            <p>
              This is called acoustic decoupling, and it's why properly installed secondary glazing can achieve 70-80% noise reduction. In practical terms, that means the roar of traffic on Cromwell Road becomes a distant murmur. The 6am refuse collection that used to wake you up becomes a minor background presence you barely register.
            </p>

            <p>
              But here's where it gets interesting: the air gap alone isn't enough. You need the right glass specification to complete the equation.
            </p>
          </div>

          {/* Sound Comparison Interactive */}
          <SoundComparison />

          <div className="prose prose-lg max-w-none">
            <h2>The 10.8mm Acoustic Laminate Advantage</h2>

            <p>
              Walk into any secondary glazing showroom and you'll see plenty of options. Most will offer 6.4mm laminated glass as their "acoustic upgrade." It's better than standard glass, sure. But if you're serious about soundproofing a period home in central London, you need 10.8mm acoustic laminate glass.
            </p>

            <p>
              Specifically, we're talking about <strong>Stadip Silence</strong>, a specialized acoustic laminate that's become the gold standard for noise reduction in high-end residential properties. Unlike standard laminated glass, Stadip Silence uses a specially formulated PVB (polyvinyl butyral) interlayer that's specifically designed to absorb sound energy.
            </p>

            <p>
              Think of it like this: regular laminated glass is designed primarily for safety, keeping the glass together if it breaks. Acoustic laminate is designed to <em>dampen</em>. The thicker interlayer acts like a shock absorber for sound waves, converting acoustic energy into a tiny amount of heat instead of letting it pass through.
            </p>

            <p>
              The difference in real-world performance is substantial. Where 6.4mm laminate might give you 35-40dB of noise reduction, 10.8mm Stadip Silence can achieve 45-50dB reduction when combined with that critical 100mm air gap. To put that in perspective, 50dB reduction means traffic noise that was as loud as normal conversation becomes quieter than a whisper.
            </p>
          </div>

          {/* Technical Callout */}
          <TechnicalCallout />

          <div className="prose prose-lg max-w-none">
            <img
              src="https://cdn.marblism.com/U6WH_zNNmTs.webp"
              alt="Cross-section diagram showing 100mm air gap blocking sound waves in secondary glazing"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>Why This Matters for Sash Windows</h2>

            <p>
              If you own a period property in London, there's a good chance you have original timber <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link>. These are beautiful, irreplaceable features, but they're also single-glazed, draughty, and acoustically about as effective as leaving your window open.
            </p>

            <p>
              The question of <Link to="/residential/sash-windows" className="text-primary hover:underline">secondary glazing sash windows cost</Link> comes up constantly, usually followed by "and is it even worth it?" Let's address both.
            </p>

            <p>
              First, the cost: professional acoustic secondary glazing for a typical sash window in Kensington runs between £800-£1,200 per window, depending on size and specification. Yes, that's significantly more than a DIY kit. But remember what you're comparing it to: full sash window replacement with double glazing could easily cost £2,500+ per window, requires planning permission in most conservation areas, and destroys the original character of your home.
            </p>

            <p>
              More importantly, secondary glazing is reversible. If you ever sell your property, the new owner can remove it without affecting the original windows. Try doing that with replacement double glazing.
            </p>

            <p>
              As for whether it's worth it: if you're currently being woken up by traffic noise, if you can't open your windows in summer because of the din from the street, or if you're struggling to concentrate in your home office because of aircraft noise, then yes: it's absolutely worth it.
            </p>

            <h2>Beyond Soundproofing: The Hidden Benefits</h2>

            <p>
              Here's something most people don't realize until after installation: acoustic secondary glazing doesn't just reduce noise. The same 100mm air gap that blocks sound also creates exceptional <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal insulation</Link>.
            </p>

            <p>
              Period homes in London are notoriously expensive to heat. Those beautiful single-glazed sash windows are essentially thermal holes in your walls. Adding secondary glazing can reduce heat loss through windows by up to 60%, which translates directly to lower energy bills and improved EPC ratings: increasingly important for high-end properties.
            </p>

            <p>
              There's also the <Link to="/specialized/condensation-control" className="text-primary hover:underline">condensation</Link> issue. If you've ever woken up to streaming windows and worried about black mould on your window frames, secondary glazing addresses this by raising the internal pane temperature and preventing moisture from condensing.
            </p>

            <p>
              And then there's <Link to="/specialized/security-glazing" className="text-primary hover:underline">security</Link>. While it's not marketed primarily as a security solution, having two layers of laminated glass makes your windows significantly more resistant to break-ins. For ground-floor properties in areas like Notting Hill or Maida Vale, this is a legitimate consideration.
            </p>

            <img
              src="https://cdn.marblism.com/G5MZ3gdfDEI.webp"
              alt="10.8mm acoustic laminate glass with Stadip Silence layers for soundproofing"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>Real-World Applications Across London</h2>

            <p>
              The effectiveness of soundproof secondary glazing varies depending on your specific noise challenges. A <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade II listed Georgian house</Link> backing onto Kensington High Street faces different acoustic issues than a <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian villa</Link> under the Richmond flight path.
            </p>

            <p>
              For traffic noise: the constant low-frequency rumble of buses, lorries, and black cabs: the 100mm air gap combined with 10.8mm acoustic laminate is essential. Anything less simply won't shift the bass frequencies enough to make a meaningful difference.
            </p>

            <p>
              For aircraft noise, which tends to be higher frequency, the acoustic laminate becomes even more critical. The PVB interlayer in Stadip Silence is specifically tuned to absorb the frequencies produced by jet engines, making it remarkably effective even when planes are passing directly overhead.
            </p>

            <p>
              In <Link to="/areas/central-london" className="text-primary hover:underline">Westminster and the City</Link>, where you're dealing with a combination of traffic, construction, and general urban noise, the comprehensive approach of professional secondary glazing pays dividends. It's not uncommon for clients to report that they've "rediscovered" their homes: finally able to enjoy their gardens, sleep through the night, or simply relax without the constant background stress of urban noise.
            </p>

            <h2>Making the Investment Decision</h2>

            <p>
              The secondary glazing sash windows cost conversation usually comes down to priorities. If you're planning to stay in your period property long-term, and if noise is genuinely affecting your quality of life, then professional acoustic secondary glazing should be viewed as an essential upgrade rather than a luxury.
            </p>

            <p>
              Consider what you're protecting: your sleep, your ability to work from home effectively, your children's ability to concentrate on homework, your overall stress levels. The World Health Organization classifies environmental noise as a serious health hazard, linked to cardiovascular disease, sleep disturbance, and cognitive impairment in children.
            </p>

            <p>
              When you frame it that way, spending £800-£1,200 per window to reclaim peace and quiet in your own home starts to look less like an expense and more like an investment in your wellbeing.
            </p>

            <img
              src="https://cdn.marblism.com/RP97g1zMl0w.webp"
              alt="Peaceful Georgian bedroom in Kensington with acoustic secondary glazing on sash windows"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>The Installation Reality</h2>

            <p>
              One advantage of secondary glazing over replacement windows is the installation process. There's no structural work required, no planning permission needed (in most cases), and installation typically takes just 2-3 hours per window.
            </p>

            <p>
              The secondary pane is fitted to the internal reveal of your existing window using slim aluminium frames that can be colour-matched to your décor. From inside the room, you notice the immediate benefits: silence, warmth, and comfort. From the street, your period property looks exactly as it should.
            </p>

            <h2>Final Thoughts</h2>

            <p>
              If you're living in a London period home and struggling with noise, you essentially have two options: accept it as the price of city living, or do something properly effective about it.
            </p>

            <p>
              DIY kits won't cut it for serious urban noise in high-value properties. Replacement double glazing destroys the very character that makes your property valuable. But professional acoustic secondary glazing: with proper air gaps and proper glass specifications: gives you the best of both worlds: heritage preservation and genuine acoustic comfort.
            </p>

            <p>
              The difference between living with constant traffic noise and enjoying genuine peace in your Kensington townhouse isn't a matter of luck. It's a matter of specification. 100mm air gaps. 10.8mm acoustic laminate. Professional installation. That's the formula for silence in the city.
            </p>

            <p>And once you've experienced it, you'll wonder how you ever lived without it.</p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready for Peace & Quiet?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get a free, no-obligation noise reduction assessment for your London period home.
            </p>
            <Link to="/quote-request">
              <Button size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Get a Noise Reduction Quote
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AcousticSecondaryGlazingGuide;

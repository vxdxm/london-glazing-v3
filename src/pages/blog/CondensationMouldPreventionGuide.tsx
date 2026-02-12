import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft, Droplets, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RelatedGuides } from "@/components/blog/RelatedGuides";

const ThermalBridgeDiagram = () => (
  <div className="my-12 bg-muted/30 border border-border rounded-2xl p-6 md:p-8">
    <h3 className="text-xl font-bold text-foreground mb-6 text-center">The Science of the Thermal Bridge</h3>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Before */}
      <div className="text-center">
        <p className="font-semibold text-destructive mb-4">❌ Without Secondary Glazing</p>
        <div className="relative bg-background rounded-xl border border-border p-6 min-h-[200px] flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 text-center">
              <p className="text-xs text-muted-foreground mb-1">Outside</p>
              <p className="text-2xl font-bold text-accent-foreground">2°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 bg-destructive/60 rounded" style={{ height: "100px" }} />
              <p className="text-[10px] text-muted-foreground">Single pane</p>
              <p className="text-sm font-bold text-destructive">8°C</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-muted-foreground mb-1">Inside</p>
              <p className="text-2xl font-bold text-destructive">20°C</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1">
            {[...Array(8)].map((_, i) => (
              <Droplets key={i} className="h-3 w-3 text-accent-foreground animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
          <p className="text-xs text-destructive font-medium mt-2">12°C gap → Heavy condensation</p>
        </div>
        <p className="text-sm text-muted-foreground mt-3">Cold glass surface causes moisture to condense instantly</p>
      </div>

      {/* After */}
      <div className="text-center">
        <p className="font-semibold text-primary mb-4">✓ With Secondary Glazing</p>
        <div className="relative bg-background rounded-xl border border-primary/30 p-6 min-h-[200px] flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 w-full max-w-xs">
            <div className="flex-1 text-center">
              <p className="text-xs text-muted-foreground mb-1">Outside</p>
              <p className="text-2xl font-bold text-accent-foreground">2°C</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-2 bg-muted rounded" style={{ height: "100px" }} />
              <p className="text-[10px] text-muted-foreground">Original</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 border-2 border-dashed border-primary/30 rounded flex items-center justify-center" style={{ height: "100px" }}>
                <p className="text-[9px] text-primary font-medium" style={{ writingMode: "vertical-rl" }}>100mm gap</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 bg-primary/40 rounded" style={{ height: "100px" }} />
              <p className="text-[10px] text-muted-foreground">Secondary</p>
              <p className="text-sm font-bold text-primary">17°C</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs text-muted-foreground mb-1">Inside</p>
              <p className="text-2xl font-bold text-primary">20°C</p>
            </div>
          </div>
          <div className="mt-4">
            <ShieldCheck className="h-5 w-5 text-primary mx-auto" />
          </div>
          <p className="text-xs text-primary font-medium mt-2">3°C gap → No condensation</p>
        </div>
        <p className="text-sm text-muted-foreground mt-3">Warm inner pane stays above dew point</p>
      </div>
    </div>
  </div>
);

const CondensationStat = () => (
  <div className="my-12 bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center">
    <p className="text-6xl md:text-8xl font-black text-primary mb-2">99%</p>
    <p className="text-xl md:text-2xl font-bold text-foreground mb-2">Condensation Reduction</p>
    <p className="text-muted-foreground max-w-lg mx-auto">
      When combined with proper ventilation, our secondary glazing systems eliminate virtually all window condensation — backed by thermodynamic science, not marketing hype.
    </p>
  </div>
);

const CondensationMouldPreventionGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="How to Stop Window Condensation & Mould on Sash Windows | London Guide"
        description="Expert guide to eliminating condensation and black mould on period sash windows. Learn how secondary glazing achieves 99% condensation reduction in London heritage homes."
        canonicalPath="/blog/condensation-mould-prevention-guide"
        type="article"
        keywords={[
          "how to stop window condensation",
          "mould on sash windows",
          "condensation Victorian windows",
          "black mould period property",
          "secondary glazing condensation",
          "window condensation London",
          "damp sash windows solution",
          "thermal bridge windows",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Stop Window Condensation & Prevent Mould on Sash Windows",
            description: "Expert guide to eliminating condensation and black mould on period sash windows using secondary glazing.",
            image: "https://cdn.marblism.com/e1o-1fuIm0f.webp",
            datePublished: "2025-02-01",
            dateModified: "2025-02-01",
            author: { "@type": "Organization", name: "Secondary Glazing Specialist", url: "https://secondaryglazingspecialist.com" },
            publisher: {
              "@type": "Organization",
              name: "Secondary Glazing Specialist",
              logo: { "@type": "ImageObject", url: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://secondaryglazingspecialist.com/blog/condensation-mould-prevention-guide" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Link to="/quote-request">
          <Button size="lg" className="shadow-2xl gap-2 rounded-full px-6">
            <Droplets className="h-4 w-4" />
            Stop the Damp Today
          </Button>
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-3">
        <Link to="/quote-request" className="block">
          <Button size="lg" className="w-full gap-2">
            <Droplets className="h-4 w-4" />
            Stop the Damp Today
          </Button>
        </Link>
      </div>

      <main className="pt-24 pb-24 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Condensation</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 1 February 2025</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 16 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            How to Stop Window Condensation & Prevent Mould on Sash Windows: The Complete Guide
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you've ever woken up to water streaming down your Victorian sash windows, or discovered those telltale black spots creeping across your bedroom ceiling, you're not alone. Condensation and mould are the silent enemies of period homes across London: and they're doing more damage than you might think.
            </p>

            <p>
              The problem hits hardest between November and March. Your beautiful Georgian property or Edwardian terrace, built with single-pane glass and solid walls, becomes a breeding ground for moisture. Your curtains feel damp. Your wooden window sills start to rot. And that musty smell? It's not just unpleasant: it's a health risk.
            </p>

            <p>
              Here's the thing: this isn't your fault, and it's not because your house is "old and drafty." It's physics. And once you understand what's happening, the solution becomes crystal clear.
            </p>

            <h2>Why Period Homes Are Condensation Magnets</h2>

            <p>
              Period properties in <Link to="/service-areas/kensington-chelsea" className="text-primary hover:underline">Kensington</Link>, Chelsea, Hampstead, and across London weren't designed for how we live today. Back in the 1800s, homes had open fireplaces in every room, minimal insulation, and constant air circulation. Condensation simply wasn't an issue.
            </p>

            <p>
              Fast forward to 2026. We've blocked up those fireplaces, added central heating, and started cooking, showering, and drying clothes indoors. A single person generates <strong>10-15 litres of moisture</strong> every day just from breathing, cooking, and bathing. That moisture has to go somewhere.
            </p>

            <img src="https://cdn.marblism.com/e1o-1fuIm0f.webp" alt="Heavy condensation on Victorian sash window showing moisture damage and peeling paint on period home" className="w-full rounded-lg my-8" loading="lazy" />

            <p>
              In a modern home with double glazing and cavity wall insulation, that moisture escapes gradually. In a period home with <strong>single-pane <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link></strong>, it hits the coldest surface in the room: your glass: and instantly condenses into water droplets.
            </p>

            <p>
              This is what building scientists call a <strong>"thermal bridge."</strong> Your window becomes the escape route for all that indoor moisture, and the result is soaking wet glass every morning.
            </p>
          </div>

          {/* Thermal Bridge Diagram */}
          <ThermalBridgeDiagram />

          <div className="prose prose-lg max-w-none">
            <h2>The Science: Understanding the Thermal Bridge</h2>

            <p>
              When warm, moist air inside your home meets a cold surface, the air can no longer hold onto its moisture. The water vapour turns back into liquid water. This is condensation.
            </p>

            <p>
              Your single-pane Victorian window might be sitting at <strong>8°C on the inside surface</strong> on a cold January morning, while your room is a comfortable <strong>20°C</strong>. That 12-degree temperature difference is massive: and it's why your windows are soaked.
            </p>

            <p>
              The "thermal bridge" is essentially a fast-track for heat to escape and cold to penetrate. Single glazing offers almost no resistance to this process. Your heating system is working overtime, your energy bills are climbing, and all that moisture in your home is condensing exactly where you don't want it.
            </p>

            <p>
              Within weeks, that persistent dampness leads to black mould forming on window frames, sills, surrounding walls, and even your curtains.
            </p>

            <h2>How Secondary Glazing Breaks the Cycle</h2>

            <p>
              Unlike replacement double glazing (which you probably can't install due to <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation restrictions</Link>), <Link to="/specialized/condensation-control" className="text-primary hover:underline">secondary glazing</Link> adds a <strong>second layer of glass</strong> on the inside of your existing window. This creates an insulated <Link to="/specialized/air-gap-secondary-glazing" className="text-primary hover:underline">air gap</Link>: typically 100mm: between the original glass and the new pane.
            </p>

            <img src="https://cdn.marblism.com/M9v6oLftR9l.webp" alt="Cross-section diagram of secondary glazing installation showing thermal barrier and air gap in Victorian window" className="w-full rounded-lg my-8" loading="lazy" />

            <p>
              That air gap acts as a <strong>thermal barrier</strong>. Instead of your warm room air hitting freezing cold glass, it meets a much warmer surface. The inner pane of your secondary glazing might sit at <strong>16-18°C</strong> instead of 8°C, and that changes everything.
            </p>

            <p>
              When the glass surface is warmer, condensation simply doesn't form. The "dew point": the temperature at which moisture condenses: is no longer reached on the glass surface.
            </p>
          </div>

          {/* 99% Stat Highlight */}
          <CondensationStat />

          <div className="prose prose-lg max-w-none">
            <h2>The Hidden Damage You're Preventing</h2>

            <p>Let's talk about what condensation is actually costing you: beyond the obvious annoyance of wiping down windows every morning.</p>

            <p><strong>Your Window Sills</strong>: Those beautiful original timber sills weren't designed to sit in a puddle of water for six months of the year. Persistent moisture causes rot, paint failure, and structural damage. We've seen sills in Chelsea townhouses that have needed complete replacement after just five years of condensation damage.</p>

            <p><strong>Your Curtains and Soft Furnishings</strong>: Damp fabric is a breeding ground for mould spores. That musty smell in your velvet curtains? It's mould. And it's not coming out with a simple wash. Replacing custom-made curtains for a period property can cost thousands.</p>

            <p><strong>Your Health</strong>: Black mould releases spores into the air you breathe. The NHS links persistent mould exposure to respiratory problems, allergic reactions, and worsened asthma symptoms. If you have children or elderly family members in the home, the risk is even higher.</p>

            <img src="https://cdn.marblism.com/xTGBxCOm1ok.webp" alt="Before and after comparison of window sill damage from black mould versus restored condition with secondary glazing" className="w-full rounded-lg my-8" loading="lazy" />

            <p><strong>Your Property Value</strong>: Surveyors flag condensation and mould as serious issues. A damp problem can knock 10-20% off your property's value and scare away potential buyers. In the London market, that's a six-figure problem.</p>

            <h2>Real-World Results: What 99% Reduction Looks Like</h2>

            <p>
              Before secondary glazing, a typical <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian bay window</Link> in Hampstead was producing <strong>200-300ml of condensation</strong> every night during winter. That's roughly a cup of water sitting on your sill every morning.
            </p>

            <p>After installation, that drops to virtually nothing. You might see a tiny bit of moisture on the coldest nights of the year: but we're talking about a few droplets, not a puddle.</p>

            <p>The transformation happens immediately. The first morning after installation, homeowners call us amazed that their windows are completely dry for the first time in years.</p>

            <p>But here's the crucial part: secondary glazing works <strong>in combination with proper ventilation</strong>. You can't seal up a period home completely and expect magic. You still need to manage indoor moisture levels through smart ventilation practices.</p>

            <h2>The Complete Strategy: Secondary Glazing + Smart Habits</h2>

            <p>To get the full benefit, combine your secondary glazing with these simple practices:</p>

            <p><strong>Morning Ventilation</strong>: Open windows for 5-10 minutes every morning to flush out overnight moisture. This "shock ventilation" is standard practice in Germany and Scandinavia, where condensation control is taken seriously.</p>

            <p><strong>Extractor Fans</strong>: Use them <strong>every time</strong> you cook or shower. The moisture from a single shower can take hours to disperse naturally. An extractor fan removes it in minutes.</p>

            <p><strong>Furniture Placement</strong>: Keep beds and wardrobes at least 50mm away from external walls. Cold walls + poor air circulation = mould growth behind your furniture.</p>

            <p><strong>Dehumidifiers</strong>: In particularly damp rooms (basements, north-facing bedrooms), a small dehumidifier can capture 10-20 litres per week during winter months.</p>

            <p>The beauty of secondary glazing is that it makes all these other strategies <strong>significantly more effective</strong>. You're no longer fighting a losing battle against freezing cold glass.</p>

            <img src="https://cdn.marblism.com/kmnys2glFzT.webp" alt="Georgian bay window with secondary glazing installed showing clear condensation-free glass in morning light" className="w-full rounded-lg my-8" loading="lazy" />

            <h2>Why This Matters for Listed Buildings</h2>

            <p>
              If you own a <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Grade II listed property</Link> in <Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link> or Kensington & Chelsea, you already know that replacement windows aren't an option. Conservation officers protect those original sash windows for good reason: they're part of the building's character and history.
            </p>

            <p>
              Secondary glazing is the <strong>only solution</strong> that gives you modern <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal performance</Link> while preserving the original features. It's completely reversible, requires no external alterations, and in most cases doesn't require planning permission.
            </p>

            <p>We've worked with conservation officers across London who actively recommend secondary glazing as the preferred solution for condensation problems in listed buildings. It protects both your comfort and your heritage.</p>

            <h2>The Long-Term Investment</h2>

            <p>Quality secondary glazing isn't cheap: but neither is repeatedly repainting window frames, replacing rotten sills, or treating mould problems. When you factor in the cost of the damage condensation causes, secondary glazing pays for itself within 3-5 years.</p>

            <p>More importantly, it protects the irreplaceable elements of your period home. You can't buy replacement Victorian sash windows in their original timber. Once they're damaged by rot, they're gone.</p>

            <p>Secondary glazing protects your investment, your health, and your peace of mind. No more waking up to soaking wet windows. No more black spots on the ceiling. No more musty curtains.</p>

            <p>Just a warm, dry, comfortable home that's finally working the way it should.</p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Stop the Damp Today</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get a free thermal assessment for your period home. We'll show you exactly where condensation is forming and how to eliminate it permanently.
            </p>
            <Link to="/quote-request">
              <Button size="lg" className="gap-2">
                <Droplets className="h-4 w-4" />
                Book Your Free Assessment
              </Button>
            </Link>
          </div>

          <RelatedGuides currentSlug="condensation-mould-prevention-guide" />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default CondensationMouldPreventionGuide;

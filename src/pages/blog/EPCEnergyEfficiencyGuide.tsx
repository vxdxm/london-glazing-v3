import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft, TrendingDown, AlertTriangle, Calculator, PoundSterling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RelatedGuides } from "@/components/blog/RelatedGuides";

const SavingsCalculator = () => {
  const [annualBill, setAnnualBill] = useState([1800]);
  const [windows, setWindows] = useState([8]);

  const lowSaving = annualBill[0] * 0.15;
  const highSaving = annualBill[0] * 0.30;
  const avgSaving = (lowSaving + highSaving) / 2;
  const installCost = windows[0] * 550;
  const paybackYears = Math.round(installCost / avgSaving * 10) / 10;

  return (
    <div className="my-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center">
          <Calculator className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Estimated Savings Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Annual heating bill: <span className="text-primary font-bold">£{annualBill[0].toLocaleString()}</span>
            </label>
            <Slider value={annualBill} onValueChange={setAnnualBill} min={600} max={5000} step={100} />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>£600</span><span>£5,000</span>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Number of windows: <span className="text-primary font-bold">{windows[0]}</span>
            </label>
            <Slider value={windows} onValueChange={setWindows} min={2} max={30} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>2</span><span>30</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-background rounded-xl p-5 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Annual savings</p>
            <p className="text-3xl font-bold text-primary">£{Math.round(lowSaving)} – £{Math.round(highSaving)}</p>
            <p className="text-xs text-muted-foreground mt-1">15–30% reduction in heating bills</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-background rounded-xl p-4 border border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">Est. install cost</p>
              <p className="text-lg font-bold text-foreground">£{installCost.toLocaleString()}</p>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">Payback period</p>
              <p className="text-lg font-bold text-foreground">{paybackYears} years</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Based on average £550/window. Actual costs vary by specification.</p>
        </div>
      </div>
    </div>
  );
};

const LandlordMEESCallout = () => (
  <div className="my-12 bg-destructive/5 border-2 border-destructive/30 rounded-2xl p-6 md:p-8">
    <div className="flex items-start gap-4">
      <div className="bg-destructive text-destructive-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Landlord Alert: MEES Regulations 2026–2028</h3>
        <p className="text-muted-foreground mb-4">
          The UK Government is tightening Minimum Energy Efficiency Standards (MEES) for rental properties. Currently, landlords must achieve at least an <strong>E rating</strong>. The proposed target is a <strong>minimum C rating by 2028</strong> for new tenancies.
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-background rounded-lg p-3 border border-border">
            <p className="text-xs text-muted-foreground">Current minimum</p>
            <p className="text-2xl font-bold text-foreground">E</p>
          </div>
          <div className="bg-background rounded-lg p-3 border border-border">
            <p className="text-xs text-muted-foreground">2028 target</p>
            <p className="text-2xl font-bold text-destructive">C</p>
          </div>
          <div className="bg-background rounded-lg p-3 border border-border">
            <p className="text-xs text-muted-foreground">Penalty for non-compliance</p>
            <p className="text-2xl font-bold text-destructive">£30k</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          <strong>How secondary glazing helps:</strong> By improving window U-values by up to 60%, secondary glazing can lift an E-rated property to a D or C. For period properties where replacement double glazing isn't an option, it's the most cost-effective route to MEES compliance — typically saving £100,000+ across a portfolio vs full window replacement.
        </p>
      </div>
    </div>
  </div>
);

const EPCEnergyEfficiencyGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="Secondary Glazing Energy Efficiency: Cut Heating Bills 15-30% | EPC Guide London"
        description="How secondary glazing cuts heating bills by 15-30% and boosts EPC ratings for London properties. Essential guide for homeowners and landlords facing MEES regulations."
        canonicalPath="/blog/epc-energy-efficiency-guide"
        type="article"
        keywords={[
          "secondary glazing energy efficiency",
          "cut heating bills London",
          "EPC rating improvement secondary glazing",
          "MEES regulations landlord",
          "reduce energy bills period property",
          "U-value improvement secondary glazing",
          "thermal efficiency London homes",
          "landlord EPC requirements 2026",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Secondary Glazing Cuts Heating Bills by 15-30% and Boosts Your EPC Rating",
            description: "Expert guide to improving energy efficiency and EPC ratings with secondary glazing for London properties.",
            image: "https://cdn.marblism.com/6GWAbKSlQsx.webp",
            datePublished: "2025-01-25",
            dateModified: "2025-01-25",
            author: { "@type": "Organization", name: "Secondary Glazing Specialist", url: "https://secondaryglazingspecialist.com" },
            publisher: {
              "@type": "Organization",
              name: "Secondary Glazing Specialist",
              logo: { "@type": "ImageObject", url: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://secondaryglazingspecialist.com/blog/epc-energy-efficiency-guide" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Link to="/quote-request">
          <Button size="lg" className="shadow-2xl gap-2 rounded-full px-6">
            <PoundSterling className="h-4 w-4" />
            Get Your Savings Quote
          </Button>
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-3">
        <Link to="/quote-request" className="block">
          <Button size="lg" className="w-full gap-2">
            <PoundSterling className="h-4 w-4" />
            Get Your Savings Quote
          </Button>
        </Link>
      </div>

      <main className="pt-24 pb-24 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Savings badge */}
          <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-5 py-3 mb-8 w-fit">
            <TrendingDown className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-bold text-foreground text-sm">15–30% Heating Bill Reduction</p>
              <p className="text-xs text-muted-foreground">Proven savings from secondary glazing installations across London</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Energy Efficiency</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 25 January 2025</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            How Secondary Glazing Cuts Heating Bills by 15-30% and Boosts Your EPC Rating
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's talk about money. Not the fun kind you spend on holidays, but the kind that disappears every month when your heating bill arrives. If you're a homeowner watching your energy costs climb, or a landlord staring down new legal requirements, secondary glazing might just be your secret weapon.
            </p>

            <p>
              Here's the thing: upgrading your windows doesn't have to mean ripping out your existing frames and spending £15,000 on full replacements. <Link to="/specialized/thermal-insulation" className="text-primary hover:underline">Secondary glazing</Link> offers a smarter route: one that can slash your heating bills by 15-30%, boost your EPC rating, and pay for itself faster than you'd think.
            </p>

            <h2>What's an EPC and Why Should You Care?</h2>

            <p>
              An Energy Performance Certificate (EPC) rates your property's energy efficiency from A (best) to G (worst). Think of it like a school report card, but for your house's ability to keep heat in and costs down.
            </p>

            <p>
              For homeowners, a better EPC rating means lower bills and higher property value. For landlords, it's now a legal requirement. Since April 2020, the Minimum Energy Efficiency Standards (MEES) require all rental properties to achieve at least an E rating. Fall below that, and you can't legally let your property.
            </p>

            <img src="https://cdn.marblism.com/6GWAbKSlQsx.webp" alt="Period sash window with EPC certificate showing energy rating bands for London property" className="w-full rounded-lg my-8" loading="lazy" />

            <p>
              The problem? Loads of period properties in areas like <Link to="/service-areas/kensington-chelsea" className="text-primary hover:underline">Kensington</Link>, Chelsea, and <Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link> are sitting at an E or F rating. Single-glazed sash windows are beautiful, but they're energy vampires: sucking heat (and cash) straight out of your home.
            </p>

            <h2>How Secondary Glazing Transforms Your EPC Rating</h2>

            <p>
              Secondary glazing works by fitting a second layer of glass or clear acrylic inside your existing window frame. This creates an insulating <Link to="/specialized/air-gap-secondary-glazing" className="text-primary hover:underline">air gap</Link>, basically a thermal buffer zone: that dramatically reduces heat loss.
            </p>

            <p>
              The results are impressive. Secondary glazing typically improves thermal efficiency by around <strong>60%</strong>. That's enough to bump most properties from an E rating to a solid D, and in many cases, all the way to C.
            </p>

            <p>
              Here's why it works so well: your existing window stays in place (no planning headaches), and the new internal layer creates that crucial air gap. This trapped air acts like a blanket, stopping warmth from escaping and cold from creeping in. It's physics, but the kind that saves you money.
            </p>

            <img src="https://cdn.marblism.com/BfwWHVo5Sr3.webp" alt="Secondary glazing cross-section showing air gap trapping heat between window panes" className="w-full rounded-lg my-8" loading="lazy" />

            <h3>The U-Value Game</h3>

            <p>
              In energy-efficiency speak, <Link to="/guides/u-values-db-ratings" className="text-primary hover:underline">U-values</Link> measure how well a window insulates. Lower is better. A typical single-glazed window has a U-value of around 5.0 W/m²K: pretty terrible. Secondary glazing can cut that U-value in half, dropping it to 2.5 or even lower with specialist glass.
            </p>

            <p>
              This improvement alone can be the difference between passing and failing your EPC assessment. And unlike full window replacement, you're not throwing away perfectly good frames or battling with conservation officers.
            </p>

            <h2>The Money Bit: Real Savings You Can Bank On</h2>

            <h3>Heating Bill Reduction: 15-30%</h3>

            <p>
              Once secondary glazing is installed, most homeowners see their heating bills drop by <strong>15-30%</strong>. For a typical London property spending £1,800 annually on heating, that's a saving of £270-£540 every single year.
            </p>

            <p>
              In real terms: that's a nice weekend away, a few months of groceries, or simply more money staying in your pocket instead of floating out through leaky windows.
            </p>
          </div>

          {/* Savings Calculator */}
          <SavingsCalculator />

          <div className="prose prose-lg max-w-none">
            <p>
              The research backs this up. A historic hotel retrofit achieved a 25% reduction in energy consumption. An office block saw 30% savings. These aren't theoretical numbers: they're actual results from actual buildings.
            </p>

            <img src="https://cdn.marblism.com/jfkyHV6PmfL.webp" alt="Heating bill savings visualization comparing energy costs with secondary glazing benefits" className="w-full rounded-lg my-8" loading="lazy" />

            <h3>The ROI Breakdown</h3>

            <p>Here's where secondary glazing really shines compared to full replacement:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h4 className="font-bold text-foreground mb-3">Secondary Glazing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Average cost: £300–£800 per window</li>
                  <li>• Payback period: 3–7 years</li>
                  <li>• Zero structural changes</li>
                  <li>• Installation in days, not weeks</li>
                </ul>
              </div>
              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h4 className="font-bold text-foreground mb-3">Full Double Glazing Replacement</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Average cost: £1,000–£2,500 per window</li>
                  <li>• Payback period: 10–20 years</li>
                  <li>• Often requires planning permission</li>
                  <li>• Disruptive installation</li>
                </ul>
              </div>
            </div>

            <p>
              Do the maths. Secondary glazing costs a fraction of full replacement and pays for itself faster. Plus, you keep your original windows: crucial if you're in a <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation area</Link> or <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building</Link>.
            </p>

            <h2>Why London Homeowners Are Making the Switch</h2>

            <p>
              If you live in Kensington, Chelsea, <Link to="/locations/georgian-belgravia" className="text-primary hover:underline">Belgravia</Link>, or any other prime London area, you already know the challenge: stunning period properties with heritage features that can't be touched. Planning officers guard these areas fiercely, and rightly so.
            </p>

            <p>
              But here's the beauty of secondary glazing: it doesn't alter the external appearance of your building. At all. Your gorgeous <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian sash windows</Link> look exactly the same from the street. The upgrade happens entirely on the inside.
            </p>

            <p>This makes secondary glazing the only realistic option for many London properties where:</p>

            <ul>
              <li>You're in a conservation area</li>
              <li>Your building is listed (Grade I, II*, or II)</li>
              <li>You have original period features worth preserving</li>
              <li>Planning permission for replacement windows would be refused</li>
            </ul>

            <img src="https://cdn.marblism.com/1dlItxXpgt_.webp" alt="Georgian townhouse in Kensington conservation area with traditional sash windows" className="w-full rounded-lg my-8" loading="lazy" />

            <p>You get modern energy efficiency without sacrificing architectural integrity. It's the best of both worlds.</p>
          </div>

          {/* Landlord MEES Callout */}
          <LandlordMEESCallout />

          <div className="prose prose-lg max-w-none">
            <p>
              Secondary glazing offers a fast, cost-effective route to compliance. Here's why it's become the go-to solution for rental properties:
            </p>

            <ol>
              <li><strong>Speed</strong>: Installation takes days, not weeks. Minimal disruption to tenants.</li>
              <li><strong>Cost</strong>: Significantly cheaper than full window replacement across an entire property.</li>
              <li><strong>Effectiveness</strong>: Proven to lift EPC ratings from E to D or C.</li>
              <li><strong>Reversible</strong>: If you ever need to revert (unlikely, but possible), it's straightforward.</li>
            </ol>

            <p>
              For landlords managing multiple properties, the sums are even more compelling. Upgrading ten properties with secondary glazing instead of full replacement could save you £100,000 or more: money that stays invested in your portfolio rather than disappearing into window replacement costs.
            </p>

            <h2>Beyond the Bills: The Hidden Benefits</h2>

            <p>While we're focused on money here, it's worth mentioning the bonus perks that come with secondary glazing:</p>

            <p><strong><Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">Noise reduction</Link></strong>: That air gap doesn't just stop heat: it blocks sound too. Expect a 70-80% reduction in outside noise. Perfect for properties near busy roads, Tube lines, or flight paths.</p>

            <p><strong><Link to="/specialized/condensation-control" className="text-primary hover:underline">Condensation control</Link></strong>: Secondary glazing eliminates the cold surface where condensation forms, protecting your windowsills and walls from damp damage.</p>

            <p><strong><Link to="/specialized/security-glazing" className="text-primary hover:underline">Security boost</Link></strong>: An extra layer of glazing is another barrier for potential intruders. Not Fort Knox, but definitely an improvement.</p>

            <p><strong><Link to="/specialized/uv-protection" className="text-primary hover:underline">UV protection</Link></strong>: Specialist glass options can block UV rays that fade carpets, furniture, and artwork: particularly valuable in period properties with antique furnishings.</p>

            <img src="https://cdn.marblism.com/mRozBVcoEil.webp" alt="Rental property interior with secondary glazing achieving C-rated EPC certificate" className="w-full rounded-lg my-8" loading="lazy" />

            <h2>Getting Started: What to Expect</h2>

            <ol>
              <li><strong>Assessment</strong>: A specialist surveys your windows and discusses your goals (EPC improvement, cost savings, noise reduction).</li>
              <li><strong>Quotation</strong>: You receive a detailed quote based on the number and size of windows.</li>
              <li><strong>Installation</strong>: Typically completed within 1-3 days, depending on property size.</li>
              <li><strong>Immediate results</strong>: You'll notice the difference in comfort right away. The financial savings show up on your next energy bill.</li>
            </ol>

            <p>
              For EPC purposes, arrange a new assessment after installation. Most homeowners see their rating improve by 1-2 bands, which is exactly what's needed to meet MEES requirements or add value before a sale.
            </p>

            <h2>The Bottom Line</h2>

            <p>
              Secondary glazing isn't just about ticking a box on an EPC certificate. It's about making your home more comfortable, cutting your bills year after year, and protecting property value: all without the disruption and expense of full window replacement.
            </p>

            <p>
              For London homeowners in conservation areas, it's often the only viable option. For landlords facing MEES deadlines, it's the most cost-effective route to compliance. And for anyone simply tired of watching their money heat the outside air, it's a smart investment that pays dividends from day one.
            </p>

            <p>
              The 15-30% savings on heating bills, the 60% improvement in thermal efficiency, and the ability to jump from an E to a C rating aren't marketing hype: they're real-world results being achieved in properties across London right now.
            </p>

            <p>Your windows might look traditional, but there's no reason your energy bills should be stuck in the past.</p>
          </div>

          {/* Cost Calculator Link */}
          <div className="mt-12 bg-muted/50 border border-border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Want an Exact Price for Your Property?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Use our cost calculator or request a free survey to get a detailed quote tailored to your windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://secondaryglazinginstallers.com/secondary-glazing-cost-calculator" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <Calculator className="h-4 w-4" />
                  Secondary Glazing Cost Calculator
                </Button>
              </a>
              <Link to="/quote-request">
                <Button size="lg" className="gap-2">
                  <PoundSterling className="h-4 w-4" />
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>

          <RelatedGuides currentSlug="epc-energy-efficiency-guide" />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default EPCEnergyEfficiencyGuide;

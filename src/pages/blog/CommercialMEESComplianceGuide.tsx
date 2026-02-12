import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { RelatedGuides } from "@/components/blog/RelatedGuides";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, Send, Calendar, Clock, Building2 } from "lucide-react";

const CommercialMEESComplianceGuide = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const res = await fetch("https://formspree.io/f/mpwzlvvvz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        toast({ title: "Request received!", description: "Our commercial team will contact you within 24 hours." });
        form.reset();
      } else {
        toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please try again later.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <>
      <EnhancedSEO
        title="MEES 2030 Compliance: Why Commercial Landlords Are Choosing Secondary Glazing"
        description="How secondary glazing helps London commercial landlords meet MEES EPC C rating by 2030. Cost-effective compliance for listed buildings, offices, and heritage properties. Save 60-75% vs full replacement."
        canonicalPath="/blog/commercial-mees-compliance-secondary-glazing"
        type="article"
        keywords={[
          "MEES compliance secondary glazing",
          "commercial secondary glazing London",
          "EPC rating C 2030",
          "commercial landlord MEES regulations",
          "secondary glazing listed buildings",
          "office energy efficiency London",
          "commercial EPC improvements",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "MEES 2030 Compliance: Why Commercial Landlords Are Choosing Secondary Glazing",
            description: "How secondary glazing helps London commercial landlords meet MEES EPC C rating by 2030.",
            author: { "@type": "Organization", name: "Secondary Glazing Specialist" },
            publisher: { "@type": "Organization", name: "Secondary Glazing Specialist" },
            datePublished: "2026-02-12",
            dateModified: "2026-02-12",
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://secondaryglazingspecialist.com/blog/commercial-mees-compliance-secondary-glazing" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Hero */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.marblism.com/mbnmDdlBu5b.webp"
            alt="London commercial office building with period sash windows requiring MEES compliance upgrade"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl py-20 md:py-28 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full mb-4">Commercial Compliance</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            MEES 2030 Compliance: Why Commercial Landlords Are Choosing Secondary Glazing
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-6">
            The smart landlord's guide to hitting EPC C — without breaking the bank or your heritage building.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm opacity-70">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> February 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 14 min read</span>
          </div>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Article body */}
            <article className="lg:w-2/3 prose prose-lg max-w-none">

              <p>If you're a commercial landlord in London, you've probably seen the headlines about MEES regulations getting stricter. The government isn't messing around anymore: by 2030, your rental properties need to hit an <strong className="text-primary text-xl">EPC rating of C</strong>, or you could be facing fines and unable to legally let your space.</p>

              <p>The good news? You've still got time. The bad news? Most landlords are going to wait until the last minute, which means contractors will be booked solid and costs will skyrocket.</p>

              <p>Let's break down what's actually happening with MEES, and why secondary glazing might be your smartest move for staying compliant without breaking the bank.</p>

              <h2>What's Actually Changing with MEES in 2026?</h2>

              <p>Here's the timeline you need to know:</p>

              <div className="not-prose bg-primary/5 border border-primary/20 rounded-xl p-6 my-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="bg-primary text-primary-foreground font-black text-sm px-3 py-1 rounded-full flex-shrink-0">NOW</span>
                  <p className="text-muted-foreground text-sm m-0">The minimum EPC rating for rental properties is <strong className="text-foreground">E</strong>. That's been the standard, and most commercial properties have scraped by with it.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-destructive text-destructive-foreground font-black text-sm px-3 py-1 rounded-full flex-shrink-0">OCT 2029</span>
                  <p className="text-muted-foreground text-sm m-0">The government introduces the <strong className="text-foreground">Home Energy Model (HEM)</strong>. This changes <em>how</em> EPCs are calculated: shifting focus from energy costs to thermal performance.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-destructive text-destructive-foreground font-black text-sm px-3 py-1 rounded-full flex-shrink-0">OCT 2030</span>
                  <p className="text-muted-foreground text-sm m-0">The minimum jumps to <strong className="text-foreground">C</strong>. If your property doesn't hit a C rating, <strong className="text-foreground">you legally cannot rent it out</strong>.</p>
                </div>
              </div>

              <img src="https://cdn.marblism.com/mbnmDdlBu5b.webp" alt="Home Energy Model assessment criteria: fabric performance, heating systems, and smart energy features" className="rounded-xl" />

              <p>The new HEM system looks at three main areas:</p>

              <ol>
                <li><strong>Fabric Performance</strong> — How well your building holds heat (insulation, windows, draught-proofing)</li>
                <li><strong>Heating Systems</strong> — Boilers, heat pumps, etc.</li>
                <li><strong>Smart Readiness</strong> — Solar panels, smart controls, etc.</li>
              </ol>

              <p>For most landlords, especially those with period properties or listed buildings in areas like Kensington, Westminster, or Camden, <strong>fabric performance is where you're bleeding points</strong>.</p>

              <h2>The £10,000 Problem (And How Secondary Glazing Solves It)</h2>

              <p>The government has capped compliance costs at <strong className="text-primary">£10,000 per property</strong>. If hitting EPC C would cost you more than that, you can apply for an exemption — but only after you've spent up to the cap on improvements.</p>

              <p>Government estimates suggest the average property will need about <strong>£5,400 in upgrades</strong> to reach compliance. That sounds manageable until you realize what full window replacement costs in London.</p>

              <p>Replacing single-glazed sash windows in a Victorian office building? You're looking at <strong>£1,500–£2,500 per window</strong>. For a typical commercial property with 15–20 windows, you've just blown through your entire budget on windows alone — before touching insulation, heating, or anything else.</p>

              <div className="not-prose bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
                <p className="text-sm font-semibold text-foreground mb-2">Cost Comparison: 15-Window Office</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-black text-primary mb-0">£4,500–£9k</p>
                    <p className="text-xs text-muted-foreground">Secondary Glazing</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-destructive mb-0">£22,500–£37k</p>
                    <p className="text-xs text-muted-foreground">Full Replacement</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 mb-0">Save 60–75% per window and spread your £10,000 budget across multiple improvements.</p>
              </div>

              <h2>Why Secondary Glazing is the Smart Compliance Play</h2>

              <p>Secondary glazing involves adding a second pane of glass to the inside of your existing windows. It's not double glazing — it's a completely separate unit that sits on the room-facing side of your original window.</p>

              <h3>1. It Directly Improves Fabric Performance</h3>

              <p>Under the new HEM system, your windows are a massive part of your fabric performance score. Single-glazed windows lose heat like a sieve. Secondary glazing creates an insulating air gap that dramatically reduces heat loss — without touching the exterior of the building.</p>

              <p>For landlords with listed buildings or properties in conservation areas, this is huge. You can upgrade your thermal performance <strong>without needing planning permission</strong> in most cases, because you're not altering the building's external appearance.</p>

              <img src="https://cdn.marblism.com/smz2X1XoFsb.webp" alt="Secondary glazing installation on Victorian sash window showing thermal insulation and heat retention" className="rounded-xl" />

              <h3>2. Cost-Effective EPC Improvements Offices Can Actually Afford</h3>

              <p>Secondary glazing typically costs <strong>£300–£600 per window</strong> installed. Compare that to full replacement at £1,500–£2,500, and you're saving 60–75% per window.</p>

              <h3>3. It Actually Works (And the Numbers Prove It)</h3>

              <p>Secondary glazing can improve a window's U-value (thermal efficiency rating) by up to <strong className="text-primary text-xl">60%</strong>. For offices with original single-glazed sashes, you're often going from a U-value of 5.0+ down to around 2.0–2.8.</p>

              <h2>The Acoustic Bonus for City Centre Offices</h2>

              <p>Here's something the EPC assessor won't measure, but your tenants absolutely will: noise reduction.</p>

              <p>London commercial properties — especially those near busy roads, train lines, or construction zones — suffer from noise complaints. <strong>10.8mm acoustic laminate glass</strong> is the sweet spot for secondary glazing in noisy areas.</p>

              <img src="https://cdn.marblism.com/TroNXvgZoGc.webp" alt="Acoustic secondary glazing blocking traffic noise in London office during video conference call" className="rounded-xl" />

              <p>A properly specified acoustic secondary glazing system can reduce noise by <strong className="text-primary text-xl">45–50 decibels</strong>. That's the difference between a tenant being able to run Zoom calls with traffic outside versus needing to move to an interior room.</p>

              <h2>Heritage Buildings: The Hidden Advantage</h2>

              <p>If you own a listed building or a property in a conservation area, you've probably been dreading the 2030 deadline. Planning restrictions make full window replacement a bureaucratic nightmare — if it's even allowed at all.</p>

              <p><Link to="/blog/listed-building-secondary-glazing-guide" className="text-primary hover:underline font-semibold">Secondary glazing for listed buildings</Link> is your way out. Because it's fitted internally and doesn't alter the building's external appearance, it usually doesn't require planning permission.</p>

              <p>For landlords with Georgian townhouses in Bloomsbury or Victorian warehouses converted to office space in Clerkenwell, this is often the <em>only</em> practical compliance route.</p>

              <h2>What Happens If You Don't Comply?</h2>

              <div className="not-prose bg-destructive/10 border border-destructive/30 rounded-xl p-6 my-8 text-center">
                <p className="text-5xl font-black text-destructive mb-2">£150,000</p>
                <p className="text-sm font-semibold text-foreground">Maximum fine for continuing MEES violations from 2030</p>
                <p className="text-xs text-muted-foreground mt-2">Properties below EPC C cannot be legally let. Corporate tenants are already avoiding low-rated buildings for carbon reporting.</p>
              </div>

              <h2>Getting Started: What You Need to Know</h2>

              <p><strong>1. Get a Pre-Compliance EPC Assessment</strong><br />Before you spend a penny, get an updated EPC assessment. Your assessor can model different improvements and show you exactly how much each upgrade will move your rating.</p>

              <p><strong>2. Prioritize Fabric Performance</strong><br />Under the new HEM system, fabric improvements give you the most bang for your buck. If your property has single-glazed windows, start there.</p>

              <p><strong>3. Spec for Acoustics If You're City Centre</strong><br />If your property is in a high-noise area, specify 10.8mm acoustic laminate. It costs slightly more but the tenant retention benefits are worth it.</p>

              <p><strong>4. Combine with Other Low-Cost Upgrades</strong><br />Secondary glazing works best as part of a package. Adding draught-proofing to doors, insulating loft spaces, and fitting thermostatic radiator valves are all low-cost moves that stack up on your EPC score.</p>

              <img src="https://cdn.marblism.com/0GCoDAYcvPa.webp" alt="EPC rating certificate showing C grade target for commercial property MEES compliance planning" className="rounded-xl" />

              <h2>The 2026–2030 Window Is Closing</h2>

              <p>Right now, you've got a four-year runway to hit EPC C. That sounds like plenty of time — until you factor in supply chain delays, contractor availability, planning applications, and tenant disruption.</p>

              <p><strong>Smart landlords are acting now</strong>, while contractors are available and costs are stable.</p>

              <h2>Why Secondary Glazing Makes Sense for London Landlords</h2>

              <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
                {[
                  "Direct fabric performance improvement",
                  "60–75% cheaper than full replacement",
                  "Usually no planning permission",
                  "Preserves heritage character",
                  "Acoustic benefits for offices",
                  "Fast install, minimal disruption",
                ].map((benefit) => (
                  <div key={benefit} className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                    <p className="text-xs font-semibold text-foreground m-0">{benefit}</p>
                  </div>
                ))}
              </div>

              <p>The 2030 deadline isn't going away. The regulations aren't getting looser. And the cost of compliance isn't going down.</p>

              <p>If your commercial properties are sitting on an E or D rating, now's the time to act — before the 2029 rush sends prices through the roof and contractors get booked out for months.</p>

            </article>

            {/* Sticky sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* CTA card */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Request a Commercial Survey</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Free, no-obligation assessment for your commercial property.</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input name="name" placeholder="Your name" required className="text-sm" />
                    <Input name="company" placeholder="Company" className="text-sm" />
                    <Input name="email" type="email" placeholder="Email" required className="text-sm" />
                    <Input name="phone" type="tel" placeholder="Phone" className="text-sm" />
                    <Textarea name="message" placeholder="Tell us about your property..." rows={3} className="text-sm" />
                    <input type="hidden" name="source" value="mees-blog-sidebar" />
                    <Button type="submit" className="w-full gap-2" disabled={submitting}>
                      <Send className="h-4 w-4" />
                      {submitting ? "Sending..." : "Request Survey"}
                    </Button>
                  </form>
                </div>

                {/* Call CTA */}
                <a href="tel:02070601572" className="block">
                  <div className="bg-foreground text-background rounded-xl p-6 text-center hover:opacity-90 transition-opacity">
                    <Phone className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-bold text-lg">Call Now</p>
                    <p className="text-2xl font-black">020 7060 1572</p>
                    <p className="text-xs opacity-70 mt-1">Mon–Fri 8am–6pm</p>
                  </div>
                </a>

                {/* Key stat */}
                <div className="border border-border rounded-xl p-6 text-center">
                  <p className="text-5xl font-black text-primary mb-1">Rating C</p>
                  <p className="text-sm font-semibold text-foreground">Required by 2030</p>
                  <p className="text-xs text-muted-foreground mt-2">Properties below C cannot be legally let. Act now to avoid £150k fines.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Further Reading - Big Four */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Further Reading</h2>
          <RelatedGuides currentSlug="commercial-mees" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CommercialMEESComplianceGuide;

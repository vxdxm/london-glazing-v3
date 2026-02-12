import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Zap, ShieldCheck, GraduationCap, Hotel, Landmark, ArrowRight, Send, CheckCircle } from "lucide-react";

const sectors = [
  { icon: Building2, title: "Office Buildings", description: "Reduce HVAC costs by 30% and improve staff comfort with acoustic secondary glazing across multi-storey office blocks.", href: "/commercial/office-buildings" },
  { icon: Hotel, title: "Hotels & Hospitality", description: "Guest satisfaction starts with a quiet room. Our solutions deliver 5-star silence without compromising period character.", href: "/commercial/hospitality-sector" },
  { icon: GraduationCap, title: "Schools & Universities", description: "Create distraction-free learning environments while meeting DfE acoustic standards (BB93).", href: "/commercial/educational-sector" },
  { icon: Landmark, title: "Listed Buildings", description: "Heritage-compliant glazing for museums, galleries, civic buildings, and Grade I/II commercial properties.", href: "/commercial/listed-buildings" },
];

const CommercialSecondaryGlazing = () => {
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
        title="Commercial Secondary Glazing London | Offices, Hotels & Listed Buildings"
        description="Large-scale secondary glazing for commercial properties in London. Energy savings, Net-Zero compliance, and acoustic performance for offices, hotels, schools, and heritage buildings."
        canonicalPath="/commercial-secondary-glazing"
        type="website"
        keywords={[
          "commercial secondary glazing London",
          "office secondary glazing",
          "hotel soundproofing windows",
          "listed building commercial glazing",
          "Net-Zero building regulations 2026",
          "commercial energy efficiency windows",
        ]}
        includeLocalBusiness
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Secondary Glazing",
            description: "Large-scale secondary glazing installation for commercial properties across London.",
            provider: { "@type": "Organization", name: "Secondary Glazing Specialist" },
            areaServed: { "@type": "City", name: "London" },
            serviceType: "Commercial Glazing Installation",
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 block">Commercial Solutions</span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Secondary Glazing for Commercial Properties
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Targeted at facilities managers, architects, and property owners. Reduce energy costs, meet Net-Zero regulations, and deliver acoustic comfort at scale.
          </p>
          <a href="#site-survey">
            <Button size="lg" className="gap-2">
              Request a Commercial Site Survey <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Energy Savings */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Energy Savings for Large-Scale Properties</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Commercial buildings account for 40% of UK carbon emissions. With rising energy prices and tightening regulations, secondary glazing offers the fastest ROI for improving building envelope performance — without the disruption of full window replacement.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary">30%</p>
              <p className="text-sm font-semibold text-foreground mt-1">Energy Cost Reduction</p>
              <p className="text-xs text-muted-foreground mt-1">Typical office building retrofit</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary">3-5yr</p>
              <p className="text-sm font-semibold text-foreground mt-1">Payback Period</p>
              <p className="text-xs text-muted-foreground mt-1">vs 15-20 years for full replacement</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary">Zero</p>
              <p className="text-sm font-semibold text-foreground mt-1">Downtime Required</p>
              <p className="text-xs text-muted-foreground mt-1">Install during occupied hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Net-Zero Compliance */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Compliance with 2026 Net-Zero Regulations</h2>
              <p className="text-muted-foreground mb-4">
                The UK's 2050 Net-Zero target is driving accelerated building performance standards. From 2026, commercial landlords face enhanced MEES requirements and mandatory energy disclosure for large buildings. Secondary glazing is the most cost-effective route to compliance for heritage and period commercial properties.
              </p>
              <ul className="space-y-2">
                {["Meets Part L Building Regulations for window upgrades", "Improves DEC and EPC ratings by 1-2 bands", "Qualifies for Enhanced Capital Allowances (ECA)", "Supports BREEAM Excellent accreditation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Specifics */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Sector-Specific Solutions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {sectors.map((s) => (
              <Link key={s.href} to={s.href} className="group">
                <div className="bg-background border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Site Survey Form */}
      <section id="site-survey" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">Request a Commercial Site Survey</h2>
            <p className="text-muted-foreground">Free, no-obligation assessment for commercial properties. Our team will evaluate your building and provide a detailed specification and quote.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-background border border-border rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="name" placeholder="Your name" required />
              <Input name="company" placeholder="Company / Organisation" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input name="email" type="email" placeholder="Email address" required />
              <Input name="phone" type="tel" placeholder="Phone number" />
            </div>
            <Input name="property_address" placeholder="Property address / postcode" />
            <Input name="building_type" placeholder="Building type (e.g. Office, Hotel, School)" />
            <Textarea name="message" placeholder="Tell us about your project — number of windows, specific requirements, timeline..." rows={4} />
            <input type="hidden" name="source" value="commercial-landing-page" />
            <Button type="submit" className="w-full gap-2" size="lg" disabled={submitting}>
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Request Free Site Survey"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CommercialSecondaryGlazing;

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft, Phone, Shield, CheckCircle, XCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { RelatedGuides } from "@/components/blog/RelatedGuides";

const ConservationBadge = () => (
  <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-5 py-3 mb-8 w-fit">
    <Shield className="h-6 w-6 text-primary flex-shrink-0" />
    <div>
      <p className="font-bold text-foreground text-sm">Conservation Approved</p>
      <p className="text-xs text-muted-foreground">Fully reversible — compliant with Historic England guidelines</p>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="my-12 overflow-x-auto">
    <h2 className="text-2xl font-bold text-foreground mb-6">Replacement Windows vs Secondary Glazing</h2>
    <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-muted">
          <th className="border border-border p-4 text-left font-semibold">Factor</th>
          <th className="border border-border p-4 text-left font-semibold text-destructive">Replacement Windows</th>
          <th className="border border-border p-4 text-left font-semibold text-primary">Secondary Glazing</th>
        </tr>
      </thead>
      <tbody>
        {[
          { factor: "Planning Permission", bad: "Almost always required for listed buildings", good: "Usually not required (internal installation)" },
          { factor: "Cost per Window", bad: "£2,500+ including heritage specification", good: "£350–£1,200 depending on spec" },
          { factor: "Original Windows", bad: "Permanently removed and lost", good: "100% preserved and protected" },
          { factor: "Reversibility", bad: "Irreversible — historic fabric destroyed", good: "Fully reversible — no trace left" },
          { factor: "Conservation Officer View", bad: "Usually refused for listed properties", good: "Generally supported and approved" },
          { factor: "Noise Reduction", bad: "40–45 dB with standard double glazing", good: "45–50 dB with 10.8mm acoustic laminate" },
          { factor: "Installation Time", bad: "Full day + making good", good: "2–3 hours per window" },
          { factor: "Property Value Impact", bad: "Risk of devaluation if originals lost", good: "Enhances value — comfort + heritage intact" },
        ].map((row, i) => (
          <tr key={i} className={i % 2 === 1 ? "bg-muted/30" : ""}>
            <td className="border border-border p-4 font-medium">{row.factor}</td>
            <td className="border border-border p-4">
              <span className="flex items-start gap-2 text-sm">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                {row.bad}
              </span>
            </td>
            <td className="border border-border p-4">
              <span className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                {row.good}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const HeritageConsultationForm = () => {
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
        toast({ title: "Request sent!", description: "We'll be in touch about your heritage property shortly." });
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
    <div className="my-12 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Free Heritage Consultation</h2>
          <p className="text-muted-foreground mb-6">
            Speak to a specialist who understands listed buildings, conservation areas, and heritage compliance. We'll assess your property and recommend the right approach.
          </p>
          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:02034888903" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
              020 3488 8903
            </a>
          </div>
          <p className="text-xs text-muted-foreground">Mon–Fri 8am–6pm, Sat 9am–1pm</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" type="tel" placeholder="Phone number" />
          <Input name="property_type" placeholder="Property type (e.g. Grade II Georgian terrace)" />
          <Input name="postcode" placeholder="Postcode" />
          <Textarea name="message" placeholder="Tell us about your heritage property and what you'd like to achieve..." rows={3} />
          <input type="hidden" name="source" value="listed-building-blog-guide" />
          <Button type="submit" className="w-full gap-2" disabled={submitting}>
            <Send className="h-4 w-4" />
            {submitting ? "Sending..." : "Request Free Consultation"}
          </Button>
        </form>
      </div>
    </div>
  );
};

const ListedBuildingSecondaryGlazingGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="Secondary Glazing for Listed Buildings: The Complete Heritage Guide | London Specialist"
        description="Conservation-approved secondary glazing for Grade I & II listed buildings in London. Fully reversible, no planning permission usually needed. Expert guide to heritage window solutions."
        canonicalPath="/blog/listed-building-secondary-glazing-guide"
        type="article"
        keywords={[
          "secondary glazing for listed buildings",
          "conservation area windows",
          "listed building consent secondary glazing",
          "heritage window solutions",
          "Grade II listed secondary glazing",
          "reversible secondary glazing",
          "conservation approved glazing",
          "Victorian sash window secondary glazing",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Secondary Glazing for Listed Buildings: Preserving the Past, Protecting Your Comfort",
            description: "Conservation-approved secondary glazing for Grade I & II listed buildings. Fully reversible heritage window solutions for London period homes.",
            image: "https://cdn.marblism.com/aOHcpxw0n9w.webp",
            datePublished: "2025-01-20",
            dateModified: "2025-01-20",
            author: { "@type": "Organization", name: "Secondary Glazing Specialist", url: "https://secondaryglazingspecialist.com" },
            publisher: {
              "@type": "Organization",
              name: "Secondary Glazing Specialist",
              logo: { "@type": "ImageObject", url: "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://secondaryglazingspecialist.com/blog/listed-building-secondary-glazing-guide" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <a href="#heritage-consultation">
          <Button size="lg" className="shadow-2xl gap-2 rounded-full px-6">
            <Phone className="h-4 w-4" />
            Free Heritage Consultation
          </Button>
        </a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-3">
        <a href="#heritage-consultation" className="block">
          <Button size="lg" className="w-full gap-2">
            <Phone className="h-4 w-4" />
            Free Heritage Consultation
          </Button>
        </a>
      </div>

      <main className="pt-24 pb-24 md:pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {/* Conservation Badge */}
          <ConservationBadge />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Heritage</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 20 January 2025</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Secondary Glazing for Listed Buildings: Preserving the Past, Protecting Your Comfort
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you own a Grade II listed Georgian terrace in Westminster or a Victorian villa in Hampstead, you already know the trade-off: stunning period features come with draughts that could freeze a penguin and noise levels that make central London feel like it's happening in your sitting room.
            </p>

            <p>
              The problem? You can't just rip out those beautiful sash windows and install double glazing. Your local conservation officer would have a fit, and rightly so: those windows are part of Britain's architectural heritage.
            </p>

            <p>
              The solution? <strong><Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">Secondary glazing for listed buildings</Link></strong>. It's the conservation-approved approach that lets you keep the historic charm while finally getting some peace, warmth, and dry windowsills.
            </p>

            <p>Let's walk through exactly how this works, why conservation officers actually like it, and what you need to know before you start.</p>

            <h2>Why Listed Buildings Need a Different Approach</h2>

            <p>Here's the reality: those single-glazed period windows in your Richmond townhouse or Greenwich heritage property are beautiful, but they're thermal disasters. Original Georgian or Victorian glass is typically just 3-4mm thick with zero air gap, which means:</p>

            <ul>
              <li><strong>Up to 60% of your home's heat</strong> escapes through the windows</li>
              <li><strong>External noise</strong> from traffic, aircraft, and street activity floods straight in</li>
              <li><strong>Condensation and black mould</strong> form on cold glass surfaces every winter</li>
              <li><strong>Energy bills</strong> are astronomical because you're basically heating the street</li>
            </ul>

            <p>
              Traditional double glazing would solve these problems instantly: but it's usually forbidden in listed buildings because it requires altering or replacing the original windows. That's where <strong>heritage glazing specialists</strong> come in with secondary glazing, a technique that's been quietly protecting Britain's historic buildings for decades.
            </p>

            <img src="https://cdn.marblism.com/aOHcpxw0n9w.webp" alt="Condensation on Georgian sash window in listed building showing heat loss problem" className="w-full rounded-lg my-8" loading="lazy" />

            <h2>What Makes Secondary Glazing "Conservation-Approved"?</h2>

            <p>
              Secondary glazing works by adding a second internal pane of glass (or slim acrylic panel) behind your existing window. This creates an insulating <Link to="/specialized/air-gap-secondary-glazing" className="text-primary hover:underline">air gap</Link>: typically 100mm or more: without touching the original historic fabric.
            </p>

            <p>Conservation officers love it because it ticks all the right boxes:</p>

            <ul>
              <li><strong>Reversible</strong>: The entire system can be removed in the future without leaving a trace</li>
              <li><strong>Non-invasive</strong>: Original joinery, glazing bars, and sash profiles stay completely intact</li>
              <li><strong>Invisible from outside</strong>: The building's external appearance remains unchanged</li>
              <li><strong>Protective</strong>: It actually shields the original windows from condensation and wear</li>
            </ul>

            <p>
              This reversibility is huge. Unlike replacement windows, secondary glazing doesn't destroy historic fabric. It's essentially a protective layer that future generations can remove if they want to experience the building in its original state.
            </p>

            <h2>Do You Need Planning Permission for Secondary Glazing?</h2>

            <p>
              Here's the good news: <strong>secondary glazing usually doesn't require planning permission</strong> because it's installed internally and doesn't alter the building's structure or external appearance.
            </p>

            <p>
              However, if your property is Grade I, II, or II* listed, you'll still need <strong>Listed Building Consent</strong> from your Local Planning Authority. Don't panic: conservation officers generally view secondary glazing positively because it preserves the original windows while solving real comfort problems.
            </p>

            <p>
              Historic England's official guidance supports this, stating that "secondary glazing, when carefully designed and installed, allows the original windows to be retained unaltered" with "no loss of historic fabric."
            </p>

            <h3>Getting Listed Building Consent: The Strategy</h3>

            <p>When you apply for consent in areas like Westminster or <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas</Link> across London, conservation officers will assess:</p>

            <ol>
              <li><strong>Reversibility</strong>: Can the installation be removed without damaging the original window?</li>
              <li><strong>Visual impact</strong>: Does it maintain the interior's period character?</li>
              <li><strong>Fixing method</strong>: Are you using non-permanent fixings (magnetic, clipped, or discreet screw fixings)?</li>
              <li><strong>Material choice</strong>: Are the frames slim and sympathetically finished?</li>
            </ol>

            <p>
              The secret is to position secondary glazing <strong>behind the existing window frame</strong> so it's invisible from the street. In practice, this means your Kensington neighbours won't even know it's there, but you'll finally be able to hear yourself think.
            </p>

            <img src="https://cdn.marblism.com/PzbDVT87acZ.webp" alt="Secondary glazing cross-section diagram showing 100mm air gap behind original sash window" className="w-full rounded-lg my-8" loading="lazy" />
          </div>

          {/* Comparison Table */}
          <ComparisonTable />

          <div className="prose prose-lg max-w-none">
            <h2>The Performance Benefits You'll Actually Notice</h2>

            <p>Let's talk about what secondary glazing does in real-world terms, not just theory:</p>

            <p>
              <strong>Noise Reduction</strong>: The 100mm+ air gap between your original sash window and the secondary pane acts as a sound buffer. In testing, properly installed secondary glazing reduces noise by <strong>70-80%</strong>, which is transformative if you live on a busy road in Westminster or under a flight path in Richmond.
            </p>

            <p>
              <strong><Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Thermal Efficiency</Link></strong>: That air gap also traps heat. Secondary glazing can reduce heat loss by up to <strong>60%</strong>, which means lower energy bills and fewer draughts whistling through your listed property. For Georgian townhouses with massive sash windows, this is a game-changer.
            </p>

            <p>
              <strong><Link to="/specialized/condensation-control" className="text-primary hover:underline">Condensation Control</Link></strong>: By creating a thermal break, secondary glazing stops cold glass from forming condensation. No more black mould on your windowsills, no more wiping down glass every morning.
            </p>

            <p>
              <strong><Link to="/specialized/security-glazing" className="text-primary hover:underline">Security</Link></strong>: An additional layer of glazing also means an extra barrier for would-be intruders: particularly important for ground-floor windows in urban areas like Greenwich or Hampstead.
            </p>

            <h2>System Types for Period Properties</h2>

            <p>Not all secondary glazing is the same. The right system depends on your window type and how you use the space:</p>

            <p><strong><Link to="/residential/fixed-secondary-glazing" className="text-primary hover:underline">Slimline Fixed Units</Link></strong>: Permanent installations with ultra-thin aluminium frames (as narrow as 15mm). Ideal for windows you never open, like upper sashes in tall Georgian windows.</p>

            <p><strong><Link to="/residential/sash-windows" className="text-primary hover:underline">Sliding Sash Panels</Link></strong>: Designed specifically to work with traditional sash windows. These slide vertically or horizontally so you can still operate your original window when you want fresh air.</p>

            <p><strong><Link to="/residential/casement-windows" className="text-primary hover:underline">Hinged Casement Panels</Link></strong>: For casement windows in Victorian or Edwardian properties, hinged secondary glazing swings open like a door, allowing full access to the original window.</p>

            <p><strong>Magnetic Removable Units</strong>: Fully reversible panels that attach magnetically to slim frames. Perfect for listed buildings where conservation officers want absolute proof of reversibility. You can remove them for summer and reinstall in winter.</p>

            <img src="https://cdn.marblism.com/QxFVIsB60ka.webp" alt="Before and after Victorian bay window with secondary glazing installation in London heritage home" className="w-full rounded-lg my-8" loading="lazy" />

            <h2>Borough-Specific Considerations</h2>

            <p>Different London boroughs have slightly different approaches to listed building applications:</p>

            <p><strong><Link to="/service-areas/westminster" className="text-primary hover:underline">Westminster</Link></strong>: Home to thousands of Grade I and II listed properties, Westminster's conservation officers are highly experienced with secondary glazing. They prioritise visual discretion and reversibility but are generally supportive of well-designed installations.</p>

            <p><strong>Greenwich</strong>: The Greenwich World Heritage Site has strict protections, but secondary glazing is widely accepted for listed buildings within the Maritime Greenwich Conservation Area, provided it's installed sensitively.</p>

            <p><strong>Hampstead</strong>: With its concentration of Arts and Crafts and Victorian properties, Hampstead's conservation area policies favour solutions that preserve original joinery. Secondary glazing fits this perfectly.</p>

            <p><strong><Link to="/locations/conservation-richmond" className="text-primary hover:underline">Richmond</Link></strong>: Richmond's conservation officers are particularly focused on maintaining the borough's village character. Secondary glazing that's invisible from the street is usually approved without issue.</p>

            <img src="https://cdn.marblism.com/YXlUp_heXHw.webp" alt="Listed Building Consent application documents and architectural drawings for secondary glazing" className="w-full rounded-lg my-8" loading="lazy" />

            <h2>Working with Conservation Officers: The Practical Approach</h2>

            <p>When you submit your Listed Building Consent application, include:</p>

            <ul>
              <li><strong>Detailed drawings</strong> showing the secondary glazing profile and fixing method</li>
              <li><strong>Material specifications</strong> (frame finish, glass type, fixing details)</li>
              <li><strong>Photographs</strong> of the existing windows from inside and outside</li>
              <li><strong>A reversibility statement</strong> explaining how the installation can be removed without damage</li>
            </ul>

            <p>The more information you provide upfront, the faster the approval process. Most applications for secondary glazing in listed buildings are approved within 8-12 weeks.</p>

            <h2>Is Secondary Glazing Right for Your Heritage Property?</h2>

            <p>If you're living with draughts, noise, and condensation in a listed building, secondary glazing is almost certainly the best option available. It's the only solution that:</p>

            <ul>
              <li>Preserves your original windows completely</li>
              <li>Doesn't require controversial planning battles</li>
              <li>Delivers real-world comfort improvements</li>
              <li>Protects the historic fabric for future generations</li>
            </ul>

            <p>
              Whether you're in a <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Grade II townhouse in Westminster</Link> or a <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian conversion in Hampstead</Link>, secondary glazing lets you have it both ways: the heritage stays intact, and you finally get to live comfortably in your own home.
            </p>

            <p>
              If you're ready to explore how secondary glazing could work for your listed property, it's worth speaking to <strong>heritage glazing specialists</strong> who understand both the conservation requirements and the technical performance you need. Because preserving the past shouldn't mean freezing in it.
            </p>
          </div>

          {/* Heritage Consultation Form */}
          <div id="heritage-consultation">
            <HeritageConsultationForm />
          </div>

          <RelatedGuides currentSlug="listed-building-secondary-glazing-guide" />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ListedBuildingSecondaryGlazingGuide;

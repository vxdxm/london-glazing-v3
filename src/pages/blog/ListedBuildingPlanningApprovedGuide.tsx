import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { RelatedGuides } from "@/components/blog/RelatedGuides";

const SLUG = "listed-building-planning-approved-guide";
const URL = `https://secondaryglazingspecialist.com/blog/${SLUG}`;
const HERO = "https://cdn.marblism.com/A4-3AjjI-RJ.webp";

const faqs = [
  {
    q: "Will secondary glazing ruin the look of my period windows?",
    a: "Not if it's done right. We use slimline aluminium frames powder-coated to match your existing woodwork. When aligned with your sash rails, it becomes almost invisible from both inside and outside.",
  },
  {
    q: "Can I still open my windows for fresh air?",
    a: "Yes. We match the secondary units to your existing window type — vertical sliders for sash windows, hinged units for casements — so ventilation works exactly as before.",
  },
  {
    q: "How much noise reduction can I expect?",
    a: "Because of the wide 100–150mm air gap, secondary glazing is the gold standard for noise reduction. Most people notice an immediate silencing effect once the panels are closed, with up to 80% perceived reduction.",
  },
  {
    q: "Is it expensive compared to double glazing?",
    a: "It's often more cost-effective because you avoid structural changes and full window replacements — and you avoid the legal costs and fines associated with unapproved double glazing in a listed building.",
  },
  {
    q: "Do I need to tell my local council?",
    a: "It's best practice to email your local Conservation Officer for Listed Building Consent. Most are supportive of secondary glazing, and written approval gives you peace of mind.",
  },
];

const ListedBuildingPlanningApprovedGuide = () => {
  return (
    <>
      <EnhancedSEO
        title="Listed Building Secondary Glazing: Planning-Approved Guide"
        description="Complete guide to planning-approved secondary glazing for Grade I and Grade II listed buildings in London. Reversible, conservation-friendly, no planning permission usually required."
        canonicalPath={`/blog/${SLUG}`}
        type="article"
        keywords={[
          "listed building secondary glazing",
          "planning permission secondary glazing",
          "listed building consent",
          "Grade II secondary glazing",
          "conservation area windows",
          "reversible glazing",
        ]}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Listed Building Secondary Glazing: The Complete Guide to Planning-Approved Window Upgrades",
            description:
              "How to upgrade listed building windows with conservation-approved secondary glazing — planning permission, Listed Building Consent, reversibility, thermal and acoustic performance.",
            image: HERO,
            datePublished: "2026-07-19",
            dateModified: "2026-07-19",
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
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Heritage</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 19 July 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Listed Building Secondary Glazing: The Complete Guide to Planning-Approved Window Upgrades
          </h1>

          <img
            src={HERO}
            alt="Elegant Georgian sash window in a London listed building with discreet secondary glazing"
            className="w-full rounded-lg mb-8"
            loading="eager"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you live in a listed building in London, you know the struggle. You own a piece of history — a beautiful Victorian terrace or a grand Georgian townhouse — but you're also freezing. Your windows are single-paned, drafty, and let in enough street noise to make you feel like you're living in the middle of Piccadilly Circus.
            </p>

            <p>
              You want to upgrade, but then you remember: the Conservation Officer. One mention of "double glazing" and you might as well be suggesting you want to paint the exterior neon pink.
            </p>

            <p>
              The good news? There is a way to get the warmth and quiet you deserve without ending up on the wrong side of the council. It's called{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">
                listed building secondary glazing
              </Link>
              , and it's the "secret weapon" for heritage homeowners. Here's exactly how it works, why the planners love it, and how you can finally stop wearing three jumpers in your own living room.
            </p>

            <h2>Planning Permission vs. Listed Building Consent: The Big Mix-Up</h2>

            <p>People often ask, "Do I need planning permission for secondary glazing?" In 99% of cases, the answer is <strong>no</strong>.</p>

            <p>
              Planning permission deals with things that change the <em>external</em> appearance of your home. Because secondary glazing is installed on the <em>inside</em> of your existing windows, it doesn't change how the house looks from the street.
            </p>

            <p>
              However, because your home is listed, you have to deal with <strong>Listed Building Consent (LBC)</strong>. This is a separate thing entirely. LBC is about protecting the "special interest" of your building — making sure you don't damage the historic bits that make your home special.
            </p>

            <p>
              The great news? Historic England actually recommends secondary glazing as the preferred way to improve old windows, because it keeps the original glass and timber exactly where they belong. See our{" "}
              <Link to="/compliance-hub" className="text-primary hover:underline">Compliance Hub</Link> for a step-by-step LPA approach.
            </p>

            <h2>Grade I vs. Grade II: How Stiff Is the Scrutiny?</h2>

            <ul>
              <li>
                <strong>Grade II Listed:</strong> The most common category for London homes. Councils are generally relaxed about secondary glazing here, provided the design is slim and discreet.
              </li>
              <li>
                <strong>Grade I and II*:</strong> The VIPs of the listed world. Conservation Officers will look at plans more closely to be sure you aren't drilling into 200-year-old joinery or hiding original stained glass.
              </li>
            </ul>

            <p>
              Whatever the grade, the key to a happy planning department is showing them that your{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building secondary glazing</Link> is <strong>fully reversible</strong>.
            </p>

            <img
              src="https://cdn.marblism.com/wineSQjRJEo.webp"
              alt="Close-up of secondary glazing showing slim frames and original shutters"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>The Golden Rule: Reversibility</h2>

            <p>
              If there is one word that makes a Conservation Officer's heart skip a beat (in a good way), it's "reversible." Double glazing usually gets refused because it involves throwing away the original windows — that's permanent, and you can't undo a skip full of historic timber.
            </p>

            <p>
              Secondary glazing is different. It's an independent unit that sits inside your window reveal. If a future owner 50 years from now decides to remove it, they can — unscrew the frame, and the original window is still there, untouched and unharmed.
            </p>

            <h2>Preserving Shutters and Original Glass</h2>

            <p>
              A common worry is shutters — you don't want to install secondary glazing only to find you can no longer close your Victorian folding shutters at night. A specialist installation takes this into account.
            </p>

            <p>
              By using ultra-slim frames that mimic the sight lines of your{" "}
              <Link to="/residential/sash-windows" className="text-primary hover:underline">sash windows</Link>, we can fit the secondary glazing so your shutters stay fully functional. You keep the heritage charm, the original wavy glass, and the ornate joinery — while adding a high-tech layer of protection.
            </p>

            <img
              src="https://cdn.marblism.com/fb6zHxUakzf.webp"
              alt="Illustration showing the insulating air gap between the original and secondary window"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>Warmth and Quiet: The Real-World Benefits</h2>

            <ol>
              <li>
                <strong>Thermal insulation.</strong> Think of secondary glazing as a winter coat for your windows. The insulating air gap between the two panes stops heat escaping and blocks the draughts whistling through gaps in the old timber. See our{" "}
                <Link to="/specialized/thermal-insulation" className="text-primary hover:underline">thermal insulation</Link> page for typical U-value improvements.
              </li>
              <li>
                <strong>Acoustic peace.</strong> Because the air gap is wider than in a double-glazed unit (typically 100–150mm), it acts as a huge buffer for sound waves. Combined with specialist{" "}
                <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">acoustic glass</Link>, external noise can be reduced by up to 80%.
              </li>
            </ol>

            <img
              src="https://cdn.marblism.com/l7HGcp3JeYT.webp"
              alt="A relaxed person reading by a quiet, warm window in a period home"
              className="w-full rounded-lg my-8"
              loading="lazy"
            />

            <h2>Taking the Next Step</h2>

            <p>
              Upgrading a listed building doesn't have to be a planning nightmare. By choosing{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building secondary glazing</Link>, you play by the rules while still getting all the modern comforts. You preserve the history, satisfy the council, and finally get to sit by the window without shivering.
            </p>

            <p>
              If you're ready to turn a drafty museum into a cozy home, speak to a specialist who understands London's heritage properties —{" "}
              <Link to="/quote-request" className="text-primary hover:underline">request a free consultation</Link>.
            </p>

            <h2>FAQ: Listed Building Secondary Glazing</h2>

            {faqs.map((f, i) => (
              <div key={i}>
                <h3>{i + 1}. {f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <RelatedGuides currentSlug={SLUG} />
        </article>
      </main>

      <Footer />
    </>
  );
};

export default ListedBuildingPlanningApprovedGuide;
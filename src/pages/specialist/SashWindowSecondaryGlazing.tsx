import React from "react";
import ServiceFAQ, { type ServiceFAQItem } from "@/components/seo/ServiceFAQ";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { SpecialistPageSchema } from "@/components/seo/SpecialistPageSchema";
import { Link } from "react-router-dom";
import { ArrowUpDown, Thermometer, Wind, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";
import sashTechnicalSketch from "@/assets/sash-secondary-glazing-technical-drawing.jpg.asset.json";
import gallery13 from "@/assets/gallery/secondary_glazing_13.webp.asset.json";
import gallery16 from "@/assets/gallery/secondary_glazing_16.webp.asset.json";
import gallery18 from "@/assets/gallery/secondary_glazing_18.webp.asset.json";
import gallery19 from "@/assets/gallery/secondary_glazing_19.webp.asset.json";
import gallery20 from "@/assets/gallery/secondary_glazing_20.webp.asset.json";
import gallery23 from "@/assets/gallery/secondary_glazing_23.webp.asset.json";
import gallery24 from "@/assets/gallery/secondary_glazing_24.webp.asset.json";
import gallery26 from "@/assets/gallery/secondary_glazing_26.webp.asset.json";
import gallery29 from "@/assets/gallery/secondary_glazing_29.webp.asset.json";
import gallery30 from "@/assets/gallery/secondary_glazing_30.webp.asset.json";
import gallery39 from "@/assets/gallery/secondary_glazing_39.webp.asset.json";
import gallery41 from "@/assets/gallery/secondary_glazing_41.webp.asset.json";

const galleryImages = [
  { src: gallery13.url, alt: "Curved bay of Georgian sash windows with slimline secondary glazing in a London townhouse" },
  { src: gallery24.url, alt: "Three timber sash windows fitted with vertical sliding secondary glazing in a bedroom" },
  { src: gallery23.url, alt: "Tall Georgian sash windows with acoustic secondary glazing overlooking a London street" },
  { src: gallery26.url, alt: "Period sash windows with discreet secondary glazing sightlines in a bright interior" },
  { src: gallery19.url, alt: "Hotel bedroom sash windows with acoustic secondary glazing for street noise control" },
  { src: gallery18.url, alt: "Bay window and balcony door with secondary glazing in a London apartment" },
  { src: gallery20.url, alt: "Two sash windows with secondary glazing above column radiators in a stucco-fronted flat" },
  { src: gallery16.url, alt: "Horizontal sliding secondary glazing units fitted to bedroom windows in Chelsea" },
  { src: gallery29.url, alt: "Office meeting room with secondary glazing fitted to large multi-pane sash windows" },
  { src: gallery30.url, alt: "Home study with sash windows and secondary glazing reducing high street noise" },
  { src: gallery39.url, alt: "Run of tall sash windows with vertical sliding secondary glazing along a London office breakout corridor" },
  { src: gallery41.url, alt: "Victorian bay window with stained glass top lights and vertical sliding secondary glazing" },
];


const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Window Types", href: "/residential/sash-windows" },
  { label: "Sash Window Secondary Glazing" },
];

const relatedLinks = [
  // Heritage Cross-Links
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Victorian sash solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian sash glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing", description: "Heritage area solutions" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  // Residential Types
  { title: "Vertical Sliding", href: "/residential/sash-windows", description: "Residential sash options" },
  { title: "Lift Out Panels", href: "/residential/lift-out", description: "Removable panel systems" },
  // Blogs
  { title: "Sash Windows Blog", href: "/blog/sash-window-secondary-glazing-options", description: "Complete sash window guide" },
  { title: "Cost Guide", href: "/blog/secondary-glazing-cost-london", description: "London pricing guide" },
  // Locations
  { title: "Victorian Islington", href: "/locations/victorian-islington", description: "Victorian properties in Islington" },
  { title: "Georgian Belgravia", href: "/locations/georgian-belgravia", description: "Georgian properties in Belgravia" },
  // Case Studies
  { title: "Case Studies", href: "/case-studies", description: "Real project examples" },
];


const PAGE_FAQS: ServiceFAQItem[] = [
          { question: "Can I still open my sash windows with secondary glazing?", answer: "Yes, our vertical sliding secondary glazing mirrors your original sash window operation. Both the primary and secondary windows can be opened independently for ventilation and cleaning." },
          { question: "Does secondary glazing work with box sash windows?", answer: "Absolutely. Our systems are specifically designed to work with traditional box sash mechanisms, preserving full functionality while adding thermal and acoustic insulation." }
        ];

const SashWindowSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <SpecialistPageSchema
        serviceName="Sash Window Secondary Glazing"
        serviceDescription="Expert secondary glazing for sash windows across London. Preserve traditional box sash mechanisms while dramatically improving thermal efficiency by 60% and reducing noise by up to 80%."
        pageName="Sash Window Secondary Glazing London"
        pageDescription="Specialist secondary glazing for traditional sash windows in period properties"
        priceRange={{ low: 350, high: 900 }}
        faqs={PAGE_FAQS}
      />
      <EnhancedSEO
        title="Sash Window Secondary Glazing | Vertical Sliding Solutions London"
        description="Secondary glazing for sash windows in London. Vertical sliding units match original sash operation, cutting heat loss 65% and noise 80%."
        canonicalPath="/sash-window-secondary-glazing"
        keywords={[
          "sash window secondary glazing",
          "vertical sliding secondary glazing",
          "sash window insulation",
          "sliding sash glazing London",
          "box sash secondary glazing",
          "timber sash window solutions"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sky-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full mb-6">
              <ArrowUpDown className="h-5 w-5" />
              <span className="font-medium">Sash Window Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sash Window Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maintain the traditional functionality of your sash windows with our <InlineLink href="/residential/sash-windows">vertical 
              sliding secondary glazing</InlineLink>. Designed to match the operation of original box sash 
              windows, our systems provide exceptional <InlineLink href="/thermal-insulation-secondary-glazing">thermal</InlineLink> and <InlineLink href="/noise-reduction-secondary-glazing">acoustic performance</InlineLink>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Our Experts
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jump to section */}
      <nav aria-label="Jump to section" className="border-y bg-muted/40">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Jump to section
            </p>
            <ul className="flex flex-wrap gap-2">
              {[
                { id: "why-vertical-sliding", label: "Why vertical sliding" },
                { id: "gallery", label: "Gallery" },
                { id: "technical-drawing", label: "Technical drawing" },
                { id: "unit-types", label: "Unit types" },
                { id: "glazing-options", label: "Glass options" },
                { id: "performance-benefits", label: "Performance benefits" },
                { id: "sash-window-challenge", label: "The sash window challenge" },
                { id: "planning-leasehold", label: "Planning, councils & leasehold" },
                { id: "installation-process", label: "Installation process" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mini gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 id="gallery" className="scroll-mt-28 text-3xl font-bold text-foreground mb-4">
              Installed Sash Secondary Glazing: Project Gallery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Slimline vertical sliding and horizontal sliding units installed to period sash
              reveals across London residential, hotel and office projects. Sightlines are set to
              align with existing meeting rails and glazing bars so the primary window remains the
              dominant visual element.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-lg border bg-background"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Technical drawing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 id="technical-drawing" className="scroll-mt-28 text-3xl font-bold text-foreground mb-4">
              Vertical Sliding Unit: Technical Drawing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The exploded view below shows the component build-up of a two-panel vertical
              sliding secondary glazing unit as installed to the internal reveal of an existing
              timber sash window. Sub-frame depth, interlock position and sash weight all follow
              from the glass specification chosen, so confirm the glazing type before finalising
              sub-frame sizes.
            </p>
            <figure className="rounded-lg border bg-muted/30 p-4 md:p-8">
              <img
                src={sashTechnicalSketch.url}
                alt="Technical drawing of a two-panel vertical sliding secondary glazing unit showing sub-frame, top sash, meeting rail interlock, bottom sash and sill sections"
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-2xl h-auto"
              />
              <figcaption className="mt-4 text-sm text-muted-foreground text-center">
                Indicative component drawing — dimensions are confirmed at survey against the
                measured reveal.
              </figcaption>
            </figure>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 not-prose">
              {[
                { ref: "73", title: "Outer sub-frame", body: "Perimeter carrier frame fixed to the reveal, packed and sealed to take up out-of-square openings." },
                { ref: "74", title: "Top sash / head section", body: "Upper sliding sash running in the head track, balanced for controlled operation." },
                { ref: "22", title: "Meeting rail interlock", body: "Interlocking rail with brush and compression seals — the critical joint for acoustic performance." },
                { ref: "65", title: "Bottom sash rail", body: "Lower sliding sash rail carrying the glazing bead and lift-handle hardware." },
                { ref: "64", title: "Sill / cill section", body: "Sill member with drainage path, set forward of the primary window to maintain the air gap." },
                { ref: "43", title: "Outer frame section size", body: "The outer frame is a 43mm x 43mm square profile — 43mm in both height and width — slim on the face while deep enough to pack, level and seal into an out-of-square reveal." },
              ].map((item) => (
                <div key={item.ref} className="rounded-lg border bg-card p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-primary/10 px-2 text-sm font-semibold text-primary">
                      {item.ref}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg border bg-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Outer Frame Section Size
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The outer sub-frame is a 43mm x 43mm section — 43mm in both height and width.
                This square profile keeps the framing visually slim against the primary sash
                while giving enough depth to pack, level and seal the unit into an out-of-square
                reveal. Allow for the 43mm face dimension when checking that the secondary unit
                will sit clear of existing architrave, shutter boxes and window furniture.
              </p>
              <dl className="grid gap-4 sm:grid-cols-3 not-prose">
                <div className="rounded-md border bg-background p-4">
                  <dt className="text-sm text-muted-foreground">Frame height</dt>
                  <dd className="text-xl font-semibold text-foreground">43mm</dd>
                </div>
                <div className="rounded-md border bg-background p-4">
                  <dt className="text-sm text-muted-foreground">Frame width</dt>
                  <dd className="text-xl font-semibold text-foreground">43mm</dd>
                </div>
                <div className="rounded-md border bg-background p-4">
                  <dt className="text-sm text-muted-foreground">Profile</dt>
                  <dd className="text-xl font-semibold text-foreground">43 x 43mm square</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 id="why-vertical-sliding" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Why Choose Vertical Sliding Secondary Glazing?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sash windows are designed to slide vertically, and our secondary glazing 
                  replicates this movement perfectly. Unlike <InlineLink href="/residential/fixed-secondary-glazing">fixed panels</InlineLink> or <InlineLink href="/residential/casement-windows">hinged units</InlineLink>, 
                  vertical sliding secondary glazing allows you to open both your original 
                  window and the secondary unit independently, maintaining natural ventilation 
                  exactly as intended by the original design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our systems use precision spiral balances (the same mechanism used in 
                  quality replacement sash windows) to ensure smooth, effortless operation 
                  year after year. The sashes can be tilted inward for easy cleaning of 
                  both the secondary glazing and your original windows - ideal for{" "} 
                  <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>

                <h2 id="unit-types" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Secondary Glazing Unit Types for Sash Windows
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/sash-windows" className="hover:text-primary">Vertical Sliding</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our most popular option for sash windows. Matches the operation of 
                        your original windows with independent sliding sashes.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Spiral balance mechanism
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Tilt-in for cleaning
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Meeting rail options
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/lift-out" className="hover:text-primary">Lift-Out Panels</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        A cost-effective option where the secondary panel can be lifted out 
                        for ventilation or cleaning.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Simple operation
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Lower cost option
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Ideal for limited access
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/casement-windows" className="hover:text-primary">Hinged Casement</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Side or top-hung panels that swing open for easy access to your 
                        original windows.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Full window access
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Easy cleaning
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Quick ventilation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        <Link to="/residential/fixed-secondary-glazing" className="hover:text-primary">Fixed Panels</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Non-opening panels for windows that do not require ventilation, 
                        offering maximum <InlineLink href="/noise-reduction-secondary-glazing">acoustic performance</InlineLink>.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Best acoustic seal
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Most economical
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Slimmest frame profile
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 id="glazing-options" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Glass Options for Sash Secondary Glazing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The unit type sets how the secondary glazing operates; the glass specification
                  sets how it performs. Sash units are typically glazed with one of the following,
                  selected against the dominant problem — traffic and rail noise, heat loss, or
                  solar and UV gain.
                </p>
                <div className="overflow-x-auto mb-6 not-prose">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-muted/50 text-left">
                        <th className="border p-3 font-semibold">Glass specification</th>
                        <th className="border p-3 font-semibold">Typical use</th>
                        <th className="border p-3 font-semibold">Indicative performance</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border p-3 font-medium text-foreground">4mm float</td>
                        <td className="border p-3">Baseline draught and thermal upgrade on quiet elevations</td>
                        <td className="border p-3">Approx. 28-30dB Rw with a 100mm air gap</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">6.4mm laminated</td>
                        <td className="border p-3">General urban noise, plus safety and security benefit</td>
                        <td className="border p-3">Approx. 33-35dB Rw; Class 2B2 impact safety</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">6.8mm acoustic laminate</td>
                        <td className="border p-3">Busy residential streets and moderate traffic noise</td>
                        <td className="border p-3">Approx. 36-38dB Rw; acoustic PVB interlayer</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">8.8mm acoustic laminate</td>
                        <td className="border p-3">Main roads, bus routes and night-time noise in bedrooms</td>
                        <td className="border p-3">Approx. 39-41dB Rw; stronger low-frequency Ctr performance</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">10.8mm Stadip Silence acoustic laminate</td>
                        <td className="border p-3">Main-road, flight path and rail noise</td>
                        <td className="border p-3">Up to 54dB reduction with a 100mm air gap</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">6.4mm laminated low-E</td>
                        <td className="border p-3">Combined safety, moderate noise and heat-loss control</td>
                        <td className="border p-3">Approx. 33-35dB Rw with a soft-coat low-E surface</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">6.8mm acoustic laminate low-E</td>
                        <td className="border p-3">Cold, noisy elevations where both issues are significant</td>
                        <td className="border p-3">Approx. 36-38dB Rw plus reduced radiant heat loss</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">8.8mm acoustic laminate low-E</td>
                        <td className="border p-3">Heritage rooms on main roads needing maximum dual performance</td>
                        <td className="border p-3">Approx. 39-41dB Rw plus low-E thermal coating</td>
                      </tr>
                      <tr>
                        <td className="border p-3 font-medium text-foreground">Pilkington K low-emissivity</td>
                        <td className="border p-3">Heat loss, cold reveals and condensation risk</td>
                        <td className="border p-3">Up to 60% reduction in heat loss through the window</td>
                      </tr>

                      <tr>
                        <td className="border p-3 font-medium text-foreground">Solar control / UV filtering laminate</td>
                        <td className="border p-3">South-facing rooms, artwork and heritage interiors</td>
                        <td className="border p-3">Blocks the large majority of UV transmission</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Heavier acoustic laminates increase sash weight, so balance and interlock
                  hardware are specified to suit. Compare the two most-requested acoustic
                  build-ups in our{" "}
                  <InlineLink href="/blog/10-8mm-acoustic-laminate-vs-6-4mm-laminated-glass">
                    10.8mm vs 6.4mm performance comparison
                  </InlineLink>.
                </p>

                <h2 id="performance-benefits" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Performance Benefits
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">Thermal Insulation</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        The air gap between your sash window and secondary glazing creates 
                        highly effective insulation, reducing heat loss by up to 65% and 
                        eliminating cold spots near windows.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Wind className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Draught Elimination</h3>
                      <p className="text-sm text-muted-foreground">
                        Sash windows are notorious for draughts due to the gaps required for 
                        the sliding mechanism. Secondary glazing creates a complete seal, 
                        eliminating cold air infiltration.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="sash-window-challenge" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  The Sash Window Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Traditional sash windows present specific challenges for energy efficiency. 
                  The sliding mechanism requires gaps between the sashes and the frame, and 
                  over time these gaps can increase as the timber shrinks and the window 
                  settles. Additionally, original sash windows typically feature single 
                  glazing, providing minimal insulation - a common issue in <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and{" "} 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  While draught-proofing can help seal the gaps around the sashes, it cannot 
                  address the fundamental problem of single glazing. Secondary glazing 
                  provides a comprehensive solution, creating an insulating barrier that 
                  addresses both draughts and <InlineLink href="/thermal-insulation-secondary-glazing">thermal performance</InlineLink>.
                </p>

                <h2 id="planning-leasehold" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Planning Permission, Councils and Leasehold Buildings
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Because secondary glazing is fitted entirely inside your property, it sits in a
                  uniquely favourable position when it comes to approvals. In most cases you can
                  proceed without any formal consent at all - but the rules differ depending on
                  whether your home is listed, in a Conservation Area, or held on a lease.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Do I Need Planning Permission?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For the vast majority of houses and flats, <strong>no planning permission is
                  required</strong>. Secondary glazing makes no change to the external appearance of
                  the building, so it falls outside the scope of planning control - even where an
                  Article 4 Direction has removed permitted development rights for replacement
                  windows. This makes it the simplest upgrade route for period sash windows in
                  tightly controlled streets.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Listed Buildings and Conservation Areas</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If your property is <InlineLink href="/listed-buildings-secondary-glazing">listed</InlineLink>,
                  you will normally need <strong>Listed Building Consent (LBC)</strong> before any work
                  affecting its character - although many councils now treat slim, reversible
                  secondary glazing as a low-risk application that conservation officers routinely
                  support. In a <InlineLink href="/conservation-areas-secondary-glazing">Conservation Area</InlineLink>,
                  secondary glazing is usually permitted precisely because the council's concern is
                  the external street scene, which remains untouched. Where a sash window
                  replacement would almost certainly be refused, secondary glazing is the
                  solution officers recommend. Our <InlineLink href="/compliance-hub">Compliance Hub</InlineLink> includes
                  a borough-by-borough directory of London planning departments and a ready-to-send
                  pre-application email template you can use to confirm the position with your
                  local planning authority in writing before committing.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mb-4">Leasehold Flats and Mansion Blocks</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leaseholders in London's mansion blocks and converted terraces face an additional
                  layer of approval: the freeholder or managing agent. Most leases contain
                  alteration clauses requiring <strong>licence to alter</strong> consent for works
                  affecting windows - even internal ones. The good news is that secondary glazing
                  is far easier to get approved than window replacement because it:
                </p>
                <ul className="space-y-3 mb-8 not-prose">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Does not touch the external facade</strong> - the freeholder's primary concern in blocks with a uniform appearance covenant</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Is fully reversible</strong> - units can be removed without trace, satisfying reinstatement clauses</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Requires no structural work</strong> - no scaffold, no external access, minimal disruption to neighbours</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We regularly supply drawings, method statements and product specifications
                  directly to managing agents to support licence applications, and we can
                  coordinate installation around building management requirements such as working
                  hours and insurance certification. If your block is also listed or in a
                  Conservation Area, we handle the combined consent process as a single package.
                </p>

                <h2 id="installation-process" className="scroll-mt-28 text-3xl font-bold text-foreground mb-6">
                  Installation Process
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our installation process is designed to be quick and non-disruptive. Most 
                  sash windows can be fitted with secondary glazing in under an hour, and 
                  there is no mess or decoration damage. The frames are fixed to your 
                  existing timber surrounds using discreet fixings that can be removed 
                  in the future if required - essential for <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We always survey each window individually, taking precise measurements 
                  to ensure a perfect fit. Our vertical sliding units are manufactured to 
                  order and delivered ready for installation.
                </p>

                {/* Sister Service Promo */}
                <div className="bg-muted/50 p-6 rounded-lg my-8 not-prose">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Installation Services for Sash Windows
                  </h3>
                  <p className="text-muted-foreground">
                    Our{" "}
                    <a 
                      href="https://www.secondaryglazinginstallers.com/sash-window-secondary-glazing"
                      className="text-primary hover:text-primary/80 font-medium underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sash window installation specialists
                    </a>{" "}
                    provide detailed guides covering vertical sliding systems, horizontal sliders, 
                    and bespoke solutions for Georgian and Victorian properties. Get instant pricing with 
                    their{" "}
                    <a 
                      href="https://www.secondaryglazinginstallers.com/calculator"
                      className="text-primary hover:text-primary/80 font-medium underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cost calculator
                    </a>{" "}
                    or explore installation options by window configuration.
                  </p>
                </div>

                <QuickLinksGrid
                  title="Explore Our Glazing Types" 
                  links={residentialGlazingLinks} 
                  columns={3}
                />

                <QuickLinksGrid 
                  title="Areas We Cover" 
                  links={serviceAreaLinks} 
                  columns={4}
                />
              </div>

              {/* Hero CTA */}
              <div className="mt-12">
                <CTASection 
                  variant="hero"
                  title="Get Your Free Sash Window Survey"
                  description="Our experts will assess your sash windows and recommend the best secondary glazing solution for your property."
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <RelatedContentSidebar 
                  title="Related Services" 
                  links={relatedLinks} 
                />
                <CTASection variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ServiceFAQ items={PAGE_FAQS} />
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SashWindowSecondaryGlazing;

import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Home, Thermometer, Volume2, Shield, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Period Properties" },
  { label: "Victorian Windows Secondary Glazing" },
];

const relatedLinks = [
  { title: "Sash Window Glazing", href: "/sash-window-secondary-glazing", description: "Vertical sliding solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian property glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing", description: "Heritage area solutions" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
];

const VictorianWindowsSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Victorian Windows Secondary Glazing | Protect Original Sash Windows"
        description="Specialist secondary glazing for Victorian sash windows in London. Preserve original timber frames while improving insulation by 65%. Expert installation for period properties."
        canonicalPath="/victorian-windows-secondary-glazing"
        keywords={[
          "Victorian windows secondary glazing",
          "Victorian sash window insulation",
          "period window glazing",
          "Victorian terrace windows",
          "original sash window protection",
          "Victorian house glazing London"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full mb-6">
              <Home className="h-5 w-5" />
              <span className="font-medium">Victorian Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Victorian Windows Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Protect and preserve your original Victorian <InlineLink href="/sash-window-secondary-glazing">sash windows</InlineLink> while dramatically 
              improving <InlineLink href="/thermal-insulation-secondary-glazing">thermal performance</InlineLink> and reducing <InlineLink href="/noise-reduction-secondary-glazing">noise</InlineLink>. Our bespoke secondary glazing 
              complements period features, not conceals them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Victorian Survey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:02070601572">
                  <Phone className="mr-2 h-4 w-4" />
                  Speak to an Expert
                </a>
              </Button>
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
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Victorian Windows Need Special Care
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Victorian properties, built between 1837 and 1901, feature some of the most 
                  beautiful windows ever designed. The tall, elegant <InlineLink href="/sash-window-secondary-glazing">sash windows</InlineLink> with their 
                  slender glazing bars and handmade glass are architectural treasures that 
                  define the character of London's residential streets. Many are protected under 
                  <InlineLink href="/listed-buildings-secondary-glazing">listed building</InlineLink> or <InlineLink href="/conservation-areas-secondary-glazing">conservation area</InlineLink> regulations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  However, these single-glazed windows were designed in an era before central 
                  heating, when coal fires provided warmth. Today, they can account for up to 
                  40% of a home's heat loss, leading to high energy bills and uncomfortable 
                  living spaces. Secondary glazing provides the solution without sacrificing 
                  the beauty of original windows.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Common Victorian Window Styles We Work With
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Two-Over-Two Sash</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The classic mid-Victorian design with two panes in each sash, typically 
                        found in terraced houses from the 1860s-1880s.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <Link to="/residential/sash-windows" className="hover:text-primary">Vertical sliding secondary units</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Matched sightlines available
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Six-Over-Six Sash</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Earlier Victorian style retaining <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> influence, common in 
                        1840s-1860s properties.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Slim frame profiles
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Multiple glazing bar options
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Bay Windows</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        The iconic Victorian bay, from simple canted designs to elaborate 
                        curved bays in grander properties.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Angled sections expertly fitted
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Curved glass available
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-3">Arched Windows</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Decorative arched heads and fanlights common in hallways and 
                        above entrance doors.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <Link to="/residential/fixed-secondary-glazing" className="hover:text-primary">Bespoke curved frames</Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Heritage-sensitive design
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Benefits for Victorian Properties
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Thermometer className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/thermal-insulation-secondary-glazing" className="hover:text-primary">65% Less Heat Loss</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The air gap between windows creates effective thermal insulation, 
                      dramatically reducing heating costs.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Volume2 className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      <Link to="/noise-reduction-secondary-glazing" className="hover:text-primary">80% Noise Reduction</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Acoustic glass options are ideal for Victorian terraces on busy 
                      London roads.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Enhanced Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Add a second barrier with laminated glass for improved protection 
                      against intruders.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Preserving Original Features
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand that Victorian windows are often the most valuable original 
                  feature of a period home. Our secondary glazing is designed to be as 
                  unobtrusive as possible, with slim aluminium frames that can be powder-coated 
                  to match your existing woodwork or painted white for a classic look.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For properties with particularly fine original glazing, including crown glass 
                  or restoration glass, secondary glazing protects these irreplaceable windows 
                  from damage while eliminating draughts and condensation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The installation is fully reversible, meaning your original windows can be 
                  accessed for maintenance, cleaning, or future restoration work without any 
                  permanent alterations - essential for <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Victorian Areas We Cover
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  London has more Victorian housing than any other city in the world, and we 
                  have worked on properties across the capital. From the grand villas of 
                  <InlineLink href="/areas/north-london">Hampstead</InlineLink> to the classic terraces of Islington, Hackney, and 
                  <InlineLink href="/areas/south-london">Clapham</InlineLink>, our team has extensive experience with every type of Victorian window.
                </p>

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
                  title="Get Your Free Victorian Property Survey"
                  description="Our specialists will assess your Victorian windows and recommend the best secondary glazing solution."
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

      <ContactForm />
      <Footer />
    </div>
  );
};

export default VictorianWindowsSecondaryGlazing;

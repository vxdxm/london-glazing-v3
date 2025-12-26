import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { ArrowUpDown, Thermometer, Wind, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks } from "@/components/seo/InternalLinks";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Window Types", href: "/residential/sash-windows" },
  { label: "Sash Window Secondary Glazing" },
];

const relatedLinks = [
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Victorian sash solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian sash glazing" },
  { title: "Vertical Sliding", href: "/residential/sash-windows", description: "Residential sash options" },
  { title: "Lift Out Panels", href: "/residential/lift-out", description: "Removable panel systems" },
  { title: "Thermal Insulation", href: "/thermal-insulation-secondary-glazing", description: "Reduce heat loss" },
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
];

const SashWindowSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Sash Window Secondary Glazing | Vertical Sliding Solutions London"
        description="Expert secondary glazing for sash windows in London. Vertical sliding units match original window operation. Reduce heat loss by 65% and noise by 80%. Free survey available."
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

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">
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
                  both the secondary glazing and your original windows - ideal for 
                  <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Secondary Glazing Options for Sash Windows
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

                <h2 className="text-3xl font-bold text-foreground mb-6">
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

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Sash Window Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Traditional sash windows present specific challenges for energy efficiency. 
                  The sliding mechanism requires gaps between the sashes and the frame, and 
                  over time these gaps can increase as the timber shrinks and the window 
                  settles. Additionally, original sash windows typically feature single 
                  glazing, providing minimal insulation - a common issue in <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink> and 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink> properties.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  While draught-proofing can help seal the gaps around the sashes, it cannot 
                  address the fundamental problem of single glazing. Secondary glazing 
                  provides a comprehensive solution, creating an insulating barrier that 
                  addresses both draughts and <InlineLink href="/thermal-insulation-secondary-glazing">thermal performance</InlineLink>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
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

      <ContactForm />
      <Footer />
    </div>
  );
};

export default SashWindowSecondaryGlazing;

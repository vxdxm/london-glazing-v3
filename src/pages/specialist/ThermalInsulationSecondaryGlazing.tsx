import React from "react";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { Link } from "react-router-dom";
import { Thermometer, TrendingDown, Leaf, Flame, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedContentSidebar from "@/components/seo/RelatedContentSidebar";
import CTASection from "@/components/seo/CTASection";
import { InlineLink, QuickLinksGrid, residentialGlazingLinks, serviceAreaLinks, specialistServicesLinks } from "@/components/seo/InternalLinks";

const breadcrumbItems = [
  { label: "Services", href: "/residential" },
  { label: "Benefits" },
  { label: "Thermal Insulation Secondary Glazing" },
];

const relatedLinks = [
  { title: "Noise Reduction", href: "/noise-reduction-secondary-glazing", description: "Block external noise" },
  { title: "Victorian Windows", href: "/victorian-windows-secondary-glazing", description: "Victorian sash solutions" },
  { title: "Georgian Windows", href: "/georgian-windows-secondary-glazing", description: "Georgian property glazing" },
  { title: "Edwardian Properties", href: "/edwardian-property-secondary-glazing", description: "Edwardian home solutions" },
  { title: "Listed Buildings", href: "/listed-buildings-secondary-glazing", description: "Grade I, II*, II solutions" },
  { title: "Conservation Areas", href: "/conservation-areas-secondary-glazing", description: "Heritage area solutions" },
];

const ThermalInsulationSecondaryGlazing = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Thermal Insulation Secondary Glazing | Reduce Heat Loss by 75%"
        description="Cut heat loss through windows by up to 75% with our thermal secondary glazing. Lower energy bills, eliminate cold spots, and improve your home's EPC rating. London specialists."
        canonicalPath="/thermal-insulation-secondary-glazing"
        keywords={[
          "thermal insulation secondary glazing",
          "energy efficient secondary glazing",
          "reduce heat loss windows",
          "window insulation London",
          "low U-value glazing",
          "EPC improvement glazing"
        ]}
      />
      
      <MainNav />
      
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
              <Thermometer className="h-5 w-5" />
              <span className="font-medium">Energy Efficiency Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Thermal Insulation Secondary Glazing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reduce heat loss through your windows by up to 75% and significantly lower 
              your energy bills. Our thermal secondary glazing creates an insulating 
              barrier that transforms the comfort and efficiency of your home, ideal for 
              <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink>, <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink>, and <InlineLink href="/edwardian-property-secondary-glazing">Edwardian</InlineLink> properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/quote-request">Get Free Energy Survey</Link>
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

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-sm text-muted-foreground">Heat Loss Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">£400+</div>
              <p className="text-sm text-muted-foreground">Annual Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1.9</div>
              <p className="text-sm text-muted-foreground">U-Value Achievable</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+15</div>
              <p className="text-sm text-muted-foreground">EPC Points Potential</p>
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
                  How Secondary Glazing Improves Thermal Performance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Single-glazed windows are the biggest source of heat loss in most homes, 
                  with U-values typically around 5.0 W/m²K. By adding secondary glazing, 
                  you create an insulating air gap that dramatically reduces heat transfer. 
                  The trapped air between the two layers of glass acts as an effective 
                  thermal barrier, similar to the principle behind double glazing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Unlike double glazing, which replaces your existing windows, secondary 
                  glazing works with them. This means you can achieve excellent thermal 
                  performance while retaining original windows in <InlineLink href="/victorian-windows-secondary-glazing">Victorian</InlineLink>, 
                  <InlineLink href="/georgian-windows-secondary-glazing">Georgian</InlineLink>, and <InlineLink href="/edwardian-property-secondary-glazing">Edwardian</InlineLink> properties, 
                  <InlineLink href="/conservation-areas-secondary-glazing">conservation areas</InlineLink>, and <InlineLink href="/listed-buildings-secondary-glazing">listed buildings</InlineLink>.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Understanding U-Values
                </h2>
                
                <div className="not-prose mb-12">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Window U-Value Comparison</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                          <span className="font-medium text-red-800">Single Glazed Window</span>
                          <span className="font-bold text-red-600">5.0 W/m²K</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                          <span className="font-medium text-amber-800">Single + Standard Secondary</span>
                          <span className="font-bold text-amber-600">2.8 W/m²K</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="font-medium text-green-800">Single + Low-E Secondary</span>
                          <span className="font-bold text-green-600">1.9 W/m²K</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium text-blue-800">Modern Double Glazing</span>
                          <span className="font-bold text-blue-600">1.4 W/m²K</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Lower U-values mean better insulation. Secondary glazing with low-E glass 
                        achieves thermal performance approaching that of modern double glazing.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Glass Options for Maximum Efficiency
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Flame className="h-6 w-6 text-orange-600" />
                        <h3 className="text-lg font-semibold">Low-E Glass</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        A microscopically thin metallic coating reflects heat back into the room 
                        while allowing light to pass through.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Best thermal performance
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Visually identical to clear glass
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          U-value of 1.9 achievable
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Thermometer className="h-6 w-6 text-orange-600" />
                        <h3 className="text-lg font-semibold">Toughened Glass</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Heat-treated for strength, toughened glass is 4-5 times stronger than 
                        standard float glass.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Required for large panels
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Safety glazing compliant
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Can be combined with Low-E
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  The Importance of the Air Gap
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The air gap between your existing window and the secondary glazing is 
                  crucial for thermal performance. For optimal insulation, we recommend 
                  a minimum gap of 20mm, with 100mm or more providing the best results. 
                  Larger gaps also help prevent condensation forming between the two 
                  layers of glass.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The air gap works because still air is an excellent insulator. Heat 
                  must pass through both layers of glass and the trapped air between 
                  them, dramatically slowing the rate of heat transfer compared to a 
                  single pane. This is particularly effective for <InlineLink href="/sash-window-secondary-glazing">sash windows</InlineLink> which 
                  typically have deep reveals.
                </p>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Benefits Beyond Energy Savings
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Lower Energy Bills</h3>
                      <p className="text-sm text-muted-foreground">
                        Typical savings of £300-500 per year on heating costs for an 
                        average London home.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Reduced Carbon Footprint</h3>
                      <p className="text-sm text-muted-foreground">
                        Lower energy consumption means reduced CO2 emissions from 
                        your home.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Eliminate Cold Spots</h3>
                      <p className="text-sm text-muted-foreground">
                        No more cold areas near windows, improving comfort throughout 
                        your home.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Improved EPC Rating</h3>
                      <p className="text-sm text-muted-foreground">
                        Secondary glazing can improve your Energy Performance Certificate 
                        by 10-15 points.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Condensation Reduction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Condensation on windows occurs when warm, moist air meets a cold surface. 
                  By keeping the inner glass surface warmer, secondary glazing significantly 
                  reduces condensation, preventing damage to window frames and reducing the 
                  risk of mould growth.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  For properties with severe condensation issues, we can incorporate small 
                  ventilation holes in the secondary glazing to allow moisture to escape 
                  while maintaining thermal performance. Combined with <InlineLink href="/noise-reduction-secondary-glazing">acoustic glass</InlineLink>, 
                  you can achieve both thermal and noise reduction benefits.
                </p>

                <QuickLinksGrid 
                  title="Explore Our Glazing Types" 
                  links={residentialGlazingLinks} 
                  columns={3}
                />

                <QuickLinksGrid 
                  title="Period Property Solutions" 
                  links={specialistServicesLinks.slice(0, 6)} 
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
                  title="Get Your Free Energy Survey"
                  description="Our specialists will assess your windows and recommend the best thermal insulation solution to reduce your energy bills."
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

export default ThermalInsulationSecondaryGlazing;

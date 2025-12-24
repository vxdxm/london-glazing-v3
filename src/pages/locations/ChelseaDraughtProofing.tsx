import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import LocationBreadcrumb from '@/components/locations/LocationBreadcrumb';
import { ChelseaDraughtProofingSEO } from '@/components/locations/ChelseaDraughtProofingSEO';

export function ChelseaDraughtProofing() {
  return (
    <>
      <ChelseaDraughtProofingSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <div className="container mx-auto px-4 pt-24">
          <LocationBreadcrumb locationName="Chelsea" />
        </div>
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Draught Proofing Solutions for Period Windows in Chelsea
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Eliminate draughts and improve comfort in your Chelsea period property with our specialist secondary glazing solutions. Preserve the elegance of Georgian and Victorian windows while achieving modern thermal performance and eliminating cold air infiltration.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Draught Assessment
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Draught proofing secondary glazing in Chelsea period property"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Draught Problems */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Chelsea Period Window Draught Issues"
              subtitle="Understanding air infiltration challenges in historic properties"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Original Sash Windows</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Georgian box sash deterioration</li>
                  <li>• Victorian sliding sash gaps</li>
                  <li>• Warped timber frames</li>
                  <li>• Failed putty and glazing</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Air Infiltration Points</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Meeting rail gaps</li>
                  <li>• Sash to frame tolerances</li>
                  <li>• Corner joint separations</li>
                  <li>• Beading and parting slip gaps</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Comfort Impact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cold spots near windows</li>
                  <li>• Uneven room temperatures</li>
                  <li>• Increased heating demand</li>
                  <li>• Curtain movement from draughts</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Draught Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Comprehensive Draught Elimination"
                  subtitle="Advanced sealing systems that complement existing window structures"
                />
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Precision-Fitted Secondary Framework</h4>
                      <p className="text-muted-foreground">Custom-measured frames that work with your existing window architecture, not against it.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Advanced Weather Sealing</h4>
                      <p className="text-muted-foreground">High-performance seals creating an airtight barrier while maintaining window operability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Thermal Barrier Creation</h4>
                      <p className="text-muted-foreground">Insulated air gap between primary and secondary glazing preventing thermal bridging.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Reversible Installation</h4>
                      <p className="text-muted-foreground">Non-permanent fixing methods preserving original window features for future restoration.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Draught proofing sealing system detail"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Results */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Proven Draught Elimination Results"
              subtitle="Measurable improvements for Chelsea period properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Air infiltration reduction</p>
              </Card>
              <Card className="p-6 text-center border-2 border-secondary/20">
                <h3 className="text-3xl font-bold text-secondary mb-2">3-5°C</h3>
                <p className="text-muted-foreground">Temperature improvement</p>
              </Card>
              <Card className="p-6 text-center border-2 border-accent/20">
                <h3 className="text-3xl font-bold text-accent-foreground mb-2">40%</h3>
                <p className="text-muted-foreground">Heating cost reduction</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Curtain movement elimination</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Period Window Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Solutions for Chelsea Period Window Styles"
              subtitle="Specialized approaches for different historical window configurations"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Georgian Sash Windows</h3>
                <p className="text-muted-foreground mb-4">Elegant solutions for 18th and early 19th-century box sash windows with slim glazing bars.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sympathetic profile matching</li>
                  <li>• Minimal visual impact</li>
                  <li>• Heritage conservation compliance</li>
                  <li>• Traditional proportions respect</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Victorian Bay Windows</h3>
                <p className="text-muted-foreground mb-4">Comprehensive draught proofing for Victorian bay window configurations with multiple opening lights.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multi-angled bay treatments</li>
                  <li>• Corner joint sealing</li>
                  <li>• Complex geometry accommodation</li>
                  <li>• Enhanced thermal performance</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">French Doors & Casements</h3>
                <p className="text-muted-foreground mb-4">Specialized sealing for French doors and casement windows with multiple opening points.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-height door treatments</li>
                  <li>• Threshold draught elimination</li>
                  <li>• Opening mechanism preservation</li>
                  <li>• Security enhancement</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Heritage Considerations */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Heritage & Conservation Compliance"
              subtitle="Draught proofing solutions that respect Chelsea's architectural heritage"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Conservation Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Royal Borough Compliance</h4>
                      <p className="text-muted-foreground">Solutions designed to meet Kensington & Chelsea conservation area requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Listed Building Sensitivity</h4>
                      <p className="text-muted-foreground">Reversible installations suitable for Grade I and Grade II listed properties</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Historic Character Preservation</h4>
                      <p className="text-muted-foreground">Maintaining window proportions, glazing bar patterns, and architectural integrity</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Technical Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Precision Manufacturing</h4>
                      <p className="text-muted-foreground">Exact measurements ensuring perfect fit to existing window reveals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Period-Appropriate Materials</h4>
                      <p className="text-muted-foreground">Finishes and profiles complementing original window materials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Long-Term Durability</h4>
                      <p className="text-muted-foreground">High-quality components ensuring decades of draught-free performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Areas */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Draught Proofing Solutions Across London"
              subtitle="Specialist period window treatments for London's historic properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/georgian-belgravia" className="text-primary hover:underline">
                    Georgian Belgravia
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Georgian property noise and heat solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/listed-kensington" className="text-primary hover:underline">
                    Listed Kensington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Listed building conservation compliance</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                    Victorian Terraces Islington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Victorian terrace draught elimination</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/edwardian-hampstead" className="text-primary hover:underline">
                    Edwardian Hampstead
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Edwardian bay window solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/conservation-richmond" className="text-primary hover:underline">
                    Conservation Richmond
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Conservation area thermal improvements</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/hackney-energy-efficiency" className="text-primary hover:underline">
                    Hackney Energy Efficiency
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Single-glazed property improvements</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Eliminate Draughts in Your Chelsea Period Property
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the comfort of draught-free living while preserving your property's historic character. Get a professional draught assessment and discover how secondary glazing can transform your home's thermal performance without compromising its heritage appeal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Draught Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Heritage Consultation
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
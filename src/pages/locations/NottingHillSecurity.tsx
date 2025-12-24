import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import LocationBreadcrumb from '@/components/locations/LocationBreadcrumb';
import { NottingHillSecuritySEO } from '@/components/locations/NottingHillSecuritySEO';

export function NottingHillSecurity() {
  return (
    <>
      <NottingHillSecuritySEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <div className="container mx-auto px-4 pt-24">
          <LocationBreadcrumb locationName="Notting Hill" />
        </div>
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Enhancing Security for Ground Floor Flats in Notting Hill
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Protect your Notting Hill ground floor property with our advanced security secondary glazing systems. Combining elegant aesthetics with robust protection, our solutions provide an additional barrier against intruders while maintaining the area's premium character.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Security Assessment
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Security secondary glazing for Notting Hill ground floor flat"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Challenges */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Ground Floor Security Considerations"
              subtitle="Understanding the unique vulnerabilities of Notting Hill ground floor properties"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Street Access Vulnerability</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Direct street-level access</li>
                  <li>• Limited natural surveillance</li>
                  <li>• Garden and basement access points</li>
                  <li>• Tourist area foot traffic</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Window Vulnerability</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Large Victorian bay windows</li>
                  <li>• Original single glazing</li>
                  <li>• Outdated locking mechanisms</li>
                  <li>• Easy-to-break glass panels</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Area-Specific Risks</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-value property targeting</li>
                  <li>• Carnival and event periods</li>
                  <li>• Antique and art collections</li>
                  <li>• Premium location visibility</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Advanced Security Secondary Glazing"
                  subtitle="Multi-layered protection systems designed for Notting Hill properties"
                />
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Toughened Security Glass</h4>
                      <p className="text-muted-foreground">6mm toughened glass providing significantly increased break resistance compared to standard glazing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Multi-Point Locking Systems</h4>
                      <p className="text-muted-foreground">Advanced locking mechanisms with multiple secure points around the frame perimeter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Reinforced Frame Construction</h4>
                      <p className="text-muted-foreground">Heavy-duty aluminum frames designed to withstand forced entry attempts.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tamper-Resistant Hardware</h4>
                      <p className="text-muted-foreground">Security hinges and handles designed to prevent manipulation and forced access.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Security features of secondary glazing"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Comprehensive Security Benefits"
              subtitle="How secondary glazing enhances ground floor flat protection"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">Double Barrier</h3>
                <p className="text-muted-foreground">Two layers of protection requiring separate breach attempts</p>
              </Card>
              <Card className="p-6 text-center border-2 border-secondary/20">
                <h3 className="text-2xl font-bold text-secondary mb-2">Noise Alert</h3>
                <p className="text-muted-foreground">Breaking toughened glass creates significant noise deterrent</p>
              </Card>
              <Card className="p-6 text-center border-2 border-accent/20">
                <h3 className="text-2xl font-bold text-accent-foreground mb-2">Time Delay</h3>
                <p className="text-muted-foreground">Additional time required increases detection probability</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">Visual Deterrent</h3>
                <p className="text-muted-foreground">Visible security features discourage opportunistic attempts</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Aesthetic Integration */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Elegant Security Integration"
              subtitle="Maintaining Notting Hill's prestigious aesthetic while enhancing protection"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Period Property Harmony</h3>
                <p className="text-muted-foreground mb-4">Custom finishes and profiles that complement Victorian and Georgian architecture.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Heritage-appropriate colors</li>
                  <li>• Slim sightlines preservation</li>
                  <li>• Original feature enhancement</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Discreet Protection</h3>
                <p className="text-muted-foreground mb-4">Security features integrated seamlessly without compromising visual appeal.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hidden locking mechanisms</li>
                  <li>• Flush-mounted hardware</li>
                  <li>• Clear toughened glass</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Premium Finishes</h3>
                <p className="text-muted-foreground mb-4">High-quality materials and finishes befitting Notting Hill's exclusive character.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Powder-coated frames</li>
                  <li>• Corrosion resistance</li>
                  <li>• Long-term durability</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance & Compliance */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Insurance & Compliance Benefits"
              subtitle="Meeting security standards for premium property insurance"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Insurance Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Premium Reduction Potential</h4>
                      <p className="text-muted-foreground">Enhanced security may qualify for reduced insurance premiums</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Security Standard Compliance</h4>
                      <p className="text-muted-foreground">Meets many insurer security requirements for ground floor properties</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Claims Support</h4>
                      <p className="text-muted-foreground">Documented security measures support insurance claims</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Planning Compliance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Conservation Area Approval</h4>
                      <p className="text-muted-foreground">Designs sympathetic to Notting Hill conservation requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Listed Building Compatibility</h4>
                      <p className="text-muted-foreground">Reversible installations for heritage properties</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Building Regulation Compliance</h4>
                      <p className="text-muted-foreground">All installations meet current building standards</p>
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
              title="Security Solutions Across London"
              subtitle="Specialist security secondary glazing for London properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/listed-kensington" className="text-primary hover:underline">
                    Listed Kensington Properties
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Heritage-compliant security solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/georgian-belgravia" className="text-primary hover:underline">
                    Georgian Belgravia
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Period property protection and enhancement</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/conservation-richmond" className="text-primary hover:underline">
                    Conservation Richmond
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Conservation area security compliance</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/shoreditch-urban-noise" className="text-primary hover:underline">
                    Shoreditch Urban Living
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Urban noise and security solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                    Victorian Terraces Islington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Period terrace security enhancement</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/edwardian-hampstead" className="text-primary hover:underline">
                    Edwardian Hampstead
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Heritage security and thermal efficiency</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Secure Your Notting Hill Property Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience peace of mind with our advanced security secondary glazing systems. Get a comprehensive security assessment and discover how we can enhance your ground floor flat's protection while maintaining its elegant character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                View Security Features
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
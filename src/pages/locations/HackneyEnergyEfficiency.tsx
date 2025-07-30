import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { HackneyEnergyEfficiencySEO } from '@/components/locations/HackneyEnergyEfficiencySEO';

export function HackneyEnergyEfficiency() {
  return (
    <>
      <HackneyEnergyEfficiencySEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Improving Energy Efficiency in Single-Glazed Properties in Hackney
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your Hackney property's energy performance with our specialist secondary glazing solutions. Dramatically reduce heating costs, eliminate draughts, and improve comfort in single-glazed Victorian and Edwardian homes across East London.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Energy Assessment
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Energy efficient secondary glazing in Hackney property"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Energy Loss Problems */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Hackney's Energy Efficiency Challenges"
              subtitle="Understanding heat loss in East London's diverse housing stock"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Single Glazed Heritage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Victorian terraced houses</li>
                  <li>• Original sash windows</li>
                  <li>• Poor thermal performance</li>
                  <li>• High U-values (5.0+ W/m²K)</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Draught Issues</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Worn window frames</li>
                  <li>• Poor weather sealing</li>
                  <li>• Cold air infiltration</li>
                  <li>• Uneven room temperatures</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Rising Energy Costs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High heating bills</li>
                  <li>• Wasted energy consumption</li>
                  <li>• Carbon footprint concerns</li>
                  <li>• Property value impact</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Energy Solutions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading 
                  title="Advanced Energy Efficiency Solutions"
                  subtitle="Transforming thermal performance in Hackney properties"
                />
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Low-E Glass Technology</h4>
                      <p className="text-muted-foreground">High-performance Low-E coated glass reflecting heat back into rooms while maintaining natural light.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Argon-Filled Cavities</h4>
                      <p className="text-muted-foreground">Inert gas-filled air gaps providing superior insulation compared to standard air cavities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Thermally Broken Frames</h4>
                      <p className="text-muted-foreground">Aluminum frames with thermal breaks preventing heat conduction through the frame structure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Precision Sealing Systems</h4>
                      <p className="text-muted-foreground">Advanced weather seals eliminating draughts and air leakage around the entire perimeter.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Energy efficient secondary glazing technology"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Proven Energy Savings"
              subtitle="Measurable improvements for Hackney properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">60-70%</h3>
                <p className="text-muted-foreground">Heat loss reduction</p>
              </Card>
              <Card className="p-6 text-center border-2 border-secondary/20">
                <h3 className="text-3xl font-bold text-secondary mb-2">£400-600</h3>
                <p className="text-muted-foreground">Annual heating savings</p>
              </Card>
              <Card className="p-6 text-center border-2 border-accent/20">
                <h3 className="text-3xl font-bold text-accent-foreground mb-2">1.8 W/m²K</h3>
                <p className="text-muted-foreground">Improved U-value</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">2-3°C</h3>
                <p className="text-muted-foreground">Room temperature increase</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Solutions for Hackney Property Types"
              subtitle="Tailored energy efficiency approaches for East London's diverse architecture"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Victorian Terraces</h3>
                <p className="text-muted-foreground mb-4">Traditional terraced houses with original sash windows requiring sympathetic energy upgrades.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sash window compatibility</li>
                  <li>• Period feature preservation</li>
                  <li>• Draught elimination</li>
                  <li>• Thermal bridge reduction</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Edwardian Houses</h3>
                <p className="text-muted-foreground mb-4">Larger Edwardian properties with bay windows and higher heat loss rates requiring comprehensive solutions.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bay window treatments</li>
                  <li>• Large glass area optimization</li>
                  <li>• Multi-room coordination</li>
                  <li>• Heritage compliance</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Modern Conversions</h3>
                <p className="text-muted-foreground mb-4">Converted commercial and industrial buildings with unique window configurations and energy challenges.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Large window solutions</li>
                  <li>• Industrial aesthetic respect</li>
                  <li>• High-performance requirements</li>
                  <li>• Cost-effective upgrades</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Environmental & Financial Benefits"
              subtitle="Creating sustainable, cost-effective homes in Hackney"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Environmental Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Carbon Footprint Reduction</h4>
                      <p className="text-muted-foreground">Significant reduction in household CO2 emissions through reduced heating demand</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Sustainable Retrofit</h4>
                      <p className="text-muted-foreground">Non-invasive upgrade preserving original windows rather than replacement</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Waste Reduction</h4>
                      <p className="text-muted-foreground">Avoiding window replacement reduces construction waste and embodied carbon</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Financial Returns</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Energy Bill Savings</h4>
                      <p className="text-muted-foreground">Immediate reduction in heating costs with 3-5 year payback period</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Property Value Enhancement</h4>
                      <p className="text-muted-foreground">Improved EPC rating and thermal comfort increase property value</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold">Long-term Investment</h4>
                      <p className="text-muted-foreground">Durable solution providing decades of energy savings</p>
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
              title="Energy Efficiency Solutions Across London"
              subtitle="Specialist secondary glazing for improved thermal performance"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                    Victorian Terraces Islington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Period property energy efficiency solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/edwardian-hampstead" className="text-primary hover:underline">
                    Edwardian Hampstead
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Heritage property thermal improvements</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/conservation-richmond" className="text-primary hover:underline">
                    Conservation Richmond
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Conservation area energy solutions</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/georgian-belgravia" className="text-primary hover:underline">
                    Georgian Belgravia
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Georgian property heat retention</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/listed-kensington" className="text-primary hover:underline">
                    Listed Kensington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Listed building energy compliance</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/notting-hill-security" className="text-primary hover:underline">
                    Notting Hill Security
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Security and thermal enhancement</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform Your Hackney Property's Energy Efficiency
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start saving on energy bills immediately with our proven secondary glazing solutions. Get a comprehensive energy assessment and discover how much you could save on heating costs while improving comfort and reducing your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Energy Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Calculate Savings
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
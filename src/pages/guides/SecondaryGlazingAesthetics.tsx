import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { SecondaryGlazingAestheticsSEO } from '@/components/educational/SecondaryGlazingAestheticsSEO';

export default function SecondaryGlazingAesthetics() {
  return (
    <>
      <SecondaryGlazingAestheticsSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  The Aesthetics of Secondary Glazing: Modern Designs for Discreet Integration
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover how modern secondary glazing achieves stunning visual integration with your existing windows. See real examples of slim profiles, custom finishes, and innovative designs that enhance rather than compromise your property's appearance.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  View Design Gallery
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Modern secondary glazing with discreet aesthetic integration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Myths vs Reality */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Aesthetic Myths vs Modern Reality"
              subtitle="Debunking outdated perceptions about secondary glazing appearance"
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 border-2 border-red-200 bg-red-50">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Old Perceptions (Outdated)</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>"Chunky plastic frames that dominate the window"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>"Cloudy acrylic sheets that look cheap"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>"One-size-fits-all white frames"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>"Visible from outside, affecting curb appeal"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">×</span>
                    <span>"Incompatible with period property character"</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-green-200 bg-green-50">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">Modern Reality</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>"Ultra-slim profiles as narrow as 20mm"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>"Crystal-clear toughened glass indistinguishable from primary glazing"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>"Custom color matching and premium finishes"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>"Virtually invisible from outside when properly designed"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    <span>"Enhances period properties by improving proportions"</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Slim Profile Technology */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Ultra-Slim Profile Technology"
              subtitle="How modern engineering achieves minimal visual impact"
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Sightline Minimization</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Traditional Systems (1990s-2000s)</h4>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Frame depth:</span>
                      <span className="font-semibold text-red-600">40-60mm</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Visible sightlines:</span>
                      <span className="font-semibold text-red-600">25-35mm</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Dominated window opening, clearly visible from inside and outside</p>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <h4 className="font-semibold mb-2 text-green-800">Modern Slim Systems (2020s)</h4>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Frame depth:</span>
                      <span className="font-semibold text-green-600">15-25mm</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Visible sightlines:</span>
                      <span className="font-semibold text-green-600">8-15mm</span>
                    </div>
                    <p className="text-xs text-green-700">Minimal visual impact, maintains window proportions and character</p>
                  </Card>
                  <div className="p-4 bg-blue-50 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">Engineering Advances</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Precision-extruded aluminum profiles</li>
                      <li>• Structural glazing techniques</li>
                      <li>• Hidden fixing systems</li>
                      <li>• Integrated sealing within frame</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Slim profile secondary glazing showing minimal visual impact"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded">
                  <p className="text-sm">Ultra-slim 12mm sightlines preserve original window character</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color and Finish Options */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Custom Colors and Premium Finishes"
              subtitle="Matching and enhancing your existing window aesthetics"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">RAL Color Matching</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="RAL color matched secondary glazing frames"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Perfect color matching</strong> to existing frames</li>
                    <li>• <strong>240+ standard colors</strong> available</li>
                    <li>• <strong>Custom colors</strong> from samples</li>
                    <li>• <strong>Heritage colors</strong> for period properties</li>
                  </ul>
                  <div className="p-3 bg-primary/10 rounded">
                    <p className="text-xs text-primary">Most popular: White, Cream, Black, Bronze</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Premium Finishes</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Premium finish options for secondary glazing"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Powder coating</strong> for durability</li>
                    <li>• <strong>Anodized finishes</strong> for longevity</li>
                    <li>• <strong>Woodgrain effects</strong> for timber matching</li>
                    <li>• <strong>Textured finishes</strong> for character</li>
                  </ul>
                  <div className="p-3 bg-secondary/10 rounded">
                    <p className="text-xs text-secondary">20+ year color guarantee available</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Glass Options</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Glass options for secondary glazing aesthetics"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Crystal clear</strong> for maximum transparency</li>
                    <li>• <strong>Low-iron glass</strong> for true color rendering</li>
                    <li>• <strong>Privacy options</strong> for bathrooms</li>
                    <li>• <strong>Decorative patterns</strong> for character properties</li>
                  </ul>
                  <div className="p-3 bg-accent/10 rounded">
                    <p className="text-xs text-accent-foreground">Optional: Anti-reflective coatings</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Heritage Property Integration */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Heritage Property Integration"
              subtitle="Enhancing rather than compromising period character"
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Sympathetic Design Principles</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2">Proportion Respect</h4>
                    <p className="text-sm text-muted-foreground">Secondary glazing frames follow existing glazing bar patterns and window proportions, maintaining the architectural rhythm that defines period properties.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-secondary">
                    <h4 className="font-semibold text-secondary mb-2">Material Harmony</h4>
                    <p className="text-sm text-muted-foreground">Carefully selected finishes complement original materials - bronze for Victorian cast iron, cream for Georgian painted timber, natural aluminum for Art Deco steel.</p>
                  </Card>
                  <Card className="p-4 border-l-4 border-accent">
                    <h4 className="font-semibold text-accent-foreground mb-2">Reversible Philosophy</h4>
                    <p className="text-sm text-muted-foreground">All installations designed to be completely removable without trace, preserving the original window for future generations while providing contemporary comfort.</p>
                  </Card>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Conservation Officer Approval</h4>
                  <p className="text-sm text-amber-700">Our designs regularly receive approval from conservation officers and heritage consultants, demonstrating their sensitivity to historical architecture.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Georgian property with sympathetic secondary glazing"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white p-2 rounded text-xs">
                    Georgian terrace: Secondary glazing preserves slim glazing bars and proportions
                  </div>
                </div>
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Victorian bay window with discreet secondary glazing"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white p-2 rounded text-xs">
                    Victorian bay: Complex geometry handled with precision-manufactured frames
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods for Aesthetics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Installation Methods for Optimal Aesthetics"
              subtitle="How installation technique affects final appearance"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Recessed Installation</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Recessed secondary glazing installation"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Set back into reveal:</strong> Creates shadow line effect</li>
                    <li>• <strong>Minimal protrusion:</strong> Preserves window opening depth</li>
                    <li>• <strong>Enhanced privacy:</strong> Harder to see from outside</li>
                    <li>• <strong>Traditional appearance:</strong> Mimics shutters or blinds</li>
                  </ul>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-xs text-green-700"><strong>Best for:</strong> Deep window reveals, heritage properties</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Face-Fixed Installation</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Face-fixed secondary glazing installation"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Mounted on frame face:</strong> Maximum glass area</li>
                    <li>• <strong>Suitable for any reveal depth:</strong> Very versatile</li>
                    <li>• <strong>Clean lines:</strong> Modern, minimalist appearance</li>
                    <li>• <strong>Easy maintenance access:</strong> Simple to clean and service</li>
                  </ul>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-xs text-blue-700"><strong>Best for:</strong> Modern properties, shallow reveals</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Hybrid Installation</h3>
                <div className="space-y-4">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Hybrid secondary glazing installation method"
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Partially recessed:</strong> Combines benefits of both</li>
                    <li>• <strong>Custom depth:</strong> Optimized for each window</li>
                    <li>• <strong>Enhanced performance:</strong> Better sealing possible</li>
                    <li>• <strong>Invisible from outside:</strong> Set within shadow line</li>
                  </ul>
                  <div className="p-3 bg-purple-50 rounded">
                    <p className="text-xs text-purple-700"><strong>Best for:</strong> Premium installations, complex windows</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Before and After Gallery */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Before and After Transformations"
              subtitle="Real examples showing aesthetic impact of modern secondary glazing"
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="overflow-hidden">
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Victorian sash window before secondary glazing"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Victorian Sash Window</h4>
                  <p className="text-sm text-muted-foreground">Original single glazed sash with worn paintwork and visible condensation issues</p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Victorian sash window after secondary glazing"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">With Secondary Glazing</h4>
                  <p className="text-sm text-muted-foreground">Slim-profile secondary glazing virtually invisible, preserving character while adding performance</p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Georgian windows before secondary glazing"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Georgian Glazing Bars</h4>
                  <p className="text-sm text-muted-foreground">Listed building with original slim glazing bars requiring sympathetic treatment</p>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative">
                  <OptimizedImage
                    src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                    alt="Georgian windows after secondary glazing"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Conservation Approved</h4>
                  <p className="text-sm text-muted-foreground">Custom-manufactured frames follow glazing bar pattern exactly, gaining conservation approval</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Consultation Process */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Our Aesthetic Design Process"
              subtitle="How we ensure perfect visual integration for every installation"
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-xl font-semibold">Property Assessment</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Architectural style analysis</li>
                    <li>• Existing window condition survey</li>
                    <li>• Heritage constraints evaluation</li>
                    <li>• Sight line measurements</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-secondary">2</span>
                    </div>
                    <h3 className="text-xl font-semibold">Design Development</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Custom profile selection</li>
                    <li>• Color and finish specification</li>
                    <li>• Installation method optimization</li>
                    <li>• 3D visualization creation</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-accent-foreground">3</span>
                    </div>
                    <h3 className="text-xl font-semibold">Quality Assurance</h3>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Pre-installation mockups</li>
                    <li>• Precision manufacturing</li>
                    <li>• Expert installation</li>
                    <li>• Final aesthetic inspection</li>
                  </ul>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6">Aesthetic Guarantee</h3>
                <Card className="p-6 bg-green-50 border-2 border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4">Our Commitment to Beautiful Results</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>• <strong>Visual integration guarantee:</strong> If you're not satisfied with the aesthetic result, we'll redesign at no charge</li>
                    <li>• <strong>Conservation approval support:</strong> We work with heritage consultants to ensure approvals</li>
                    <li>• <strong>Color matching service:</strong> Perfect matches to existing frames guaranteed</li>
                    <li>• <strong>Reversibility assurance:</strong> Complete removal without trace possible</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4">Why Aesthetics Matter</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• <strong>Property value:</strong> Poor aesthetics can reduce property value</li>
                    <li>• <strong>Daily satisfaction:</strong> You'll see your windows every day</li>
                    <li>• <strong>Curb appeal:</strong> External appearance affects neighborhood perception</li>
                    <li>• <strong>Heritage duty:</strong> Responsibility to preserve architectural character</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              See How Beautiful Secondary Glazing Can Be
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience our design process firsthand with a free aesthetic consultation. We'll show you exactly how secondary glazing will look on your property with 3D visualizations and material samples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Book Design Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                View More Examples
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
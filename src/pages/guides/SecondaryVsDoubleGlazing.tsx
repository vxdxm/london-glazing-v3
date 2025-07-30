import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { SecondaryVsDoubleGlazingSEO } from '@/components/educational/SecondaryVsDoubleGlazingSEO';

export default function SecondaryVsDoubleGlazing() {
  return (
    <>
      <SecondaryVsDoubleGlazingSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Secondary Glazing vs. Double Glazing: Which is Right for Your London Home?
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Making the right choice between secondary glazing and double glazing can save you thousands while achieving your comfort goals. Our comprehensive guide helps London homeowners understand the differences, costs, and suitability for different property types.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Expert Recommendation
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Secondary glazing vs double glazing comparison"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="At-a-Glance Comparison"
              subtitle="Key differences between secondary glazing and double glazing"
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border p-4 text-left font-semibold">Factor</th>
                    <th className="border border-border p-4 text-center font-semibold text-primary">Secondary Glazing</th>
                    <th className="border border-border p-4 text-center font-semibold text-secondary">Double Glazing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Cost</td>
                    <td className="border border-border p-4 text-center text-primary">£200-600 per window</td>
                    <td className="border border-border p-4 text-center text-secondary">£400-1,200 per window</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Installation Time</td>
                    <td className="border border-border p-4 text-center text-primary">1-2 hours per window</td>
                    <td className="border border-border p-4 text-center text-secondary">1-2 days per window</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Heritage Properties</td>
                    <td className="border border-border p-4 text-center text-primary">✓ Perfect solution</td>
                    <td className="border border-border p-4 text-center text-secondary">✗ Often prohibited</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Noise Reduction</td>
                    <td className="border border-border p-4 text-center text-primary">40-50dB typical</td>
                    <td className="border border-border p-4 text-center text-secondary">35-40dB typical</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Thermal Improvement</td>
                    <td className="border border-border p-4 text-center text-primary">60-70% heat loss reduction</td>
                    <td className="border border-border p-4 text-center text-secondary">75-80% heat loss reduction</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Planning Permission</td>
                    <td className="border border-border p-4 text-center text-primary">Usually not required</td>
                    <td className="border border-border p-4 text-center text-secondary">Often required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to Choose Secondary Glazing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="When Secondary Glazing is the Right Choice"
              subtitle="Situations where secondary glazing outperforms double glazing"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Listed Buildings & Conservation Areas</h3>
                <p className="text-muted-foreground mb-4">When planning restrictions prevent window replacement, secondary glazing offers a reversible solution that preserves original features.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• No planning permission typically required</li>
                  <li>• Reversible installation</li>
                  <li>• Preserves original window character</li>
                  <li>• Conservation officer approved</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Maximum Noise Reduction</h3>
                <p className="text-muted-foreground mb-4">For properties facing severe noise issues, secondary glazing's larger air gap provides superior acoustic performance.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 40-50dB noise reduction achievable</li>
                  <li>• Larger air gaps (100-200mm possible)</li>
                  <li>• Different glass frequencies</li>
                  <li>• Ideal for busy roads, railways, airports</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Budget-Conscious Upgrades</h3>
                <p className="text-muted-foreground mb-4">When cost is a primary consideration, secondary glazing delivers excellent value for thermal and acoustic improvements.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 50-70% less expensive than double glazing</li>
                  <li>• Faster return on investment</li>
                  <li>• Minimal disruption during installation</li>
                  <li>• Immediate thermal benefits</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* When to Choose Double Glazing */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="When Double Glazing is the Right Choice"
              subtitle="Scenarios where double glazing offers superior benefits"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">New Build or Major Renovation</h3>
                <p className="text-muted-foreground mb-4">When windows need complete replacement, double glazing provides the best long-term thermal performance.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maximum thermal efficiency</li>
                  <li>• Single glazing solution</li>
                  <li>• Modern security features</li>
                  <li>• Warranty protection</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Modern Properties</h3>
                <p className="text-muted-foreground mb-4">For contemporary homes without heritage restrictions, double glazing integrates seamlessly with modern architecture.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Clean, modern appearance</li>
                  <li>• No interior frames visible</li>
                  <li>• Consistent with property style</li>
                  <li>• Higher property value increase</li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Maximum Energy Efficiency</h3>
                <p className="text-muted-foreground mb-4">When achieving the lowest possible U-values is the priority, quality double glazing marginally outperforms secondary glazing.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lower U-values possible (1.0-1.4)</li>
                  <li>• Argon-filled units standard</li>
                  <li>• Advanced Low-E coatings</li>
                  <li>• Better EPC ratings</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Cost Analysis */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Detailed Cost Analysis"
              subtitle="Understanding the true costs and payback periods"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">Secondary Glazing Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Basic Fixed Panels</span>
                    <span className="text-primary font-semibold">£200-350 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Horizontal Sliding</span>
                    <span className="text-primary font-semibold">£300-450 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Lift-Out Panels</span>
                    <span className="text-primary font-semibold">£250-400 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                    <span className="font-medium">Acoustic Specification</span>
                    <span className="text-primary font-semibold">£400-600 per window</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Payback Period</h4>
                  <p className="text-green-700">Typically 3-5 years through energy savings</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-secondary">Double Glazing Costs</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg">
                    <span className="font-medium">uPVC Double Glazed</span>
                    <span className="text-secondary font-semibold">£400-700 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg">
                    <span className="font-medium">Timber Double Glazed</span>
                    <span className="text-secondary font-semibold">£600-1,000 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg">
                    <span className="font-medium">Aluminium Double Glazed</span>
                    <span className="text-secondary font-semibold">£500-900 per window</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg">
                    <span className="font-medium">Triple Glazed Units</span>
                    <span className="text-secondary font-semibold">£700-1,200 per window</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Payback Period</h4>
                  <p className="text-blue-700">Typically 7-12 years through energy savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* London Property Specific Guidance */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="London Property Specific Guidance"
              subtitle="Recommendations based on common London property types"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-3 text-primary">Victorian Terraces</h4>
                <p className="text-sm text-muted-foreground mb-3">Original sash windows in conservation areas</p>
                <div className="text-xs space-y-1">
                  <div className="font-medium text-green-600">✓ Secondary Glazing</div>
                  <div className="text-muted-foreground">• Preserves original features</div>
                  <div className="text-muted-foreground">• No planning issues</div>
                  <div className="text-muted-foreground">• Excellent noise reduction</div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-3 text-secondary">Georgian Houses</h4>
                <p className="text-sm text-muted-foreground mb-3">Listed buildings with original glazing bars</p>
                <div className="text-xs space-y-1">
                  <div className="font-medium text-green-600">✓ Secondary Glazing</div>
                  <div className="text-muted-foreground">• Listed building compatible</div>
                  <div className="text-muted-foreground">• Maintains proportions</div>
                  <div className="text-muted-foreground">• Reversible installation</div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-3 text-accent-foreground">1960s-80s Properties</h4>
                <p className="text-sm text-muted-foreground mb-3">Single glazed windows needing replacement</p>
                <div className="text-xs space-y-1">
                  <div className="font-medium text-blue-600">✓ Double Glazing</div>
                  <div className="text-muted-foreground">• Complete window renewal</div>
                  <div className="text-muted-foreground">• Modern security features</div>
                  <div className="text-muted-foreground">• Maximum efficiency</div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-3 text-primary">New Build</h4>
                <p className="text-sm text-muted-foreground mb-3">Modern properties with builder-grade windows</p>
                <div className="text-xs space-y-1">
                  <div className="font-medium text-blue-600">✓ Either Option</div>
                  <div className="text-muted-foreground">• Budget: Secondary glazing</div>
                  <div className="text-muted-foreground">• Performance: Double glazing</div>
                  <div className="text-muted-foreground">• Noise priority: Secondary</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Decision Making Tool */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Quick Decision Tool"
              subtitle="Answer these questions to find your ideal solution"
            />
            <div className="mt-12 space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Is your property listed or in a conservation area?</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600">→ <strong>YES:</strong> Secondary glazing is likely your only viable option</div>
                  <div className="text-blue-600">→ <strong>NO:</strong> Both options available - proceed to next question</div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">What's your primary concern?</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-green-600">→ <strong>Maximum noise reduction:</strong> Secondary glazing</div>
                  <div className="text-blue-600">→ <strong>Maximum thermal efficiency:</strong> Double glazing</div>
                  <div className="text-purple-600">→ <strong>Budget considerations:</strong> Secondary glazing</div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Do your existing windows need replacement?</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-blue-600">→ <strong>YES:</strong> Double glazing offers complete renewal</div>
                  <div className="text-green-600">→ <strong>NO:</strong> Secondary glazing preserves existing windows</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get Expert Advice for Your London Property
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Still unsure which solution is right for your property? Our specialists provide free consultations to help you make the perfect choice for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Compare Quotes
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
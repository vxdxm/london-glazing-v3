import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { DIYvsProfessionalSEO } from '@/components/educational/DIYvsProfessionalSEO';

export default function DIYvsProfessional() {
  return (
    <>
      <DIYvsProfessionalSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  DIY Secondary Glazing vs. Professional Installation: A London Homeowner's Guide
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover the real differences between DIY and professional secondary glazing installation. Our unbiased comparison covers costs, quality, complexity, and long-term value to help London homeowners make informed decisions.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Professional Quote
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="DIY vs professional secondary glazing installation comparison"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Executive Summary"
              subtitle="Key findings for London homeowners"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-green-200 bg-green-50">
                <h3 className="text-xl font-semibold mb-4 text-green-800">DIY Suitable For</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Simple fixed panels</li>
                  <li>• Small, regular windows</li>
                  <li>• Budget under £200 per window</li>
                  <li>• Confident DIY experience</li>
                  <li>• Non-critical applications</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-blue-200 bg-blue-50">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Professional Recommended For</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Bay windows & complex shapes</li>
                  <li>• Acoustic specifications</li>
                  <li>• Listed buildings</li>
                  <li>• Opening systems required</li>
                  <li>• Quality guarantees needed</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-amber-200 bg-amber-50">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Hybrid Approach</h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• Professional measurement</li>
                  <li>• Supply-only services</li>
                  <li>• DIY installation guidance</li>
                  <li>• Best of both worlds</li>
                  <li>• Cost-effective solution</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Cost Comparison */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Detailed Cost Comparison"
              subtitle="Real costs based on typical London property scenarios"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">DIY Secondary Glazing</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Basic Acrylic Kit (per window)</h4>
                    <div className="flex justify-between">
                      <span>Materials</span>
                      <span className="font-semibold">£50-80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tools (if needed)</span>
                      <span className="font-semibold">£30-50</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Total per window</span>
                      <span className="font-bold text-green-600">£80-130</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Glass Panel Kit (per window)</h4>
                    <div className="flex justify-between">
                      <span>Materials</span>
                      <span className="font-semibold">£120-200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery</span>
                      <span className="font-semibold">£20-40</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Total per window</span>
                      <span className="font-bold text-green-600">£140-240</span>
                    </div>
                  </Card>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Hidden Costs to Consider</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Time investment (4-8 hours per window)</li>
                      <li>• Potential mistakes requiring replacement</li>
                      <li>• No warranty or guarantee</li>
                      <li>• Limited performance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">Professional Installation</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Standard Installation (per window)</h4>
                    <div className="flex justify-between">
                      <span>Materials & Hardware</span>
                      <span className="font-semibold">£150-250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Professional Installation</span>
                      <span className="font-semibold">£100-200</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Total per window</span>
                      <span className="font-bold text-blue-600">£250-450</span>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Acoustic Specification (per window)</h4>
                    <div className="flex justify-between">
                      <span>Acoustic Glass & Frame</span>
                      <span className="font-semibold">£300-400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialist Installation</span>
                      <span className="font-semibold">£150-250</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Total per window</span>
                      <span className="font-bold text-blue-600">£450-650</span>
                    </div>
                  </Card>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Value-Added Benefits</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 10+ year guarantees</li>
                      <li>• Optimized performance</li>
                      <li>• Professional survey included</li>
                      <li>• Building regulations compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Performance Comparison */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Quality & Performance Analysis"
              subtitle="How DIY and professional installations compare in real-world performance"
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border p-4 text-left font-semibold">Performance Factor</th>
                    <th className="border border-border p-4 text-center font-semibold text-green-600">DIY Installation</th>
                    <th className="border border-border p-4 text-center font-semibold text-blue-600">Professional Installation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Air Tightness</td>
                    <td className="border border-border p-4 text-center">70-85% effective</td>
                    <td className="border border-border p-4 text-center">95-99% effective</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Noise Reduction</td>
                    <td className="border border-border p-4 text-center">15-25dB typical</td>
                    <td className="border border-border p-4 text-center">25-45dB typical</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Thermal Performance</td>
                    <td className="border border-border p-4 text-center">30-50% improvement</td>
                    <td className="border border-border p-4 text-center">60-70% improvement</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Aesthetic Integration</td>
                    <td className="border border-border p-4 text-center">Variable quality</td>
                    <td className="border border-border p-4 text-center">Consistently high</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Longevity</td>
                    <td className="border border-border p-4 text-center">3-7 years typical</td>
                    <td className="border border-border p-4 text-center">15-25 years typical</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Building Compliance</td>
                    <td className="border border-border p-4 text-center">Homeowner responsibility</td>
                    <td className="border border-border p-4 text-center">Professionally certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Complexity Assessment */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Installation Complexity Guide"
              subtitle="Assess whether your project is suitable for DIY approach"
            />
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-green-200">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Easy DIY Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Window Types</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rectangular windows</li>
                      <li>• Standard sizes (up to 1.5m x 1.2m)</li>
                      <li>• Easy access</li>
                      <li>• No unusual shapes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Suitable Systems</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Fixed acrylic panels</li>
                      <li>• Magnetic systems</li>
                      <li>• Simple clip-in frames</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-sm text-green-700"><strong>Success Rate:</strong> 85-90% with good instructions</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-amber-200">
                <h3 className="text-xl font-semibold mb-4 text-amber-600">Challenging DIY Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Window Types</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bay windows (simple)</li>
                      <li>• Large single panels</li>
                      <li>• Slightly irregular shapes</li>
                      <li>• High-level access required</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Suitable Systems</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hinged panels</li>
                      <li>• Basic sliding systems</li>
                      <li>• Glass panels with frames</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 rounded">
                    <p className="text-sm text-amber-700"><strong>Success Rate:</strong> 60-75% requiring some adjustments</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-red-200">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Professional Only</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Window Types</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complex bay windows</li>
                      <li>• Arched or curved windows</li>
                      <li>• Listed building requirements</li>
                      <li>• Floor-to-ceiling installations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">System Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Acoustic specifications</li>
                      <li>• Security glazing</li>
                      <li>• Building regulation compliance</li>
                      <li>• Structural modifications</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <p className="text-sm text-red-700"><strong>DIY Risk:</strong> High failure rate, potential damage</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Time Investment Analysis */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Time Investment Reality Check"
              subtitle="What you need to know about DIY time commitments"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">DIY Time Breakdown</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Research & Planning</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <li>• Product research: 2-4 hours</li>
                      <li>• Measuring & planning: 1-2 hours</li>
                      <li>• Ordering & delivery wait: 1-2 weeks</li>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Installation (per window)</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <li>• Simple fixed panel: 2-3 hours</li>
                      <li>• Hinged system: 4-6 hours</li>
                      <li>• Sliding system: 6-8 hours</li>
                      <li>• Problem-solving/rework: 1-4 hours</li>
                    </div>
                  </Card>
                  <Card className="p-4 bg-amber-50">
                    <h4 className="font-semibold mb-2 text-amber-800">Hidden Time Costs</h4>
                    <div className="text-sm text-amber-700 space-y-1">
                      <li>• Learning curve: First window takes 2x longer</li>
                      <li>• Mistakes & corrections: 20-30% extra time</li>
                      <li>• Tool acquisition/setup: 1-2 hours</li>
                      <li>• Cleanup & finishing: 1 hour per window</li>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Timeline</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Survey & Quotation</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <li>• Initial survey: 1 hour</li>
                      <li>• Quotation turnaround: 2-3 days</li>
                      <li>• Design & planning: Included</li>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Manufacturing & Installation</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <li>• Manufacturing lead time: 2-3 weeks</li>
                      <li>• Installation: 1-2 hours per window</li>
                      <li>• Multiple windows: Same day completion</li>
                      <li>• Cleanup included: Professional finish</li>
                    </div>
                  </Card>
                  <Card className="p-4 bg-blue-50">
                    <h4 className="font-semibold mb-2 text-blue-800">Time Value Benefits</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <li>• Zero homeowner time investment</li>
                      <li>• Guaranteed completion date</li>
                      <li>• Professional warranty coverage</li>
                      <li>• Optimized performance from day one</li>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Risk Assessment & Mitigation"
              subtitle="Understanding and managing potential risks with DIY installation"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Common DIY Risks</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Poor measurements:</strong> Ill-fitting panels, gaps, draughts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Inadequate sealing:</strong> Reduced thermal/acoustic performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Structural damage:</strong> Drilling into lintels, cables, pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Safety hazards:</strong> Working at height, glass handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Building compliance:</strong> Unaware of regulations</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-amber-600">Risk Mitigation Strategies</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span><strong>Professional survey:</strong> Get measurements checked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span><strong>Quality materials:</strong> Don't compromise on components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span><strong>Proper tools:</strong> Invest in correct equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span><strong>Safety first:</strong> Use proper safety equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span><strong>Know limitations:</strong> Call professionals when needed</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Professional Advantages</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Guaranteed results:</strong> Performance warranties included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Insurance coverage:</strong> Public liability protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Building compliance:</strong> All regulations met</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Optimal performance:</strong> Maximized efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Long-term support:</strong> Maintenance and adjustments</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Recommendation Engine */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Our Recommendation Engine"
              subtitle="Get personalized advice based on your specific situation"
            />
            <div className="mt-12 space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-4">What's your budget range?</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-green-50 rounded border border-green-200">
                    <div className="font-medium text-green-800">Under £200 per window</div>
                    <div className="text-green-600 mt-1">→ DIY basic systems recommended</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded border border-amber-200">
                    <div className="font-medium text-amber-800">£200-400 per window</div>
                    <div className="text-amber-600 mt-1">→ Consider hybrid approach</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border border-blue-200">
                    <div className="font-medium text-blue-800">£400+ per window</div>
                    <div className="text-blue-600 mt-1">→ Professional installation optimal</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">How complex are your windows?</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 bg-green-50 rounded">
                    <div className="font-medium text-green-800">Simple & Regular</div>
                    <div className="text-green-600">Standard rectangles, easy access</div>
                    <div className="text-green-700 mt-1">✓ DIY suitable</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded">
                    <div className="font-medium text-amber-800">Moderately Complex</div>
                    <div className="text-amber-600">Simple bays, large panels</div>
                    <div className="text-amber-700 mt-1">⚠ DIY challenging</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded">
                    <div className="font-medium text-red-800">Highly Complex</div>
                    <div className="text-red-600">Complex shapes, listed buildings</div>
                    <div className="text-red-700 mt-1">✗ Professional essential</div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">What are your priorities?</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-green-800">Maximum Cost Savings</div>
                      <div className="text-green-600">→ DIY with careful planning</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="font-medium text-blue-800">Maximum Performance</div>
                      <div className="text-blue-600">→ Professional installation</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-purple-50 rounded">
                      <div className="font-medium text-purple-800">Personal Satisfaction</div>
                      <div className="text-purple-600">→ DIY if within capability</div>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded">
                      <div className="font-medium text-indigo-800">Peace of Mind</div>
                      <div className="text-indigo-600">→ Professional with warranty</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Make Your Decision?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you choose DIY or professional installation, we're here to help. Get expert advice, quality materials, or full professional service - whatever suits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Professional Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                DIY Advice & Materials
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
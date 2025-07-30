import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { UValuesDBRatingsSEO } from '@/components/educational/UValuesDBRatingsSEO';

export default function UValuesDBRatings() {
  return (
    <>
      <UValuesDBRatingsSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Understanding U-Values and dB Ratings for Secondary Glazing
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Demystify the technical specifications that matter most for secondary glazing performance. Learn how U-values and dB ratings directly impact your comfort, energy bills, and quality of life in plain English.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Performance Analysis
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="U-values and dB ratings explained for secondary glazing"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Quick Reference: What Good Numbers Look Like"
              subtitle="Target performance figures for effective secondary glazing"
            />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 border-2 border-blue-200 bg-blue-50">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">U-Values (Thermal Performance)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Single glazing</span>
                    <span className="font-bold text-red-600">5.0+ W/m²K (Poor)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">With secondary glazing</span>
                    <span className="font-bold text-green-600">1.8-2.5 W/m²K (Good)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">High-performance secondary</span>
                    <span className="font-bold text-green-700">1.2-1.8 W/m²K (Excellent)</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800"><strong>Rule of thumb:</strong> Lower U-values = better insulation = lower heating bills</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-green-200 bg-green-50">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">dB Ratings (Noise Reduction)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Basic improvement</span>
                    <span className="font-bold text-amber-600">15-25 dB (Noticeable)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Good performance</span>
                    <span className="font-bold text-green-600">25-35 dB (Significant)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700">Acoustic specification</span>
                    <span className="font-bold text-green-700">35-50 dB (Dramatic)</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-sm text-green-800"><strong>Rule of thumb:</strong> Every 10dB reduction halves perceived noise</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* U-Values Explained */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="U-Values Explained in Plain English"
              subtitle="What thermal performance numbers really mean for your home"
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What is a U-Value?</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    A U-value measures how much heat passes through a material. Think of it as a "heat leak rate" - the higher the number, the more heat escapes through your windows.
                  </p>
                  <Card className="p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2">Simple Analogy</h4>
                    <p className="text-blue-700 text-sm">
                      Imagine your window as a bucket with holes. A high U-value is like having big holes - lots of heat escapes quickly. A low U-value is like having tiny holes - heat stays inside where you want it.
                    </p>
                  </Card>
                  <div className="space-y-3">
                    <h4 className="font-semibold">U-Value Scale:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span><strong>5.0+ W/m²K:</strong> Single glazing - very poor insulation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span><strong>3.0-5.0 W/m²K:</strong> Poor double glazing or basic secondary</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span><strong>2.0-3.0 W/m²K:</strong> Good double glazing or standard secondary</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span><strong>1.0-2.0 W/m²K:</strong> High-performance glazing systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Real-World Impact</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Example: Victorian Terrace</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Original single glazing (5.0 U-value)</span>
                        <span className="font-semibold text-red-600">£800/year heat loss</span>
                      </div>
                      <div className="flex justify-between">
                        <span>With secondary glazing (1.8 U-value)</span>
                        <span className="font-semibold text-green-600">£280/year heat loss</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between">
                        <span className="font-semibold">Annual saving</span>
                        <span className="font-bold text-green-700">£520/year</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <h4 className="font-semibold mb-2 text-green-800">Comfort Benefits</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 3-5°C warmer room temperature</li>
                      <li>• Elimination of cold spots near windows</li>
                      <li>• Reduced condensation and dampness</li>
                      <li>• More even heating throughout rooms</li>
                    </ul>
                  </Card>
                  <Card className="p-4 bg-blue-50">
                    <h4 className="font-semibold mb-2 text-blue-800">How Secondary Glazing Improves U-Values</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Creates insulating air gap (typically 100-200mm)</li>
                      <li>• Adds second barrier to heat transfer</li>
                      <li>• Low-E coatings reflect heat back inside</li>
                      <li>• Eliminates draughts and air infiltration</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* dB Ratings Explained */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="dB Ratings: The Science of Sound Reduction"
              subtitle="Understanding how noise reduction numbers translate to real-world comfort"
            />
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What is a dB Rating?</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Decibels (dB) measure sound intensity. In secondary glazing, we use Rw ratings to show how much noise is reduced. Higher dB reduction = quieter indoor environment.
                  </p>
                  <Card className="p-4 bg-amber-50">
                    <h4 className="font-semibold text-amber-800 mb-2">The Logarithmic Scale</h4>
                    <p className="text-amber-700 text-sm">
                      The dB scale is logarithmic, meaning small increases have big impacts. A 10dB reduction cuts perceived noise in half, while 20dB reduction cuts it to one-quarter.
                    </p>
                  </Card>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Common Noise Levels:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Whisper</span>
                        <span className="font-semibold">30 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quiet library</span>
                        <span className="font-semibold">40 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Normal conversation</span>
                        <span className="font-semibold">60 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Busy road traffic</span>
                        <span className="font-semibold">70-80 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Motorcycle</span>
                        <span className="font-semibold">90 dB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Noise Reduction Impact</h3>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Example: Busy London Road</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Outside noise level</span>
                        <span className="font-semibold text-red-600">75 dB (Heavy traffic)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Through single glazing</span>
                        <span className="font-semibold text-orange-600">65 dB (Still intrusive)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>With 40dB secondary glazing</span>
                        <span className="font-semibold text-green-600">35 dB (Library quiet)</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-green-50">
                    <h4 className="font-semibold mb-2 text-green-800">Perceived Reduction</h4>
                    <div className="text-sm text-green-700 space-y-2">
                      <div className="flex justify-between">
                        <span>10 dB reduction</span>
                        <span className="font-semibold">Halves perceived noise</span>
                      </div>
                      <div className="flex justify-between">
                        <span>20 dB reduction</span>
                        <span className="font-semibold">75% quieter</span>
                      </div>
                      <div className="flex justify-between">
                        <span>30 dB reduction</span>
                        <span className="font-semibold">87.5% quieter</span>
                      </div>
                      <div className="flex justify-between">
                        <span>40 dB reduction</span>
                        <span className="font-semibold">94% quieter</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 bg-blue-50">
                    <h4 className="font-semibold mb-2 text-blue-800">How Secondary Glazing Achieves High dB Ratings</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Large air gap breaks sound transmission</li>
                      <li>• Different glass thicknesses prevent resonance</li>
                      <li>• Acoustic laminated glass absorbs sound waves</li>
                      <li>• Precision sealing eliminates sound leaks</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Performance Comparison by System Type"
              subtitle="How different secondary glazing configurations affect U-values and dB ratings"
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border p-4 text-left font-semibold">System Type</th>
                    <th className="border border-border p-4 text-center font-semibold">U-Value Range</th>
                    <th className="border border-border p-4 text-center font-semibold">dB Reduction</th>
                    <th className="border border-border p-4 text-center font-semibold">Best Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Basic 4mm glass, 50mm gap</td>
                    <td className="border border-border p-4 text-center">2.8-3.2 W/m²K</td>
                    <td className="border border-border p-4 text-center">15-20 dB</td>
                    <td className="border border-border p-4 text-center text-sm">Budget thermal improvement</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">6mm glass, 100mm gap</td>
                    <td className="border border-border p-4 text-center">2.2-2.6 W/m²K</td>
                    <td className="border border-border p-4 text-center">25-30 dB</td>
                    <td className="border border-border p-4 text-center text-sm">Good all-round performance</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Low-E glass, 150mm gap</td>
                    <td className="border border-border p-4 text-center">1.6-2.0 W/m²K</td>
                    <td className="border border-border p-4 text-center">30-35 dB</td>
                    <td className="border border-border p-4 text-center text-sm">High thermal performance</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border p-4 font-medium">Acoustic laminated, 200mm gap</td>
                    <td className="border border-border p-4 text-center">1.8-2.2 W/m²K</td>
                    <td className="border border-border p-4 text-center">40-50 dB</td>
                    <td className="border border-border p-4 text-center text-sm">Maximum noise reduction</td>
                  </tr>
                  <tr className="bg-background">
                    <td className="border border-border p-4 font-medium">Combination: Low-E + Acoustic</td>
                    <td className="border border-border p-4 text-center">1.2-1.6 W/m²K</td>
                    <td className="border border-border p-4 text-center">45-55 dB</td>
                    <td className="border border-border p-4 text-center text-sm">Premium performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Factors Affecting Performance */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Factors That Affect Performance"
              subtitle="Understanding what influences U-values and dB ratings in real installations"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Air Gap Size</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/10 rounded">
                    <h4 className="font-medium">Thermal Performance</h4>
                    <p className="text-muted-foreground">Larger gaps (100-200mm) provide better insulation than smaller gaps (50-75mm)</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded">
                    <h4 className="font-medium">Acoustic Performance</h4>
                    <p className="text-muted-foreground">Bigger air gaps break sound transmission more effectively</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Optimal range:</strong> 100-150mm for most applications
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Glass Specification</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/10 rounded">
                    <h4 className="font-medium">Low-E Coatings</h4>
                    <p className="text-muted-foreground">Reflect heat back inside, improving thermal performance by 20-30%</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded">
                    <h4 className="font-medium">Acoustic Laminated</h4>
                    <p className="text-muted-foreground">Inner plastic layer absorbs sound vibrations</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best choice:</strong> Different thicknesses on primary and secondary glazing
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Installation Quality</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-primary/10 rounded">
                    <h4 className="font-medium">Sealing</h4>
                    <p className="text-muted-foreground">Poor sealing can halve thermal and acoustic performance</p>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded">
                    <h4 className="font-medium">Precision Fitting</h4>
                    <p className="text-muted-foreground">Gaps and misalignment create thermal bridges and sound leaks</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Critical factor:</strong> Professional installation ensures rated performance
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Testing and Certification */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Testing and Certification Standards"
              subtitle="How performance ratings are measured and what certifications to look for"
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">U-Value Testing (BS EN ISO 10077)</h3>
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Laboratory Testing Process</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sample windows tested in controlled conditions</li>
                    <li>• Temperature difference maintained across glazing</li>
                    <li>• Heat flow measured using calibrated equipment</li>
                    <li>• Results calculated per square meter per Kelvin</li>
                  </ul>
                </Card>
                <Card className="p-6 mt-4">
                  <h4 className="font-semibold mb-4">What to Look For</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>BFRC ratings:</strong> Independent certification</li>
                    <li>• <strong>Whole window values:</strong> Not just center pane</li>
                    <li>• <strong>Installation factors:</strong> Real-world performance</li>
                    <li>• <strong>Third-party testing:</strong> Unbiased results</li>
                  </ul>
                </Card>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Acoustic Testing (BS EN ISO 10140)</h3>
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Sound Reduction Testing</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pink noise generated in source room</li>
                    <li>• Sound levels measured both sides of glazing</li>
                    <li>• Weighted sound reduction index (Rw) calculated</li>
                    <li>• Frequency-specific performance analyzed</li>
                  </ul>
                </Card>
                <Card className="p-6 mt-4">
                  <h4 className="font-semibold mb-4">Understanding Test Reports</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Rw rating:</strong> Single-number rating (most common)</li>
                    <li>• <strong>DnT,w rating:</strong> In-situ performance measurement</li>
                    <li>• <strong>Frequency charts:</strong> Performance across all frequencies</li>
                    <li>• <strong>Installation context:</strong> Laboratory vs real-world</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Application Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Practical Application Guide"
              subtitle="Choosing the right specifications for your specific needs"
            />
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Energy Efficiency Priority</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded">
                    <h4 className="font-medium text-blue-800">Target: U-value under 1.8</h4>
                    <p className="text-sm text-blue-700">Focus on Low-E coatings and larger air gaps</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-medium">Recommended Specification:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Low-E coated glass (6mm minimum)</li>
                      <li>• 150mm+ air gap where possible</li>
                      <li>• High-quality sealing systems</li>
                      <li>• Thermally broken frames</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded">
                    <p className="text-sm text-green-700"><strong>Expected saving:</strong> 60-70% reduction in heat loss</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Noise Reduction Priority</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded">
                    <h4 className="font-medium text-green-800">Target: 35dB+ reduction</h4>
                    <p className="text-sm text-green-700">Focus on acoustic glass and maximum air gap</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-medium">Recommended Specification:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Acoustic laminated glass (6.8mm+)</li>
                      <li>• Different glass thicknesses each side</li>
                      <li>• 200mm air gap if space allows</li>
                      <li>• Precision perimeter sealing</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="text-sm text-blue-700"><strong>Expected result:</strong> Traffic noise reduced to whisper levels</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Balanced Performance</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded">
                    <h4 className="font-medium text-purple-800">Target: Good all-round improvement</h4>
                    <p className="text-sm text-purple-700">Cost-effective solution for most applications</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <h4 className="font-medium">Recommended Specification:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 6mm toughened glass</li>
                      <li>• 100-150mm air gap</li>
                      <li>• Quality sealing and frames</li>
                      <li>• Professional installation</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-amber-50 rounded">
                    <p className="text-sm text-amber-700"><strong>Expected result:</strong> 50% energy saving, 25-30dB noise reduction</p>
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
              Get Specific Performance Analysis for Your Property
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding the numbers is just the first step. Our specialists can provide detailed performance modeling for your specific windows and requirements, ensuring you achieve the optimal U-values and dB ratings for your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Performance Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Download Specification Guide
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
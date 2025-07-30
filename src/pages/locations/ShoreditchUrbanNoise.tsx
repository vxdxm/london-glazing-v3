import React from 'react';
import { MainNav } from '@/components/MainNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { ShoreditchUrbanNoiseSEO } from '@/components/locations/ShoreditchUrbanNoiseSEO';

export default function ShoreditchUrbanNoise() {
  return (
    <>
      <ShoreditchUrbanNoiseSEO />
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5">
        <MainNav />
        <BreadcrumbNav />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent">
                  Soundproofing Windows for Urban Living in Shoreditch
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your Shoreditch home into a peaceful sanctuary with our specialist urban noise reduction solutions. Combat traffic, nightlife, sirens, and street noise with high-performance secondary glazing designed for London's vibrant urban environment.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                  Get Urban Noise Assessment
                </Button>
              </div>
              <div className="relative">
                <OptimizedImage
                  src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
                  alt="Shoreditch urban noise secondary glazing installation"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Urban Noise Challenges */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Shoreditch Urban Noise Challenges"
              subtitle="Understanding the unique acoustic environment of East London's creative hub"
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-primary">Traffic & Transport</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Old Street roundabout traffic</li>
                  <li>• Commercial Road congestion</li>
                  <li>• Delivery trucks and buses</li>
                  <li>• Motorcycle acceleration noise</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Nightlife & Entertainment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Club and bar music</li>
                  <li>• Late-night pedestrian activity</li>
                  <li>• Street performers</li>
                  <li>• Event venues and markets</li>
                </ul>
              </Card>
              <Card className="p-6 border-2 border-accent/20 hover:border-accent/40 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Urban Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency service sirens</li>
                  <li>• Construction and renovation</li>
                  <li>• Waste collection vehicles</li>
                  <li>• Street maintenance</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Proven Urban Noise Reduction Performance"
              subtitle="Measurable improvements for Shoreditch properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">35-45dB</h3>
                <p className="text-muted-foreground">Traffic noise reduction</p>
              </Card>
              <Card className="p-6 text-center border-2 border-secondary/20">
                <h3 className="text-3xl font-bold text-secondary mb-2">40-50dB</h3>
                <p className="text-muted-foreground">Nightlife noise reduction</p>
              </Card>
              <Card className="p-6 text-center border-2 border-accent/20">
                <h3 className="text-3xl font-bold text-accent-foreground mb-2">85%</h3>
                <p className="text-muted-foreground">Siren noise attenuation</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h3 className="text-3xl font-bold text-primary mb-2">70%</h3>
                <p className="text-muted-foreground">Street noise reduction</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Areas */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Secondary Glazing Solutions Across London"
              subtitle="Specialist noise reduction services for London properties"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                    Victorian Terraces Islington
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Period property solutions for conservation areas</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/clapham-busy-roads" className="text-primary hover:underline">
                    Clapham Busy Roads
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Traffic noise reduction for busy road properties</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/kings-cross-train-noise" className="text-primary hover:underline">
                    King's Cross Train Noise
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Railway noise solutions for urban flats</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/notting-hill-security" className="text-primary hover:underline">
                    Notting Hill Security
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Security glazing for ground floor flats</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/hackney-energy-efficiency" className="text-primary hover:underline">
                    Hackney Energy Efficiency
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Single-glazed property improvements</p>
              </Card>
              <Card className="p-4 hover:shadow-lg transition-all">
                <h4 className="font-semibold mb-2">
                  <a href="/locations/chelsea-draught-proofing" className="text-primary hover:underline">
                    Chelsea Draught Proofing
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Period window draught elimination</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform Your Shoreditch Home Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the difference our urban noise reduction solutions can make. Get a free acoustic assessment and discover how secondary glazing can create your perfect urban sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white shadow-lg">
                Get Free Urban Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
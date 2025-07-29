import React from "react";
import VictorianIslingtonSEO from "@/components/locations/VictorianIslingtonSEO";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VictorianIslington = () => {
  return (
    <>
      <VictorianIslingtonSEO />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing for Victorian Terraces in Islington</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Victorian terraced houses in Islington are architectural treasures that require specialist care. 
                Our secondary glazing solutions preserve the character of your period property while dramatically 
                improving thermal comfort and reducing noise from bustling Islington streets.
              </p>
              <p className="mb-6">
                Specializing in sash window solutions, we understand the unique challenges of Victorian properties 
                and provide sympathetic installations that complement your home's historical significance.
              </p>
              <Button asChild>
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
                alt="Victorian terrace house in Islington with secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Sash Window Solutions */}
        <section className="mb-12">
          <SectionHeading title="Specialist Sash Window Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Box Sash Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Precision-fitted secondary glazing for traditional box sash windows, maintaining full operation while improving thermal performance by up to 50%.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sliding Sash Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Horizontal sliding secondary glazing that mirrors the movement of original sash windows, preserving authenticity and ease of use.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fixed Light Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discreet fixed secondary glazing for windows that don't require opening, offering maximum thermal efficiency with minimal visual impact.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Draught Proofing */}
        <section className="mb-12">
          <SectionHeading title="Advanced Draught Proofing" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Complete Sealing Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-performance weatherstrips for window frames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Precision-cut seals that don't compromise window operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Magnetic sealing systems for superior air tightness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Brush pile seals for sliding sash mechanisms</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <OptimizedImage 
                src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg"
                alt="Draught proofing detail on Victorian sash window"
                className="w-full h-full rounded-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Period Aesthetics */}
        <section className="mb-12">
          <SectionHeading title="Maintaining Victorian Character" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sympathetic Design Approach</h3>
              <p className="mb-4">
                Our secondary glazing systems are carefully designed to respect the proportions and details 
                of Victorian architecture. We use slim sightlines and period-appropriate finishes to ensure 
                your installation enhances rather than detracts from your property's character.
              </p>
              <p className="mb-4">
                Working with conservation officers and heritage specialists, we ensure all installations 
                comply with local planning requirements while delivering exceptional performance improvements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Islington-Specific Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant noise reduction from Upper Street and Angel traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security for ground floor windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced condensation in period properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protection of original window frames from weather damage</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Victorian Terrace?</h2>
          <p className="mb-6 text-lg">
            Get a free consultation and quote for your Islington property. Our experts understand 
            the unique requirements of Victorian terraced houses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Expert Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default VictorianIslington;
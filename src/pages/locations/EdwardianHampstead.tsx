import React from "react";
import EdwardianHampsteadSEO from "@/components/locations/EdwardianHampsteadSEO";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const EdwardianHampstead = () => {
  return (
    <>
      <EdwardianHampsteadSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Edwardian Hampstead" />
        
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Edwardian Home Secondary Glazing in Hampstead</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Hampstead's magnificent Edwardian homes deserve secondary glazing solutions that honor their 
                architectural grandeur. Our specialist services focus on the distinctive large bay windows 
                and elegant proportions that define this prestigious area.
              </p>
              <p className="mb-6">
                We expertly balance thermal efficiency with historical preservation, ensuring your 
                Hampstead property maintains its character while achieving modern comfort standards.
              </p>
              <Button asChild>
                <Link to="/quote">Get Free Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
                alt="Edwardian home in Hampstead with bay window secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Bay Window Solutions */}
        <section className="mb-12">
          <SectionHeading title="Large Bay Window Specialists" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Three-Sided Bay Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Custom angled secondary glazing systems designed to follow the precise geometry of Edwardian bay windows, maintaining sight lines and proportions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Curved Bay Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialized curved secondary glazing for rounded bay windows, manufactured to exact measurements for seamless integration with original features.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Floor-to-Ceiling Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Large format secondary glazing for the generous window proportions typical of Edwardian architecture, with discrete frame systems.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Thermal Efficiency */}
        <section className="mb-12">
          <SectionHeading title="Thermal Efficiency & Historical Preservation" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Thermal Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Low-E glass options for maximum thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Argon-filled cavity glazing for enhanced insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thermally broken frame systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 70% improvement in thermal performance</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <OptimizedImage 
                src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg"
                alt="Edwardian bay window with thermal efficient secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Historical Considerations */}
        <section className="mb-12">
          <SectionHeading title="Preserving Edwardian Elegance" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Conservation Compliance</h3>
              <p className="mb-4">
                Hampstead's conservation area status requires careful consideration of any alterations. 
                Our secondary glazing solutions are designed to be completely reversible and sympathetic 
                to the original architecture.
              </p>
              <p className="mb-4">
                We work closely with conservation officers and heritage consultants to ensure all 
                installations comply with local planning requirements while delivering exceptional 
                thermal and acoustic improvements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hampstead-Specific Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Noise reduction from Heath traffic and nearby tube lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security for valuable period properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protection from wind exposure on the Heath</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced heating costs in large Edwardian rooms</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="mb-12">
          <SectionHeading title="Technical Excellence for Period Properties" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Precision Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Every unit is custom-manufactured to the exact dimensions of your Edwardian windows, ensuring perfect fit and optimal performance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Period-Appropriate Finishes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Choice of finishes including bronze, white, and custom RAL colors to complement your property's existing window frames and hardware.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Minimal Visual Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Ultra-slim sightlines and magnetic opening systems ensure our installations remain virtually invisible from both inside and outside.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Transform Your Edwardian Home in Hampstead</h2>
          <p className="mb-6 text-lg">
            Get expert advice on secondary glazing solutions specifically designed for Edwardian properties. 
            Free consultation and detailed quotations available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Heritage Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EdwardianHampstead;
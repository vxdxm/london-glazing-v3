import React from "react";
import ListedKensingtonSEO from "@/components/locations/ListedKensingtonSEO";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ListedKensington = () => {
  return (
    <>
      <ListedKensingtonSEO />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Listed Building Secondary Glazing in Kensington</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Kensington's listed buildings require the most sympathetic and reversible secondary glazing 
                solutions. Our expertise in conservation-approved installations ensures your property meets 
                stringent heritage requirements while achieving exceptional thermal and acoustic performance.
              </p>
              <p className="mb-6">
                Working with conservation officers and heritage specialists, we provide discreet solutions 
                that enhance comfort without compromising the architectural integrity of your listed property.
              </p>
              <Button asChild>
                <Link to="/quote">Get Heritage Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
                alt="Listed building in Kensington with conservation-approved secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Conservation Requirements */}
        <section className="mb-12">
          <SectionHeading title="Conservation Area Compliance" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Listed Building Consent</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fully reversible installations that comply with Listed Building Consent requirements. Our systems leave no permanent alterations to original fabric.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Heritage Officer Liaison</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We work directly with Kensington & Chelsea conservation officers to ensure all installations meet strict heritage preservation standards.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Planning Permission Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete planning application support including detailed drawings, heritage statements, and conservation area assessments.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Discreet Design Solutions */}
        <section className="mb-12">
          <SectionHeading title="Discreet & Sympathetic Designs" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Invisible from Exterior</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ultra-slim frames with minimal visual impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Recessed installations within window reveals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Color-matched frames to blend with existing windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>No external fixings or visible alterations</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <OptimizedImage 
                src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg"
                alt="Discreet secondary glazing installation in listed building"
                className="w-full h-full rounded-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Performance Benefits */}
        <section className="mb-12">
          <SectionHeading title="Enhanced Performance Without Compromise" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Thermal & Acoustic Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 60% improvement in thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant reduction in road noise from Exhibition Road and Cromwell Road</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security without visible security measures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protection of original windows from weathering</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Preservation Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protects original glass and putty from deterioration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduces condensation damage to window frames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Extends the life of historic windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintains building's heritage value</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="mb-12">
          <SectionHeading title="Heritage-Sensitive Installation Process" />
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Heritage Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed survey of your listed building including architectural significance and conservation requirements.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Planning Liaison</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Direct consultation with RBKC planning department and heritage officers to ensure compliance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. Precision Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Custom fabrication to exact specifications ensuring perfect fit with minimal intervention.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>4. Expert Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Careful installation by heritage-trained technicians with minimal disruption to your property.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Preserve Your Listed Building's Heritage</h2>
          <p className="mb-6 text-lg">
            Get expert advice on conservation-compliant secondary glazing for your Kensington listed property. 
            Free heritage assessment and planning support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Heritage Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Conservation Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListedKensington;
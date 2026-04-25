import React from "react";
import ConservationRichmondSEO from "@/components/locations/ConservationRichmondSEO";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LocationBreadcrumb from "@/components/locations/LocationBreadcrumb";

const ConservationRichmond = () => {
  return (
    <>
      <ConservationRichmondSEO />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Conservation Richmond" />
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing for Conservation Areas in Richmond</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Richmond's numerous conservation areas require careful consideration when installing secondary 
                glazing. Our expertise in local planning regulations ensures compliant installations that 
                deliver significant benefits for noise reduction and energy efficiency.
              </p>
              <p className="mb-6">
                From riverside properties near Richmond Bridge to period homes throughout the borough, 
                we provide sympathetic solutions that enhance comfort while preserving the area's 
                distinctive character and heritage value.
              </p>
              <Button asChild>
                <Link to="/quote">Get Richmond Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
                alt="Conservation area property in Richmond with approved secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Planning Compliance */}
        <section className="mb-12">
          <SectionHeading title="Local Planning Regulation Compliance" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Richmond Council Liaison</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Direct collaboration with Richmond upon Thames planning department to ensure all installations meet conservation area requirements.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conservation Area Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Detailed assessments of your property's conservation area status and specific restrictions that may apply to window alterations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Planning Application Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete planning application assistance including heritage statements, detailed drawings, and liaison with conservation officers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Noise Reduction Solutions */}
        <section className="mb-12">
          <SectionHeading title="Noise Reduction in Sensitive Areas" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Richmond-Specific Noise Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Aircraft noise from Heathrow flight paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Traffic from A316 and Richmond town center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Railway noise from Richmond and District lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Riverside traffic and Thames boat activity</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <OptimizedImage 
                src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg"
                alt="Acoustic secondary glazing installation in Richmond conservation area"
                className="w-full h-full rounded-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Energy Efficiency Benefits */}
        <section className="mb-12">
          <SectionHeading title="Energy Efficiency in Conservation Areas" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Thermal Performance Improvements</h3>
              <p className="mb-4">
                Many of Richmond's conservation area properties feature original single-glazed windows 
                that cannot be replaced due to planning restrictions. Secondary glazing provides a 
                sympathetic solution for improving thermal efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 65% improvement in thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant reduction in heating costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced comfort in period properties</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced carbon footprint through improved insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Preservation of existing windows reduces waste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Long-term sustainable solution for heritage properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Contribution to Richmond's environmental goals</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Richmond-Specific Solutions */}
        <section className="mb-12">
          <SectionHeading title="Area-Specific Installation Solutions" />
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Riverside Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialized solutions for properties near the Thames, addressing both noise and moisture considerations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Victorian Terraces</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Period-appropriate installations for Richmond's extensive Victorian housing stock with sash window expertise.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Edwardian Villas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Solutions for larger Edwardian properties with bay windows and original leaded glass features.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Georgian Houses</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sympathetic treatments for Richmond's Georgian properties maintaining classical proportions and details.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-12">
          <SectionHeading title="Richmond Conservation Success Stories" />
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Richmond Hill Conservation Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Working with Richmond Council's conservation team, we successfully installed secondary 
                  glazing in a Grade II listed Georgian villa, achieving:
                </p>
                <ul className="space-y-2">
                  <li>• 75% noise reduction from nearby traffic</li>
                  <li>• 60% improvement in thermal efficiency</li>
                  <li>• Full planning approval within 8 weeks</li>
                  <li>• Zero alteration to original fabric</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Riverside Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Multiple properties near Richmond Bridge benefited from our conservation-compliant 
                  secondary glazing, delivering:
                </p>
                <ul className="space-y-2">
                  <li>• Significant aircraft noise reduction</li>
                  <li>• Enhanced security for ground floor windows</li>
                  <li>• Improved thermal comfort year-round</li>
                  <li>• Preservation of river views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-8 rounded-lg">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4">TW9, TW10 Conservation Area Specification</h2>
            <p className="text-muted-foreground mb-4">
              Richmond upon Thames covers 70+ designated conservation areas — Richmond Hill, Richmond Green, Petersham,
              Ham Common, Kew Green, and the riverside frontages. The dominant noise source for most TW9/TW10 properties
              is Heathrow approach traffic during easterly operations (around 30% of the year), with Lmax pass-by levels
              of 70–78 dBA. Secondary noise sources are the A316 (50–60 dBA at distance), the District Line and Richmond
              station, and Thames boat traffic in summer. LBH Richmond's planning policy CP7 explicitly identifies
              secondary glazing as the preferred upgrade route for conservation-area and listed properties.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li><strong>Properties under Heathrow approach (north Richmond, Kew):</strong> 10.8mm acoustic + 200mm cavity, Rw 52 dB combined</li>
              <li><strong>A316-adjacent (East Sheen, Mortlake):</strong> 8.8mm acoustic + 150mm cavity, Rw 48 dB combined</li>
              <li><strong>Riverside and quieter conservation interiors:</strong> 6.8mm acoustic + 150mm cavity, Rw 46 dB combined</li>
              <li><strong>Thermal-led briefs:</strong> Low-E secondary glass + 150mm cavity, Uw 1.6 W/m²K (74% reduction over single-glazed primary)</li>
              <li><strong>Conservation Area Consent:</strong> we supply CAC submission packages including drawings, performance schedules, and Historic England compliance notes</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mb-4">Transform Your Richmond Conservation Property</h2>
          <p className="mb-6 text-lg">
            Get expert advice on conservation-compliant secondary glazing for your Richmond property. 
            Full planning support and heritage assessment included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Conservation Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Planning Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConservationRichmond;
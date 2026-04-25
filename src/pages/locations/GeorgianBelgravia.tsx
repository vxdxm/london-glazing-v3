import React from "react";
import GeorgianBelgraviaSEO from "@/components/locations/GeorgianBelgraviaSEO";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const GeorgianBelgravia = () => {
  return (
    <>
      <GeorgianBelgraviaSEO />
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Georgian Belgravia" />
        
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Georgian Property Secondary Glazing in Belgravia</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Belgravia's prestigious <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian properties</Link> demand secondary glazing solutions that respect 
                their architectural heritage while addressing modern comfort requirements. Our expertise in 
                Georgian window styles ensures unobtrusive installations that enhance performance.
              </p>
              <p className="mb-4">
                Specializing in the unique challenges of Georgian architecture, we provide bespoke solutions 
                for <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">noise reduction</Link> and heat retention while preserving the elegant proportions and classical 
                details that define these magnificent properties.
              </p>
              <p className="mb-6 text-muted-foreground">
                We also serve <Link to="/areas/central-london" className="text-primary hover:underline">Central London</Link> including nearby{' '}
                <Link to="/locations/listed-kensington" className="text-primary hover:underline">Kensington</Link> and{' '}
                <Link to="/areas/west-london" className="text-primary hover:underline">West London</Link>. 
                For <Link to="/commercial/hospitality-sector" className="text-primary hover:underline">hotels</Link> and{' '}
                <Link to="/commercial/office-buildings" className="text-primary hover:underline">commercial offices</Link> in Belgravia, we offer tailored solutions.
              </p>
              <Button asChild>
                <Link to="/quote">Get Georgian Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/lovable-uploads/c346e589-42af-4989-9b7d-29bc69feea06.png"
                alt="Georgian property in Belgravia with period-appropriate secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={600}
                height={400}
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Georgian Window Challenges */}
        <section className="mb-12">
          <SectionHeading title="Georgian Window Style Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tall Sash Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Custom solutions for the characteristic tall, narrow sash windows with precise glazing bar replication and slim sight lines.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Glazing Bar Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Faithful reproduction of Georgian glazing bar arrangements, maintaining the authentic appearance of multi-pane windows.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Period Proportions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Installations that respect the classical proportions and symmetry essential to Georgian architectural harmony.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Noise & Heat Solutions */}
        <section className="mb-12">
          <SectionHeading title="Unobtrusive Noise & Heat Solutions" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Acoustic Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant reduction in traffic noise from Belgravia's busy streets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Acoustic laminated glass options for enhanced sound insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Specialized sealing systems for maximum noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 80% reduction in external noise penetration</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px]">
              <OptimizedImage 
                src="/lovable-uploads/49953857-31a7-4076-924c-61a726839d85.jpg"
                alt="Georgian sash window with acoustic secondary glazing"
                className="w-full h-full rounded-lg object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Heat Retention */}
        <section className="mb-12">
          <SectionHeading title="Superior Heat Retention" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Thermal Efficiency Improvements</h3>
              <p className="mb-4">
                Georgian properties, with their high ceilings and large windows, often suffer from 
                significant heat loss. Our secondary glazing systems address these challenges with 
                advanced thermal barrier technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Low-emissivity glass coatings for enhanced thermal performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thermally broken frame systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Precision-fitted sealing to eliminate drafts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Belgravia-Specific Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced heating costs in large Georgian rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced comfort in ground floor reception rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Protection from Westminster's urban heat island effect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved air quality through better sealing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conservation Considerations */}
        <section className="mb-12">
          <SectionHeading title="Westminster Conservation Compliance" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Grade II Listed Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialized solutions for Belgravia's numerous Grade II listed Georgian terraces, ensuring full compliance with heritage requirements.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conservation Area Sensitivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Installations designed to meet Westminster City Council's strict conservation area guidelines while delivering modern performance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reversible Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>All systems designed to be completely reversible, preserving the integrity of original Georgian fabric for future generations.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-8 rounded-lg">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4">SW1X Acoustic and Thermal Specification</h2>
            <p className="text-muted-foreground mb-4">
              Belgravia (SW1X) sits between Knightsbridge, Sloane Square, and Victoria — bordered by the A4 (Knightsbridge),
              the A3217 (Sloane Street), and Buckingham Palace Road. Façade-level Leq,16h on the principal frontages reaches
              66–72 dBA, dropping to 55–60 dBA in the garden squares (Belgrave, Eaton, Chester). Secondary glazing in
              SW1X is almost exclusively retrofit to single-glazed timber sashes in Grade II and Grade II* listed Cubitt
              terraces; replacement windows are not consented under Westminster's Article 4 direction.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li><strong>Standard SW1X Georgian sash spec:</strong> 8.8mm Stadip Silence acoustic + 150mm cavity, 18mm slim aluminium frame, RAL-matched to existing joinery — Rw 48 dB combined, Uw 1.7 W/m²K</li>
              <li><strong>Principal-frontage upgrade:</strong> 10.8mm acoustic + 200mm cavity with mineral-fibre reveal absorbent — Rw 52 dB combined, hits BS 8233 bedroom Lnight 30 dBA against 70 dBA façade</li>
              <li><strong>Glazing-bar overlay:</strong> aluminium astragals matched to the primary 6-over-6 or 9-over-9 Georgian pattern at 25mm width</li>
              <li><strong>Listed Building Consent:</strong> we supply Heritage Statements and reversible-fix details for Westminster City Council LBC submissions</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mb-4">Enhance Your Georgian Property in Belgravia</h2>
          <p className="mb-6 text-lg">
            Get specialist advice on secondary glazing solutions designed specifically for Georgian architecture. 
            Conservation compliance and heritage preservation guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Georgian Specialist Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Heritage Assessment</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GeorgianBelgravia;
import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RelatedLocations from "@/components/locations/RelatedLocations";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const VirginiaWater = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Virginia Water | Wentworth Estate Specialists</title>
        <meta 
          name="description" 
          content="Premium secondary glazing for Virginia Water's luxury properties. Wentworth Estate specialists. Noise reduction, thermal efficiency & security for exclusive homes." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/virginia-water" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Virginia Water" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Virginia Water, Surrey</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Virginia Water represents the pinnacle of Surrey living, home to the prestigious Wentworth Estate 
                and some of the UK's most exclusive properties. Our <Link to="/residential" className="text-primary hover:underline">secondary glazing solutions</Link> are tailored 
                to meet the exacting standards of these magnificent homes.
              </p>
              <p className="mb-4">
                From grand <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian mansions</Link> to contemporary luxury builds, we provide bespoke installations 
                that enhance comfort, security, and energy efficiency while respecting architectural integrity.
              </p>
              <p className="mb-6 text-muted-foreground">
                We serve the entire <Link to="/areas/home-counties" className="text-primary hover:underline">Home Counties region</Link>, including nearby areas like{' '}
                <Link to="/locations/weybridge" className="text-primary hover:underline">Weybridge</Link>,{' '}
                <Link to="/locations/cobham" className="text-primary hover:underline">Cobham</Link>, and{' '}
                <Link to="/locations/ascot" className="text-primary hover:underline">Ascot</Link>. 
                For commercial properties, see our <Link to="/commercial/office-buildings" className="text-primary hover:underline">office</Link> and{' '}
                <Link to="/commercial/hospitality-sector" className="text-primary hover:underline">hospitality</Link> solutions.
              </p>
              <Button asChild>
                <Link to="/quote-request">Request Premium Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Wentworth Estate Approved</h3>
              <p className="text-muted-foreground">Trusted by homeowners in Surrey's most prestigious addresses</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Luxury Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Grand Estate Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bespoke solutions for Virginia Water's expansive estate properties, including multi-storey installations and period features.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security Enhancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Laminated security glass options providing additional protection for high-value properties without compromising aesthetics.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Acoustic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Premium acoustic solutions for properties near the A30 and golf courses, ensuring complete tranquility.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Why Virginia Water Homeowners Choose Us" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Premium Service Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Discrete, professional installation teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling around your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Heritage-sensitive approaches for period properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comprehensive project management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Area Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Understanding of Runnymede Borough requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Experience with Wentworth Estate guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Knowledge of Crown Estate specifications</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Virginia Water" currentRegion="Surrey" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Virginia Water Property</h2>
          <p className="mb-6 text-lg">
            Join the discerning homeowners who trust us with their luxury properties. 
            Request a private consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote-request">Private Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default VirginiaWater;

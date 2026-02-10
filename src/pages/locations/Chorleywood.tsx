import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RelatedLocations from "@/components/locations/RelatedLocations";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const Chorleywood = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Chorleywood | Chilterns Village Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Chorleywood, Hertfordshire. Chilterns AONB village specialists. Common-side properties, period homes & Metropolitan line area." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/chorleywood" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Chorleywood" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Chorleywood, Hertfordshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Chorleywood is one of the most sought-after villages on the Metropolitan line, 
                set within the Chilterns Area of Outstanding Natural Beauty. The village common, 
                excellent schools, and fast service to Baker Street make it highly desirable.
              </p>
              <p className="mb-6">
                Our secondary glazing solutions respect the character of this beautiful village 
                while providing the comfort and efficiency modern families require.
              </p>
              <Button asChild>
                <Link to="/quote-request">Village Property Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Chilterns Heritage Experts</h3>
              <p className="text-muted-foreground">Preserving Chorleywood's village character</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Chorleywood Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Common-Side Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bespoke solutions for the prestigious properties surrounding Chorleywood Common.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Arts & Crafts Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist glazing for the area's distinctive early 20th-century Arts and Crafts properties.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AONB Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Solutions that meet the stringent requirements of the Chilterns Area of Outstanding Natural Beauty.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Village Living Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Heritage Preservation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AONB-sensitive installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Period feature retention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Minimal visual impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reversible systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Comfort Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Metropolitan line noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thermal efficiency gains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Draft elimination</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Chorleywood" currentRegion="Hertfordshire" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Preserve Your Chorleywood Home</h2>
          <p className="mb-6 text-lg">
            Expert secondary glazing that respects village character and Chilterns beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote-request">Free Quote</Link>
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

export default Chorleywood;
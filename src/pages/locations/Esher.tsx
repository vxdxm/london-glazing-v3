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

const Esher = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Esher | Claremont & Sandown Park Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Esher, Surrey. Claremont estate & Sandown Park area specialists. Upscale property glazing & heritage preservation." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/esher" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Esher" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Esher, Surrey</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Esher combines elegant period properties with upscale neighbourhoods like 
                Claremont, making it one of Surrey's most desirable addresses. With Sandown 
                Park racecourse and excellent transport links, this is premium Surrey living.
              </p>
              <p className="mb-6">
                Our secondary glazing expertise ensures Esher's distinguished properties 
                receive solutions that match their quality and character.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Elmbridge Elite Service</h3>
              <p className="text-muted-foreground">Serving Esher's finest addresses</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Esher Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Claremont Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Premium solutions for the exclusive Claremont estate properties with discrete, professional service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Victorian & Edwardian</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist glazing for Esher's beautiful period properties, preserving character while improving comfort.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Racecourse Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acoustic solutions for properties near Sandown Park, ensuring peace during race meetings.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Esher Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Property Enhancement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>A3 traffic noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Preservation of period features</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Discrete professional teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Complete project management</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Esher" currentRegion="Surrey" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Esher Property</h2>
          <p className="mb-6 text-lg">
            Premium secondary glazing for Surrey's most elegant addresses.
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

export default Esher;
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

const GerrardsCross = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Gerrards Cross | Chiltern Commuter Belt Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Gerrards Cross, Buckinghamshire. Chiltern Railways commuter belt specialists. Large detached homes & period property glazing." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/gerrards-cross" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Gerrards Cross" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Gerrards Cross, Buckinghamshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Gerrards Cross epitomizes the quintessential English commuter town, with its 
                large detached homes, excellent schools, and fast Chiltern Railways service 
                to Marylebone. This sought-after Buckinghamshire location demands quality.
              </p>
              <p className="mb-6">
                From Arts and Crafts properties to substantial family homes, we provide 
                secondary glazing solutions that enhance both comfort and property value.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">South Bucks Premium Service</h3>
              <p className="text-muted-foreground">Trusted throughout the Chiltern commuter belt</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Gerrards Cross Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Large Family Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive solutions for Gerrards Cross's substantial detached properties with multiple window styles.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Period Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist glazing for 1920s-1930s Arts and Crafts and mock-Tudor homes that define the area.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Railway Noise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acoustic solutions for properties near the Chiltern Main Line, reducing train noise significantly.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Gerrards Cross Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Property Enhancement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 80% noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant thermal improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Added property value</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>South Bucks compliance expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Clean, efficient installations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Gerrards Cross" currentRegion="Buckinghamshire" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Gerrards Cross Home</h2>
          <p className="mb-6 text-lg">
            Join the homeowners who have enhanced their properties with expert secondary glazing.
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

export default GerrardsCross;
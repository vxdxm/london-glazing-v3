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

const Beaconsfield = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Beaconsfield | Historic Market Town Specialists</title>
        <meta 
          name="description" 
          content="Premium secondary glazing in Beaconsfield, Buckinghamshire. Historic Old Town specialists. Period property glazing, noise reduction & heritage preservation." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/beaconsfield" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Beaconsfield" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Beaconsfield, Buckinghamshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Beaconsfield consistently ranks among the UK's most desirable places to live. 
                With its beautiful historic Old Town and excellent transport links via the 
                Chiltern Line to Marylebone, this Buckinghamshire gem deserves the finest glazing solutions.
              </p>
              <p className="mb-6">
                Our expertise in period properties makes us the ideal choice for Beaconsfield's 
                Georgian, Victorian, and Edwardian homes in both the Old Town and New Town areas.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Expert Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Chiltern Conservation Experts</h3>
              <p className="text-muted-foreground">Trusted by homeowners in South Bucks' premier location</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Beaconsfield Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Old Town Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist solutions for the historic Old Town's protected buildings, maintaining character while improving comfort.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>M40 Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Advanced acoustic glazing for properties affected by motorway noise, restoring peace to your home.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Large Family Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive solutions for Beaconsfield's substantial family properties with multiple window types.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Why Choose Us in Beaconsfield" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Heritage Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation area approved installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Period-accurate glazing bar replication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Completely reversible systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Listed building expertise</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 80% noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant energy bill savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced condensation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Beaconsfield" currentRegion="Buckinghamshire" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Transform Your Beaconsfield Home</h2>
          <p className="mb-6 text-lg">
            Join the homeowners who have enhanced their properties with our expert secondary glazing.
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

export default Beaconsfield;
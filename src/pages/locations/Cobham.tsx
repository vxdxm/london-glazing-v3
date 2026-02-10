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

const Cobham = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Cobham | Surrey Stockbroker Belt Specialists</title>
        <meta 
          name="description" 
          content="Premium secondary glazing in Cobham, Surrey. Stockbroker belt specialists. ACS International School area, luxury properties & heritage preservation." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/cobham" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Cobham" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Cobham, Surrey</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Cobham represents the heart of Surrey's stockbroker belt, known for excellent 
                schools including ACS International, beautiful village character, and proximity 
                to both London and the Surrey countryside.
              </p>
              <p className="mb-6">
                Our secondary glazing solutions serve Cobham's diverse properties, from 
                village centre period buildings to the substantial homes in surrounding areas.
              </p>
              <Button asChild>
                <Link to="/quote-request">Request Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Elmbridge Premium Service</h3>
              <p className="text-muted-foreground">Trusted throughout Surrey's premier villages</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Cobham Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Village Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Heritage-sensitive solutions for Cobham's charming village centre buildings and conservation areas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Executive Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive glazing for the substantial executive properties that characterize the area.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>A3 Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Advanced acoustic solutions for properties affected by A3 motorway noise.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Why Cobham Chooses Us" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Premium materials throughout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Expert installation teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comprehensive warranties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>After-care service</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved security</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Cobham" currentRegion="Surrey" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Cobham Property</h2>
          <p className="mb-6 text-lg">
            Premium secondary glazing for Surrey's stockbroker belt.
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

export default Cobham;
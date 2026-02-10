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

const Radlett = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Radlett | Hertsmere Village Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Radlett, Hertfordshire. Thameslink corridor specialists. Village atmosphere homes, period properties & commuter belt glazing." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/radlett" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Radlett" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Radlett, Hertfordshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Radlett offers village atmosphere with excellent Thameslink services to the City. 
                Known for highly-rated schools and beautiful period properties, this Hertsmere 
                village is perfect for families seeking quality living with London accessibility.
              </p>
              <p className="mb-6">
                Our secondary glazing expertise serves Radlett's range of properties, from 
                Victorian cottages to substantial Edwardian and inter-war family homes.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Hertsmere Specialists</h3>
              <p className="text-muted-foreground">Trusted throughout south Hertfordshire</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Radlett Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Period Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist glazing for Radlett's Victorian and Edwardian homes with heritage sensitivity.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Family Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive solutions for the substantial inter-war and post-war family properties.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Railway Noise</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acoustic solutions for properties near the Thameslink Midland Main Line.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Radlett Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Train noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>A5183/M25 traffic insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Energy efficiency improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Security enhancement</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hertsmere compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Radlett" currentRegion="Hertfordshire" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Radlett Home</h2>
          <p className="mb-6 text-lg">
            Expert secondary glazing for Hertfordshire's village living.
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

export default Radlett;
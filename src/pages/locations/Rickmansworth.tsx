import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Rickmansworth = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Rickmansworth | Metropolitan Line Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Rickmansworth, Hertfordshire. Metropolitan line commuter specialists. Canal-side properties, period homes & heritage glazing." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/rickmansworth" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Rickmansworth, Hertfordshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Rickmansworth offers the perfect blend of Hertfordshire countryside and 
                Metropolitan line convenience. With beautiful canal-side living and a mix 
                of period and modern properties, this Three Rivers gem is highly sought-after.
              </p>
              <p className="mb-6">
                Our secondary glazing solutions are tailored to Rickmansworth's diverse 
                housing stock, from Victorian terraces to contemporary waterside developments.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Three Rivers Specialists</h3>
              <p className="text-muted-foreground">Serving Rickmansworth and surrounding areas</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Rickmansworth Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Canal-Side Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist solutions for waterside homes, addressing humidity control and maximizing canal views.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Period Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Heritage-sensitive glazing for Rickmansworth's Victorian and Edwardian properties in conservation areas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Railway Proximity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acoustic solutions for properties near the Metropolitan and Chiltern lines.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Local Benefits" />
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
                  <span>M25 traffic sound insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Condensation control</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Three Rivers Council compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Professional installation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Rickmansworth Property</h2>
          <p className="mb-6 text-lg">
            Expert secondary glazing for Hertfordshire's commuter heartland.
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
    </>
  );
};

export default Rickmansworth;

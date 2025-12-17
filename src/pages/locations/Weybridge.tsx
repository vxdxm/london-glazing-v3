import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RelatedLocations from "@/components/locations/RelatedLocations";

const Weybridge = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Weybridge | St George's Hill Specialists</title>
        <meta 
          name="description" 
          content="Premium secondary glazing in Weybridge, Surrey. St George's Hill estate specialists. Luxury property glazing, security enhancement & noise reduction." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/weybridge" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Weybridge, Surrey</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Weybridge sits at the heart of Surrey's affluent belt, home to the exclusive 
                St George's Hill estate and a wealth of prestigious properties. Our secondary 
                glazing solutions meet the exacting standards of this distinguished area.
              </p>
              <p className="mb-6">
                From private estates to riverside properties along the Thames, we deliver 
                installations that enhance security, comfort, and energy efficiency.
              </p>
              <Button asChild>
                <Link to="/quote-request">Request Consultation</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Surrey Belt Specialists</h3>
              <p className="text-muted-foreground">Trusted throughout Elmbridge's premier addresses</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Weybridge Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Private Estates</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bespoke solutions for St George's Hill and other private estate properties, with discrete professional service.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Riverside Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist glazing for Thames-side homes, addressing unique moisture and condensation challenges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhanced laminated glass options providing additional security layers for high-value properties.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Weybridge Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Premium Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Vetted, professional installation teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling for busy professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Complete project management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Elmbridge Borough compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Estate management liaison</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation area experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Weybridge" currentRegion="Surrey" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Elevate Your Weybridge Property</h2>
          <p className="mb-6 text-lg">
            Experience the premium service that Weybridge homeowners expect and deserve.
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
    </>
  );
};

export default Weybridge;

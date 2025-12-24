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

const Ascot = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Ascot | Royal Berkshire Window Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Ascot, Berkshire. Luxury property specialists near Royal Ascot & Windsor. Period homes, noise reduction & thermal efficiency." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/ascot" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Ascot" />
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Ascot, Berkshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Ascot, synonymous with the Royal Ascot racecourse and proximity to Windsor Castle, 
                is home to some of Berkshire's finest properties. Our secondary glazing solutions 
                complement the elegance of this prestigious area.
              </p>
              <p className="mb-6">
                From Victorian villas to contemporary estates, we deliver bespoke installations 
                that enhance both the comfort and value of your Ascot property.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Royal Berkshire Specialists</h3>
              <p className="text-muted-foreground">Serving Ascot's luxury homes with distinction</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Ascot Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Victorian & Edwardian Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sensitive installations for Ascot's beautiful period properties, preserving original character while improving performance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Racecourse Proximity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhanced acoustic solutions for properties near the racecourse, maintaining peace during event days.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduce heating costs in large period homes with our advanced thermal insulation glazing systems.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Benefits for Ascot Homeowners" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Property Enhancement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant noise reduction from A329 traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 65% improvement in thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced security for valuable properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Preservation of period window features</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Knowledge</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Understanding of Bracknell Forest requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Experience with Crown Estate properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation area compliance expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Ascot" currentRegion="Berkshire" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Ascot Property</h2>
          <p className="mb-6 text-lg">
            Experience the difference premium secondary glazing makes to your Berkshire home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote-request">Request Quote</Link>
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

export default Ascot;

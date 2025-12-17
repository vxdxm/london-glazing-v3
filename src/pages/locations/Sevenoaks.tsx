import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Sevenoaks = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Sevenoaks | Kent Heritage Property Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Sevenoaks, Kent. Knole Park area specialists. Heritage property glazing, grammar school belt homes & listed building expertise." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/sevenoaks" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Sevenoaks, Kent</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Sevenoaks is a classic Kent commuter town, renowned for its excellent grammar schools, 
                the magnificent Knole Park, and direct rail links to London Bridge. The town's 
                beautiful period properties deserve glazing solutions that match their character.
              </p>
              <p className="mb-6">
                Our expertise in heritage properties makes us the trusted choice for Sevenoaks' 
                Victorian, Edwardian, and Georgian homes throughout the town and surrounding villages.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Kent Heritage Specialists</h3>
              <p className="text-muted-foreground">Serving Sevenoaks' finest properties with care</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Sevenoaks Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Period Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sensitive installations for Sevenoaks' beautiful Victorian and Edwardian homes, preserving original features.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Village Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expert solutions for surrounding villages including Otford, Shoreham, and Kemsing conservation areas.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Thermal Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhanced insulation for large family homes, reducing heating costs in Kent's cooler climate.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Why Sevenoaks Homeowners Choose Us" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Heritage Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Listed building consent experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation area compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Period-accurate glazing patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reversible installations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Significant noise reduction from A21/M25</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved thermal efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced home security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Condensation elimination</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Sevenoaks Home</h2>
          <p className="mb-6 text-lg">
            Discover how secondary glazing can transform your Kent property's comfort and efficiency.
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

export default Sevenoaks;

import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Chigwell = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Chigwell | Essex Commuter Belt Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Chigwell, Essex. Central line corridor specialists. Prosperous commuter homes, period properties & luxury estate glazing." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/chigwell" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Chigwell, Essex</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Chigwell is one of Essex's most prosperous areas, situated on the Central line 
                and popular with City professionals. With its mix of period properties and 
                modern luxury homes, this Epping Forest district location demands quality solutions.
              </p>
              <p className="mb-6">
                Our secondary glazing expertise serves Chigwell's diverse housing stock, from 
                Victorian properties to contemporary executive homes in gated developments.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Epping Forest District Experts</h3>
              <p className="text-muted-foreground">Serving Essex's premier commuter addresses</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Chigwell Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Executive Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Premium solutions for Chigwell's substantial executive homes and gated developments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Period Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Heritage-sensitive glazing for the area's Victorian and Edwardian properties.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Security Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhanced security glazing options for high-value properties throughout the area.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Chigwell Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>M11/A113 traffic noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Central line noise insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thermal efficiency improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced home security</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Epping Forest District compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Discrete professional teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Chigwell Property</h2>
          <p className="mb-6 text-lg">
            Premium secondary glazing for Essex's prestigious commuter addresses.
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

export default Chigwell;

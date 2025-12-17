import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TunbridgeWells = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Tunbridge Wells | Georgian Spa Town Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Royal Tunbridge Wells, Kent. Georgian architecture specialists. Period property glazing, Pantiles area & heritage preservation." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/tunbridge-wells" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Royal Tunbridge Wells</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Royal Tunbridge Wells is an elegant spa town with stunning Georgian architecture, 
                the historic Pantiles colonnade, and beautiful common land. This Kent jewel 
                deserves glazing solutions that respect its architectural heritage.
              </p>
              <p className="mb-6">
                Our expertise in Georgian and Victorian properties makes us the ideal choice 
                for The Pantiles, Calverley Park, and the town's many conservation areas.
              </p>
              <Button asChild>
                <Link to="/quote-request">Georgian Specialist Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Spa Town Heritage Experts</h3>
              <p className="text-muted-foreground">Preserving Tunbridge Wells' architectural beauty</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Tunbridge Wells Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Georgian Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist solutions for the town's magnificent Georgian properties, including The Pantiles and Mount Ephraim.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Victorian Villas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Expert installations for the substantial Victorian properties that characterize much of the town.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conservation Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Full compliance with Tunbridge Wells Borough Council conservation requirements and guidelines.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Benefits for Local Homeowners" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Heritage Preservation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Listed building approved methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Accurate period glazing replication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Minimal visual impact designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fully reversible systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Comfort Improvements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Noise reduction from A26 traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved thermal performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Draft elimination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Condensation prevention</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Preserve Your Tunbridge Wells Property</h2>
          <p className="mb-6 text-lg">
            Expert secondary glazing that respects the town's beautiful heritage architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote-request">Heritage Quote</Link>
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

export default TunbridgeWells;

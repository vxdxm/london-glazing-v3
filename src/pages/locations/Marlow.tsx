import React from "react";
import { Helmet } from "react-helmet";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Marlow = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Marlow | Thames-Side Luxury Specialists</title>
        <meta 
          name="description" 
          content="Premium secondary glazing in Marlow, Buckinghamshire. Thames-side property specialists. Georgian High Street, riverside homes & heritage preservation." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/marlow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Marlow, Buckinghamshire</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Marlow is one of England's most charming Thames-side towns, known for its 
                beautiful Georgian High Street, iconic suspension bridge, and renowned 
                restaurants. This ultra-wealthy Buckinghamshire gem deserves exceptional care.
              </p>
              <p className="mb-6">
                From riverside properties to historic High Street buildings, we provide 
                bespoke secondary glazing that enhances comfort while preserving the 
                town's distinctive character.
              </p>
              <Button asChild>
                <Link to="/quote-request">Luxury Property Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Thames Valley Premium Service</h3>
              <p className="text-muted-foreground">Serving Marlow's most distinguished properties</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Marlow Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Riverside Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist solutions for Thames-side homes, addressing humidity and condensation while maximizing river views.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Georgian High Street</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Heritage-sensitive installations for the beautiful Georgian buildings along Marlow's famous High Street.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Luxury Estates</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive glazing for Marlow's substantial private estates and country properties.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Why Marlow Residents Choose Us" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Highest quality materials and finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Expert craftsmanship throughout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Discrete professional service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Complete project management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Wycombe District compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Conservation area experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Listed building expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Enhance Your Marlow Property</h2>
          <p className="mb-6 text-lg">
            Experience the premium service that Marlow's finest properties deserve.
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

export default Marlow;

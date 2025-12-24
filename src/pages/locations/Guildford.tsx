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

const Guildford = () => {
  return (
    <>
      <Helmet>
        <title>Secondary Glazing Guildford | Surrey County Town Specialists</title>
        <meta 
          name="description" 
          content="Expert secondary glazing in Guildford, Surrey. Historic High Street & Cathedral Quarter specialists. Period property glazing & noise reduction solutions." 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations/guildford" />
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Guildford" />
        
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Secondary Glazing in Guildford, Surrey</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Guildford, Surrey's historic county town, combines a medieval High Street, 
                modern cathedral, and excellent shopping with direct trains to Waterloo. 
                This vibrant town's diverse architecture demands expert glazing solutions.
              </p>
              <p className="mb-6">
                From the cobbled High Street's historic buildings to the substantial family 
                homes in areas like Merrow and Burpham, we provide tailored secondary glazing 
                for every property type.
              </p>
              <Button asChild>
                <Link to="/quote-request">Get Your Quote</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Surrey's County Town Experts</h3>
              <p className="text-muted-foreground">Serving Guildford's diverse property portfolio</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Guildford Property Solutions" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Historic Town Centre</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Specialist solutions for High Street and town centre buildings with listed building and conservation compliance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Suburban Family Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive glazing for the substantial period homes in Merrow, Burpham, and Onslow Village.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>University Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acoustic solutions for properties near the University of Surrey campus and Stag Hill area.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Guildford Homeowner Benefits" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Noise Reduction</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>A3 and A31 traffic noise reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Town centre activity insulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Railway line acoustic barriers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Energy Efficiency</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Reduced heating bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved thermal comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lower carbon footprint</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLocations currentLocation="Guildford" currentRegion="Surrey" />

        <section className="text-center bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upgrade Your Guildford Property</h2>
          <p className="mb-6 text-lg">
            Expert secondary glazing for Surrey's county town.
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

export default Guildford;
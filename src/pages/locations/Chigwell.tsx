import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RelatedLocations from "@/components/locations/RelatedLocations";
import LocationBreadcrumb from "@/components/locations/LocationBreadcrumb";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import RelatedResources from "@/components/seo/RelatedResources";

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
      
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <LocationBreadcrumb locationName="Chigwell" />
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

        <RelatedLocations currentLocation="Chigwell" currentRegion="Essex" />

        <section className="mb-12" aria-labelledby="chigwell-spec">
          <h2 id="chigwell-spec" className="text-3xl font-semibold mb-4">Chigwell specification notes</h2>
          <p className="mb-4">
            Chigwell's noise profile is dominated by two sources: the M11 and A113 road corridors to the north and
            east, and Central line rolling stock running at surface level through Grange Hill and Chigwell stations.
            Both are low-frequency dominant, which means the C<sub>tr</sub> spectrum adaptation term matters more than
            the headline Rw figure. For properties within 200m of the A113 we specify 8.8mm acoustic laminate in a
            100mm cavity, giving an indicative Rw of 42–46dB and comfortably meeting the BS 8233:2014 bedroom target
            of 30dB L<sub>Aeq,8hr</sub>. Properties on the quieter estate roads off Manor Road are usually well served
            by 6.4mm laminate at 38–41dB.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">Chigwell property types and recommended specification</caption>
              <thead>
                <tr className="bg-muted">
                  <th scope="col" className="text-left p-3 border">Property type</th>
                  <th scope="col" className="text-left p-3 border">Typical opening</th>
                  <th scope="col" className="text-left p-3 border">Recommended specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Victorian and Edwardian terraces</td>
                  <td className="p-3 border">Timber vertical sliding sash</td>
                  <td className="p-3 border">Vertical slider, 6.4–8.8mm laminate, slimline white or bronze frame</td>
                </tr>
                <tr>
                  <td className="p-3 border">Inter-war semi-detached</td>
                  <td className="p-3 border">Steel or timber casement</td>
                  <td className="p-3 border">Hinged casement units with Pilkington K low-E glass</td>
                </tr>
                <tr>
                  <td className="p-3 border">Executive and gated developments</td>
                  <td className="p-3 border">Large-format picture and bay openings</td>
                  <td className="p-3 border">Horizontal sliders with 10.8mm Stadip Silence, keyed-alike locking</td>
                </tr>
                <tr>
                  <td className="p-3 border">Epping Forest fringe cottages</td>
                  <td className="p-3 border">Small-pane heritage openings</td>
                  <td className="p-3 border">Lift-out panels, fully reversible, minimal sightline</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-2">Planning and Epping Forest District Council</h3>
          <p className="mb-4">
            Secondary glazing is an internal, reversible alteration and does not normally require planning permission
            in Chigwell. Listed Building Consent is required for the area's small number of listed properties, and is
            routinely granted because the original window is retained in full. Parts of Chigwell Village and the
            Epping Forest fringe fall within conservation areas, where a short pre-application enquiry to Epping
            Forest District Council confirms the approach before order. We supply the reversibility statement and
            drawings needed for that submission.
          </p>
          <h3 className="text-xl font-semibold mb-2">Thermal and security performance</h3>
          <p className="mb-4">
            With a low-emissivity secondary pane, a single-glazed Chigwell sash improves from roughly 4.8 W/m²K to
            around 1.9 W/m²K, cutting heat loss through the opening by about 60% and typically reducing heating costs
            by 15–30%. For higher-value properties, laminated glass to BS EN 12600 Class 2(B)2 combined with hidden
            fixings and anti-tamper screws adds a meaningful delay-to-entry layer that many insurers recognise —
            useful on ground-floor and garden-facing elevations in the gated developments off Chigwell Rise.
          </p>
        </section>

        <RelatedResources
          title="Related services for Chigwell homeowners"
          links={[
            { title: "Sound insulation", href: "/sound-insulation", description: "M11, A113 and Central line noise treatment." },
            { title: "Security glazing", href: "/specialized/security-glazing", description: "Laminated glass and locking for high-value homes." },
            { title: "Thermal insulation", href: "/specialized/thermal-insulation", description: "U-value and EPC improvement without new windows." },
            { title: "Heritage & listed buildings", href: "/heritage-listed", description: "Consent-friendly glazing for protected properties." },
            { title: "Sash window glazing", href: "/residential/sash-windows", description: "Vertical sliding units for period terraces." },
            { title: "Cost guide", href: "/cost-guide", description: "What Chigwell projects typically cost per opening." },
            { title: "Chigwell area coverage", href: "/areas/greater-london", description: "Our wider Greater London and Essex coverage." },
            { title: "Compliance hub", href: "/compliance-hub", description: "Planning, Part F and building regulations guidance." },
            { title: "Get a quote", href: "/quote-request", description: "Free survey across Epping Forest District." },
          ]}
        />

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
      </main>
      <Footer />
    </>
  );
};

export default Chigwell;

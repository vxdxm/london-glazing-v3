import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, TreePine, Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface LocationItem {
  name: string;
  path: string;
  description: string;
}

interface LocationRegion {
  region: string;
  icon: React.ReactNode;
  description: string;
  locations: LocationItem[];
}

const locationRegions: LocationRegion[] = [
  {
    region: "London",
    icon: <Building2 className="h-6 w-6" />,
    description: "Specialist secondary glazing for the capital's diverse architecture",
    locations: [
      { name: "Victorian Islington", path: "/locations/victorian-islington", description: "Period property specialists" },
      { name: "Edwardian Hampstead", path: "/locations/edwardian-hampstead", description: "Heritage home solutions" },
      { name: "Listed Kensington", path: "/locations/listed-kensington", description: "Grade I & II listed buildings" },
      { name: "Georgian Belgravia", path: "/locations/georgian-belgravia", description: "Elegant period glazing" },
      { name: "Conservation Richmond", path: "/locations/conservation-richmond", description: "Conservation area expertise" },
      { name: "Canary Wharf", path: "/locations/canary-wharf-offices", description: "Commercial office solutions" },
      { name: "Clapham", path: "/locations/clapham-busy-roads", description: "Busy road noise reduction" },
      { name: "Heathrow Area", path: "/locations/heathrow-aircraft", description: "Aircraft noise specialists" },
      { name: "King's Cross", path: "/locations/kings-cross-train-noise", description: "Train noise solutions" },
      { name: "Shoreditch", path: "/locations/shoreditch-urban-noise", description: "Urban noise reduction" },
      { name: "Notting Hill", path: "/locations/notting-hill-security", description: "Security glazing focus" },
      { name: "Hackney", path: "/locations/hackney-energy-efficiency", description: "Energy efficiency experts" },
      { name: "Chelsea", path: "/locations/chelsea-draught-proofing", description: "Draught proofing specialists" },
    ],
  },
  {
    region: "Surrey",
    icon: <TreePine className="h-6 w-6" />,
    description: "Premium glazing for Surrey's stockbroker belt and commuter towns",
    locations: [
      { name: "Virginia Water", path: "/locations/virginia-water", description: "Wentworth Estate specialists" },
      { name: "Weybridge", path: "/locations/weybridge", description: "St George's Hill experts" },
      { name: "Cobham", path: "/locations/cobham", description: "Elmbridge premium service" },
      { name: "Esher", path: "/locations/esher", description: "Claremont & Sandown area" },
      { name: "Guildford", path: "/locations/guildford", description: "County town specialists" },
    ],
  },
  {
    region: "Kent",
    icon: <TreePine className="h-6 w-6" />,
    description: "Heritage glazing for Kent's garden towns and historic properties",
    locations: [
      { name: "Sevenoaks", path: "/locations/sevenoaks", description: "Knole Park area experts" },
      { name: "Tunbridge Wells", path: "/locations/tunbridge-wells", description: "Georgian spa town specialists" },
    ],
  },
  {
    region: "Buckinghamshire",
    icon: <TreePine className="h-6 w-6" />,
    description: "Expert glazing for Chilterns villages and Thames Valley properties",
    locations: [
      { name: "Beaconsfield", path: "/locations/beaconsfield", description: "Historic market town" },
      { name: "Marlow", path: "/locations/marlow", description: "Thames-side luxury homes" },
      { name: "Gerrards Cross", path: "/locations/gerrards-cross", description: "Chiltern commuter belt" },
    ],
  },
  {
    region: "Hertfordshire",
    icon: <TreePine className="h-6 w-6" />,
    description: "Quality glazing for Hertfordshire's sought-after villages",
    locations: [
      { name: "Rickmansworth", path: "/locations/rickmansworth", description: "Metropolitan line corridor" },
      { name: "Chorleywood", path: "/locations/chorleywood", description: "Chilterns AONB village" },
      { name: "Radlett", path: "/locations/radlett", description: "Thameslink commuter town" },
    ],
  },
  {
    region: "Berkshire",
    icon: <TreePine className="h-6 w-6" />,
    description: "Luxury glazing solutions near Windsor and Royal Berkshire",
    locations: [
      { name: "Ascot", path: "/locations/ascot", description: "Royal Ascot area specialists" },
    ],
  },
  {
    region: "Essex",
    icon: <TreePine className="h-6 w-6" />,
    description: "Premium glazing for Essex's prosperous commuter areas",
    locations: [
      { name: "Chigwell", path: "/locations/chigwell", description: "Central line corridor" },
    ],
  },
];

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Areas We Serve | Secondary Glazing London & Home Counties</title>
        <meta
          name="description"
          content="Secondary glazing specialists serving London, Surrey, Kent, Buckinghamshire, Hertfordshire, Berkshire & Essex. Find your local area for expert glazing solutions."
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/locations" />
      </Helmet>

      <MainNav />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Locations</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Serve</h1>
              <p className="text-lg text-muted-foreground">
                From Central London to the Home Counties, we provide expert secondary glazing 
                installation across the South East. Find your local area below for tailored 
                solutions that meet your property's specific requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {locationRegions.map((region) => (
              <div key={region.region} className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary">{region.icon}</div>
                  <h2 className="text-2xl font-bold">{region.region}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{region.description}</p>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {region.locations.map((location) => (
                    <Link key={location.path} to={location.path}>
                      <Card className="h-full hover:shadow-md hover:border-primary/50 transition-all group">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-semibold group-hover:text-primary transition-colors">
                                {location.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {location.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <SectionHeading title="Don't See Your Area?" />
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We serve the entire South East of England. If your area isn't listed above, 
              please get in touch - we're likely able to help with your secondary glazing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote-request"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Locations;

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { RelatedGuides } from "@/components/blog/RelatedGuides";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const boroughs = [
  { name: "Kensington & Chelsea", href: "/areas/kensington-chelsea", description: "Stucco terraces, listed buildings & conservation areas" },
  { name: "Westminster", href: "/service-areas/westminster", description: "Georgian townhouses & Mayfair period properties" },
  { name: "Camden", href: "/service-areas/camden", description: "Victorian terraces & Primrose Hill conservation area" },
  { name: "Islington", href: "/service-areas/islington", description: "Georgian squares & Canonbury conservation areas" },
  { name: "Hampstead", href: "/locations/edwardian-hampstead", description: "Edwardian villas & Heath-side period homes" },
  { name: "Richmond", href: "/locations/conservation-richmond", description: "Riverside conservation areas & period properties" },
  { name: "Wandsworth", href: "/areas/south-london", description: "Victorian terraces & Battersea period homes" },
  { name: "Hammersmith & Fulham", href: "/areas/west-london", description: "Edwardian mansion flats & Brook Green terraces" },
  { name: "Hackney", href: "/locations/hackney-energy-efficiency", description: "Victorian terraces & energy efficiency upgrades" },
  { name: "Tower Hamlets", href: "/areas/east-london", description: "Converted warehouses & heritage properties" },
  { name: "Barnet", href: "/areas/north-london", description: "Edwardian semis & suburban conservation areas" },
  { name: "Greenwich", href: "/areas/south-london", description: "Georgian Maritime heritage & riverside homes" },
];

const AreasWeServe = () => {
  return (
    <>
      <EnhancedSEO
        title="Areas We Serve | Secondary Glazing Across London Boroughs"
        description="Expert secondary glazing installation across all London boroughs. Find your local specialist for heritage homes, listed buildings, and conservation areas in Kensington, Westminster, Camden & more."
        canonicalPath="/areas-we-serve"
        type="website"
        keywords={[
          "secondary glazing London boroughs",
          "secondary glazing near me",
          "London secondary glazing installers",
          "heritage window specialists London",
        ]}
        includeLocalBusiness
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Secondary Glazing Specialist",
            description: "Professional secondary glazing installation across all London boroughs.",
            areaServed: boroughs.map((b) => ({ "@type": "City", name: b.name })),
            address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Areas We Serve Across London
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert secondary glazing installation for heritage homes, listed buildings, and conservation areas in every London borough.
          </p>
          <Link to="/quote-request">
            <Button size="lg" className="gap-2">
              Get My Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Borough Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            London Boroughs We Cover
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boroughs.map((borough) => (
              <Link key={borough.name} to={borough.href} className="group">
                <div className="bg-background border border-border rounded-xl p-6 h-full hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{borough.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{borough.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Not Sure If We Cover Your Area?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We serve all of Greater London and the Home Counties. Get in touch for a free, no-obligation survey.
            </p>
            <Link to="/quote-request">
              <Button size="lg" className="gap-2">
                Get My Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <RelatedGuides currentSlug="areas-we-serve" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AreasWeServe;

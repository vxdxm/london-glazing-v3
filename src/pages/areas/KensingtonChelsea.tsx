import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { BenefitsGrid, LocalLandmarksFooter, AreaCTA } from "@/components/areas/AreaPageTemplate";
import { RelatedGuides } from "@/components/blog/RelatedGuides";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const KensingtonChelseaArea = () => {
  return (
    <>
      <EnhancedSEO
        title="Specialist Secondary Glazing for Kensington & Chelsea Heritage Homes"
        description="Conservation-approved secondary glazing for Kensington & Chelsea listed buildings, stucco terraces, and Victorian sash windows. 80% noise reduction, 60% heat loss improvement. Free survey."
        canonicalPath="/areas/kensington-chelsea"
        type="website"
        keywords={[
          "secondary glazing Kensington",
          "secondary glazing Chelsea",
          "sash window glazing Kensington Chelsea",
          "listed building windows Kensington",
          "noise reduction Chelsea",
          "conservation area glazing RBKC",
          "stucco terrace secondary glazing",
        ]}
        includeLocalBusiness
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Secondary Glazing Specialist — Kensington & Chelsea",
            description: "Professional secondary glazing installation for heritage homes in Kensington & Chelsea.",
            areaServed: { "@type": "City", name: "Royal Borough of Kensington and Chelsea" },
            address: { "@type": "PostalAddress", addressLocality: "London", addressRegion: "Kensington and Chelsea", addressCountry: "GB" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5" },
          })}
        </script>
      </Helmet>

      <MainNav />

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Specialist Secondary Glazing for Kensington &amp; Chelsea Heritage Homes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conservation-approved solutions for listed buildings, stucco terraces, and Victorian sash windows across the Royal Borough.
          </p>
          <Link to="/quote-request">
            <Button size="lg" className="gap-2">
              Get My Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why K&C Homes Need This */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Kensington &amp; Chelsea Homes Need Secondary Glazing
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Royal Borough of Kensington and Chelsea is home to some of London's most iconic period architecture — from the white stucco-fronted terraces of <strong>Holland Park</strong> and <strong>Notting Hill</strong> to the grand Victorian red-brick mansions along the <strong>King's Road</strong>. These Grade II listed properties and conservation area homes feature original <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">timber sash windows</Link> that are architecturally irreplaceable.
            </p>
            <p>
              But single-glazed <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian sash windows</Link> bring serious challenges: relentless traffic noise from the A4 Cromwell Road and Kensington High Street, heat loss driving up bills in large period rooms, and winter condensation that damages original timber frames. Replacement double glazing is almost always refused by the RBKC Conservation team.
            </p>
            <p>
              Our <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">acoustic secondary glazing</Link> using <strong>10.8mm Stadip Silence laminate glass</strong> and <strong>100mm air gaps</strong> delivers 70–80% noise reduction while remaining completely invisible from the street. We've completed hundreds of installations across Chelsea, South Kensington, Earl's Court, and Knightsbridge — all fully approved by RBKC conservation officers.
            </p>
          </div>
        </div>
      </section>

      {/* Preserving Stucco Terraces & Victorian Sashes */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Preserving Stucco Terraces &amp; Victorian Sashes
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Kensington and Chelsea's character is defined by its architecture. The white stucco-fronted terraces of <strong>Ladbroke Grove</strong>, <strong>Pembridge Villas</strong>, and <strong>Onslow Gardens</strong> are protected under some of London's strictest conservation rules. Original sash windows — with their slender glazing bars, crown glass, and hand-forged ironmongery — are integral to the streetscape.
            </p>
            <p>
              Our secondary glazing is designed to be <strong>completely invisible from the exterior</strong>. Slim aluminium frames finished in heritage white sit flush behind the original timber, preserving sightlines and period proportions. Conservation officers across RBKC routinely approve our installations because they meet the council's strict "no visible alteration" requirement.
            </p>
            <p>
              For Victorian red-brick properties along the <strong>King's Road</strong>, <strong>Draycott Place</strong>, and <strong>Cadogan Square</strong>, we match frame profiles to the existing window proportions. The result is a thermal and acoustic upgrade that's entirely sympathetic to the building's original character.
            </p>
            <p>
              Want to understand more about conservation-compliant glazing? Read our comprehensive{" "}
              <Link to="/blog/listed-building-secondary-glazing-guide" className="text-primary hover:underline font-semibold">
                Heritage &amp; Listed Buildings Guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <BenefitsGrid />

      <AreaCTA />

      {/* Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <RelatedGuides currentSlug="kensington-chelsea" />
        </div>
      </section>

      <LocalLandmarksFooter
        areaName="Kensington & Chelsea"
        text="Serving properties near the Royal Albert Hall, Natural History Museum, Kensington Palace, King's Road, Sloane Square, Holland Park, Notting Hill Gate, Earl's Court, South Kensington, Knightsbridge, and all RBKC conservation areas. Our installers are familiar with borough-specific planning restrictions and heritage requirements for this prestigious London borough."
      />

      <Footer />
    </>
  );
};

export default KensingtonChelseaArea;

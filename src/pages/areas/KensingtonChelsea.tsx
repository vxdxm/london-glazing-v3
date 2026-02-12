import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { EnhancedSEO } from "@/components/seo/EnhancedSEO";
import { AreaHero, BenefitsGrid, LocalLandmarksFooter, AreaCTA } from "@/components/areas/AreaPageTemplate";

const KensingtonChelseaArea = () => {
  return (
    <>
      <EnhancedSEO
        title="Kensington & Chelsea Secondary Glazing Specialists | Heritage Window Experts"
        description="Expert secondary glazing for Kensington & Chelsea period homes. Conservation-approved solutions for listed buildings, stucco terraces, and Victorian sash windows. 80% noise reduction."
        canonicalPath="/areas/kensington-chelsea"
        type="website"
        keywords={[
          "secondary glazing Kensington",
          "secondary glazing Chelsea",
          "sash window glazing Kensington Chelsea",
          "listed building windows Kensington",
          "noise reduction Chelsea",
          "conservation area glazing RBKC",
        ]}
        includeLocalBusiness
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Secondary Glazing Specialist — Kensington & Chelsea",
            description: "Professional secondary glazing installation for period homes in Kensington & Chelsea.",
            areaServed: { "@type": "City", name: "Royal Borough of Kensington and Chelsea" },
            address: { "@type": "PostalAddress", addressLocality: "London", addressRegion: "Kensington and Chelsea", addressCountry: "GB" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "87", bestRating: "5" },
          })}
        </script>
      </Helmet>

      <MainNav />

      <AreaHero areaName="Kensington & Chelsea" />

      {/* Why K&C Homes Need This */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Kensington & Chelsea Homes Need Secondary Glazing
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Royal Borough of Kensington and Chelsea is home to some of London's most iconic period architecture — from the white stucco-fronted terraces of <strong>Holland Park</strong> and <strong>Notting Hill</strong> to the grand Victorian red-brick mansions along the <strong>King's Road</strong>. These Grade II listed properties and conservation area homes feature original <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">timber sash windows</Link> that are architecturally irreplaceable.
            </p>
            <p>
              But single-glazed <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian sash windows</Link> bring serious challenges: relentless traffic noise from the A4 Cromwell Road and Kensington High Street, heat loss driving up bills in large period rooms, and winter condensation that damages original timber frames. Replacement double glazing is almost always refused by the RBKC Conservation team.
            </p>
            <p>
              Our <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">acoustic secondary glazing</Link> using <strong>10.8mm Stadip Silence laminate glass</strong> and <strong>100mm air gaps</strong> delivers 70-80% noise reduction while remaining completely invisible from the street. We've completed hundreds of installations across Chelsea, South Kensington, Earl's Court, and Knightsbridge — all fully approved by RBKC conservation officers.
            </p>
          </div>
        </div>
      </section>

      <BenefitsGrid />

      <AreaCTA />

      <LocalLandmarksFooter
        areaName="Kensington & Chelsea"
        text="Serving properties near the Royal Albert Hall, Natural History Museum, Kensington Palace, King's Road, Sloane Square, Holland Park, Notting Hill Gate, Earl's Court, South Kensington, Knightsbridge, and all RBKC conservation areas. Our installers are familiar with borough-specific planning restrictions and heritage requirements for this prestigious London borough."
      />

      <Footer />
    </>
  );
};

export default KensingtonChelseaArea;

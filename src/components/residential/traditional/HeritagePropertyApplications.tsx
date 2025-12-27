import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeritagePropertyApplications() {
  const periods = [
    {
      era: "Georgian Properties (1714-1837)",
      description: "Georgian properties feature predominantly sash windows with elegant proportions and symmetrical facades. Traditional vertical slider secondary glazing maintains these proportions perfectly, with slim sightlines preserving the delicate glazing bar patterns.",
      recommended: "Vertical slider, slim aluminum or timber, off-white or heritage grey",
      planning: "Listed building consent usually required, traditional solutions preferred"
    },
    {
      era: "Victorian Properties (1837-1901)",
      description: "Victorian terraces combine sash windows with ornate bay windows. Side-hung hinged secondary glazing works perfectly for bay window casements, while vertical sliders suit the main sash windows.",
      recommended: "Mixed approach - vertical slider for sash, side-hung for bays",
      planning: "Conservation area approval often required, traditional aesthetics essential"
    },
    {
      era: "Edwardian Properties (1901-1910)",
      description: "Edwardian properties blend sash and casement windows with Arts & Crafts influences. Traditional solutions must respect the lighter, more open aesthetic of this period.",
      recommended: "Vertical slider for sash, side-hung for casements, timber preferred",
      planning: "Character preservation critical, traditional materials advantageous"
    },
    {
      era: "Art Deco/Inter-War (1920s-1930s)",
      description: "Crittall-style metal casement windows define this period. Bronze or black slim aluminum frames with side-hung operation preserve the grid patterns and horizontal emphasis.",
      recommended: "Side-hung hinged, bronze/black aluminum, grid pattern respect",
      planning: "Period character critical, traditional operation essential"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Heritage Property Applications</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {periods.map((period, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{period.era}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{period.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="bg-primary/5 p-3 rounded-lg">
                  <span className="font-semibold">Recommended:</span>
                  <p className="text-muted-foreground mt-1">{period.recommended}</p>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <span className="font-semibold">Planning:</span>
                  <p className="text-muted-foreground mt-1">{period.planning}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function TraditionalOperatingStyles() {
  const styles = [
    {
      title: "Side-Hung Hinged Secondary Glazing",
      description: "Side-hung hinged units operate like traditional casement windows, opening on vertical hinges to provide complete access to primary windows. This system is ideal for Victorian bay windows, Art Deco casements, and any property where original windows opened outward.",
      details: "The mechanism uses traditional hinges, stays, and catches that mirror period window hardware. Installation allows normal operation of primary windows while providing thermal and acoustic benefits when closed. Each window takes 5-10 minutes to open for cleaning or ventilation.",
      cost: "£400-£700 per window",
      bestFor: "Victorian terraces, Art Deco properties, bay windows, regular access needs"
    },
    {
      title: "Vertical Slider Secondary Glazing",
      description: "Vertical slider systems replicate traditional sash window operation, sliding up and down on a counterweight or spring mechanism. This maintains the authentic feel of Georgian and Victorian properties where sash windows predominate.",
      details: "The slider mechanism is engineered to be lightweight yet robust, allowing smooth operation without compromising the seal. When closed, the system is virtually invisible from outside, preserving the property's period character completely.",
      cost: "£450-£750 per window (premium for complex mechanism)",
      bestFor: "Georgian townhouses, Victorian terraces, Edwardian properties, sash windows"
    },
    {
      title: "Top and Bottom-Hung Options",
      description: "Top-hung units tilt inward from the top, perfect for upper floor windows or areas requiring controlled ventilation. Bottom-hung systems tilt outward from the bottom, offering weather protection while providing airflow.",
      details: "These options provide versatile ventilation solutions while maintaining the heritage aesthetic of your property.",
      cost: "£350-£650 per window",
      bestFor: "Upper floors, basements, specific ventilation requirements"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Traditional Operating Styles Explained</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          {styles.map((style, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{style.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{style.description}</p>
                <p className="text-sm text-muted-foreground mb-4">{style.details}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-primary/10 px-3 py-1 rounded-full">
                    <span className="font-medium">Cost:</span> {style.cost}
                  </div>
                  <div className="bg-secondary px-3 py-1 rounded-full">
                    <span className="font-medium">Best for:</span> {style.bestFor}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-6">
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png" 
              alt="Traditional side-hung hinged secondary glazing" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png" 
              alt="Vertical slider secondary glazing on sash window" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle } from "lucide-react";

export function WhatIsTraditional() {
  const keyAspects = [
    {
      title: "Operating Styles",
      description: "Side-hung hinged units (£400-£700) that open like traditional casement windows, and vertical slider systems (£450-£750) that mirror original sash window operation."
    },
    {
      title: "Materials",
      description: "Authentic timber frames (£500-£900) or heritage-grade slim aluminum profiles that respect period proportions."
    },
    {
      title: "Aesthetics",
      description: "Slim sightlines of 20-30mm and heritage colors (off-white, grey, black, bronze) that blend invisibly with original windows."
    },
    {
      title: "Heritage Approach",
      description: "Conservation officer-approved solutions designed for listed buildings and conservation areas, emphasizing reversible installation."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">What Makes Secondary Glazing "Traditional"?</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-muted-foreground mb-6">
            Traditional secondary glazing differs from modern alternatives in four key aspects that make it 
            perfect for heritage properties:
          </p>
          
          <div className="space-y-4">
            {keyAspects.map((aspect, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">{aspect.title}</h3>
                      <p className="text-sm text-muted-foreground">{aspect.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png" 
              alt="Traditional secondary glazing on heritage property window" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

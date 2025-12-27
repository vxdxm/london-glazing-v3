import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function TraditionalInstallation() {
  const steps = [
    {
      number: 1,
      title: "Heritage Assessment",
      description: "Survey identifies period, window types, and conservation requirements"
    },
    {
      number: 2,
      title: "Conservation Consultation",
      description: "Discussion with conservation officers and planning authority liaison"
    },
    {
      number: 3,
      title: "Traditional Design",
      description: "Custom frames designed for period authenticity and slim sightlines"
    },
    {
      number: 4,
      title: "Planning Support",
      description: "Application assistance if required, emphasizing traditional approach"
    },
    {
      number: 5,
      title: "Precision Manufacturing",
      description: "Timber or aluminum frames crafted to heritage specifications"
    },
    {
      number: 6,
      title: "Sensitive Installation",
      description: "Reversible fixing methods preserving original window fabric"
    },
    {
      number: 7,
      title: "Heritage Aftercare",
      description: "Maintenance guidance and conservation compliance support"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Installation Process for Heritage Properties</h2>
      <p className="text-muted-foreground mb-8">
        Traditional secondary glazing installation follows conservation principles:
      </p>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <Card key={index} className="md:ml-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[2.85rem] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold hidden md:flex">
                {step.number}
              </div>
              
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div className="md:hidden w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

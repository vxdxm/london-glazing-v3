import React from "react";
import { Shield, Volume2, Thermometer } from "lucide-react";

const HorizontalGlassSpecs = () => {
  const glassOptions = [
    { thickness: "4mm Float Glass", description: "Basic thermal improvement for quiet residential areas with wide windows requiring mainly thermal benefits." },
    { thickness: "6.4mm Laminated", description: "Enhanced security and moderate acoustic improvement, recommended minimum for ground floor wide windows." },
    { thickness: "6.8mm Acoustic Laminated", description: "Significant noise reduction ideal for wide street-facing windows, busy residential streets, and urban environments." },
    { thickness: "8.8mm High-Performance Acoustic", description: "Superior noise reduction for panoramic windows, large glass areas facing busy roads, and modern homes." },
    { thickness: "10.8mm Specialist Acoustic", description: "Exceptional performance for extreme noise situations - main roads, railways, flight paths." },
    { thickness: "12.8mm Maximum Acoustic", description: "Ultimate noise reduction for the most challenging situations requiring maximum acoustic protection." }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Glass Specifications for Optimal Performance</h2>
      
      <p className="text-muted-foreground mb-6">
        Choose from six performance levels, with specific guidance for horizontal sliding applications:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {glassOptions.map((option, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">{option.thickness}</h4>
            <p className="text-sm text-muted-foreground">{option.description}</p>
          </div>
        ))}
      </div>

      <img 
        src="https://cdn.marblism.com/0rpCHIxS1ND.webp" 
        alt="Glass specifications for horizontal sliding secondary glazing" 
        className="w-full rounded-lg mb-8 shadow-lg"
      />

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Specific Guidance for Wide Windows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <Volume2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground text-sm">Large Glass Areas</p>
              <p className="text-xs text-muted-foreground">Capture more noise - 6.8mm minimum for street-facing, 8.8mm-10.8mm for busy urban locations</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Thermometer className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground text-sm">Modern Double-Glazed</p>
              <p className="text-xs text-muted-foreground">Benefit from 6.4mm-6.8mm additions, creating triple glazing performance</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground text-sm">Ground Floor Security</p>
              <p className="text-xs text-muted-foreground">Laminated glass holds when broken, providing acoustic and security benefits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalGlassSpecs;

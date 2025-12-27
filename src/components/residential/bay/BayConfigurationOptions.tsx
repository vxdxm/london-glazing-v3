import React from "react";
import { DoorOpen, ArrowUpDown, Square, Lock, Armchair } from "lucide-react";

const BayConfigurationOptions = () => {
  const operatingStyles = [
    {
      icon: DoorOpen,
      title: "Hinged Units",
      description: "Mirror your existing window operation, opening independently for full access to primary windows"
    },
    {
      icon: ArrowUpDown,
      title: "Vertical Sliding",
      description: "Perfect for sash window bays, maintaining the authentic sliding operation"
    },
    {
      icon: Square,
      title: "Lift-Out Panels",
      description: "Cost-effective removable units ideal for rarely-opened windows"
    },
    {
      icon: Lock,
      title: "Fixed Units",
      description: "Maximum thermal and acoustic performance for never-opened panels"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Configuration Options for Different Bay Types</h2>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Panel-by-Panel Installation</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Each bay panel receives its own custom secondary glazing unit, precisely fitted to match the bay's angles. 
          This approach maintains access to individual primary windows while ensuring perfect alignment across the entire bay.
        </p>

        <h4 className="text-lg font-semibold text-foreground mb-4">Operating Styles:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {operatingStyles.map((style, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <style.icon className="h-5 w-5 text-primary" />
                <h5 className="font-semibold text-foreground">{style.title}</h5>
              </div>
              <p className="text-sm text-muted-foreground">{style.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Armchair className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Bay Window Seat Preservation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Secondary glazing installs within the window reveals, ensuring your bay window seat remains 
              fully accessible and usable. The installation doesn't obstruct seating areas, storage, or 
              existing shutters and blinds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BayConfigurationOptions;

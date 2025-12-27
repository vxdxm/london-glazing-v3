import React from "react";
import { ArrowLeftRight, Layers, Settings } from "lucide-react";

const WhatIsHorizontalSliding = () => {
  const panelConfigs = [
    {
      title: "2-Panel System (Most Common)",
      description: "Typically features a 50/50 overlap with one or both panels sliding. Perfect for standard residential windows up to 2.5 metres wide."
    },
    {
      title: "3-Panel System",
      description: "Ideal for wider windows, often with a fixed centre panel and two sliding side panels, though all three can slide depending on your requirements."
    },
    {
      title: "4-5 Panel Multi-Track",
      description: "Designed for very wide openings (2.5-5 metres+), these systems use multiple parallel tracks for panoramic windows and commercial applications."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">What is Horizontal Sliding Secondary Glazing?</h2>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Horizontal sliding secondary glazing operates on a fundamentally different mechanism from traditional 
        vertical sash systems. <strong className="text-foreground">The panels slide sideways (left to right) on parallel precision tracks</strong>, 
        much like high-quality patio doors or wardrobe systems. This creates an intuitive, smooth gliding 
        operation that requires minimal effort while providing maximum access to your primary windows.
      </p>

      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">How the Mechanism Works</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The system consists of <strong className="text-foreground">2-5 panels that overlap on tracks and slide past each other</strong>. 
          When you need access to your primary windows for cleaning, ventilation, or operation, you simply 
          slide the panels apart to expose the full window opening. When closed, the overlapping panels 
          create an effective insulating and acoustic barrier with minimal visible framework.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This <strong className="text-foreground">smooth precision gliding</strong> is achieved through quality engineering - 
          precision bearings, aluminium tracks, and lightweight yet robust panels that maintain perfect 
          alignment over decades of use.
        </p>
      </div>

      <img 
        src="/images/horizontal-sliding/horizontal-1.jpg" 
        alt="Horizontal sliding secondary glazing mechanism" 
        className="w-full rounded-lg mb-8 shadow-lg"
      />

      <h3 className="text-2xl font-semibold mb-4 text-foreground">How It Differs from Other Secondary Glazing</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-2">vs Vertical Sliding Sash</h4>
          <p className="text-sm text-muted-foreground">
            While vertical sash lifts up and down, horizontal sliding moves sideways - 
            <strong className="text-foreground"> particularly effective for wide windows</strong> where vertical operation would be awkward.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-2">vs Hinged Systems</h4>
          <p className="text-sm text-muted-foreground">
            Unlike hinged units that swing into your room, horizontal sliding moves along tracks - 
            <strong className="text-foreground"> no swing space required</strong>, perfect for modern living.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <h4 className="font-semibold text-foreground mb-2">vs Fixed Units</h4>
          <p className="text-sm text-muted-foreground">
            While fixed offers maximum performance, horizontal sliding 
            <strong className="text-foreground"> maintains opening access</strong> for ventilation and cleaning.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-foreground">Panel Configurations</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {panelConfigs.map((config, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">{config.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{config.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h4 className="font-semibold text-foreground mb-3">Standard vs Multi-Track Systems</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-foreground mb-1">Standard Systems</p>
            <p className="text-sm text-muted-foreground">
              Accommodate 2-3 panels on single or double tracks, sufficient for most residential windows up to 2.5 metres wide. Excellent value and performance.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Multi-Track Systems</p>
            <p className="text-sm text-muted-foreground">
              Handle 3-5 panels on multiple parallel tracks for very wide openings, commercial spaces, and properties with expansive glazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHorizontalSliding;

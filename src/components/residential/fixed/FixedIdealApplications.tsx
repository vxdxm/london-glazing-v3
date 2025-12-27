import { Plane, Car, Train, Building } from "lucide-react";

export const FixedIdealApplications = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Ideal Applications in London</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Flight Path Properties</h3>
          </div>
          <p className="text-muted-foreground">
            Properties under Heathrow, Gatwick, and City Airport approach paths experience peak aircraft noise of 70-80+ dB every few minutes. These windows are never opened due to noise levels, making fixed glazing with heavy acoustic glass the logical choice for 85%+ noise reduction.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Car className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Major Transport Routes</h3>
          </div>
          <p className="text-muted-foreground">
            Victorian terraces along the North Circular, South Circular, and major A-roads face constant 70-75 dB traffic noise. The uninterrupted acoustic barrier of fixed glazing paired with 8.8-10.8mm acoustic glass reduces this to tolerable background levels.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Train className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Railway Corridors</h3>
          </div>
          <p className="text-muted-foreground">
            Properties near Overground lines, mainline railways, and tube surface sections deal with both noise and vibration. Fixed glazing with heavy glass dampens both effectively, particularly important where trains pass every few minutes throughout the day.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Period Property Upper Floors</h3>
          </div>
          <p className="text-muted-foreground">
            Georgian and Victorian properties commonly have painted-shut upper floor windows that haven't opened in decades. Fixed glazing maximizes thermal performance where heat loss is greatest while preserving the building's character with minimal intervention.
          </p>
        </div>
      </div>
    </section>
  );
};

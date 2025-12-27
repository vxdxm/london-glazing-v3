import { ArrowRight, Check } from "lucide-react";

const CasementOptions = () => {
  const hingedSideFeatures = [
    "Open sideways just like your casement window",
    "Full access to primary window handles and operation",
    "Smooth engineered hinged mechanism",
    "Can be color-matched to existing window frames",
    "Perfect for regularly-opened casements",
    "Most versatile and popular option",
  ];

  const hingedTopFeatures = [
    "Hinges at the top, opens outward into the room",
    "Ideal where side clearance space is limited",
    "Good ventilation option when opened",
    "Less common but useful for specific room layouts",
  ];

  const liftOutFeatures = [
    "Lightweight frames that lift out entirely when you need full casement access",
    "Perfect for occasional access to casements you don't open frequently",
    "Most cost-effective option available",
    "Easy maintenance and storage when removed",
    "Can remove seasonally if desired (though most homeowners keep them year-round)",
  ];

  const fixedFeatures = [
    "Most cost-effective option with fastest installation",
    "Best performance possible - no moving parts means minimal gaps",
    "Ideal for casements you never open - upper floors, painted-shut windows, certain room situations",
    "Perfect where performance outweighs ventilation needs",
    "Still removable for emergencies by unscrewing (professional removal)",
  ];

  const tiltTurnFeatures = [
    "Custom solutions that work with complex tilt & turn mechanisms",
    "Maintains access to both tilt and full turn operation",
    "Bespoke design for each specific tilt & turn configuration",
    "Requires specialist consultation - we design around your exact mechanism",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Casement Window Secondary Glazing Options</h2>

      {/* Hinged - Most Popular */}
      <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6 mb-6 relative">
        <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
        <h3 className="text-xl font-semibold mb-4 mt-2">Hinged Secondary Glazing</h3>
        <p className="text-muted-foreground mb-6">
          Mirrors your casement window operation for natural use:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background/60 rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Side-Hinged Units
            </h4>
            <ul className="space-y-2">
              {hingedSideFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-background/60 rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Top-Hinged Units
            </h4>
            <ul className="space-y-2">
              {hingedTopFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lift-Out Panels */}
      <div className="bg-muted/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Lift-Out Panels (Flexible & Cost-Effective)</h3>
        <p className="text-muted-foreground mb-4">Completely removable secondary glazing:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {liftOutFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground bg-background/60 rounded-lg p-3">
          <strong>Popular for:</strong> Guest bedrooms, spare rooms, upper floor casements opened infrequently
        </p>
      </div>

      {/* Fixed Secondary Glazing */}
      <div className="bg-muted/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Fixed Secondary Glazing (Maximum Performance)</h3>
        <p className="text-muted-foreground mb-4">Non-opening units for best thermal and acoustic results:</p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {fixedFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground bg-background/60 rounded-lg p-3">
          <strong>Popular for:</strong> Front-facing rooms (noise priority), rarely-used rooms, deteriorated casements
        </p>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img 
          src="https://cdn.marblism.com/uLWvpdI2TZo.webp" 
          alt="Casement window secondary glazing options" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Tilt & Turn */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Tilt & Turn Compatible Solutions</h3>
        <p className="text-muted-foreground mb-4">Specialized secondary glazing for tilt & turn casement windows:</p>
        <div className="space-y-3">
          {tiltTurnFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasementOptions;

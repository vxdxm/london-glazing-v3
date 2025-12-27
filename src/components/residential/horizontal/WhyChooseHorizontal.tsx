import React from "react";
import { Maximize2, Building2, DoorOpen, Sparkles, Hand, CheckCircle } from "lucide-react";

const WhyChooseHorizontal = () => {
  const idealSituations = [
    "Window is wider than it is tall",
    "Very wide openings (2-5 metres+)",
    "Modern architectural styling preference",
    "Limited swing space near windows",
    "Patio door-width coverage required",
    "Maximum ventilation capability priority"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Horizontal Sliding Secondary Glazing?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Maximize2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Perfect for Wide Window Openings</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Horizontal sliding excels where windows are <strong className="text-foreground">wider than they are tall</strong> - 
            a common feature in modern architecture. Unlike vertical sash systems that become unwieldy on 
            very wide windows, horizontal sliding naturally accommodates width with multiple panels working in harmony.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Ideal for Large Glass Areas</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Modern homes increasingly feature <strong className="text-foreground">expansive glazing</strong> - 
            floor-to-ceiling windows, glass walls, and architectural features. Horizontal sliding systems 
            maximise glass area visibility when closed with slim vertical frames between panels.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DoorOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Patio Door & French Door Compatible</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Door-width openings</strong> suit horizontal sliding perfectly. 
            Ground floor living areas that open to gardens benefit from systems that operate like familiar 
            patio doors - sliding smoothly sideways for access while providing year-round comfort.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Modern Aesthetic Appeal</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">clean lines and minimal framework</strong> complement 
            contemporary architectural styles. For commercial applications - offices, retail, hospitality - 
            horizontal sliding provides a professional appearance with superior performance.
          </p>
        </div>
      </div>

      <img 
        src="https://cdn.marblism.com/JzC_RWw5GUb.webp" 
        alt="Wide horizontal sliding secondary glazing installation" 
        className="w-full rounded-lg mb-8 shadow-lg"
      />

      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <Hand className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Practical Operation Advantages</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Easy gliding motion</strong> requires minimal effort, suitable for all users</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Maximum ventilation</strong> by sliding panels fully apart</span>
            </li>
          </ul>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Full cleaning access</strong> to all primary window surfaces</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">No swing space requirements</strong> - furniture can stay close</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">When Horizontal Sliding is Your Best Choice</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {idealSituations.map((situation, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span>{situation}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHorizontal;

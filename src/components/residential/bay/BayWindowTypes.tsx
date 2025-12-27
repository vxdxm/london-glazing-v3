import React from "react";
import { Square, Triangle, Circle } from "lucide-react";

const BayWindowTypes = () => {
  const bayTypes = [
    {
      icon: Square,
      title: "Box Bay Windows (90° Angles)",
      description: "The most common Victorian configuration features a flat front panel with two side panels at 90° angles. Found throughout London's Victorian terraces, these rectangular projections typically house three large sash or casement windows.",
      features: ["Three large panels", "90° angle returns", "Victorian terraces", "Sash or casement windows"]
    },
    {
      icon: Triangle,
      title: "Canted Bay Windows (135° Angles)",
      description: "Popular in Edwardian properties, canted bays feature elegant angled facets at 135°, creating softer, more graceful proportions. These often have five panels - three front facets with two angled returns.",
      features: ["Five panels typical", "135° angle returns", "Edwardian properties", "Elegant proportions"]
    },
    {
      icon: Circle,
      title: "Bow Windows (Curved)",
      description: "Less common but elegant, bow windows create a continuous curved glass projection. Popular in Georgian-influenced properties and select Victorian homes, these require specialized curved secondary glazing solutions.",
      features: ["Continuous curve", "Georgian influence", "Specialized solutions", "Premium elegance"]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Different Bay Window Types</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bayTypes.map((type, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <type.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
            <ul className="space-y-1">
              {type.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BayWindowTypes;

import React from "react";
import { ClipboardCheck, Ruler, Factory, Wrench } from "lucide-react";

const BayInstallationProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Initial Assessment",
      description: "Our specialists visit to assess your bay configuration, measure precise angles, and discuss your specific requirements and heritage considerations."
    },
    {
      icon: Ruler,
      title: "Detailed Survey",
      description: "Exact measurements of each panel and bay angles ensure perfect fitting. We photograph configurations and assess reveal depths for optimal installation."
    },
    {
      icon: Factory,
      title: "Custom Manufacturing",
      description: "Each unit is custom-made to your exact bay measurements with precision angle adaptors. Manufacturing typically takes 4-6 weeks."
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Professional teams typically complete bay installations in 1-2 days, installing panel by panel with full operation testing and demonstration."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Installation Process</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <img 
        src="https://cdn.marblism.com/45iujxjsDyz.webp" 
        alt="Professional bay window secondary glazing installation" 
        className="w-full rounded-lg shadow-lg"
      />
    </section>
  );
};

export default BayInstallationProcess;

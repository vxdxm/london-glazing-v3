import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "lucide-react";

export const CrittallInstallation = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Free home visit to identify Crittall type (W20/W40, grid patterns, opening styles), discuss grid preservation concerns, and assess listed building or conservation area status"
    },
    {
      number: "2",
      title: "Detailed Survey",
      description: "Precise Crittall measurement with grid pattern recording, reveal depth assessment, frame condition evaluation, and grid photography for reference"
    },
    {
      number: "3",
      title: "Specification & Quotation",
      description: "System recommendation (hinged/lift-out/fixed per window), glass specification, frame color matching or contrast options, complete cost breakdown with grid preservation assurance"
    },
    {
      number: "4",
      title: "Custom Manufacturing",
      description: "Secondary frames manufactured to exact Crittall dimensions with specified color-matching (4-6 weeks typical)"
    },
    {
      number: "5",
      title: "Professional Installation",
      description: "Installation in Crittall reveals with zero alteration to original windows, grid visibility confirmation, sealing verification (2-4 hours per window)"
    },
    {
      number: "6",
      title: "Quality Assurance",
      description: "Grid aesthetic verification from interior and exterior views, operation testing, condensation explanation, owner concern resolution"
    },
    {
      number: "7",
      title: "Aftercare Support",
      description: "Comprehensive warranty, maintenance guidance for simple cleaning, ongoing support with grid preservation guarantee"
    }
  ];

  const considerations = [
    "Zero alteration to Crittall heritage fabric",
    "Interior-only work requiring no scaffolding or external access",
    "Minimal disruption allowing continued residence occupancy",
    "Grid pattern remains 100% intact throughout entire process"
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Professional Installation Process for Crittall Properties"
        subtitle="7-step Crittall-specific approach"
      />
      
      <div className="grid gap-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Installation Considerations</h3>
        <ul className="space-y-3">
          {considerations.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

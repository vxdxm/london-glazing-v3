import { SectionHeading } from "@/components/ui/section-heading";
import { AlertTriangle, Thermometer, Wind, Volume2, Droplets, PoundSterling, FileWarning, Heart } from "lucide-react";

export const CrittallDilemma = () => {
  const problems = [
    {
      icon: Thermometer,
      title: "Metal Frame Heat Conduction Crisis",
      description: "Steel frames conduct heat rapidly, creating massive thermal bridges that make Crittall windows extremely energy-inefficient. The metal becomes cold to touch in winter, causing heavy condensation, while heating up dramatically in summer. Combined with single-glazed glass, this creates extreme energy loss—modern homes are typically 50-70% more efficient than properties with original Crittall windows."
    },
    {
      icon: AlertTriangle,
      title: "Thin Single Glazing Problems",
      description: "Original Crittall features 3-4mm single-pane glass with zero thermal performance—heat passes straight through with minimal resistance. This creates cold zones near windows, making rooms uncomfortable and energy costs astronomical."
    },
    {
      icon: Wind,
      title: "Draught and Air Leakage Issues",
      description: "After 80-100 years, Crittall window seals have typically failed, creating multiple draught points where wind literally whistles through. The geometric grid design, while beautiful, creates numerous joints that can develop air leaks."
    },
    {
      icon: Volume2,
      title: "Noise Amplification Through Thin Glass",
      description: "The thin single glazing provides zero sound insulation, while metal frames can actually transmit vibration and sound. This is particularly problematic in urban and industrial locations where Crittall windows are common."
    },
    {
      icon: Droplets,
      title: "Condensation Crisis on Metal Frames",
      description: "Cold metal frames combined with indoor moisture create heavy condensation that literally runs down frames daily during winter months. Grid bars are particularly affected, leading to mold around frame surrounds, rust on steel frames, and paint blistering."
    },
    {
      icon: PoundSterling,
      title: "Prohibitively Expensive Replacement Costs",
      description: "New Crittall windows cost £800-£1,500 per window as a heritage product requiring specialized manufacturing. A typical property needs £10,000-£18,000 including installation for complete replacement."
    },
    {
      icon: FileWarning,
      title: "Planning and Listed Building Restrictions",
      description: "Many Crittall properties are protected—Art Deco buildings are often listed, and conservation areas commonly restrict alterations. Planning authorities typically refuse replacement because original Crittall windows are considered heritage features."
    },
    {
      icon: Heart,
      title: "The Aesthetic Preservation Dilemma",
      description: "The Crittall grid pattern represents THE defining property feature that owners are terrified of losing. Any replacement destroys the authentic 1920s-1950s heritage fabric that design-conscious buyers specifically seek."
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="The Crittall Dilemma: Heritage vs Performance"
        subtitle="Understanding the challenges faced by Crittall window owners"
      />
      
      <img 
        src="https://cdn.marblism.com/DE3wUKu66r0.webp" 
        alt="Crittall window showing thermal and performance challenges"
        className="w-full rounded-lg mb-8 shadow-lg"
      />
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {problems.map((problem, index) => (
          <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <problem.icon className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-3 text-amber-800 dark:text-amber-200">Your Impossible Choice:</h3>
        <p className="text-amber-700 dark:text-amber-300">
          You love your iconic Crittall grids for their property character, architectural heritage, and design cachet, BUT they're freezing, draughty, noisy, condensation-plagued, and expensive to heat. Replacement would cost £10,000-£18,000, might be refused by planning authorities, and would destroy your property's authentic heritage value forever.
        </p>
      </div>
      
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3 text-primary">The Solution:</h3>
        <p className="text-foreground">
          <strong>Secondary glazing preserves your Crittall grids completely while solving every performance problem for 50-70% less cost than replacement.</strong>
        </p>
      </div>
    </section>
  );
};

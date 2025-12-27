import { ClipboardCheck, Ruler, FileText, Factory, Wrench, CheckCircle, HeartHandshake } from "lucide-react";

const CasementInstallation = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free home visit to assess your casement windows, discuss your specific requirements, examine hinged mechanisms, and consider any heritage factors",
      icon: ClipboardCheck,
    },
    {
      number: 2,
      title: "Detailed Survey",
      description: "Precise measurement of each casement window, assessment of opening mechanisms, evaluation of available depth for secondary glazing, identification of any obstructions (handles, stays, locks)",
      icon: Ruler,
    },
    {
      number: 3,
      title: "Specification & Quotation",
      description: "Recommendation of optimal secondary glazing style (hinged/lift-out/fixed), appropriate glass specification, frame color options, complete cost breakdown, expected performance improvements",
      icon: FileText,
    },
    {
      number: 4,
      title: "Custom Manufacturing",
      description: "Each unit custom-made to your exact casement measurements, hinged mechanisms engineered for smooth operation, typical manufacturing time 4-6 weeks",
      icon: Factory,
    },
    {
      number: 5,
      title: "Professional Installation",
      description: "Expert installation team, 2-3 hours per casement window, discreet fixings into window reveals, full adjustment and testing, demonstration of operation, minimal mess and disruption",
      icon: Wrench,
    },
    {
      number: 6,
      title: "Quality Assurance",
      description: "Testing all units thoroughly, demonstration of hinged operation, verification of access to primary casements, checking locking systems and cleaning access, any final adjustments needed",
      icon: CheckCircle,
    },
    {
      number: 7,
      title: "Comprehensive Aftercare",
      description: "Full warranty coverage, detailed care instructions, maintenance guidance, ongoing support whenever needed",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Professional Installation Process</h2>
      <h3 className="text-xl text-muted-foreground mb-8">7-Step Process for Perfect Results</h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex gap-4 bg-muted/30 rounded-xl p-5 hover:bg-muted/50 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                {step.number}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-lg">{step.title}</h4>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasementInstallation;

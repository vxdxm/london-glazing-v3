import { Award, Clock, Building, Users, FileCheck, ShieldCheck } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Healthcare Sector Experience",
      description: "Deep understanding of NHS and private healthcare requirements"
    },
    {
      icon: FileCheck,
      title: "HTM & CQC Knowledge",
      description: "Compliance expertise for healthcare building standards"
    },
    {
      icon: ShieldCheck,
      title: "Infection Control Protocols",
      description: "Strict adherence to healthcare hygiene requirements"
    },
    {
      icon: Clock,
      title: "Minimal Disruption Guarantee",
      description: "Flexible scheduling around clinical operations"
    },
    {
      icon: Building,
      title: "Heritage Building Expertise",
      description: "Listed building solutions for historic hospitals"
    },
    {
      icon: Users,
      title: "DBS-Checked Teams",
      description: "Vetted installation teams for sensitive healthcare areas"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Secondary Glazing Specialist for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise for healthcare environments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With full project management capabilities, comprehensive healthcare client references, 
            and complete warranty and aftercare support, we ensure long-term performance and peace of mind 
            for your healthcare facility.
          </p>
        </div>
      </div>
    </section>
  );
};

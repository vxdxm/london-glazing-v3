import { Award, Users, FileCheck, Clock, Building, ShieldCheck } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Educational Sector Expertise",
      description: "Deep understanding of BB93 standards, Ofsted criteria, and CIF funding processes"
    },
    {
      icon: Users,
      title: "Former Education Professionals",
      description: "Team includes people who understand the sector's challenges firsthand"
    },
    {
      icon: FileCheck,
      title: "Funding Application Support",
      description: "Help with CIF, LCVAP, and other funding applications"
    },
    {
      icon: Clock,
      title: "Minimal Disruption Installation",
      description: "Holiday and out-of-hours scheduling around academic calendars"
    },
    {
      icon: Building,
      title: "Heritage Building Expertise",
      description: "Listed building solutions for historic school buildings"
    },
    {
      icon: ShieldCheck,
      title: "Enhanced DBS Checked Teams",
      description: "Strict safeguarding procedures for working in schools"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Educational Leaders Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our deep understanding of educational requirements sets us apart
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
            We provide comprehensive project management from initial consultation through to final handover, 
            with established relationships with education suppliers, familiarity with procurement procedures, 
            and understanding of academic calendars to ensure smooth project delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

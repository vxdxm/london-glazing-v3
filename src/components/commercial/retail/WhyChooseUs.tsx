import { Award, Store, Clock, Moon, Eye, ShieldCheck, Wallet } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Store,
      title: "Customer Experience Expertise",
      description: "Understanding of how comfort impacts sales"
    },
    {
      icon: Award,
      title: "Heritage Shop Front Specialization",
      description: "Listed building and conservation area experience"
    },
    {
      icon: Clock,
      title: "Minimal Trading Disruption",
      description: "Work scheduled around your business hours"
    },
    {
      icon: Moon,
      title: "Out-of-Hours Installation",
      description: "Evening and weekend options available"
    },
    {
      icon: Eye,
      title: "Showcase Window Expertise",
      description: "Technical solutions for large display windows"
    },
    {
      icon: ShieldCheck,
      title: "Security-Conscious Solutions",
      description: "Enhanced protection for retail premises"
    },
    {
      icon: Wallet,
      title: "Budget-Friendly Options",
      description: "Solutions for independent retailers"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Secondary Glazing Specialist for Retail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our extensive retail sector experience spans independent boutiques to major department stores across London
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.slice(0, 4).map((reason, index) => (
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

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {reasons.slice(4).map((reason, index) => (
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
      </div>
    </section>
  );
};

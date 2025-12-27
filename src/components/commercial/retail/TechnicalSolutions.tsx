import { Eye, DoorOpen, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TechnicalSolutions = () => {
  const solutions = [
    {
      icon: Eye,
      title: "Showcase Window Optimization",
      features: [
        "Slim profiles maintain clean sight lines",
        "Low-E coatings dramatically reduce heat loss",
        "UV-protective glazing prevents product fading",
        "Anti-condensation keeps displays clear",
        "Custom shapes for bay windows and curved frontages"
      ]
    },
    {
      icon: DoorOpen,
      title: "Entrance Area Comfort",
      features: [
        "Eliminates cold draughts at entrances",
        "Creates welcoming thermal barrier",
        "Encourages customers to linger",
        "Reduces heating load near doors",
        "Maintains consistent temperature"
      ]
    },
    {
      icon: Users,
      title: "Staff Area Improvements",
      features: [
        "Improves staff retention and morale",
        "Better customer service quality",
        "Pleasant stockroom environments",
        "Cost-effective back-of-house solutions",
        "Consistent working conditions"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Solutions for Different Retail Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored approaches for every area of your retail space
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

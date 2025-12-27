import { Thermometer, Volume2, ShieldAlert, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChallenges = () => {
  const challenges = [
    {
      icon: Thermometer,
      title: "Cold, Draughty Shops",
      description: "Uncomfortable temperatures reduce browsing time by 30-40%, directly impacting sales and customer satisfaction."
    },
    {
      icon: Volume2,
      title: "Street Noise Disruption",
      description: "Busy London roads, buses, and delivery vehicles create shopping environment noise that drives customers away."
    },
    {
      icon: ShieldAlert,
      title: "Security Vulnerabilities",
      description: "Single-glazed Victorian shop fronts leave businesses vulnerable to break-ins and smash-and-grab theft."
    },
    {
      icon: Building,
      title: "Heritage Restrictions",
      description: "Conservation area planning restrictions make window replacement impossible, trapping retailers with inefficient premises."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why London Retail Spaces Need Secondary Glazing
          </h2>
          <p className="text-lg text-muted-foreground">
            Running a retail business in London means battling unique challenges that directly impact your bottom line. 
            Showcase windows hemorrhage heat, contributing to energy bills that can consume 15-25% of retail overheads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-card border-destructive/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <challenge.icon className="w-10 h-10 text-destructive mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-8">
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              <strong className="text-foreground">The impact on retail profitability is severe:</strong> customers rush through cold shops, 
              staff morale suffers in uncomfortable conditions, and condensation damages window displays while energy costs erode already tight margins.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

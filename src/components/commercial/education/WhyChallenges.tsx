import { Volume2, Thermometer, PoundSterling, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChallenges = () => {
  const challenges = [
    {
      icon: Volume2,
      title: "Traffic & Aircraft Noise",
      description: "Busy roads and Heathrow/City Airport flight paths create constant disruption, reducing student attainment by up to 25%."
    },
    {
      icon: Thermometer,
      title: "Cold Victorian Buildings",
      description: "Historic school buildings with poor insulation lead to increased absence, behavioral issues, and spiraling heating costs."
    },
    {
      icon: PoundSterling,
      title: "Budget Pressures",
      description: "Heating costs consume 20-30% of operational budgets, diverting funds from teaching resources and staff retention."
    },
    {
      icon: Building,
      title: "Heritage Restrictions",
      description: "Listed buildings cannot be altered with modern double glazing, leaving facilities managers trapped between heritage and necessity."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why London Schools & Universities Choose Secondary Glazing
          </h2>
          <p className="text-lg text-muted-foreground">
            Educational facilities across London face unique challenges that directly impact student learning and operational budgets. 
            Research consistently shows that noise distraction can reduce student attainment by up to 25%, while cold, uncomfortable 
            classrooms lead to increased absence and behavioral issues.
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

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              For special educational needs (SEND) students, particularly those with autism or ADHD, acoustic and thermal 
              instability can trigger daily meltdowns and prevent effective learning. Secondary glazing creates the stable, 
              sensory-friendly environments these vulnerable students need.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

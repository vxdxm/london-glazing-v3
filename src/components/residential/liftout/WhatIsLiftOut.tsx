import { Card, CardContent } from "@/components/ui/card";
import { Grip, Magnet, MousePointerClick } from "lucide-react";

const WhatIsLiftOut = () => {
  const mechanisms = [
    {
      icon: Grip,
      title: "Clips",
      description: "Spring clips or turn-button clips around the perimeter — press or turn to release, then lift the panel out"
    },
    {
      icon: Magnet,
      title: "Magnets",
      description: "Magnetic strips along frame edges — pull to overcome the magnetic hold and lift the panel away"
    },
    {
      icon: MousePointerClick,
      title: "Quick-Release",
      description: "Some premium systems feature one-touch release catches for effortless removal"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">What is Lift-Out Secondary Glazing?</h2>
      
      <p className="text-muted-foreground mb-6 text-lg">
        Lift-out secondary glazing consists of completely removable panels that clip or magnetically attach to your window reveals. Unlike fixed systems (permanently sealed with screws) or hinged systems (opening on hinges), lift-out panels can be completely removed and stored when not needed.
      </p>

      <h3 className="text-xl font-semibold mb-4">The Mechanism is Beautifully Simple:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mechanisms.map((item, index) => (
          <Card key={index} className="border-primary/20">
            <CardContent className="pt-6">
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-accent/50 rounded-lg p-6">
        <p className="text-lg">
          <strong className="text-primary">The key advantage? Seasonal adaptability.</strong> Install your panels in autumn when heating costs rise, then store them away in spring when you want natural ventilation and maximum light. It's like having two different homes — modern and insulated in winter, traditional and airy in summer.
        </p>
      </div>
    </section>
  );
};

export default WhatIsLiftOut;

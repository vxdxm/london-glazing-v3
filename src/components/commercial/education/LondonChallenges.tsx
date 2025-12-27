import { Plane, Landmark, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LondonChallenges = () => {
  const challenges = [
    {
      icon: Plane,
      title: "Transport Noise",
      description: "London's extensive transport network creates unique noise challenges.",
      details: "Heathrow flight paths affect West London schools every 90 seconds, while busy roads and railway lines impact schools across all boroughs. Our acoustic solutions address these specific environmental factors."
    },
    {
      icon: Landmark,
      title: "Heritage Building Constraints",
      description: "Victorian and Edwardian school buildings dominate London's educational landscape.",
      details: "These beautiful but challenging structures require specialist treatment that respects their architectural significance while delivering modern performance."
    },
    {
      icon: Shield,
      title: "Urban Security Concerns",
      description: "Ground-floor classrooms in urban environments face greater security risks.",
      details: "Our systems provide additional protection against vandalism and break-ins while maintaining emergency egress requirements."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            London-Specific Educational Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding and solving the unique challenges facing London schools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                  <challenge.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{challenge.description}</p>
                <p className="text-sm text-primary font-medium">{challenge.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

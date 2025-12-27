import { PoundSterling, TrendingDown, Leaf, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EnergySavings = () => {
  const savings = [
    {
      type: "Primary School",
      annual: "£3,000-£5,000",
      description: "Typical annual heating cost savings"
    },
    {
      type: "Secondary School",
      annual: "£8,000-£15,000+",
      description: "Larger buildings see greater savings"
    },
    {
      type: "Payback Period",
      annual: "3-5 years",
      description: "Excellent return on investment"
    },
    {
      type: "Lifespan",
      annual: "20+ years",
      description: "Long-term value for institutions"
    }
  ];

  const additionalBenefits = [
    {
      icon: TrendingDown,
      title: "30-50% Heating Cost Reduction",
      description: "Savings translate directly into additional teaching resources, staff investment, or essential maintenance."
    },
    {
      icon: Leaf,
      title: "Improved EPC Ratings",
      description: "Better energy performance ratings support government net-zero targets and demonstrate environmental responsibility."
    },
    {
      icon: Clock,
      title: "Reduced Maintenance",
      description: "Decreased boiler strain and maintenance requirements extend equipment lifespan and reduce operational costs."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Energy Savings & Budget Relief
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational institutions face relentless budget pressure, with heating costs often consuming 20-30% of operational budgets. 
            Secondary glazing delivers savings that governors and bursars appreciate.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {savings.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{item.annual}</div>
                <div className="font-medium text-foreground mb-1">{item.type}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalBenefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, Clock, Leaf, TrendingUp } from "lucide-react";

const InvestmentROI = () => {
  const metrics = [
    {
      icon: PoundSterling,
      title: "Typical Investment",
      value: "£400-£800",
      description: "Per window depending on size, specification, and acoustic requirements"
    },
    {
      icon: Clock,
      title: "Payback Period",
      value: "3-5 Years",
      description: "Through energy cost savings alone, plus productivity benefits"
    },
    {
      icon: Leaf,
      title: "Energy Savings",
      value: "30-50%",
      description: "Reduction in heating and cooling expenses"
    },
    {
      icon: TrendingUp,
      title: "Rental Increase",
      value: "5-10%",
      description: "With improved EPC ratings and tenant satisfaction"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Investment & ROI Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-primary mb-2">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-muted-foreground">
            <strong>Annual Savings Example:</strong> For typical office floors, energy cost reduction of £2,000-£5,000 annually is achievable. Combined with the quiet, comfortable environment that attracts and retains quality tenants, the long-term return significantly exceeds the initial investment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentROI;

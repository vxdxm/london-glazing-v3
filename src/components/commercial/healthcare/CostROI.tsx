import { PoundSterling, TrendingUp, Clock, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CostROI = () => {
  const metrics = [
    {
      icon: PoundSterling,
      title: "Typical Investment",
      value: "£300-£700",
      detail: "per window depending on size and specification",
      subtext: "Volume discounts available for whole-building projects"
    },
    {
      icon: TrendingUp,
      title: "Energy Savings",
      value: "30-50%",
      detail: "reduction in heating and cooling costs",
      subtext: "Thousands of pounds annually for large facilities"
    },
    {
      icon: Clock,
      title: "Payback Period",
      value: "3-5 years",
      detail: "typical return on investment",
      subtext: "20+ year lifespan provides long-term value"
    },
    {
      icon: Wallet,
      title: "Funding Options",
      value: "Multiple",
      detail: "NHS capital budgets available",
      subtext: "Private hospital investment & care home improvement funds"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cost & ROI for Healthcare Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sound financial investment with proven returns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-sm text-muted-foreground mb-2">{metric.detail}</p>
                <p className="text-xs text-muted-foreground/70">{metric.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-card">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Additional ROI Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Improved Patient Outcomes</h4>
                <p className="text-sm text-muted-foreground">
                  Better sleep quality leads to faster recovery, reduced medication errors, and shorter hospital stays – 
                  delivering measurable clinical and financial benefits.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Enhanced CQC Ratings</h4>
                <p className="text-sm text-muted-foreground">
                  Improved environmental conditions directly support better CQC inspection outcomes, 
                  protecting reputation and attracting patients and staff.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

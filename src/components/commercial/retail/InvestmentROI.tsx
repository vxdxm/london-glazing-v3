import { PoundSterling, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const InvestmentROI = () => {
  const investments = [
    {
      type: "Small Boutique",
      windows: "3-4 windows",
      range: "£3,000-£8,000"
    },
    {
      type: "Medium Shop",
      windows: "6-8 windows",
      range: "£6,000-£15,000"
    },
    {
      type: "Large Store",
      windows: "10+ windows",
      range: "£12,000-£30,000+"
    },
    {
      type: "Individual Showcase",
      windows: "Per window",
      range: "£1,200-£3,000"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Investment & ROI for Retail Spaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible investment options with proven returns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {investments.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{item.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">{item.range}</div>
                <div className="text-sm text-muted-foreground">{item.windows}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card">
            <CardContent className="p-6 text-center">
              <PoundSterling className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Volume Discounts</h3>
              <p className="text-sm text-muted-foreground">
                Available for retail chains and shopping center programs
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">ROI Includes</h3>
              <p className="text-sm text-muted-foreground">
                Energy savings, increased sales, enhanced security, property appreciation
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">3-5 Year Payback</h3>
              <p className="text-sm text-muted-foreground">
                From energy savings alone, often faster with sales improvements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { PoundSterling, TrendingDown, Leaf, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const EnergySavings = () => {
  const savings = [
    {
      type: "Small Boutique",
      size: "500 sq ft",
      annual: "£2,000-£3,500"
    },
    {
      type: "Medium Shop",
      size: "1,500 sq ft",
      annual: "£4,000-£7,000"
    },
    {
      type: "Large Store",
      size: "3,000+ sq ft",
      annual: "£8,000-£15,000+"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Energy Savings & Profit Improvement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The financial impact extends far beyond reduced heating bills. <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">Reduce heating/cooling costs with thermal insulation</Link>. Comfortable shops generate higher sales 
            through increased customer dwell time, while staff productivity improves in pleasant working conditions. <Link to="/blog/thermal-efficiency-benefits" className="text-primary hover:underline">Prevent condensation on display windows</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {savings.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <PoundSterling className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{item.annual}</div>
                <div className="font-medium text-foreground mb-1">{item.type}</div>
                <div className="text-sm text-muted-foreground">{item.size}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With typical payback periods of <strong className="text-primary">3-5 years</strong> from energy savings alone, 
              the investment delivers strong returns before considering sales improvements and operational benefits. 
              For a typical London boutique, this means <strong className="text-primary">£3,000-£7,000 returned to the business annually</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

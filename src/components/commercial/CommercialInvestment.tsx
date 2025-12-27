import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingUp } from "lucide-react";

const CommercialInvestment = () => {
  const investments = [
    { size: "Small office (10-15 windows)", range: "£8,000-£18,000" },
    { size: "Medium building (25-40 windows)", range: "£18,000-£40,000" },
    { size: "Large commercial (50+ windows)", range: "£40,000-£100,000+" }
  ];

  const returns = [
    "Annual energy savings: £3,000-£50,000+ depending on building size",
    "Payback period: 3-5 years typical for commercial projects",
    "Lifetime value: 20+ year lifespan with minimal maintenance requirements",
    "Volume discounts available for large buildings and multiple sites"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Investment and ROI Analysis
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <PoundSterling className="w-6 h-6 text-primary" />
                <CardTitle>Typical Investment Ranges</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {investments.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                    <span className="text-muted-foreground">{item.size}</span>
                    <span className="font-semibold">{item.range}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <CardTitle>Proven Returns</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {returns.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <img 
            src="https://cdn.marblism.com/gg4QXw_Rj8I.webp" 
            alt="Commercial building ROI and investment analysis" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialInvestment;
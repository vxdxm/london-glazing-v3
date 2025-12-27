import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingDown } from "lucide-react";

export function TraditionalCostAnalysis() {
  const costs = [
    { type: "Side-Hung Hinged Aluminum", price: "£400-£700 per window" },
    { type: "Vertical Slider Aluminum", price: "£450-£750 per window" },
    { type: "Timber Frames (any style)", price: "£500-£900 per window" }
  ];

  const propertyCosts = [
    { property: "12-window Victorian terrace", cost: "£4,800-£8,400", material: "aluminum" },
    { property: "12-window Georgian townhouse", cost: "£6,000-£10,800", material: "timber" },
    { property: "10-window Art Deco", cost: "£4,000-£7,000", material: "aluminum" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Cost Analysis and Value</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PoundSterling className="h-5 w-5 text-primary" />
              Per Window Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {costs.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                  <span className="text-muted-foreground">{item.type}</span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              Typical Property Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {propertyCosts.map((item, index) => (
                <div key={index} className="py-2 border-b last:border-0">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.property}</span>
                    <span className="font-semibold text-primary">{item.cost}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({item.material})</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-center">
            <TrendingDown className="h-8 w-8 text-green-600" />
            <div>
              <h4 className="font-semibold text-lg">Payback Analysis</h4>
              <p className="text-muted-foreground">
                With 50-60% heating cost reduction, most installations pay for themselves within 
                <span className="font-semibold text-green-600"> 4-6 years</span> through energy savings alone.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

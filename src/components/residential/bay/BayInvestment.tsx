import React from "react";
import { PoundSterling, TrendingUp, Clock } from "lucide-react";

const BayInvestment = () => {
  const costs = [
    { type: "3-panel box bay", price: "£1,200-£2,200" },
    { type: "5-panel canted bay", price: "£1,800-£3,200" },
    { type: "Bow windows", price: "£2,000-£3,500" }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Investment and Returns</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <PoundSterling className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Typical Bay Window Costs</h3>
          </div>
          
          <div className="space-y-3 mb-6">
            {costs.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-foreground">{item.type}</span>
                <span className="font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-green-800 dark:text-green-200">
              <strong>Compare to bay window replacement costs of £3,000-£10,000 per bay.</strong> Secondary glazing 
              delivers 50-70% cost savings while preserving your irreplaceable period feature.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Return on Investment</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <PoundSterling className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">£400-£800 Annual Savings</p>
                <p className="text-sm text-muted-foreground">Per bay window in energy costs</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">4-7 Year Payback Period</p>
                <p className="text-sm text-muted-foreground">Then pure savings for decades</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
              <div>
                <p className="font-semibold text-foreground">20+ Year Lifespan</p>
                <p className="text-sm text-muted-foreground">Continued savings with minimal maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BayInvestment;

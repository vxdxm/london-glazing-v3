import React from "react";
import { PoundSterling, TrendingUp, Calculator } from "lucide-react";

const HorizontalInvestment = () => {
  const pricingTiers = [
    { width: "Up to 1.5m wide", price: "£400-£650" },
    { width: "1.5m-2.5m wide", price: "£600-£900" },
    { width: "2.5m-3.5m wide", price: "£900-£1,500" },
    { width: "3.5m-5m+ wide", price: "£1,500-£2,500+" }
  ];

  const costFactors = [
    "Window width (primary cost driver)",
    "Panel count",
    "Standard vs multi-track system",
    "Glass specification (4mm to 12.8mm)",
    "Window height"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Investment and Cost Structure</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <PoundSterling className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Width-Based Pricing</h3>
          </div>
          
          <div className="space-y-3">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-foreground">{tier.width}</span>
                <span className="font-semibold text-primary">{tier.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cost Factors</h3>
          </div>
          
          <ul className="space-y-2">
            {costFactors.map((factor, index) => (
              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {factor}
              </li>
            ))}
          </ul>

          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Finance options available</strong> to spread investment 
              costs over manageable periods.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
          <h3 className="text-xl font-semibold text-foreground">Return on Investment</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">£300-£600</p>
            <p className="text-sm text-muted-foreground">Annual savings per wide window</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">4-7 Years</p>
            <p className="text-sm text-muted-foreground">Payback period</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">20+ Years</p>
            <p className="text-sm text-muted-foreground">System lifespan</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">£6,000-£12,000</p>
            <p className="text-sm text-muted-foreground">Total lifetime savings</p>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h4 className="font-semibold text-foreground mb-3">Comparative Value Analysis</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-background rounded-lg p-3">
            <p className="font-medium text-foreground">Multiple Hinged Units</p>
            <p className="text-muted-foreground">£600-£1,200 (less smooth operation, requires swing space)</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <p className="font-medium text-foreground">Vertical Sliding</p>
            <p className="text-muted-foreground">£500-£1,000 (awkward on very wide windows)</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
            <p className="font-medium text-primary">Horizontal Sliding</p>
            <p className="text-muted-foreground">£400-£2,500+ (ideal for wide windows, superior operation)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalInvestment;

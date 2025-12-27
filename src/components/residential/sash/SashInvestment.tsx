import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, TrendingUp, Calculator } from "lucide-react";

const SashInvestment = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8">Investment and Returns</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Typical Costs */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <PoundSterling className="h-6 w-6 text-primary" />
              <CardTitle>Typical Costs</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Per Sash Window Costs:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Small Victorian sash: £400-£600</li>
                <li>• Medium Georgian sash: £600-£800</li>
                <li>• Large bay window sash: £800-£900+</li>
                <li>• Tilt-in models: Additional £100-£200 per window</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Full House Examples:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Victorian terrace (8 windows): £3,200-£7,200</li>
                <li>• Georgian townhouse (12 windows): £4,800-£10,800</li>
                <li>• Edwardian semi (10 windows): £4,000-£9,000</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Comparison */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-primary" />
              <CardTitle>Comparison to Alternatives</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h4 className="font-semibold text-foreground">Secondary Glazing vs Sash Window Replacement:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Secondary glazing: £400-£900 per window</li>
              <li>• Sash replacement: £1,500-£3,000 per window</li>
            </ul>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="font-semibold text-primary">Savings: 50-70% cheaper than replacement</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Plus: No planning permission requirements, preserves original windows, faster installation, minimal disruption
            </p>
          </CardContent>
        </Card>

        {/* ROI */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              <CardTitle>Return on Investment</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Annual energy savings</strong> of £300-£600 per window create a <strong className="text-foreground">payback period of 4-7 years</strong>.
            </p>
            <p className="text-muted-foreground">
              With continued savings over the <strong className="text-foreground">20+ year lifespan</strong>, potentially totaling £6,000-£12,000 per window in energy costs alone.
            </p>
            <p className="text-muted-foreground text-sm">
              When combined with comfort improvements, noise reduction benefits, heritage preservation, and avoided replacement costs, secondary glazing represents exceptional value for period property owners.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SashInvestment;

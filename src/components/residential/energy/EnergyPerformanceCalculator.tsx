
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export const EnergyPerformanceCalculator = () => {
  const [windowArea, setWindowArea] = useState(10);
  const [heatingCosts, setHeatingCosts] = useState(1200);

  const estimatedSavings = Math.round((windowArea * heatingCosts * 0.15) * 10) / 10;

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle>Energy Savings Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Total Window Area (m²): {windowArea}m²
              </label>
              <Slider
                value={[windowArea]}
                onValueChange={(value) => setWindowArea(value[0])}
                max={50}
                step={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Annual Heating Costs (£): £{heatingCosts}
              </label>
              <Slider
                value={[heatingCosts]}
                onValueChange={(value) => setHeatingCosts(value[0])}
                max={3000}
                step={100}
              />
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-lg font-semibold">
                Estimated Annual Savings: £{estimatedSavings}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                *Estimates based on average performance improvements. Actual savings may vary.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

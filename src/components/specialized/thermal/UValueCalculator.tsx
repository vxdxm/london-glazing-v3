import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/ui/section-heading";
import { Calculator, TrendingDown } from "lucide-react";
import { useState } from "react";

interface GlazingOption {
  label: string;
  uValue: number;
  description: string;
}

const existingGlazingOptions: GlazingOption[] = [
  { label: "Single Glazing", uValue: 5.8, description: "Standard single pane" },
  { label: "Double Glazing", uValue: 2.8, description: "Standard double glazed unit" },
  { label: "Triple Glazing", uValue: 1.8, description: "Modern triple glazed unit" },
];

const secondaryGlazingOptions: GlazingOption[] = [
  { label: "Single Glazed (4mm, 30mm gap)", uValue: 3.2, description: "Minimum gap secondary glazing" },
  { label: "Single Glazed (4mm, 50mm gap)", uValue: 3.0, description: "Reduced gap secondary glazing" },
  { label: "Single Glazed (4mm, 100mm gap)", uValue: 2.8, description: "Standard secondary glazing" },
  { label: "Single Glazed (6.4mm, 30mm gap)", uValue: 3.1, description: "Laminated glass, minimum gap" },
  { label: "Single Glazed (6.4mm, 50mm gap)", uValue: 2.9, description: "Laminated glass, reduced gap" },
  { label: "Single Glazed (6.4mm, 100mm gap)", uValue: 2.7, description: "Laminated glass, standard gap" },
  { label: "Low-E Glass (4mm, 100mm gap)", uValue: 1.8, description: "Low-E coated glass" },
  { label: "Low-E Glass (6.4mm, 100mm gap)", uValue: 1.7, description: "Laminated Low-E glass" },
  { label: "Double Glazed Unit (4-12-4)", uValue: 1.2, description: "Sealed double glazed unit" },
  { label: "Premium Double Glazed (4-9.2-6.8)", uValue: 1.0, description: "Acoustic double glazed unit" },
  { label: "Premium Double Glazed (6.4-12-4)", uValue: 1.1, description: "Laminated double glazed unit" },
];

export const UValueCalculator = () => {
  const [existingGlazing, setExistingGlazing] = useState<string>("5.8");
  const [secondaryGlazing, setSecondaryGlazing] = useState<string>("2.8");
  const [windowArea, setWindowArea] = useState<string>("10");

  const currentUValue = parseFloat(existingGlazing);
  const secondaryUValue = parseFloat(secondaryGlazing);
  
  // Calculate combined U-value using thermal resistance method
  const currentResistance = 1 / currentUValue;
  const secondaryResistance = 1 / secondaryUValue;
  const combinedResistance = currentResistance + secondaryResistance;
  const newUValue = 1 / combinedResistance;
  
  const improvement = ((currentUValue - newUValue) / currentUValue) * 100;
  const heatLossReduction = improvement;
  
  const area = parseFloat(windowArea) || 0;
  const annualHeatLoss = currentUValue * area * 24 * 365 * 0.001; // kWh
  const newAnnualHeatLoss = newUValue * area * 24 * 365 * 0.001; // kWh
  const annualSavings = annualHeatLoss - newAnnualHeatLoss;

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Interactive U-Value Calculator"
        subtitle="Calculate exact thermal performance improvements for your windows"
        className="mb-8"
      />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculate Your U-Value Improvement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="existing-glazing">Current Window Type</Label>
              <Select value={existingGlazing} onValueChange={setExistingGlazing}>
                <SelectTrigger id="existing-glazing">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {existingGlazingOptions.map((option) => (
                    <SelectItem key={option.uValue} value={option.uValue.toString()}>
                      {option.label} (U={option.uValue})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {existingGlazingOptions.find(o => o.uValue.toString() === existingGlazing)?.description}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondary-glazing">Secondary Glazing Type</Label>
              <Select value={secondaryGlazing} onValueChange={setSecondaryGlazing}>
                <SelectTrigger id="secondary-glazing">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {secondaryGlazingOptions.map((option) => (
                    <SelectItem key={option.uValue} value={option.uValue.toString()}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                {secondaryGlazingOptions.find(o => o.uValue.toString() === secondaryGlazing)?.description}
              </p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="window-area">Total Window Area (m²)</Label>
              <Input
                id="window-area"
                type="number"
                min="1"
                max="500"
                step="0.1"
                value={windowArea}
                onChange={(e) => setWindowArea(e.target.value)}
                placeholder="Enter window area"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Current U-Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{currentUValue.toFixed(1)}</p>
                <p className="text-xs text-muted-foreground mt-1">W/m²K</p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="h-4 w-4 text-primary" />
                  New U-Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{newUValue.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground mt-1">W/m²K</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  {improvement.toFixed(0)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Better</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-900">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Heat Loss Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {heatLossReduction.toFixed(0)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">Less heat loss</p>
              </CardContent>
            </Card>
          </div>

          {area > 0 && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">💡</span>
                Estimated Annual Energy Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Current Annual Heat Loss</p>
                  <p className="font-semibold text-lg">{annualHeatLoss.toFixed(0)} kWh</p>
                </div>
                <div>
                  <p className="text-muted-foreground">New Annual Heat Loss</p>
                  <p className="font-semibold text-lg">{newAnnualHeatLoss.toFixed(0)} kWh</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Energy Saved</p>
                  <p className="font-semibold text-lg text-green-600 dark:text-green-400">
                    {annualSavings.toFixed(0)} kWh/year
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                * Calculations based on thermal resistance method. Actual performance may vary depending on installation quality and environmental factors.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

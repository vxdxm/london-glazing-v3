import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Leaf, Home, Zap } from "lucide-react";

export const CO2SavingsCalculator = () => {
  const savingsData = [
    {
      propertySize: "Small Flat (50m²)",
      windows: "4-6",
      annualSaving: "850",
      co2Reduction: "420",
      treesEquivalent: "19"
    },
    {
      propertySize: "Medium House (100m²)",
      windows: "8-12",
      annualSaving: "1,700",
      co2Reduction: "840",
      treesEquivalent: "38"
    },
    {
      propertySize: "Large House (150m²)",
      windows: "12-18",
      annualSaving: "2,550",
      co2Reduction: "1,260",
      treesEquivalent: "57"
    },
    {
      propertySize: "Commercial (300m²)",
      windows: "20-30",
      annualSaving: "5,100",
      co2Reduction: "2,520",
      treesEquivalent: "114"
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Potential CO₂ Savings"
        subtitle="Environmental impact of secondary glazing installation"
        className="mb-8"
      />

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Leaf className="h-5 w-5" />
              Carbon Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Secondary glazing reduces your property's carbon footprint by improving thermal efficiency, 
              requiring less heating energy throughout the year.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Zap className="h-5 w-5" />
              Energy Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Reduce heating energy consumption by 40-60%, translating to substantial annual savings 
              on your energy bills while reducing environmental impact.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Home className="h-5 w-5" />
              Property Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Improved energy efficiency ratings enhance property value and appeal to environmentally 
              conscious buyers and tenants.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estimated Annual CO₂ Savings by Property Size</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Based on average UK energy usage and gas heating (0.49kg CO₂ per kWh)
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Property Size</th>
                  <th className="text-left py-3 px-4 font-semibold">Windows</th>
                  <th className="text-left py-3 px-4 font-semibold">Annual Energy Savings</th>
                  <th className="text-left py-3 px-4 font-semibold">CO₂ Reduction</th>
                  <th className="text-left py-3 px-4 font-semibold">Trees Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {savingsData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{row.propertySize}</td>
                    <td className="py-3 px-4">{row.windows}</td>
                    <td className="py-3 px-4">{row.annualSaving} kWh</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">{row.co2Reduction} kg</td>
                    <td className="py-3 px-4 flex items-center gap-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                      {row.treesEquivalent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Calculation basis:</strong> Assumes 50% heat loss reduction through windows, 
              UK average heating of 200 days/year, and primary heating via natural gas.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Trees equivalent:</strong> Based on average CO₂ absorption of 22kg per tree per year.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Actual savings vary based on property condition, existing window type, heating system, 
              usage patterns, and local climate.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

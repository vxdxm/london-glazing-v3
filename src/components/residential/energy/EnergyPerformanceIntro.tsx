
import { Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EnergyPerformanceIntro = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Understanding Energy Performance</h2>
          <p className="text-gray-700 mb-6">
            Secondary glazing can significantly improve your home's energy efficiency by creating 
            an additional barrier against heat loss. This extra layer of glazing helps maintain 
            a comfortable indoor temperature while reducing energy costs.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Thermometer className="h-5 w-5" />
            <span className="font-medium">Reduce heat loss by up to 60%</span>
          </div>
        </div>
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Key Performance Metrics</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-medium">U-Value:</span>
                <span className="text-gray-700">Measure of heat loss through windows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Air Leakage:</span>
                <span className="text-gray-700">Reduction in drafts and air infiltration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Solar Gain:</span>
                <span className="text-gray-700">Management of heat from sunlight</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

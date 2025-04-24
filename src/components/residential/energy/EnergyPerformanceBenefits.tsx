
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EnergyPerformanceBenefits = () => {
  const benefits = [
    "Reduced heating costs through improved insulation",
    "Better temperature control throughout your property",
    "Decreased carbon footprint",
    "Enhanced comfort with fewer cold spots",
    "Improved energy efficiency rating for your property",
    "Lower environmental impact"
  ];

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle>Energy Performance Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

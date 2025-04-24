
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SingleDoubleGlazedBenefits = () => {
  const singleGlazedBenefits = [
    "Cost-effective solution for modest budgets",
    "Lighter weight - ideal for listed buildings with delicate frames",
    "Slimmer profile that's less visually intrusive",
    "Easier to install and maintain",
    "Suitable for properties in milder climates",
    "Quick installation time"
  ];

  const doubleGlazedBenefits = [
    "Superior thermal insulation performance",
    "Enhanced noise reduction capabilities",
    "Better condensation control",
    "Improved security features",
    "Potentially greater energy bill savings",
    "Higher overall property value increase"
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits Comparison</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Single Glazed Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {singleGlazedBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Double Glazed Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {doubleGlazedBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          Choosing between single and double glazed secondary windows depends on your specific needs, budget constraints, 
          and the characteristics of your property. Our expert team can provide personalized advice to help you make the 
          right decision for your unique situation.
        </p>
      </div>
    </div>
  );
};

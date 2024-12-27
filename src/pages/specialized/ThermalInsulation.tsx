import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CostCalculator from "@/components/CostCalculator";

const ThermalInsulation = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Thermal Insulation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt="Thermal insulation showcase with glass roof"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Energy efficient building design"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhanced thermal insulation solutions for improved energy efficiency and comfort.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced heat loss</li>
                <li>Lower energy bills</li>
                <li>Improved U-values</li>
                <li>Draft elimination</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                alt="Technical thermal insulation features"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Technical Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                State-of-the-art thermal insulation technology for maximum efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Low-E glass options</li>
                <li>Thermal break frames</li>
                <li>Warm edge spacers</li>
                <li>Weather sealing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Calculate Your Potential Savings
          </h2>
          <CostCalculator />
        </div>
      </div>
    </div>
  );
};

export default ThermalInsulation;
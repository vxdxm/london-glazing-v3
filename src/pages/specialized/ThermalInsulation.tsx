import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ThermalInsulation = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Thermal Insulation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
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
          <Card className="hover:shadow-lg transition-shadow">
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
      </div>
    </div>
  );
};

export default ThermalInsulation;
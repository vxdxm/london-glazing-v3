import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BayWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Bay Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Specialized Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Custom-designed secondary glazing solutions for bay window configurations.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Follows exact contours</li>
                <li>Preserves architectural features</li>
                <li>Enhanced thermal performance</li>
                <li>Reduced noise infiltration</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Design Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Expertly crafted to maintain the beauty of your bay windows.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Discrete framework</li>
                <li>Smooth operation</li>
                <li>Multiple panel options</li>
                <li>Color-matched finishes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BayWindows;
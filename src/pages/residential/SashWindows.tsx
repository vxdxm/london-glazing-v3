import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SashWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Sash Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Traditional Elegance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our sash window solutions preserve the original character of your period property while providing modern insulation benefits.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Maintains period features</li>
                <li>Enhanced thermal efficiency</li>
                <li>Improved noise reduction</li>
                <li>Smooth operation</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our secondary glazing for sash windows is designed to complement existing window frames perfectly.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Vertical sliding panels</li>
                <li>Discrete frame design</li>
                <li>Various glass options</li>
                <li>Draft elimination</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SashWindows;
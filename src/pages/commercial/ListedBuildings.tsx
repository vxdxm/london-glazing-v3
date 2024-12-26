import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ListedBuildings = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Listed Buildings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Heritage-Compliant Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our secondary glazing solutions are designed to meet strict conservation requirements while providing modern benefits.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Preserves original windows</li>
                <li>Meets conservation guidelines</li>
                <li>Reversible installation</li>
                <li>Sympathetic designs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Modern Comfort</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhance the comfort of listed buildings while maintaining their historical integrity.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Improved thermal efficiency</li>
                <li>Noise reduction</li>
                <li>Draft elimination</li>
                <li>Enhanced security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListedBuildings;
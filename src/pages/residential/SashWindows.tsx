import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SashWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Sash Windows</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt="Traditional sash window with secondary glazing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Traditional sash window features"
                  className="w-full h-full object-cover"
                />
              </div>
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
              <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Technical specifications of sash windows"
                  className="w-full h-full object-cover"
                />
              </div>
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
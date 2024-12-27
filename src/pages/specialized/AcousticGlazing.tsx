import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AcousticGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Acoustic Glazing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Noise Reduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Maximum noise reduction solutions for urban properties and noise-sensitive environments.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Up to 80% noise reduction</li>
                <li>Specialized acoustic glass</li>
                <li>Optimal air gap spacing</li>
                <li>Sound dampening seals</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Ideal for properties in high-noise areas or those requiring peaceful environments.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>City center locations</li>
                <li>Near transport routes</li>
                <li>Recording studios</li>
                <li>Residential areas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AcousticGlazing;
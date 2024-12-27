import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";

const AcousticGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Acoustic Secondary Glazing</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt="Acoustic Secondary Glazing installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <NoiseReductionCalculator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                  alt="Modern building with Acoustic Secondary Glazing"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                  alt="Commercial building with Acoustic Secondary Glazing installation"
                  className="w-full h-full object-cover"
                />
              </div>
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
    </div>
  );
};

export default AcousticGlazing;
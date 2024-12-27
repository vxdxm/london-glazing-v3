import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CondensationControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Condensation Control</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff"
                    alt="Window condensation example"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>How Secondary Glazing Prevents Condensation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Secondary glazing creates an additional barrier that helps regulate temperature differences between indoor and outdoor environments, significantly reducing condensation formation.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Creates thermal barrier</li>
                <li>Reduces cold spots on windows</li>
                <li>Improves ventilation control</li>
                <li>Prevents moisture buildup</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a"
                    alt="Ventilation system"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>Benefits of Condensation Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Effective condensation control through secondary glazing offers multiple benefits for your property and health.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Prevents mold growth</li>
                <li>Protects window frames</li>
                <li>Improves indoor air quality</li>
                <li>Reduces maintenance costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CondensationControl;
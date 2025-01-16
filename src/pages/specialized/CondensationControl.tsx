import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CondensationControl = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Condensation Control</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png"
                    alt="Close-up of a modern window ventilation system showing trickle vents and frame details"
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
                    src="/lovable-uploads/8fd22af1-94cd-4761-b8a2-531d7834baaa.png"
                    alt="Secondary glazing installation showing effective condensation control with clear window panes"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>Benefits of Condensation Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Secondary glazing offers highly effective condensation control, bringing a wide range of benefits for both your property and your health. By creating an additional barrier between the interior and exterior environments, it reduces moisture buildup on windows, preventing issues like mold, dampness, and peeling paint.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>The Science Behind It</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Secondary glazing works by creating an insulating air gap between your existing window and the new pane. This air gap helps maintain a more consistent temperature on the inner surface of your windows, preventing the formation of condensation when warm, moist air comes into contact with cold surfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Temperature Regulation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The additional layer of glazing helps maintain a more stable temperature on the inner surface of your windows. By reducing the temperature difference between the glass surface and room air, secondary glazing significantly decreases the likelihood of condensation forming. This is particularly effective in rooms with high humidity levels, such as kitchens and bathrooms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Long-Term Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By controlling condensation, secondary glazing helps protect your window frames and surrounding walls from water damage, rot, and mold growth. This preventive measure can significantly extend the life of your windows and maintain the structural integrity of your property while creating a healthier living environment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Ventilation Options</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full mb-4">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff"
                    alt="Ventilation system"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardTitle>Integrated Ventilation Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our secondary glazing units can be fitted with specialized ventilation systems to ensure optimal air circulation while maintaining thermal and acoustic performance.
                </p>
                
                <h3 className="text-xl font-semibold">Available Options</h3>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Trickle vents for continuous background ventilation</li>
                  <li>Humidity-controlled vents that respond to moisture levels</li>
                  <li>Adjustable ventilation slots for manual control</li>
                  <li>Removable panels for maximum ventilation when needed</li>
                </ul>

                <h3 className="text-xl font-semibold">Benefits</h3>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Maintains fresh air circulation</li>
                  <li>Helps prevent condensation build-up</li>
                  <li>Reduces risk of mold growth</li>
                  <li>Preserves window frames and surroundings</li>
                  <li>Improves indoor air quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CondensationControl;

import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PremiumGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">12.8mm Premium Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 12.8mm premium acoustic laminated glass represents the pinnacle of noise reduction technology, designed for the most challenging acoustic environments.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maximum noise reduction up to 41dB</li>
                  <li>State-of-the-art acoustic lamination</li>
                  <li>Ultimate security protection</li>
                  <li>Superior sound dampening across all frequencies</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Properties near airports</li>
                  <li>Industrial area developments</li>
                  <li>Professional music studios</li>
                  <li>High-security installations</li>
                </ul>

                <h3 className="text-xl font-semibold">Premium Benefits</h3>
                <p>The 12.8mm glass combines multiple specialized acoustic interlayers with maximum thickness to provide unparalleled noise reduction. This premium solution is ideal for locations where absolute sound control is essential.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PremiumGlass;
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MediumPerformanceGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">8.8mm Medium Performance Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 8.8mm acoustic laminated glass represents a significant step up in noise reduction capabilities, perfect for properties in busier urban environments.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 35dB</li>
                  <li>Advanced laminated construction</li>
                  <li>Enhanced security features</li>
                  <li>Superior sound dampening properties</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Properties near busy roads</li>
                  <li>Commercial buildings in urban areas</li>
                  <li>Residential properties in city centers</li>
                  <li>Hotels and guest houses</li>
                </ul>

                <h3 className="text-xl font-semibold">Advanced Features</h3>
                <p>The 8.8mm glass incorporates multiple layers of acoustic interlayers, providing exceptional noise reduction while maintaining optical clarity. The increased thickness also offers enhanced security benefits.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediumPerformanceGlass;
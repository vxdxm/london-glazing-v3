import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HighPerformanceGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">10.8mm High Performance Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 10.8mm acoustic laminated glass delivers superior noise reduction for demanding environments, making it ideal for properties in high-noise areas.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 38dB</li>
                  <li>Premium acoustic lamination</li>
                  <li>Maximum security benefits</li>
                  <li>Exceptional sound insulation properties</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>City center properties</li>
                  <li>Buildings near railways</li>
                  <li>Recording studios</li>
                  <li>High-end residential developments</li>
                </ul>

                <h3 className="text-xl font-semibold">Professional Applications</h3>
                <p>The 10.8mm glass is particularly suited for professional environments where noise control is crucial. Its substantial thickness provides excellent sound dampening while maintaining clarity and light transmission.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HighPerformanceGlass;
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EntryLevelGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">6.4mm Entry-Level Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 6.4mm acoustic laminated glass represents our entry-level solution for noise reduction, perfect for residential properties in quieter urban areas.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 32dB</li>
                  <li>Laminated safety glass construction</li>
                  <li>UV protection included</li>
                  <li>Clear visibility maintained</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Residential properties in suburban areas</li>
                  <li>Homes away from major roads</li>
                  <li>Properties requiring basic noise reduction</li>
                  <li>Bedrooms and living spaces in quieter neighborhoods</li>
                </ul>

                <h3 className="text-xl font-semibold">Installation Details</h3>
                <p>The 6.4mm glass is installed within our specially designed secondary glazing frames, maintaining a optimal air gap between your existing windows and the secondary unit for maximum noise reduction effectiveness.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EntryLevelGlass;
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";

const Combination = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Combination Windows</h1>
            <p className="text-gray-700 mb-6">
              Our combination window solutions represent the pinnacle of architectural versatility,
              offering unparalleled flexibility in design and functionality. By expertly blending
              different window styles - from classic sash to modern casement - we create custom
              configurations that perfectly match your property's character. Whether you're looking
              to maximize natural light, enhance ventilation, or create stunning architectural
              focal points, our combination windows deliver the perfect balance of form and function,
              while maintaining energy efficiency and security.
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/5308829b-f263-4fd8-9dfb-58c725b0ae6b.png"
              alt="Modern combination window with multiple panes overlooking a garden with autumn trees"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Available Combinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sash and Horizontal Combination</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/b649e407-2d3c-43d3-aa0b-f12d57057849.png"
                    alt="Sash and horizontal sliding window combination showing a large bay window with multiple panes overlooking a brick building"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Blend traditional sash windows with modern horizontal sliding windows for a
                    unique look that combines heritage appeal with contemporary functionality.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Perfect for period properties</li>
                    <li>Maximum ventilation options</li>
                    <li>Flexible opening configurations</li>
                    <li>Enhanced aesthetic appeal</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bay and Casement Mix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    alt="Bay and casement window combination"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Combine bay windows with casement windows to create stunning focal points
                    while maintaining practical functionality throughout your property.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maximizes natural light</li>
                    <li>Creates stunning focal points</li>
                    <li>Practical ventilation options</li>
                    <li>Ideal for modern homes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Aluminum alloy frame construction</li>
                  <li>Multiple powder-coated finish options</li>
                  <li>Custom color matching available</li>
                  <li>Thermal break technology</li>
                  <li>Weather-resistant seals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Enhanced thermal performance</li>
                  <li>Superior sound insulation</li>
                  <li>Advanced security features</li>
                  <li>Customizable ventilation options</li>
                  <li>Easy maintenance design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <GlassOptions />
      </div>
    </div>
  );
};

export default Combination;
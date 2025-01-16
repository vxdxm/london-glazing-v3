import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OfficeBuildings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Office Buildings</h1>
        
        {/* Hero Section */}
        <div className="mb-16">
          <AspectRatio ratio={21/9} className="mb-8">
            <img
              src="/lovable-uploads/9161feeb-12cc-4a83-adf6-9c9cc52dc4aa.png"
              alt="Office interior with secondary glazing installation"
              className="rounded-lg object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-lg text-gray-600 mb-8">
            Transform your office environment with our premium secondary glazing solutions. 
            We specialize in creating comfortable, energy-efficient, and productive workspaces 
            through advanced glazing technology.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Sound Insulation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduces external noise by up to 80%</li>
                <li>Creates quieter meeting spaces</li>
                <li>Improves concentration and productivity</li>
                <li>Ideal for city center locations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduces heating and cooling costs</li>
                <li>Improves building's energy rating</li>
                <li>Better temperature control</li>
                <li>Lower carbon footprint</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Installation Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Minimal disruption to office operations</li>
                <li>No structural modifications required</li>
                <li>Quick and clean installation process</li>
                <li>Fully reversible solution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enhanced security options</li>
                <li>UV protection for furniture and equipment</li>
                <li>Condensation reduction</li>
                <li>Easy maintenance access</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Glass Options</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>4mm - 12.8mm Acoustic Glass</li>
                  <li>Laminated security glass available</li>
                  <li>Low-E coating options</li>
                  <li>Acoustic laminate variations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Frame Specifications</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Slim aluminum profiles</li>
                  <li>Multiple color options</li>
                  <li>Thermal break technology</li>
                  <li>Weather-resistant seals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Office Space?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and quote. Our experts will help you 
            find the perfect secondary glazing solution for your office building.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/quote-request")}
            className="bg-primary hover:bg-primary/90"
          >
            Get Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfficeBuildings;
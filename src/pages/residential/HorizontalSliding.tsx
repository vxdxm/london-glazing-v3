import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HorizontalSliding = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Horizontal Sliding Windows</h1>
        
        {/* Introduction Section */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Our horizontal sliding secondary glazing systems offer a perfect blend of functionality and aesthetics. 
            These systems are designed to provide excellent thermal insulation and noise reduction while maintaining 
            easy access to your existing windows.
          </p>
        </div>

        {/* Main Window Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Standard Horizontal Sliding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
                  alt="Standard horizontal sliding window"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
                <p>
                  Our standard horizontal sliding system typically consists of 2 or 3 panels, which is standard for majority of the windows. 
                  This classic design combines functionality with ease of use, perfect for residential applications where traditional window 
                  styles are preferred.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Smooth sliding mechanism for effortless operation</li>
                  <li>High-quality brush seals for enhanced insulation</li>
                  <li>Available in 2 or 3 panel configurations</li>
                  <li>Suitable for windows up to 2.4m in height</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multi-Track Sliding System</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/83a85813-7a32-48d2-a1c9-ad133fc122d7.png"
                  alt="Multi-track sliding window system"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
                <p>
                  Our advanced multi-track sliding system can accommodate 3 to 5 panels within one window frame, offering maximum flexibility 
                  for larger openings. Perfect for creating panoramic views and seamless indoor-outdoor transitions in modern homes and 
                  commercial spaces.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multiple track options for 3-5 panels</li>
                  <li>Enhanced security features with multi-point locking</li>
                  <li>Ideal for large window spans up to 4m wide</li>
                  <li>Superior weather sealing system</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features and Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Features and Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Thermal Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduces heat loss by up to 65%</li>
                  <li>Helps eliminate cold spots</li>
                  <li>Lower energy bills</li>
                  <li>Improved comfort year-round</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduces external noise by up to 80%</li>
                  <li>Perfect for busy streets</li>
                  <li>Enhanced sound insulation</li>
                  <li>Peaceful living environment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Easy maintenance and cleaning</li>
                  <li>Smooth operation</li>
                  <li>Enhanced security features</li>
                  <li>Draft elimination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aluminum frame thickness: 2mm</li>
                  <li>Maximum panel height: 2.4m</li>
                  <li>Maximum panel width: 2m</li>
                  <li>Available in various colors and finishes</li>
                  <li>Thermal break options available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Installation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional installation required</li>
                  <li>Typical installation time: 2-4 hours per window</li>
                  <li>Minimal disruption to existing windows</li>
                  <li>Full warranty coverage</li>
                  <li>After-installation support available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSliding;
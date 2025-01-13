import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet";

const SecondaryGlazingBuildingRegulations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Building Regulations | Compliance Guide</title>
        <meta 
          name="description" 
          content="Comprehensive guide to UK building regulations for secondary glazing installations. Learn about thermal performance requirements, ventilation standards, and fire safety compliance." 
        />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Secondary Glazing Building Regulations</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <AspectRatio ratio={16/9} className="mb-6">
                <img
                  src="/lovable-uploads/b435a0a1-65cb-4dd3-9596-37ce74c9378e.png"
                  alt="Building regulations compliance diagram"
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
              <h2 className="text-2xl font-semibold mb-4">Key Building Regulations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Part L - Conservation of Fuel and Power</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Minimum U-value requirements for thermal performance</li>
                    <li>Secondary glazing must contribute to overall window energy efficiency</li>
                    <li>Compliance with current Building Regulations Document L1B for existing dwellings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Part F - Ventilation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Adequate ventilation must be maintained</li>
                    <li>Trickle ventilators may be required</li>
                    <li>Background ventilation requirements for habitable rooms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Part B - Fire Safety</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Emergency egress requirements for habitable rooms</li>
                    <li>Minimum openable area specifications</li>
                    <li>Fire escape compliance for multi-story buildings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Part K - Protection from Falling</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Safety requirements for cleaning access</li>
                    <li>Guard requirements for low-level glazing</li>
                    <li>Impact safety standards compliance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
                <p className="text-gray-600">
                  Our installations are carried out by certified professionals who ensure full compliance with all relevant building regulations. We provide comprehensive documentation and certificates upon completion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SecondaryGlazingBuildingRegulations;

import React from 'react';
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import SustainabilityCalculator from "@/components/sustainability/SustainabilityCalculator";
import SustainabilityFacts from "@/components/sustainability/SustainabilityFacts";
import SustainabilityTimeline from "@/components/sustainability/SustainabilityTimeline";
import { Leaf, Earth, Recycle } from "lucide-react";

const SustainabilityImpactTracker = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sustainability Impact Tracker | Secondary Glazing Specialist</title>
        <meta name="description" content="Track the environmental impact of your secondary glazing installation. See CO2 reduction, energy savings, and tree equivalents." />
        <meta name="keywords" content="sustainable glazing, eco-friendly windows, environmental impact, carbon reduction, energy efficiency, London glazing specialist" />
        <meta property="og:title" content="Sustainability Impact Tracker | Secondary Glazing Specialist" />
        <meta property="og:description" content="See the positive environmental impact of secondary glazing on your property." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/sustainability-impact-tracker" />
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Earth className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Sustainability Impact Tracker</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the environmental benefits of secondary glazing. Our sustainability tracker helps you visualize your contribution to a greener planet through reduced energy consumption and lower carbon emissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
                alt="Eco-friendly secondary glazing installed in a traditional home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Environmental Impact</h2>
              <p className="text-gray-600">
                Secondary glazing isn't just about comfort and savings—it's a significant environmental choice. By improving your home's thermal efficiency, you're actively reducing carbon emissions and conserving energy resources.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <Leaf className="h-5 w-5" />
                <span className="font-medium">A sustainable choice for heritage properties</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg"
                alt="Energy-efficient secondary glazing with visible thermal improvement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Material Conservation</h2>
              <p className="text-gray-600">
                By preserving and enhancing your existing windows rather than replacing them, secondary glazing significantly reduces waste and the demand for new raw materials—making it an environmentally responsible solution.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <Recycle className="h-5 w-5" />
                <span className="font-medium">Extends window lifespan by decades</span>
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-16 bg-green-50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800">Calculate Your Environmental Impact</h2>
              <p className="text-gray-600 mt-2">
                See how your secondary glazing installation contributes to a healthier planet
              </p>
            </div>
            <SustainabilityCalculator />
          </CardContent>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Sustainability Facts</h2>
          <SustainabilityFacts />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Long-term Benefits</h2>
          <SustainabilityTimeline />
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">Our Commitment to Sustainability</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              At Secondary Glazing Specialist, we're committed to environmentally responsible practices throughout our business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Sustainable Materials</h3>
                <p className="text-gray-600">
                  We source sustainable materials and use recycled aluminum wherever possible in our secondary glazing systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Waste Reduction</h3>
                <p className="text-gray-600">
                  Our manufacturing processes are designed to minimize waste, and we recycle 95% of all production byproducts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Sourcing</h3>
                <p className="text-gray-600">
                  We reduce our carbon footprint by working with local suppliers and minimizing transportation emissions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityImpactTracker;

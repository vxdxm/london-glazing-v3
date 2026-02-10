
import React from 'react';
import { Helmet } from "react-helmet-async";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import SustainabilityCalculator from "@/components/sustainability/SustainabilityCalculator";
import SustainabilityFacts from "@/components/sustainability/SustainabilityFacts";
import SustainabilityTimeline from "@/components/sustainability/SustainabilityTimeline";
import { Leaf, Earth, Recycle, BarChart, Calculator, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const SustainabilityImpactTracker = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Secondary Glazing Environmental Impact Calculator | London Sustainability</title>
        <meta name="description" content="Calculate the environmental impact of your secondary glazing with our sustainability tracker. See CO2 reduction, energy savings, and reduced carbon footprint." />
        <meta name="keywords" content="secondary glazing environmental impact, CO2 reduction glazing, energy efficient windows London, sustainable window solutions, carbon footprint reduction, eco-friendly glazing calculator" />
        <meta property="og:title" content="Secondary Glazing Environmental Impact Calculator | London Sustainability" />
        <meta property="og:description" content="Calculate your window's environmental impact with our sustainability tracker. See energy savings, CO2 reduction, and tree equivalents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/sustainability-impact-tracker-secondary-glazing" />
        <meta property="og:image" content="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/sustainability-impact-tracker-secondary-glazing" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Secondary Glazing Environmental Impact Calculator",
            "description": "Calculate the environmental impact of your secondary glazing with our sustainability tracker. See CO2 reduction, energy savings, and reduced carbon footprint.",
            "publisher": {
              "@type": "Organization",
              "name": "Secondary Glazing Specialist London",
              "logo": {
                "@type": "ImageObject",
                "url": "https://secondaryglazingspecialist.com/lovable-uploads/b39446b8-e7b5-4000-ac4b-a7a691a5bb14.png"
              }
            }
          }`}
        </script>
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Earth className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Secondary Glazing Sustainability Impact Calculator</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the environmental benefits of your secondary glazing installation. Our sustainability tracker helps you visualize your contribution to a greener London through reduced energy consumption and lower carbon emissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
                alt="Eco-friendly secondary glazing installation in London home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Environmental Impact of Secondary Glazing</h2>
              <p className="text-gray-600">
                Secondary glazing isn't just about comfort and savings—it's a significant environmental choice for London properties. By improving your home's thermal efficiency, you're actively reducing carbon emissions and conserving energy resources for future generations.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <Leaf className="h-5 w-5" />
                <span className="font-medium">A sustainable choice for heritage properties in London</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg"
                alt="Energy-efficient secondary glazing with visible thermal improvement in London home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Secondary Glazing Material Conservation</h2>
              <p className="text-gray-600">
                By preserving and enhancing your existing London windows rather than replacing them, secondary glazing significantly reduces waste and the demand for new raw materials—making it an environmentally responsible solution for historic buildings.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <Recycle className="h-5 w-5" />
                <span className="font-medium">Extends window lifespan by decades while preserving heritage</span>
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-16 bg-green-50" id="calculator">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800">Calculate Your Secondary Glazing Environmental Impact</h2>
              <p className="text-gray-600 mt-2">
                See how your secondary glazing installation contributes to a healthier London and planet
              </p>
            </div>
            <SustainabilityCalculator />
          </CardContent>
        </Card>

        <div className="mb-16" id="sustainability-facts">
          <h2 className="text-3xl font-bold mb-8 text-center">Secondary Glazing Sustainability Facts</h2>
          <SustainabilityFacts />
        </div>

        <div className="mb-16" id="long-term-benefits">
          <h2 className="text-3xl font-bold mb-8 text-center">Long-term Secondary Glazing Environmental Benefits</h2>
          <SustainabilityTimeline />
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800">Our Commitment to Secondary Glazing Sustainability</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              At Secondary Glazing Specialist in London, we're committed to environmentally responsible practices throughout our business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <TreePine className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Sustainable Materials</h3>
                <p className="text-gray-600">
                  We source sustainable materials and use recycled aluminum wherever possible in our London secondary glazing systems for minimal environmental impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Recycle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Waste Reduction</h3>
                <p className="text-gray-600">
                  Our manufacturing processes are designed to minimize waste, and we recycle 95% of all secondary glazing production byproducts in our London facility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <BarChart className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Local Sourcing</h3>
                <p className="text-gray-600">
                  We reduce our carbon footprint by working with local London suppliers and minimizing transportation emissions for all our secondary glazing materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Reduce Your Environmental Impact?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Get started with our secondary glazing solutions and make a positive impact on both your home and the environment.
          </p>
          <Link to="/quote-request" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <Calculator className="mr-2 h-5 w-5" />
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityImpactTracker;

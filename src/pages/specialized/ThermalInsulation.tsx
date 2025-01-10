import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CostCalculator from "@/components/CostCalculator";
import { Helmet } from "react-helmet";

const ThermalInsulation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thermal Insulation | Secondary Glazing Specialist</title>
        <meta name="description" content="Improve your home's energy efficiency with our thermal insulation solutions." />
        <meta name="keywords" content="thermal insulation, secondary glazing, energy efficiency, London glazing specialist" />
        <meta property="og:title" content="Thermal Insulation | Secondary Glazing Specialist" />
        <meta property="og:description" content="Expert thermal insulation solutions for your home." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/thermal-insulation" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Thermal Insulation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png"
                alt="Secondary glazing installation in progress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/218776ee-eff4-4f63-8d88-27dd86763e28.png"
                alt="Decorative stained glass window showing thermal efficiency through traditional design"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhanced thermal insulation solutions for improved energy efficiency and comfort.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced heat loss</li>
                <li>Lower energy bills</li>
                <li>Improved U-values</li>
                <li>Draft elimination</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/3853a532-5ab4-43d2-8e86-a0cdbfede781.png"
                alt="Close-up of secondary glazing installation with radiator showing thermal efficiency features"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Technical Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                State-of-the-art thermal insulation technology for maximum efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Low-E glass options</li>
                <li>Thermal break frames</li>
                <li>Warm edge spacers</li>
                <li>Weather sealing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold mb-8">Double Glazed Secondary Glazing Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Enhanced Thermal Performance</h3>
              <p className="text-gray-700">
                Our double glazed secondary glazing units offer superior performance through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Two separate air gaps for maximum insulation</li>
                <li>Up to 40% better insulation than single glazed secondary units</li>
                <li>Optimal 20mm gap between panes for maximum thermal efficiency</li>
                <li>Argon gas filling option for enhanced performance</li>
              </ul>
              <Link 
                to="/specialized/double-glazed-units" 
                className="inline-block mt-4 text-primary hover:underline"
              >
                Learn more about Double Glazed Secondary Glazing Units
              </Link>
            </div>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Configuration</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>4mm-12mm-4mm (20mm total)</li>
                      <li>U-value: 1.2 W/m²K</li>
                      <li>Sound reduction: up to 45dB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Configuration</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>6mm-8mm-6mm (20mm total)</li>
                      <li>U-value: 1.0 W/m²K</li>
                      <li>Sound reduction: up to 48dB</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Calculate Your Potential Savings
          </h2>
          <CostCalculator />
        </div>
      </div>
    </div>
  );
};

export default ThermalInsulation;

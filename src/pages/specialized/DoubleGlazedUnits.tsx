import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DoubleGlazedUnits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Double Glazed Secondary Glazing Units London | Enhanced Thermal & Acoustic Performance</title>
        <meta 
          name="description" 
          content="Discover our premium double glazed secondary glazing units in London. Superior thermal insulation and noise reduction with two separate air gaps. Expert installation guaranteed." 
        />
        <meta 
          name="keywords" 
          content="double glazed secondary glazing, thermal insulation, noise reduction, London glazing specialist, energy efficiency, sound insulation" 
        />
        <meta property="og:title" content="Double Glazed Secondary Glazing Units | London Specialist" />
        <meta 
          property="og:description" 
          content="Premium double glazed secondary glazing solutions offering superior thermal and acoustic performance. Expert installation in London." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/double-glazed-units" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Double Glazed Secondary Glazing Units</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Enhanced Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/23b3d2e8-2c4b-4efd-8548-2c2bb6cd5bbf.png"
                  alt="Office space showing double glazed window installation with improved thermal performance"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-gray-600 mb-6">
                Our double glazed secondary glazing units offer superior performance through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Two separate air gaps for maximum insulation</li>
                <li>Up to 40% better thermal performance than single units</li>
                <li>Optimal 20mm gap between panes</li>
                <li>
                  <Link 
                    to="/specialized/acoustic-secondary-glazing-windows" 
                    className="text-primary hover:underline"
                  >
                    Enhanced sound reduction up to 48dB
                  </Link>
                </li>
                <li>Compliance with Building Regulations</li>
                <li>Preservation of Original Windows</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/ad6e3aae-a0f2-4e58-82c2-be85fc4857af.png"
                  alt="Vertical sliding secondary glazing installation showing technical implementation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Standard Configuration</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>4mm-12mm-4mm (20mm total)</li>
                    <li>U-value: 1.2 W/m²K</li>
                    <li>Sound reduction: up to 45dB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Premium Configuration</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>4mm-9.2mm-6.8mm Acoustic (20mm total)</li>
                    <li>U-value: 1.0 W/m²K</li>
                    <li>Sound reduction: up to 48dB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Double glazed secondary glazing units are a highly advanced solution for improving the insulation and acoustic performance of existing windows. They are particularly beneficial in older buildings where replacing the original windows may not be feasible or desirable.
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Superior Thermal Efficiency</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Dual Air Gaps:</strong> The two separate air gaps create an additional barrier to heat transfer, significantly reducing heat loss during colder months and minimizing heat gain during warmer months.</li>
            <li className="mb-2"><strong>Low U-Values:</strong> With argon gas filling and Low-E glass coatings, these units can achieve U-values as low as 1.0 W/m²K, substantially improving energy efficiency.</li>
            <li><strong>Reduced Condensation:</strong> The improved insulation reduces condensation formation, preventing mold and dampness.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">2. Enhanced Acoustic Performance</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Noise Reduction:</strong> The dual-pane design with optimal 20mm gap effectively reduces noise pollution, creating a quieter indoor environment.</li>
            <li><strong>Customizable Solutions:</strong> Units can be tailored with specific glass thicknesses for targeted noise reduction.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">3. Energy Efficiency and Cost Savings</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Reduced Energy Consumption:</strong> Improved insulation leads to lower heating and cooling costs.</li>
            <li><strong>Sustainability:</strong> Lower energy consumption contributes to a reduced carbon footprint.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">4. Preservation of Historic Windows</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Non-Invasive Solution:</strong> Ideal for historic buildings where window replacement is restricted.</li>
            <li><strong>Reversible Installation:</strong> Can be removed without damaging existing structures.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">5. Additional Benefits</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Draft Reduction:</strong> Eliminates drafts for improved comfort.</li>
            <li className="mb-2"><strong>UV Protection:</strong> Optional Low-E coatings protect furnishings from fading.</li>
            <li className="mb-2"><strong>Design Flexibility:</strong> Available in various styles to match existing windows.</li>
            <li><strong>Property Value:</strong> Enhanced performance can increase overall property value.</li>
          </ul>

          <div className="bg-secondary/50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="text-gray-700">
              Double glazed secondary glazing units offer comprehensive benefits, from superior thermal and acoustic performance to energy savings and aesthetic flexibility. They provide a modern, sustainable, and cost-effective solution for enhancing window performance, particularly in historic or sensitive buildings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleGlazedUnits;
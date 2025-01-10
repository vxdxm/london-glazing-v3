import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

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
                  src="/lovable-uploads/c4397e06-c94f-421b-ad89-a31553ba1990.png"
                  alt="Double glazed secondary glazing installation showing enhanced thermal performance"
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
                <li>Enhanced sound reduction up to 48dB</li>
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
                  src="/lovable-uploads/41ebf8a1-1774-4e48-ab3c-36589de97413.png"
                  alt="Technical diagram showing double glazed unit specifications"
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
                    <li>6mm-8mm-6mm (20mm total)</li>
                    <li>U-value: 1.0 W/m²K</li>
                    <li>Sound reduction: up to 48dB</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">Benefits of Double Glazed Secondary Units</h2>
          <p className="text-gray-700 mb-4">
            Double glazed secondary glazing units represent the pinnacle of window insulation technology, 
            offering unparalleled benefits in terms of thermal efficiency and noise reduction. By creating 
            two separate air gaps, these units provide superior insulation compared to traditional single 
            glazed secondary units.
          </p>
          <p className="text-gray-700 mb-4">
            The optimal 20mm gap between panes has been carefully engineered to maximize both thermal and 
            acoustic performance. When combined with our optional argon gas filling and Low-E glass coating, 
            these units can achieve remarkable U-values as low as 1.0 W/m²K.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoubleGlazedUnits;
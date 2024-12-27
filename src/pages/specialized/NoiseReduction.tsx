import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const glassTypes = [
  {
    thickness: "6.4mm",
    description: "Entry-level acoustic laminated glass, suitable for moderate noise reduction in residential areas.",
    noiseReduction: "Up to 32dB",
    recommended: "Urban residential areas away from major roads",
    path: "/specialized/glass/entry-level"
  },
  {
    thickness: "6.8mm",
    description: "Enhanced entry-level acoustic glass, offering improved sound insulation for residential properties.",
    noiseReduction: "Up to 33dB",
    recommended: "Suburban areas with moderate traffic",
    path: "/specialized/glass/enhanced-entry"
  },
  {
    thickness: "8.8mm",
    description: "Medium-performance acoustic glass, offering enhanced sound insulation for busier environments.",
    noiseReduction: "Up to 35dB",
    recommended: "Properties near busy roads or commercial areas",
    path: "/specialized/glass/medium-performance"
  },
  {
    thickness: "10.8mm",
    description: "High-performance acoustic laminated glass, providing superior noise reduction capabilities.",
    noiseReduction: "Up to 38dB",
    recommended: "City centers or properties near railways",
    path: "/specialized/glass/high-performance"
  },
  {
    thickness: "12.8mm",
    description: "Premium acoustic glass offering maximum noise reduction for the most challenging environments.",
    noiseReduction: "Up to 41dB",
    recommended: "Properties near airports or industrial areas",
    path: "/specialized/glass/premium"
  },
];

const doubleGlazedOptions = [
  {
    configuration: "4-12-4mm",
    totalThickness: "20mm",
    description: "Standard double glazed unit with 12mm air gap",
    noiseReduction: "Up to 31dB",
    recommended: "Residential areas with moderate noise levels"
  },
  {
    configuration: "6-8-6mm",
    totalThickness: "20mm",
    description: "Balanced double glazed unit with thicker glass panes",
    noiseReduction: "Up to 33dB",
    recommended: "Urban residential areas"
  },
  {
    configuration: "8-6-6mm",
    totalThickness: "20mm",
    description: "Asymmetric double glazed unit for enhanced acoustics",
    noiseReduction: "Up to 35dB",
    recommended: "Properties near busy roads"
  },
  {
    configuration: "10-4-6mm",
    totalThickness: "20mm",
    description: "High-performance asymmetric configuration",
    noiseReduction: "Up to 37dB",
    recommended: "City centers and high-traffic areas"
  }
];

const NoiseReduction = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Noise Reduction Secondary Glazing</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Our noise reduction secondary glazing solutions offer exceptional sound insulation using various glass thicknesses 
            and configurations to meet your specific needs. From residential properties to commercial buildings, we provide 
            tailored solutions to combat noise pollution effectively.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Single Glazed Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {glassTypes.map((glass) => (
            <Card 
              key={glass.thickness} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(glass.path)}
            >
              <CardHeader>
                <CardTitle>{glass.thickness} Acoustic Glass</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{glass.description}</p>
                <div className="space-y-2">
                  <p><strong>Noise Reduction:</strong> {glass.noiseReduction}</p>
                  <p><strong>Recommended for:</strong> {glass.recommended}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-6">Double Glazed Options (Max 20mm)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doubleGlazedOptions.map((option) => (
            <Card 
              key={option.configuration} 
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{option.configuration} Double Glazed Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-2">
                  <p><strong>Total Thickness:</strong> {option.totalThickness}</p>
                  <p><strong>Noise Reduction:</strong> {option.noiseReduction}</p>
                  <p><strong>Recommended for:</strong> {option.recommended}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoiseReduction;
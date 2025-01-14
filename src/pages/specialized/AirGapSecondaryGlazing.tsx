import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet";

const AirGapSecondaryGlazing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Air Gap Secondary Glazing | Optimal Cavity Spacing Guide</title>
        <meta 
          name="description" 
          content="Learn about optimal air gap distances in secondary glazing installations. Expert guide on 100mm and 150mm cavity spacing for maximum thermal and acoustic performance." 
        />
        <meta 
          name="keywords" 
          content="air gap secondary glazing, cavity spacing, window insulation, thermal performance, acoustic insulation, 100mm cavity, 150mm cavity" 
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/air-gap-secondary-glazing" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Air Gap Secondary Glazing Guide</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Understanding Air Gap Spacing</h2>
                  <p className="text-gray-700 mb-4">
                    The air gap between your original windows and secondary glazing plays a crucial role in both thermal and acoustic performance. The wider the cavity, the better the overall insulation properties, with optimal results typically achieved at specific distances.
                  </p>
                </div>
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img
                    src="/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png"
                    alt="Air gap spacing diagram showing secondary glazing installation"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img
                    src="/lovable-uploads/96267b17-0746-47d6-a83c-5554a6954fc7.png"
                    alt="100mm cavity secondary glazing installation"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Standard 100mm Cavity</h2>
                  <p className="text-gray-700 mb-4">
                    A 100mm air gap is often considered the minimum optimal distance for secondary glazing installations. At this distance, you can expect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Significant noise reduction capabilities</li>
                    <li>Effective thermal insulation</li>
                    <li>Practical installation in most window settings</li>
                    <li>Balanced performance for both heat and sound insulation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Enhanced 150mm Cavity</h2>
                  <p className="text-gray-700 mb-4">
                    When space allows, a 150mm cavity offers superior performance benefits:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Maximum sound insulation properties</li>
                    <li>Optimal thermal barrier creation</li>
                    <li>Enhanced condensation prevention</li>
                    <li>Ideal for properties in high-noise areas</li>
                  </ul>
                </div>
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img
                    src="/lovable-uploads/7d4c00ee-9a1c-4552-a1ab-033429c4803c.png"
                    alt="150mm cavity secondary glazing demonstration"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img
                    src="/lovable-uploads/8fcea8e1-97fb-4874-99c2-8cff6e3aea2e.png"
                    alt="Factors affecting cavity choice in secondary glazing"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </AspectRatio>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Factors Affecting Cavity Choice</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Available space within your window reveal</li>
                    <li>Primary purpose (thermal vs acoustic insulation)</li>
                    <li>Window sill depth and restrictions</li>
                    <li>Listed building considerations</li>
                    <li>Ventilation requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AirGapSecondaryGlazing;
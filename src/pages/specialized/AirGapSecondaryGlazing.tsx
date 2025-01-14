import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
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
              <h2 className="text-2xl font-semibold mb-4">Understanding Air Gap Spacing</h2>
              <p className="text-gray-700 mb-4">
                The air gap between your original windows and secondary glazing plays a crucial role in both thermal and acoustic performance. The wider the cavity, the better the overall insulation properties, with optimal results typically achieved at specific distances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
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
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Factors Affecting Cavity Choice</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Available space within your window reveal</li>
                <li>Primary purpose (thermal vs acoustic insulation)</li>
                <li>Window sill depth and restrictions</li>
                <li>Listed building considerations</li>
                <li>Ventilation requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AirGapSecondaryGlazing;
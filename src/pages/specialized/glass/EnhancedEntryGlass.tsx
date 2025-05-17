
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const EnhancedEntryGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>6.8mm Enhanced Entry-Level Acoustic Glass | Improved Sound Insulation</title>
        <meta 
          name="description" 
          content="Our 6.8mm enhanced acoustic glass provides improved sound insulation up to 33dB. Perfect for properties in suburban areas with moderate traffic and improved security." 
        />
        <meta 
          name="keywords" 
          content="6.8mm acoustic glass, enhanced entry-level glazing, moderate noise reduction, 33dB noise reduction, suburban properties, improved security glass"
        />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/glass/enhanced-entry-glass" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">6.8mm Enhanced Entry-Level Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 6.8mm acoustic laminated glass provides enhanced sound insulation compared to our entry-level option, making it ideal for properties in suburban areas with moderate traffic.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 33dB</li>
                  <li>Enhanced laminated safety glass</li>
                  <li>Superior UV protection</li>
                  <li>Excellent clarity and visibility</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Properties near moderate traffic routes</li>
                  <li>Suburban homes requiring improved sound insulation</li>
                  <li>Office spaces in residential areas</li>
                  <li>Properties near schools or community centers</li>
                </ul>

                <h3 className="text-xl font-semibold">Technical Benefits</h3>
                <p>The 6.8mm thickness provides an optimal balance between sound insulation and practicality, offering improved acoustic performance while maintaining ease of installation and cost-effectiveness.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnhancedEntryGlass;

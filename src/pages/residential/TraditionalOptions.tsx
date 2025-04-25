
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/ui/section-heading";

const TraditionalOptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Traditional Secondary Glazing Options for Listed Windows</h1>
        
        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-gray-600">
                  Windows are a crucial component of any building, providing natural light, ventilation, and an aesthetic appeal. However, in listed buildings, the challenge lies in maintaining the historical integrity while also enhancing energy efficiency. This article explores how secondary glazing solutions can effectively improve both the insulation properties and aesthetic value of listed windows.
                </p>
              </div>
              <div className="relative h-64">
                <img 
                  src="/lovable-uploads/f491fe90-350d-4010-9359-769a93c85044.png"
                  alt="Traditional window with secondary glazing"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Energy Efficiency Benefits */}
        <SectionHeading 
          title="Energy Efficiency Benefits"
          subtitle="Understanding the impact of secondary glazing on energy performance"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Heat Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png"
                  alt="Heat loss diagram"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-gray-600">
                Listed windows, typically single-glazed, are notorious for their poor insulation characteristics. Heat loss through these windows can account for a significant portion of a building's overall energy loss, leading to uncomfortable interior temperatures and increased energy expenditure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secondary Glazing Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/2f4fa321-a97b-487b-a0f2-bb38093e6ca3.jpg"
                  alt="Energy efficiency improvement"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <p className="text-gray-600">
                Secondary glazing can reduce heat loss by up to 50%, drastically improving the thermal efficiency of listed buildings. Additionally, it helps mitigate noise pollution and reduces energy bills significantly over time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Aesthetic Enhancement */}
        <SectionHeading 
          title="Aesthetic Enhancement Techniques"
          subtitle="Preserving historical integrity while improving performance"
        />
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/lovable-uploads/5592528a-f976-44e2-a6af-e79c4a3c3f18.png"
                  alt="Traditional window preservation"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-3">Preserving Historical Integrity</h3>
                <p className="text-gray-600">
                  Secondary glazing can be designed to complement existing window styles, whether Victorian, Georgian, or another period. Our solutions maintain the original appearance while achieving modern performance standards.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                  <li>Custom-designed frames to match period features</li>
                  <li>Slim profiles for minimal visual impact</li>
                  <li>Clear or lightly tinted glass options</li>
                  <li>Reversible installation methods</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Studies */}
        <SectionHeading 
          title="Case Studies"
          subtitle="Real-world examples of successful installations"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Residential Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A Victorian townhouse achieved 40% reduction in heating costs after installing our secondary glazing solutions, while maintaining its historical character.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commercial Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A historic commercial building successfully balanced modern energy standards with heritage preservation through custom secondary glazing installation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Common queries about secondary glazing for listed buildings"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">What is secondary glazing?</h3>
              <p className="text-gray-600">
                Secondary glazing involves adding an additional layer of glass or acrylic to existing windows to improve insulation and energy efficiency without replacing the original windows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Is it cost-effective?</h3>
              <p className="text-gray-600">
                Yes, secondary glazing can lead to significant energy savings over time, making it a cost-effective solution for improving the comfort and efficiency of listed buildings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TraditionalOptions;

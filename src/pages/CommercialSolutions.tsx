import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";

const commercialServices = [
  {
    title: "Office Buildings",
    description: "Sound insulation for productive work environments",
    details: "Create quieter, more productive workspaces with our commercial-grade secondary glazing solutions. Perfect for busy urban locations.",
  },
  {
    title: "Retail Spaces",
    description: "Energy-efficient solutions for shops and stores",
    details: "Maintain comfortable temperatures and reduce energy costs in your retail space while creating an inviting environment for customers.",
  },
  {
    title: "Listed Buildings",
    description: "Heritage-compliant secondary glazing options",
    details: "Sympathetic solutions that meet conservation requirements while providing modern thermal and acoustic benefits.",
  },
];

const CommercialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Commercial Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialServices.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommercialSolutions;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";

const residentialServices = [
  {
    title: "Sash Windows",
    description: "Perfect for traditional Victorian and Georgian properties",
    details: "Our sash window solutions preserve the original character of your period property while providing modern insulation benefits. We use specially designed systems that complement existing window frames.",
  },
  {
    title: "Casement Windows",
    description: "Ideal for modern homes and apartments",
    details: "Custom-fitted secondary glazing for casement windows, offering excellent thermal and acoustic insulation without compromising the window's functionality.",
  },
  {
    title: "Bay Windows",
    description: "Specialized solutions for bay window configurations",
    details: "Expertly designed secondary glazing systems that follow the contours of your bay windows, maintaining their aesthetic appeal while improving insulation.",
  },
];

const ResidentialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Residential Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialServices.map((service) => (
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

export default ResidentialSolutions;
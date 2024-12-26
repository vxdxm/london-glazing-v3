import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";

const specializedServices = [
  {
    title: "Acoustic Glazing",
    description: "Maximum noise reduction for urban properties",
    details: "Our acoustic glazing solutions can reduce external noise by up to 80%, creating peaceful environments in even the busiest locations.",
  },
  {
    title: "Thermal Insulation",
    description: "Enhanced energy efficiency solutions",
    details: "Significantly reduce heat loss and lower energy bills with our advanced thermal insulation secondary glazing systems.",
  },
  {
    title: "Security Glazing",
    description: "Additional protection for your property",
    details: "Enhance your property's security with our reinforced secondary glazing options, providing peace of mind without compromising on style.",
  },
];

const SpecializedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Specialized Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((service) => (
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

export default SpecializedServices;
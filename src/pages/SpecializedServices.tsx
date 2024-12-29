import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

const specializedServices = [
  {
    title: "Acoustic Glazing",
    description: "Maximum noise reduction for urban properties",
    details: "Our acoustic glazing solutions can reduce external noise by up to 80%, creating peaceful environments in even the busiest locations.",
    image: "/lovable-uploads/e660d1ef-caef-431b-8cd0-67d8163de8dc.png",
    path: "/specialized/acoustic-glazing"
  },
  {
    title: "Thermal Insulation",
    description: "Enhanced energy efficiency solutions",
    details: "Significantly reduce heat loss and lower energy bills with our advanced thermal insulation secondary glazing systems.",
    image: "/lovable-uploads/3cdd0e87-3894-400a-976f-4256cdc911e8.png",
    path: "/specialized/thermal-insulation"
  },
  {
    title: "Security Glazing",
    description: "Additional protection for your property",
    details: "Enhance your property's security with our reinforced secondary glazing options, providing peace of mind without compromising on style.",
    image: "/lovable-uploads/887e1b42-a5d4-4ca1-9c84-2ab40235763a.png",
    path: "/specialized/security-glazing"
  },
  {
    title: "Condensation Control",
    description: "Effective moisture management solutions",
    details: "Our specialized secondary glazing systems help prevent condensation by creating an additional barrier that regulates temperature differences between indoor and outdoor environments.",
    image: "/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png",
    path: "/specialized/condensation-control"
  }
];

const SpecializedServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Specialized Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {specializedServices.map((service) => (
            <Card 
              key={service.title} 
              className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardHeader className="flex-none">
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
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
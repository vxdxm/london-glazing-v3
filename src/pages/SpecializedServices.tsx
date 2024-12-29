import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

const specializedServices = [
  {
    title: "Acoustic Glazing",
    description: "Maximum noise reduction for urban properties",
    details: "Our acoustic glazing solutions can reduce external noise by up to 80%, creating peaceful environments in even the busiest locations.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    path: "/specialized/acoustic-glazing"
  },
  {
    title: "Thermal Insulation",
    description: "Enhanced energy efficiency solutions",
    details: "Significantly reduce heat loss and lower energy bills with our advanced thermal insulation secondary glazing systems.",
    image: "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8",
    path: "/specialized/thermal-insulation"
  },
  {
    title: "Security Glazing",
    description: "Additional protection for your property",
    details: "Enhance your property's security with our reinforced secondary glazing options, providing peace of mind without compromising on style.",
    image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1000",
    path: "/specialized/security-glazing"
  },
  {
    title: "Condensation Control",
    description: "Effective moisture management solutions",
    details: "Our specialized secondary glazing systems help prevent condensation by creating an additional barrier that regulates temperature differences between indoor and outdoor environments.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
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
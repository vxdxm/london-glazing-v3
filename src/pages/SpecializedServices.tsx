import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SpecializedServices = () => {
  const services = [
    {
      title: "Acoustic Glazing",
      description: "Effective noise reduction solutions",
      details: "Our acoustic glazing solutions significantly reduce external noise, creating a peaceful indoor environment perfect for urban properties.",
      image: "/lovable-uploads/c7e8f368-37e7-4802-84d8-e96a040ac74c.png",
      path: "/specialized/acoustic-glazing"
    },
    {
      title: "Thermal Insulation",
      description: "Enhanced temperature control",
      details: "Improve your property's energy efficiency with our thermal insulation solutions, reducing heat loss and energy bills.",
      image: "/lovable-uploads/ce569e66-cc87-4091-9f5a-d5ae27f88371.png",
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
      description: "Moisture management solutions",
      details: "Combat condensation issues effectively with our specialized glazing solutions, maintaining a healthier indoor environment.",
      image: "/lovable-uploads/fe5cbcd6-a864-4fa4-b66b-5ccf4aa8dc73.png",
      path: "/specialized/condensation-control"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Specialized Glazing Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.path}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                  <h3 className="text-lg text-muted-foreground mb-2">
                    {service.description}
                  </h3>
                  <p className="text-gray-600">{service.details}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedServices;
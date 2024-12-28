import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const commercialServices = [
  {
    title: "Office Buildings",
    description: "Sound insulation for productive work environments",
    details: "Create quieter, more productive workspaces with our commercial-grade secondary glazing solutions. Perfect for busy urban locations.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Modern office building with glass facade"
  },
  {
    title: "Hospitality Sector",
    description: "Premium solutions for hotels and restaurants",
    details: "Create comfortable and peaceful environments for your guests with our specialized hospitality glazing solutions.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    alt: "Luxury hotel exterior"
  },
  {
    title: "Healthcare Industry",
    description: "Premium glazing solutions for healthcare facilities",
    details: "Create peaceful healing environments with superior noise reduction and temperature control, perfect for hospitals, clinics, and medical offices.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Modern healthcare facility"
  },
  {
    title: "Educational Sector",
    description: "Specialized solutions for educational institutions",
    details: "Create optimal learning environments with enhanced acoustic performance and natural light optimization for schools, universities, and research facilities.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    alt: "Modern educational facility"
  }
];

const CommercialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Commercial Secondary Glazing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialServices.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full mb-4">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
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
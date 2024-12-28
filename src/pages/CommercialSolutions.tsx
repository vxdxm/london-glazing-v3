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
    title: "Retail Spaces",
    description: "Energy-efficient solutions for shops and stores",
    details: "Maintain comfortable temperatures and reduce energy costs in your retail space while creating an inviting environment for customers.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    alt: "Contemporary retail building exterior"
  },
  {
    title: "Educational Sector",
    description: "Specialized glazing solutions for educational institutions",
    details: "Create comfortable learning environments with enhanced acoustic and thermal performance, perfect for schools, universities, and other educational facilities.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "Modern educational building facade"
  },
];

const CommercialSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Commercial Secondary Glazing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
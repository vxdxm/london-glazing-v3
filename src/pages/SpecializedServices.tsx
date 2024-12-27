import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/MainNav";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

const blocks = [
  {
    title: "Residential Excellence",
    description: "Perfect for homes in busy urban areas or listed buildings requiring preservation.",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
  },
  {
    title: "Commercial Solutions",
    description: "Ideal for office buildings, retail spaces, and commercial properties.",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
  },
  {
    title: "Heritage Preservation",
    description: "Specialized solutions for listed buildings and historic properties.",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
  }
];

const SpecializedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Specialized Services</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Blocks Section */}
        <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => (
            <Card key={block.title} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={block.image}
                    alt={block.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{block.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedServices;
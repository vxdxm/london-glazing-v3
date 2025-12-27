import { Store, Building2, Coffee, Gem, ShoppingBag, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RetailTypes = () => {
  const types = [
    {
      icon: Store,
      title: "High Street Independent Retailers",
      description: "Boutiques, gift shops, bookstores, and specialty retailers benefit from improved customer comfort and reduced operating costs while maintaining heritage character."
    },
    {
      icon: Building2,
      title: "Department Stores & Chain Retailers",
      description: "Large-format retail with extensive glazing sees dramatic energy savings and improved customer experience across multiple floors and departments."
    },
    {
      icon: Coffee,
      title: "Food Retail & Hospitality",
      description: "Cafes, restaurants, delis, and bakeries create welcoming dining environments with comfortable window seating and reduced street noise."
    },
    {
      icon: Gem,
      title: "Luxury Retail",
      description: "High-end boutiques in Mayfair, Knightsbridge, and Chelsea maintain prestigious appearances while ensuring client comfort and product protection."
    },
    {
      icon: ShoppingBag,
      title: "Shopping Centers & Arcades",
      description: "Historic covered shopping areas like Burlington Arcade and Royal Arcade preserve architectural heritage while improving tenant comfort."
    },
    {
      icon: Image,
      title: "Showrooms & Galleries",
      description: "Furniture stores, car dealerships, and art galleries benefit from temperature stability, UV protection, and enhanced presentation environments."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Retail Space Types We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions for every type of retail environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

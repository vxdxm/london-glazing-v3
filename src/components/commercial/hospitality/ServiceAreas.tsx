
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    { area: "Mayfair & Knightsbridge", description: "Luxury hotels requiring premium solutions" },
    { area: "Westminster & Victoria", description: "Corporate hotels and historic venues" },
    { area: "Bloomsbury & Holborn", description: "Heritage hotels and literary quarter properties" },
    { area: "Covent Garden & West End", description: "Restaurants and theatre district venues" },
    { area: "South Kensington & Chelsea", description: "Boutique hotels and exclusive dining" },
    { area: "The City & Bank", description: "Business hotels and corporate dining" },
    { area: "Shoreditch & Clerkenwell", description: "Design hotels and contemporary restaurants" }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Comprehensive London Coverage</h2>
      <p className="text-muted-foreground mb-6">We serve London's key hospitality districts:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area, index) => (
          <Card key={index} className="hover:border-primary/40 transition-colors">
            <CardContent className="flex items-start p-4">
              <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">{area.area}</h3>
                <p className="text-xs text-muted-foreground">{area.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;

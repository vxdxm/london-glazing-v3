
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const areas = [
    { area: "Mayfair & Knightsbridge", description: "Luxury hotels requiring premium solutions", link: "/locations/georgian-belgravia" },
    { area: "Westminster & Victoria", description: "Corporate hotels and historic venues", link: "/areas/central-london" },
    { area: "Bloomsbury & Holborn", description: "Heritage hotels and literary quarter properties", link: "/areas/central-london" },
    { area: "Covent Garden & West End", description: "Restaurants and theatre district venues", link: "/areas/central-london" },
    { area: "South Kensington & Chelsea", description: "Boutique hotels and exclusive dining", link: "/areas/west-london" },
    { area: "The City & Bank", description: "Business hotels and corporate dining", link: "/areas/central-london" },
    { area: "Shoreditch & Clerkenwell", description: "Design hotels and contemporary restaurants", link: "/areas/east-london" }
  ];

  const relatedLocations = [
    { name: "Central London", path: "/areas/central-london" },
    { name: "West London", path: "/areas/west-london" },
    { name: "Georgian Belgravia", path: "/locations/georgian-belgravia" },
    { name: "Kensington", path: "/areas/west-london" },
    { name: "Home Counties", path: "/areas/home-counties" },
    { name: "Virginia Water", path: "/locations/virginia-water" }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Comprehensive London Coverage</h2>
      <p className="text-muted-foreground mb-6">We serve London's key hospitality districts:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {areas.map((area, index) => (
          <Link key={index} to={area.link}>
            <Card className="hover:border-primary/40 transition-colors h-full">
              <CardContent className="flex items-start p-4">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm">{area.area}</h3>
                  <p className="text-xs text-muted-foreground">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-secondary/30 rounded-lg p-6">
        <h3 className="font-semibold mb-4">Explore Our Service Areas</h3>
        <div className="flex flex-wrap gap-3">
          {relatedLocations.map((location, index) => (
            <Link
              key={index}
              to={location.path}
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {location.name}
              <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;

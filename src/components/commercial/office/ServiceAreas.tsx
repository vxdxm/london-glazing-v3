
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const areas = [
    { name: "City of London & Square Mile", types: "Listed and modern office towers", link: "/areas/central-london" },
    { name: "Canary Wharf & Docklands", types: "Corporate headquarters and financial services", link: "/areas/east-london" },
    { name: "West End & Mayfair", types: "Professional services and luxury office spaces", link: "/locations/georgian-belgravia" },
    { name: "Westminster & Victoria", types: "Government and corporate buildings", link: "/areas/central-london" },
    { name: "Holborn & Bloomsbury", types: "Legal chambers and professional services", link: "/areas/central-london" },
    { name: "Shoreditch & Tech City", types: "Creative industries and tech companies", link: "/areas/east-london" },
    { name: "Clerkenwell & Farringdon", types: "Converted heritage and modern office spaces", link: "/areas/central-london" }
  ];

  const relatedLocations = [
    { name: "Central London", path: "/areas/central-london" },
    { name: "West London", path: "/areas/west-london" },
    { name: "East London", path: "/areas/east-london" },
    { name: "Georgian Belgravia", path: "/locations/georgian-belgravia" },
    { name: "Mayfair", path: "/areas/central-london" },
    { name: "Greater London", path: "/areas/greater-london" }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Commercial Service Areas</h2>
      <p className="text-muted-foreground mb-6">We serve all London commercial districts:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {areas.map((area, index) => (
          <Link key={index} to={area.link}>
            <Card className="hover:border-primary/40 transition-colors h-full">
              <CardContent className="pt-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{area.name}</p>
                    <p className="text-xs text-muted-foreground">{area.types}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-secondary/30 rounded-lg p-6">
        <h3 className="font-semibold mb-4">Explore Our London Coverage</h3>
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

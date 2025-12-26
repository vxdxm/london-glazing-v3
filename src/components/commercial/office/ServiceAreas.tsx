
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    { name: "City of London & Square Mile", types: "Listed and modern office towers" },
    { name: "Canary Wharf & Docklands", types: "Corporate headquarters and financial services" },
    { name: "West End & Mayfair", types: "Professional services and luxury office spaces" },
    { name: "Westminster & Victoria", types: "Government and corporate buildings" },
    { name: "Holborn & Bloomsbury", types: "Legal chambers and professional services" },
    { name: "Shoreditch & Tech City", types: "Creative industries and tech companies" },
    { name: "Clerkenwell & Farringdon", types: "Converted heritage and modern office spaces" }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Commercial Service Areas</h2>
      <p className="text-muted-foreground mb-6">We serve all London commercial districts:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <Card key={index} className="hover:border-primary/40 transition-colors">
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
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;

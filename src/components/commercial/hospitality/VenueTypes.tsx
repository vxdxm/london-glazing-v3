
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Building, Utensils, Beer } from "lucide-react";

const VenueTypes = () => {
  const venues = [
    {
      icon: Hotel,
      title: "Boutique Hotels",
      locations: "Mayfair, Knightsbridge, South Kensington",
      description: "Discreet installations that maintain luxury aesthetics while eliminating street noise. Our slim profiles complement high-end interior design without compromising views."
    },
    {
      icon: Building,
      title: "Historic Hotels",
      locations: "Westminster, Bloomsbury, The Strand",
      description: "Specialized heritage solutions. Secondary glazing is often the only approved method for improving listed building performance, preserving original Victorian and Georgian windows while delivering modern comfort."
    },
    {
      icon: Utensils,
      title: "Restaurants & Fine Dining",
      locations: "Covent Garden, Soho, West End",
      description: "Our acoustic glazing creates intimate dining atmospheres where conversation flows naturally, uninterrupted by external noise."
    },
    {
      icon: Beer,
      title: "Pubs & Bars",
      locations: "City-wide locations",
      description: "Maintain welcoming atmosphere while reducing noise intrusion, enabling comfortable conversation and successful private function hosting."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Perfect Solutions for Every Hospitality Venue Type</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <venue.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{venue.title}</CardTitle>
              <p className="text-sm text-primary font-medium">{venue.locations}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{venue.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VenueTypes;

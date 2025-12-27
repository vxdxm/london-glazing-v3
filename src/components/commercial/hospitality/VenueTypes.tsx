
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Building, Utensils, Beer } from "lucide-react";
import { Link } from "react-router-dom";

const VenueTypes = () => {
  const venues = [
    {
      icon: Hotel,
      title: "Boutique Hotels",
      locations: "Mayfair, Knightsbridge, South Kensington",
      description: "Discreet installations that maintain luxury aesthetics while eliminating street noise. Our slim profiles complement high-end interior design without compromising views.",
      locationLinks: [
        { text: "Hotels in Kensington & Chelsea", href: "/areas/west-london" },
        { text: "Westminster", href: "/areas/central-london" }
      ]
    },
    {
      icon: Building,
      title: "Historic Hotels",
      locations: "Westminster, Bloomsbury, The Strand",
      description: "Specialized heritage solutions for listed buildings. Secondary glazing is often the only approved method for improving performance, preserving original Victorian and Georgian windows while delivering modern comfort.",
      heritageLinks: [
        { text: "Victorian hotels", href: "/victorian-windows-secondary-glazing" },
        { text: "Georgian hotels", href: "/georgian-windows-secondary-glazing" }
      ]
    },
    {
      icon: Utensils,
      title: "Restaurants & Fine Dining",
      locations: "Covent Garden, Soho, West End",
      description: "Our acoustic glazing creates intimate dining atmospheres where conversation flows naturally, uninterrupted by external noise.",
      featureLinks: [
        { text: "Noise reduction", href: "/noise-reduction-secondary-glazing" }
      ]
    },
    {
      icon: Beer,
      title: "Pubs & Bars",
      locations: "City-wide locations",
      description: "Maintain welcoming atmosphere while reducing noise intrusion, enabling comfortable conversation and successful private function hosting.",
      areaLinks: [
        { text: "Central London", href: "/areas/central-london" },
        { text: "East London", href: "/areas/east-london" }
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Perfect Solutions for Every Hospitality Venue Type</h2>
      
      <p className="text-muted-foreground mb-6">
        From <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian offices in Mayfair</Link> to modern spaces in Canary Wharf, 
        we serve hospitality venues across London. Hotels in{' '}
        <Link to="/areas/west-london" className="text-primary hover:underline">Kensington & Chelsea</Link>,{' '}
        <Link to="/areas/central-london" className="text-primary hover:underline">Westminster</Link>, and{' '}
        Bloomsbury trust our specialist solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {venues.map((venue, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <venue.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{venue.title}</CardTitle>
              <p className="text-sm text-primary font-medium">{venue.locations}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{venue.description}</p>
              {venue.heritageLinks && (
                <p className="text-sm">
                  Specialists in{' '}
                  {venue.heritageLinks.map((link, idx) => (
                    <span key={idx}>
                      <Link to={link.href} className="text-primary hover:underline">{link.text}</Link>
                      {idx < venue.heritageLinks.length - 1 && ' and '}
                    </span>
                  ))}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VenueTypes;


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, UtensilsCrossed, Users, Landmark } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";

const SpaceTypes = () => {
  const spaces = [
    {
      icon: Bed,
      title: "Guest Rooms & Suites",
      features: [
        "Maximum noise reduction ensures undisturbed sleep",
        "Thermal comfort eliminating cold spots near windows",
        "Blackout integration options",
        "Easy-clean access for housekeeping efficiency"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant & Dining Areas",
      features: [
        "Acoustic performance maintains conversational comfort",
        "Preserves important street views",
        "Temperature control creates consistent dining comfort year-round"
      ]
    },
    {
      icon: Users,
      title: "Function Rooms & Conference Spaces",
      features: [
        "Acoustic separation ensures privacy during meetings and events",
        "Climate control supports varied occupancy levels"
      ]
    },
    {
      icon: Landmark,
      title: "Heritage Rooms & Public Areas",
      features: [
        "Listed building compliance",
        "Preserves architectural authenticity",
        "Delivers modern performance standards guests expect"
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Specialized Solutions by Space Type</h2>
      
      <p className="text-muted-foreground mb-6">
        Our solutions work with <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows common in heritage hotels</Link>,{' '}
        delivering superior <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic performance</Link> and{' '}
        <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal efficiency</Link> across every space type.
      </p>
      
      <AspectRatio ratio={2.5 / 1} className="mb-8">
        <OptimizedImage 
          src="https://cdn.marblism.com/066gNklpTue.webp" 
          alt="Various hospitality spaces showing secondary glazing applications in hotels and restaurants" 
          className="rounded-lg object-cover w-full h-full" 
        />
      </AspectRatio>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spaces.map((space, index) => (
          <Card key={index} className="border-primary/20">
            <CardHeader className="pb-2">
              <space.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">{space.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {space.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpaceTypes;


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Noise Disruption",
      description: "Street noise from traffic, nightlife, and transport networks disrupts guest sleep quality"
    },
    {
      icon: TrendingDown,
      title: "Poor Reviews",
      description: "A single negative review citing noise issues can cost a hotel thousands in lost bookings"
    },
    {
      icon: Zap,
      title: "High Energy Costs",
      description: "Excessive energy bills can consume 15-20% of hotel operating costs"
    },
    {
      icon: Star,
      title: "Lower Occupancy",
      description: "Properties with poor TripAdvisor ratings see up to 30% lower occupancy rates"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Why London Hospitality Venues Choose Secondary Glazing</h2>
      <p className="text-muted-foreground mb-6">
        London's hospitality sector faces unique challenges that directly impact guest satisfaction and business performance. 
        <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline"> Reduce noise pollution from traffic and street activity</Link> while 
        addressing poor thermal comfort that leads to guest complaints. Many historic hotels and restaurants operate in{' '}
        <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> where window replacement is not permitted.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {challenges.map((challenge, index) => (
          <Card key={index} className="border-destructive/20 bg-destructive/5">
            <CardHeader className="pb-2">
              <challenge.icon className="h-8 w-8 text-destructive mb-2" />
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{challenge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="text-muted-foreground font-medium">
        Secondary glazing solves these critical challenges while preserving the architectural integrity that makes London venues special.
      </p>
    </div>
  );
};

export default WhyChooseSection;

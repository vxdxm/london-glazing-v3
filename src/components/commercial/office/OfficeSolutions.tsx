
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, TrendingUp, Cpu, Landmark } from "lucide-react";

const OfficeSolutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Corporate Headquarters",
      location: "City of London and Canary Wharf",
      description: "Towers benefit from improved climate control and acoustic comfort across multiple floors."
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      location: "Holborn and West End",
      description: "Law firms and consultancies require quiet environments for confidential meetings and concentrated work."
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      location: "City and Canary Wharf",
      description: "Trading floors and client meeting areas need acoustic separation and temperature stability for optimal performance."
    },
    {
      icon: Cpu,
      title: "Tech Companies",
      location: "Shoreditch and Tech City",
      description: "Open-plan offices gain focused work zones through strategic acoustic glazing."
    },
    {
      icon: Landmark,
      title: "Heritage Office Buildings",
      location: "Westminster and Clerkenwell",
      description: "Listed and conservation area properties can upgrade performance without affecting historic character."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Ideal Solutions for Every Office Type</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} className="border-border hover:border-primary/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <solution.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <p className="text-sm text-primary">{solution.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{solution.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OfficeSolutions;

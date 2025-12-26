
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Clock, Wrench, Shield, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Specializing in London commercial projects"
    },
    {
      icon: Building2,
      title: "Building Compliance",
      description: "Expert in listed buildings and conservation areas"
    },
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "Out-of-hours installation teams guaranteed"
    },
    {
      icon: Users,
      title: "Dedicated Management",
      description: "Commercial project managers for every job"
    },
    {
      icon: Wrench,
      title: "Full Aftercare",
      description: "Maintenance and performance monitoring"
    },
    {
      icon: Shield,
      title: "Comprehensive Warranties",
      description: "Products and installation fully covered"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Why Choose Secondary Glazing Specialist</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reasons.map((reason, index) => (
          <Card key={index} className="text-center hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium text-sm mb-1">{reason.title}</p>
              <p className="text-xs text-muted-foreground">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

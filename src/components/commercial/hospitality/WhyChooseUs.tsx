
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Award, Users, Wrench, FileCheck } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "Installation around your operational requirements"
    },
    {
      icon: Shield,
      title: "Guest Experience Focus",
      description: "We understand guest satisfaction is paramount"
    },
    {
      icon: Award,
      title: "Heritage Expertise",
      description: "Work within conservation constraints"
    },
    {
      icon: Users,
      title: "Full Project Management",
      description: "Liaison with facilities teams included"
    },
    {
      icon: Wrench,
      title: "Flexible Scheduling",
      description: "Accommodates seasonal patterns"
    },
    {
      icon: FileCheck,
      title: "Comprehensive Warranties",
      description: "Long-term peace of mind"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Why Hospitality Venues Choose Secondary Glazing Specialist</h2>
      <p className="text-muted-foreground mb-6">
        With extensive hospitality sector experience, we understand that guest experience is paramount.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {reasons.map((reason, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <reason.icon className="h-8 w-8 text-primary mx-auto" />
            </CardHeader>
            <CardContent className="pt-0">
              <h3 className="font-semibold text-sm mb-1">{reason.title}</h3>
              <p className="text-xs text-muted-foreground">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

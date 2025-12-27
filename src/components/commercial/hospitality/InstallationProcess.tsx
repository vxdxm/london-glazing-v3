
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Calendar, Wrench, CheckCircle } from "lucide-react";

const InstallationProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      step: "1",
      title: "Planning Phase",
      description: "Site surveys accommodate occupied properties, with acoustic analysis if required. Design specifications match interior décor and architectural style."
    },
    {
      icon: Calendar,
      step: "2",
      title: "Flexible Scheduling",
      description: "Installation during low season, refurbishment periods, or out-of-hours. Room-by-room approach keeps revenue-generating spaces operational."
    },
    {
      icon: Wrench,
      step: "3",
      title: "Professional Installation",
      description: "2-3 hours per average guest room, with floors completed in 1-2 days. Guest areas protected throughout, with rooms returned to service immediately."
    },
    {
      icon: CheckCircle,
      step: "4",
      title: "Quality Control",
      description: "Testing ensures performance standards, with staff training on operation and maintenance."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Seamless Installation Process</h2>
      <p className="text-muted-foreground mb-6">
        Our hospitality-focused installation process ensures minimal operational disruption:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
              {step.step}
            </div>
            <CardHeader className="pt-6">
              <step.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InstallationProcess;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, PenTool, Users, Moon, CheckSquare, GraduationCap } from "lucide-react";

const InstallationProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "1",
      title: "Commercial Consultation",
      description: "Site survey with acoustic and thermal assessment tailored to your business needs."
    },
    {
      icon: PenTool,
      number: "2",
      title: "Custom Design",
      description: "CAD drawings and specifications for seamless integration with existing architecture."
    },
    {
      icon: Users,
      number: "3",
      title: "Project Management",
      description: "Dedicated commercial project manager coordinates all aspects of installation."
    },
    {
      icon: Moon,
      number: "4",
      title: "Out-of-Hours Installation",
      description: "Evening, weekend, and holiday installation options to maintain business continuity."
    },
    {
      icon: CheckSquare,
      number: "5",
      title: "Quality Assurance",
      description: "Post-installation testing and documentation, including acoustic measurements and thermal performance validation."
    },
    {
      icon: GraduationCap,
      number: "6",
      title: "Handover & Training",
      description: "Comprehensive operation guidance and maintenance schedules for facility teams."
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Professional Installation Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.number}</div>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InstallationProcess;

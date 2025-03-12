
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Leaf, Gauge, Sun } from "lucide-react";

const SustainabilityFacts = () => {
  const facts = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Reduced Carbon Footprint",
      description: "Secondary glazing can reduce a home's carbon emissions by up to 1 tonne per year, equivalent to driving 2,500 miles less annually.",
    },
    {
      icon: <Gauge className="h-8 w-8 text-blue-600" />,
      title: "Energy Efficiency",
      description: "Properties with secondary glazing typically use 20-30% less energy for heating, contributing significantly to global energy conservation efforts.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Natural Resource Conservation",
      description: "By extending the life of existing windows, secondary glazing reduces demand for new materials and the environmental impact of manufacturing.",
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-600" />,
      title: "Sustainable Living",
      description: "Secondary glazing is a long-term sustainable solution with minimal environmental impact compared to full window replacement.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {facts.map((fact, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-gray-50 p-3 rounded-full">
                {fact.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SustainabilityFacts;


import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const VentilationOptions = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Ventilation Options</h2>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="w-full mb-4">
            <AspectRatio ratio={16 / 9}>
              <OptimizedImage
                src="/lovable-uploads/8fd22af1-94cd-4761-b8a2-531d7834baaa.png"
                alt="Ventilation system with secondary glazing"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <CardTitle>Integrated Ventilation Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-600">
              Our secondary glazing units can be fitted with specialized ventilation systems to ensure optimal air circulation while maintaining thermal and acoustic performance.
            </p>
            
            <h3 className="text-xl font-semibold">Available Options</h3>
            <ul className="list-disc list-inside text-gray-500 space-y-2">
              <li>Trickle vents for continuous background ventilation</li>
              <li>Humidity-controlled vents that respond to moisture levels</li>
              <li>Adjustable ventilation slots for manual control</li>
              <li>Removable panels for maximum ventilation when needed</li>
            </ul>

            <h3 className="text-xl font-semibold">Benefits</h3>
            <ul className="list-disc list-inside text-gray-500 space-y-2">
              <li>Maintains fresh air circulation</li>
              <li>Helps prevent condensation build-up</li>
              <li>Reduces risk of mold growth</li>
              <li>Preserves window frames and surroundings</li>
              <li>Improves indoor air quality</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

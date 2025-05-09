
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const EnhancedCavity = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Enhanced 150mm Cavity</h2>
            <p className="text-gray-700 mb-4">
              When space allows, a 150mm cavity offers superior performance benefits:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Maximum sound insulation properties</li>
              <li>Optimal thermal barrier creation</li>
              <li>Enhanced condensation prevention</li>
              <li>Ideal for properties in high-noise areas</li>
            </ul>
          </div>
          <AspectRatio ratio={16/9} className="bg-muted">
            <OptimizedImage
              src="/lovable-uploads/7d4c00ee-9a1c-4552-a1ab-033429c4803c.png"
              alt="150mm cavity secondary glazing demonstration"
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
};


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const FactorsAffectingCavity = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <AspectRatio ratio={16/9} className="bg-muted">
            <OptimizedImage
              src="/lovable-uploads/8fcea8e1-97fb-4874-99c2-8cff6e3aea2e.png"
              alt="Factors affecting cavity choice in secondary glazing"
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Factors Affecting Cavity Choice</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Available space within your window reveal</li>
              <li>Primary purpose (thermal vs acoustic insulation)</li>
              <li>Window sill depth and restrictions</li>
              <li>Listed building considerations</li>
              <li>Ventilation requirements</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const StandardCavity = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <AspectRatio ratio={16/9} className="bg-muted">
            <OptimizedImage
              src="/lovable-uploads/96267b17-0746-47d6-a83c-5554a6954fc7.png"
              alt="100mm cavity secondary glazing installation"
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Standard 100mm Cavity</h2>
            <p className="text-gray-700 mb-4">
              A 100mm air gap is often considered the minimum optimal distance for secondary glazing installations. At this distance, you can expect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Significant noise reduction capabilities</li>
              <li>Effective thermal insulation</li>
              <li>Practical installation in most window settings</li>
              <li>Balanced performance for both heat and sound insulation</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

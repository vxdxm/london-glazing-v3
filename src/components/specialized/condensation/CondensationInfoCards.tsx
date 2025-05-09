
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const CondensationInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="w-full mb-4">
            <AspectRatio ratio={16 / 9}>
              <OptimizedImage
                src="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png"
                alt="Close-up of a modern window ventilation system showing trickle vents and frame details"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <CardTitle>How Secondary Glazing Prevents Condensation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Secondary glazing creates an additional barrier that helps regulate temperature differences between indoor and outdoor environments, significantly reducing condensation formation.
          </p>
          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>Creates thermal barrier</li>
            <li>Reduces cold spots on windows</li>
            <li>Improves ventilation control</li>
            <li>Prevents moisture buildup</li>
            <li>Ideal for all property types</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="w-full mb-4">
            <AspectRatio ratio={16 / 9}>
              <OptimizedImage
                src="/lovable-uploads/8fd22af1-94cd-4761-b8a2-531d7834baaa.png"
                alt="Secondary glazing installation showing effective condensation control with clear window panes"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <CardTitle>Benefits of Condensation Control</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Secondary glazing offers highly effective condensation control, bringing a wide range of benefits for both your property and your health. By creating an additional barrier between the interior and exterior environments, it reduces moisture buildup on windows, preventing issues like mold, dampness, and peeling paint.
          </p>
          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>Prevents mold growth</li>
            <li>Protects window frames</li>
            <li>Improves indoor air quality</li>
            <li>Reduces maintenance costs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SectionHeading } from "@/components/ui/section-heading";

export const UnderstandingAirGap = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <SectionHeading 
              title="Understanding Air Gap Spacing" 
              className="mb-4"
            />
            <p className="text-gray-700 mb-4">
              The air gap between your original windows and secondary glazing plays a crucial role in both thermal and acoustic performance. The wider the cavity, the better the overall insulation properties, with optimal results typically achieved at specific distances.
            </p>
          </div>
          <AspectRatio ratio={16/9} className="bg-muted">
            <OptimizedImage
              src="/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png"
              alt="Air gap spacing diagram showing secondary glazing installation"
              className="object-cover w-full h-full rounded-lg"
            />
          </AspectRatio>
        </div>
      </CardContent>
    </Card>
  );
};

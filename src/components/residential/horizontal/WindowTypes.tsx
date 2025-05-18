
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

const WindowTypes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <Card>
        <CardHeader>
          <CardTitle>Standard Horizontal Sliding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <OptimizedImage 
              src="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
              alt="Standard horizontal sliding secondary glazing with multiple panels that slide smoothly for easy operation"
              className="rounded-lg w-full h-[200px] object-cover mb-4"
              priority={false}
            />
            <p>
              Our standard horizontal sliding system typically consists of 2 or 3 panels, which is standard for majority of the windows. 
              This classic design combines functionality with ease of use, perfect for residential applications where traditional window 
              styles are preferred.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Smooth sliding mechanism for effortless operation</li>
              <li>High-quality brush seals for enhanced insulation</li>
              <li>Available in 2 or 3 panel configurations</li>
              <li>Suitable for windows up to 2.4m in height</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multi-Track Sliding System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <OptimizedImage 
              src="/lovable-uploads/83a85813-7a32-48d2-a1c9-ad133fc122d7.png"
              alt="Multi-track horizontal sliding secondary glazing system with advanced features for larger window openings"
              className="rounded-lg w-full h-[200px] object-cover mb-4"
              priority={false}
            />
            <p>
              Our advanced multi-track sliding system can accommodate 3 to 5 panels within one window frame, offering maximum flexibility 
              for larger openings. Perfect for creating panoramic views and seamless indoor-outdoor transitions in modern homes and 
              commercial spaces.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multiple track options for 3-5 panels</li>
              <li>Enhanced security features with multi-point locking</li>
              <li>Ideal for large window spans up to 4m wide</li>
              <li>Superior weather sealing system</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WindowTypes;

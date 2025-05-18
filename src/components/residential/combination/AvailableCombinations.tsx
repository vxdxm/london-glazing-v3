
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AvailableCombinations = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Available Combinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Sash and Horizontal Combination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative h-[200px] group">
                <OptimizedImage 
                  src="/lovable-uploads/37775d2f-c264-46a3-afb0-ef2414bbb9e1.png"
                  alt="Sash and horizontal sliding window combination featuring multiple panes in a modern setting"
                  className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
                  priority={false}
                />
              </div>
              <p className="text-gray-700">
                Blend traditional sash windows with modern horizontal sliding windows for a
                unique look that combines heritage appeal with contemporary functionality.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perfect for period properties</li>
                <li>Maximum ventilation options</li>
                <li>Flexible opening configurations</li>
                <li>Enhanced aesthetic appeal</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Bay and Casement Mix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative h-[200px] group">
                <OptimizedImage 
                  src="/lovable-uploads/a40b22e3-e503-4c0a-a99b-7ea08bb65d13.png"
                  alt="Bay and casement window combination featuring multiple tilt-and-turn windows with grey curtains, overlooking autumn trees"
                  className="w-full h-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-95"
                  priority={false}
                />
              </div>
              <p className="text-gray-700">
                Combine bay windows with casement windows to create stunning focal points
                while maintaining practical functionality throughout your property.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maximizes natural light</li>
                <li>Creates stunning focal points</li>
                <li>Practical ventilation options</li>
                <li>Ideal for modern homes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AvailableCombinations;

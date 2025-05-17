import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const BayWindowStyles = () => {
  return <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Bay Window Styles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Traditional Bay Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img alt="Traditional bay window" className="rounded-lg w-full h-[200px] object-cover mb-4" src="/lovable-uploads/32c833dd-aebd-4fa1-a6db-3c764bb33dd1.jpg" />
              <p className="text-gray-700">
                Classic bay window configuration with multiple panels that follow the original window's 
                angles. Perfect for Victorian and Edwardian properties, maintaining their period character 
                while improving insulation.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Matches original window angles</li>
                <li>Preserves period features</li>
                <li>Enhanced thermal performance</li>
                <li>Superior noise reduction</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Modern Bay System</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img src="/lovable-uploads/7b385715-0bca-41ee-be8b-7df9caa5ac51.png" alt="Modern bay window system" className="rounded-lg w-full h-[200px] object-cover mb-4" />
              <p className="text-gray-700">
                Contemporary bay window solutions featuring sleek frames and maximized glass area. 
                Ideal for modern properties or updated traditional homes seeking a more current aesthetic.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimalist frame design</li>
                <li>Maximum glass area</li>
                <li>Improved thermal efficiency</li>
                <li>Contemporary aesthetics</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default BayWindowStyles;
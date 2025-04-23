import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Benefits = () => {
  return <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Benefits of Casement Secondary Glazing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Thermal Insulation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img alt="Thermal insulation demonstration" className="rounded-lg w-full h-[200px] object-cover mb-4" src="/lovable-uploads/6c55e910-40fc-40eb-9b56-6c464e1e1c72.jpg" />
              <p className="text-gray-700">
                Significantly reduces heat loss through windows, potentially cutting energy bills by up to 40%. Creates an effective thermal barrier between your interior and exterior environments.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Superior Noise Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img alt="Noise reduction visualization" className="rounded-lg w-full h-[200px] object-cover mb-4" src="/lovable-uploads/7275b99d-a2af-421e-8795-83a56880a190.jpg" />
              <p className="text-gray-700">
                Reduces external noise by up to 80% when properly installed. Ideal for properties in high-traffic areas or near noise sources.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enhanced Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Adds an extra layer of security to your windows. Features robust locking mechanisms and toughened glass options for increased protection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Heritage Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Perfect for listed buildings and conservation areas where maintaining original windows is essential. Preserves historical character while improving performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Benefits;
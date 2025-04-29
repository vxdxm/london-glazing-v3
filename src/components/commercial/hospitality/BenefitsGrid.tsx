
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BenefitsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Sound Insulation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <AspectRatio ratio={16/9}>
              <img
                src="/lovable-uploads/368ef4e0-3b95-4553-9c2d-66546e736887.png"
                alt="Conference room with sound-proof secondary glazing"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <p className="text-gray-600">
            Reduce external noise by up to 80% to ensure peaceful rest for your guests. 
            Perfect for city-center locations and airport hotels.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Temperature Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <AspectRatio ratio={16/9}>
              <img
                src="/lovable-uploads/5b955a38-2c68-4d0c-9a22-c4815f0b0969.png"
                alt="Office space with thermal glazing installation"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <p className="text-gray-600">
            Maintain optimal room temperatures year-round while reducing heating and cooling costs. 
            Our solutions provide excellent thermal insulation.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Aesthetic Appeal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <AspectRatio ratio={16/9}>
              <img
                src="/lovable-uploads/bdef4ec1-0413-4528-b776-dee1a4b8dcb3.png"
                alt="Modern window installation with secondary glazing"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <p className="text-gray-600">
            Preserve the architectural beauty of your property with our discreet secondary glazing solutions 
            that complement your existing windows.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default BenefitsGrid;

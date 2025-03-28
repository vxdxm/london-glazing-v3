
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesAndBenefits = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Features and Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Thermal Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduces heat loss by up to 65%</li>
              <li>Helps eliminate cold spots</li>
              <li>Lower energy bills</li>
              <li>Improved comfort year-round</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Noise Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduces external noise by up to 80%</li>
              <li>Perfect for busy streets</li>
              <li>Enhanced sound insulation</li>
              <li>Peaceful living environment</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Practical Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Easy maintenance and cleaning</li>
              <li>Smooth operation</li>
              <li>Enhanced security features</li>
              <li>Draft elimination</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;


import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BenefitsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <Card>
        <CardHeader>
          <CardTitle>Sound Insulation</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reduces external noise by up to 80%</li>
            <li>Creates quieter meeting spaces</li>
            <li>Improves concentration and productivity</li>
            <li>Ideal for city center locations</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Energy Efficiency</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Reduces heating and cooling costs</li>
            <li>Improves building's energy rating</li>
            <li>Better temperature control</li>
            <li>Lower carbon footprint</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Minimal disruption to office operations</li>
            <li>No structural modifications required</li>
            <li>Quick and clean installation process</li>
            <li>Fully reversible solution</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Enhanced security options</li>
            <li>UV protection for furniture and equipment</li>
            <li>Condensation reduction</li>
            <li>Easy maintenance access</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BenefitsGrid;

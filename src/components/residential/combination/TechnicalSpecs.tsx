
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecs = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frame Construction</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Aluminum alloy frame construction</li>
              <li>Multiple powder-coated finish options</li>
              <li>Custom color matching available</li>
              <li>Thermal break technology</li>
              <li>Weather-resistant seals</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enhanced thermal performance</li>
              <li>Superior sound insulation</li>
              <li>Advanced security features</li>
              <li>Customizable ventilation options</li>
              <li>Easy maintenance design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalSpecs;

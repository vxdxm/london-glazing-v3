
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecs = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frame Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aluminum frame thickness: 2mm</li>
              <li>Maximum panel height: 2.4m</li>
              <li>Maximum panel width: 2m</li>
              <li>Available in various colors and finishes</li>
              <li>Thermal break options available</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Installation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional installation required</li>
              <li>Typical installation time: 2-4 hours per window</li>
              <li>Minimal disruption to existing windows</li>
              <li>Full warranty coverage</li>
              <li>After-installation support available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSpecs;

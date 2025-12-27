
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Settings, Shield, CheckCircle } from "lucide-react";

const TechnicalSpecs = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Technical Excellence for Commercial Applications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Layers className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Glass Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>6.4mm-12.8mm Acoustic Laminate:</strong> Up to 52dB noise reduction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Ultra-slim Aluminium Frames:</strong> Maintain sightlines</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Thermal Break Technology:</strong> U-values as low as 1.6 W/m²K</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <Settings className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Frame Options</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Fire-rated Options:</strong> Commercial compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Custom Powder Coating:</strong> Match any interior design scheme</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Operation Types:</strong> Vertical sliding, horizontal sliding, lift-out for maintenance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSpecs;

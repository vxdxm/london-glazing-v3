
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Thermometer, Clock, Shield } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

const BenefitsGrid = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Comprehensive Benefits for Commercial Properties</h2>
      
      <AspectRatio ratio={2 / 1} className="mb-8">
        <OptimizedImage 
          src="/images/commercial/office-before-after.webp" 
          alt="Before and after comparison showing office noise and distraction versus calm productive workspace with secondary glazing" 
          className="rounded-lg object-cover w-full h-full" 
        />
      </AspectRatio>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Volume2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Superior Acoustic Performance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our secondary glazing systems deliver <strong>40-50dB noise reduction</strong>, transforming noisy street-facing offices into productive workspaces.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Acoustic laminated glass options for superior sound insulation</li>
              <li>Essential for meeting rooms and concentration areas</li>
              <li>Perfect for client-facing spaces requiring privacy</li>
              <li>Reduces external traffic, construction, and urban noise</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Thermometer className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Exceptional Energy Efficiency</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Achieve <strong>30-50% reduction</strong> in heating and cooling costs with our thermal secondary glazing solutions.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Double-glazed units with Low-E coating</li>
              <li>Improve EPC rating from D to B</li>
              <li>Increase rental values by 5-10%</li>
              <li>Reduce carbon footprint significantly</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Zero Disruption Installation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our professional teams work outside business hours, completing typical office floors in <strong>2-3 days</strong> with minimal operational impact.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Evening, weekend, and holiday installation options</li>
              <li>No structural modifications required</li>
              <li>Existing windows remain untouched</li>
              <li>Maintains building warranties and planning compliance</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Enhanced Security & Safety</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Toughened and laminated glass options provide an additional security layer while meeting commercial safety standards.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Perfect for ground-floor offices and reception areas</li>
              <li>Ideal for buildings in high-traffic locations</li>
              <li>UV protection for furniture and equipment</li>
              <li>Condensation reduction and easy maintenance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BenefitsGrid;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { TreePine, Ruler } from "lucide-react";

export function TraditionalMaterials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Traditional Materials: Timber vs Slim Aluminum</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-t-4 border-t-amber-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="h-5 w-5 text-amber-600" />
              Heritage Timber Frames
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Timber frames provide ultimate authenticity for listed buildings, matching original window 
              materials exactly. Custom-made from sustainably sourced hardwood, these frames can be 
              painted any heritage color to match existing window schemes.
            </p>
            
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">Advantages</h4>
                <p className="text-sm text-muted-foreground">Period-authentic, warmth, paintable, conservation officer preferred</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Considerations</h4>
                <p className="text-sm text-muted-foreground">Higher maintenance (repainting every 5-7 years), higher cost</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Cost</h4>
                <p className="text-sm font-medium text-primary">£500-£900 per window</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Ideal for</h4>
                <p className="text-sm text-muted-foreground">Grade I/II* listed buildings, high-value conservation areas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-slate-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-slate-500" />
              Slim Aluminum Heritage Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Precision-engineered aluminum frames with 20-30mm sightlines offer practical heritage 
              aesthetics. Powder-coated in authentic heritage colors, these profiles are virtually 
              maintenance-free while respecting period proportions.
            </p>
            
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="font-semibold text-sm mb-1">Advantages</h4>
                <p className="text-sm text-muted-foreground">Low maintenance, precise engineering, weather-resistant, cost-effective</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Considerations</h4>
                <p className="text-sm text-muted-foreground">Modern material (though conservation-approved)</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Cost</h4>
                <p className="text-sm font-medium text-primary">£400-£700 per window</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Ideal for</h4>
                <p className="text-sm text-muted-foreground">Grade II listed buildings, conservation areas, practical heritage approach</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <AspectRatio ratio={21/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/2f4fa321-a97b-487b-a0f2-bb38093e6ca3.jpg" 
            alt="Comparison of timber and aluminum secondary glazing frames" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Undo2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export function WhatIsSecondaryGlazing() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Is Secondary Glazing?</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Secondary glazing involves installing a second pane of glass on the interior side of your existing windows, 
              creating an insulating air gap between the original window and the new glazing. This additional layer works 
              independently of your original windows, which remain completely untouched.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The installation process is refreshingly straightforward. Professional installers measure your existing 
              window openings and create custom-fitted glazing panels that mount discretely to your window frames or reveals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The beauty lies in its complete reversibility: secondary glazing can be removed at any time without leaving 
              a trace, returning your windows to their original state. This reversibility is crucial for{" "}
              <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, 
              where any alteration that could damage historic fabric is heavily scrutinized by conservation officers.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Preserves Original Windows</h4>
                    <p className="text-sm text-muted-foreground">
                      Your historic windows remain completely untouched and protected
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <Undo2 className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Fully Reversible</h4>
                    <p className="text-sm text-muted-foreground">
                      Can be removed without trace, returning windows to original state
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <Wrench className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Simple Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom-fitted panels mount discretely to frames or reveals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

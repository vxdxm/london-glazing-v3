import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, X, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function WhatIsDoubleGlazing() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Is Double Glazing?</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Double glazing replaces your existing windows entirely with new units containing two panes of glass 
              separated by an air or gas-filled cavity. The replacement process involves removing your original 
              windows—often irreversibly damaging or destroying centuries-old craftsmanship.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Modern double glazing can be manufactured to replicate historic profiles, but this comes with limitations. 
              The glazing units themselves are thicker than single panes, and the overall appearance inevitably differs 
              from original windows, even with the most careful replication attempts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Unlike secondary glazing, double glazing represents a permanent alteration that cannot be undone. Once your 
              original <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link> or{" "}
              <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian windows</Link> are 
              gone, they're gone forever.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="border-destructive/30">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <X className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Destroys Original Windows</h4>
                    <p className="text-sm text-muted-foreground">
                      Historic windows are permanently removed and cannot be restored
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-destructive/30">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Permanent Alteration</h4>
                    <p className="text-sm text-muted-foreground">
                      Cannot be undone—once original windows are gone, they're gone forever
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-destructive/30">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <Clock className="h-8 w-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Lengthy Approval Process</h4>
                    <p className="text-sm text-muted-foreground">
                      Planning applications can take months and face frequent rejection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <img
            src="https://cdn.marblism.com/gqLMk-bnxeq.webp"
            alt="Comparison of original period windows versus modern double glazing replacement"
            className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

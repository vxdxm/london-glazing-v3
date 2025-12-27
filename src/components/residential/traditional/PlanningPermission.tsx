import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, AlertCircle, CheckCircle } from "lucide-react";

export function PlanningPermission() {
  const approvalFactors = [
    "Slim sightlines",
    "Heritage colors",
    "Reversible installation",
    "Period-appropriate operation matching original window styles"
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Planning Permission and Conservation Approval</h2>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4 items-start mb-6">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <p className="text-muted-foreground">
              Traditional secondary glazing enjoys widespread conservation officer support because it's 
              reversible, preserves original windows, and maintains period character. Most installations 
              for listed buildings require no planning permission as they're internal modifications with 
              no external visual impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold">Listed Buildings</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Internal secondary glazing typically permitted development
              </p>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold">Conservation Areas</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                May require planning permission - traditional aesthetics increase approval likelihood
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-red-600" />
                <h4 className="font-semibold">Article 4 Directions</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Traditional solutions essential in strictly controlled areas
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Key Approval Factors</h4>
            <div className="flex flex-wrap gap-2">
              {approvalFactors.map((factor, index) => (
                <div key={index} className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full text-sm">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

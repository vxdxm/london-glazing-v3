import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, FileCheck, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function PlanningPermissionComparison() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Planning Permission & Listed Building Consent</h2>
        
        <p className="text-muted-foreground mb-8 max-w-4xl leading-relaxed">
          Here's where the differences become stark. The planning requirements for each option vary dramatically, 
          with significant implications for cost, timeline, and approval likelihood.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader className="bg-green-50 dark:bg-green-950/30">
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-green-600" />
                Secondary Glazing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Typically doesn't require planning permission, even on{" "}
                <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link>, 
                because it's installed internally and doesn't alter the external appearance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">No planning permission typically required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Internal installation—no external impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Conservation officers frequently recommend it</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ideal solution for heritage properties</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-900">
            <CardHeader className="bg-red-50 dark:bg-red-950/30">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Double Glazing
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Always requires Listed Building Consent when installed on listed properties. This process can take 
                months, costs thousands in professional fees, and faces frequent rejection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Listed Building Consent always required</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Process takes months and costs thousands</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Requires heritage assessments and specialist glazing</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Many applications are rejected outright</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

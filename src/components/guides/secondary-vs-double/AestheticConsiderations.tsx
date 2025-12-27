import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export function AestheticConsiderations() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Aesthetic Considerations</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <EyeOff className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Secondary Glazing: Virtually Invisible</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Modern secondary glazing systems are remarkably discreet when viewed from inside the property. 
                  Slim profiles and careful color matching make the additional glazing barely noticeable in daily use.
                </p>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Key Advantage</h4>
                  <p className="text-sm text-muted-foreground">
                    Crucially, secondary glazing remains <strong>practically invisible from outside</strong>—the key 
                    factor for planning compliance in{" "}
                    <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas</Link>. 
                    Street scene impact is zero, preserving the historic character that conservation designations exist to protect.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-amber-600" />
                  <h3 className="text-xl font-semibold">Double Glazing: Visible Changes</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Double glazing, regardless of how carefully designed, inevitably changes external appearance. 
                  Conservation officers specifically seek to prevent these alterations.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Visible Differences</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Thicker glazing units than original single panes</li>
                    <li>• Different reflectivity characteristics</li>
                    <li>• Subtle profile changes</li>
                    <li>• Combined effects alter building character</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-primary/5 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Conservation Area Compliance</h3>
          </div>
          <p className="text-muted-foreground">
            For properties in{" "}
            <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas</Link> or 
            those that are <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed</Link>, 
            the zero external impact of secondary glazing is often the deciding factor. It allows you to achieve all 
            the performance benefits you need while maintaining complete compliance with heritage requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

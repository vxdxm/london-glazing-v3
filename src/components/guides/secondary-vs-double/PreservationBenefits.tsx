import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Home, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

export function PreservationBenefits() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Preservation of Original Windows</h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
          This represents the most significant difference between the options—and for listed building owners, 
          it's often the deciding factor.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Secondary Glazing: 100% Preservation
              </h3>
              <p className="text-muted-foreground mb-4">
                Secondary glazing preserves 100% of your original windows, maintaining their historic value, 
                craftsmanship, and character.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Your <Link to="/sash-window-secondary-glazing" className="text-primary hover:underline">sash windows</Link> retain 
                    authentic glazing bars
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Original glass preserved (with period imperfections that add character)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Traditional hardware remains in place</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Historic fabric fully protected</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Landmark className="h-6 w-6 text-destructive" />
                Double Glazing: Irreplaceable Loss
              </h3>
              <p className="text-muted-foreground mb-4">
                Double glazing destroys irreplaceable elements that can never be recovered, regardless of 
                how carefully the replacement is designed.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Home className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Cannot replicate subtle variations in historic glass</span>
                </li>
                <li className="flex items-start gap-2">
                  <Home className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Precise proportions of original glazing bars lost</span>
                </li>
                <li className="flex items-start gap-2">
                  <Home className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Patina of age that gives character—gone forever</span>
                </li>
                <li className="flex items-start gap-2">
                  <Home className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>May reduce property value by removing authentic features</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-6">
          <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Legal Consideration</h4>
          <p className="text-muted-foreground">
            For <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building owners</Link>, 
            the preservation aspect extends beyond aesthetics to legal obligations. Destroying original windows can 
            violate Listed Building Consent conditions and potentially reduce property values by removing authentic 
            period features.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function WhenDoubleGlazingAcceptable() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">When Is Double Glazing Acceptable?</h2>
        
        <p className="text-muted-foreground mb-8 max-w-4xl">
          Double glazing can be appropriate in specific circumstances. However, these represent exceptions 
          rather than the norm for heritage properties.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold mb-2">Modern Properties</h4>
              <p className="text-sm text-muted-foreground">
                Properties outside{" "}
                <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">Conservation Areas</Link> face 
                no planning restrictions, making double glazing viable.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold mb-2">Lost Original Windows</h4>
              <p className="text-sm text-muted-foreground">
                Some listed buildings have already lost original windows through previous unsympathetic alterations—
                high-quality replacement might actually improve appearance.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold mb-2">Rear Extensions</h4>
              <p className="text-sm text-muted-foreground">
                New additions to listed buildings sometimes receive approval, particularly where not visible 
                from public areas.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-green-600 mb-4" />
              <h4 className="font-semibold mb-2">Non-Principal Elevations</h4>
              <p className="text-sm text-muted-foreground">
                Elements that don't affect the building's principal elevations may sometimes receive 
                planning approval.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Important Note</h4>
                <p className="text-muted-foreground">
                  For the vast majority of listed buildings, particularly those in prominent positions or{" "}
                  <Link to="/kensington-chelsea" className="text-primary hover:underline">Kensington & Chelsea</Link> Conservation Areas, 
                  secondary glazing remains the only practical upgrade path. Always consult with your local 
                  conservation officer before making any decisions about window upgrades on heritage properties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

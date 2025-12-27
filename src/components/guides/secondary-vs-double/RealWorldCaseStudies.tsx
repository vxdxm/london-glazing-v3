import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, VolumeX, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function RealWorldCaseStudies() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Real-World Case Studies</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Grade II Georgian Townhouse, Islington
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Double Glazing Attempt</h4>
                  <p className="text-sm text-muted-foreground">
                    The owners initially attempted double glazing replacement but faced rejection from conservation 
                    officers concerned about altering the building's character.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Secondary Glazing Solution</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Immediate approval
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Installation within two weeks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      75% noise reduction from traffic
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Historic integrity preserved
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <VolumeX className="h-5 w-5 text-primary" />
                Victorian Villa, Richmond (Heathrow Flight Path)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A{" "}
                  <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link> villa 
                  in{" "}
                  <Link to="/locations/richmond-upon-thames" className="text-primary hover:underline">Richmond</Link> under 
                  Heathrow flight paths needed exceptional acoustic performance.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Results Achieved</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Remarkable aircraft noise reduction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Superior performance vs double glazing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Original Victorian windows preserved
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      No planning issues
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  This illustrates the practical advantages of choosing secondary glazing—faster approvals, 
                  superior noise performance, and guaranteed preservation of historic features.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

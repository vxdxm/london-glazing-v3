
import { Landmark, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HeritageRepairs = () => {
  const heritagePoints = [
    "Like-for-like repairs typically don't require listed building consent",
    "Spiral balance replacement considered maintenance, not alteration",
    "Hinge repairs and glass replacement with same specifications permitted",
    "Conservation-friendly approach maintains reversibility",
    "Matches existing components exactly",
    "Uses heritage-appropriate colors"
  ];

  return (
    <section className="mb-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="h-7 w-7 text-primary" />
            <h2 className="text-3xl font-semibold">Heritage Property Considerations</h2>
          </div>
          
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-1">Good News for Listed Buildings</h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Like-for-like repairs typically don't require listed building consent. Spiral balance replacement, 
                    hinge repairs, and glass replacement with the same specifications are considered maintenance 
                    rather than alterations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ul className="space-y-3">
            {heritagePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="bg-card border-border/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Period Property Expertise</h3>
            <p className="text-muted-foreground mb-4">
              For <Link to="/window-styles/georgian-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, {' '}
              <Link to="/window-styles/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>, and {' '}
              <Link to="/window-styles/edwardian-secondary-glazing" className="text-primary hover:underline">Edwardian</Link> properties, 
              we understand the importance of preserving period character while ensuring functional operation.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Reversible Repairs</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold text-primary">Heritage</p>
                <p className="text-xs text-muted-foreground">Colour Matching</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold text-primary">Period</p>
                <p className="text-xs text-muted-foreground">Authentic</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeritageRepairs;

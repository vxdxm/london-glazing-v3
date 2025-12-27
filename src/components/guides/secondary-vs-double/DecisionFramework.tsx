import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

export function DecisionFramework() {
  const secondaryGlazingReasons = [
    { text: "Your property is listed or in a Conservation Area", link: "/listed-buildings-secondary-glazing" },
    { text: "You want to avoid planning applications", link: null },
    { text: "Noise reduction is a priority", link: "/noise-reduction-secondary-glazing" },
    { text: "You value preserving original windows", link: null },
    { text: "Budget constraints are important", link: null },
    { text: "You want quick installation with minimal disruption", link: null }
  ];

  const doubleGlazingReasons = [
    "You have confirmed that planning permission is likely",
    "Maximum thermal efficiency is your top priority",
    "You're willing to invest in expensive conservation-grade systems",
    "Your building has already lost original windows",
    "Professional heritage consultants support the approach"
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Making The Right Choice For Your Property</h2>
        
        <p className="text-muted-foreground mb-8 max-w-4xl">
          The decision framework for listed building owners is relatively straightforward. 
          Consider your priorities and property circumstances to make the right choice.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-green-200 dark:border-green-900">
            <CardHeader className="bg-green-50 dark:bg-green-950/30">
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <Check className="h-6 w-6" />
                Choose Secondary Glazing If:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {secondaryGlazingReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {reason.link ? (
                        <Link to={reason.link} className="text-primary hover:underline">{reason.text}</Link>
                      ) : (
                        reason.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 dark:border-amber-900">
            <CardHeader className="bg-amber-50 dark:bg-amber-950/30">
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <X className="h-6 w-6" />
                Consider Double Glazing Only If:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {doubleGlazingReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-primary/5 border-primary">
          <CardContent className="pt-6 text-center">
            <p className="text-lg text-muted-foreground">
              For most listed building owners, <strong className="text-primary">secondary glazing emerges as the sensible choice</strong>—
              delivering substantial performance improvements while respecting heritage obligations and planning constraints.
            </p>
            <p className="mt-4 text-muted-foreground">
              The combination of superior noise reduction, cost-effectiveness, planning simplicity, and complete 
              reversibility makes secondary glazing the ideal solution for bringing period properties into the 
              modern age without compromising their historic character.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

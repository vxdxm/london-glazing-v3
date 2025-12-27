import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CrittallOptions = () => {
  const options = [
    {
      title: "Hinged Secondary Glazing",
      price: "£400-£700 per window",
      bestFor: "W20 casement Crittall with opening panels requiring regular access",
      operation: "Hinged frame swings open like a door, providing full access to Crittall windows behind",
      configuration: "Typically side-hung to match Crittall casement direction, with top-hung available for specific installations"
    },
    {
      title: "Lift-Out Secondary Glazing",
      price: "£300-£500 per window",
      bestFor: "Budget-conscious projects, seasonal use, or W40 fixed Crittall installations",
      operation: "Panel lifts out completely for occasional cleaning access",
      configuration: "Lightweight panels with magnetic catches or clips for easy removal"
    },
    {
      title: "Fixed Secondary Glazing",
      price: "£350-£600 per window",
      bestFor: "W40 fixed Crittall that never opens, prioritizing maximum performance",
      operation: "Permanently fixed with occasional screw removal for access",
      configuration: "Sealed completely around perimeter for optimal thermal and acoustic results"
    }
  ];

  const choosingGuide = [
    { situation: "W20 opening casement Crittall", recommendation: "Hinged secondary glazing recommended to maintain access and match operation style" },
    { situation: "W40 fixed Crittall", recommendation: "Fixed secondary glazing ideal since windows never open anyway" },
    { situation: "Budget priority", recommendation: "Lift-out most economical while delivering adequate performance" },
    { situation: "Regular access needed", recommendation: "Hinged essential for frequent Crittall window operation" },
    { situation: "Occasional access only", recommendation: "Lift-out sufficient for cleaning 2-3 times yearly" },
    { situation: "Maximum performance priority", recommendation: "Fixed delivers highest thermal and acoustic results" }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Secondary Glazing Options for Your Crittall Windows"
        subtitle="Choose the right system for your specific Crittall type"
      />
      
      <img 
        src="https://cdn.marblism.com/9299UEWdUf4.webp" 
        alt="Secondary glazing options for Crittall windows"
        className="w-full rounded-lg mb-8 shadow-lg"
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {options.map((option, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{option.title}</CardTitle>
              <p className="text-primary font-semibold">{option.price}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Best for:</p>
                <p className="text-sm text-muted-foreground">{option.bestFor}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Operation:</p>
                <p className="text-sm text-muted-foreground">{option.operation}</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Configuration:</p>
                <p className="text-sm text-muted-foreground">{option.configuration}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Choosing Your System</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {choosingGuide.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-medium">{item.situation}:</span>
                <span className="text-muted-foreground ml-1">{item.recommendation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-4 text-center">
        <p className="font-medium">
          Every configuration maintains Crittall grid visibility perfectly—your iconic aesthetic is preserved regardless of chosen system.
        </p>
      </div>
    </section>
  );
};


import { AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const WarningSignsSection = () => {
  const warningCategories = [
    {
      title: "Spiral Balance Warning Signs",
      signs: [
        "Sash drops suddenly when released (urgent – window becomes unusable)",
        "Requires significant force to lift the window",
        "Sash slides down slowly when positioned mid-height",
        "Uneven operation where one side sticks",
        "Creaking or squeaking during operation",
        "Visible damage to balance rods or housing"
      ]
    },
    {
      title: "Hinge Issues to Watch For",
      signs: [
        "Windows won't stay open at set angles",
        "Panels sag when opened",
        "Grinding or squeaking noises",
        "Windows don't close flush with the frame",
        "Visible rust or corrosion on hinges"
      ]
    },
    {
      title: "Lock and Handle Problems",
      signs: [
        "Locks won't engage properly",
        "Handles feel loose or wobble",
        "Keys won't turn smoothly",
        "Difficulty unlocking windows"
      ]
    },
    {
      title: "Seal Deterioration Symptoms",
      signs: [
        "Noticeable draughts around window edges",
        "Increased outside noise penetration",
        "Visible gaps where you can see daylight",
        "Brush seals appear flattened or missing bristles",
        "Condensation forming around frame edges"
      ]
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <AlertCircle className="h-7 w-7 text-amber-500" />
        <h2 className="text-3xl font-semibold">Signs You Need Secondary Glazing Repairs</h2>
      </div>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Early detection of problems can prevent more costly repairs. Here are the warning signs to watch for:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {warningCategories.map((category, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.signs.map((sign, signIndex) => (
                  <li key={signIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WarningSignsSection;

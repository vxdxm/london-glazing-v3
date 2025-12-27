import { SectionHeading } from "@/components/ui/section-heading";
import { Check, X } from "lucide-react";

export const CrittallComparison = () => {
  const comparisonData = [
    { factor: "Cost (typical property)", secondary: "£3,500-£7,000", replacement: "£12,000-£18,000" },
    { factor: "Grid preservation", secondary: "100% original Crittall retained", replacement: "New Crittall (not original heritage)" },
    { factor: "Heritage value", secondary: "Authentic Crittall preserved", replacement: "Lose original 1920s-1950s fabric" },
    { factor: "Planning approval", secondary: "Easy (reversible, internal only)", replacement: "Often refused (loss of original)" },
    { factor: "Installation time", secondary: "2-4 hours per window", replacement: "Weeks of major replacement work" },
    { factor: "Reversible", secondary: "Yes (Crittall intact beneath)", replacement: "No (original Crittall destroyed)" },
    { factor: "Disruption", secondary: "Minimal (interior only)", replacement: "Major (removal, disposal, installation)" },
    { factor: "Performance", secondary: "50-65% energy, 70-80% noise", replacement: "Similar performance to new DGU" },
    { factor: "Listed building", secondary: "Approved (reversible solution)", replacement: "Usually refused by conservation" },
    { factor: "Property value", secondary: "Enhanced (authentic + performance)", replacement: "Risk diminished (lose originality)" }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Secondary Glazing vs Crittall Replacement Comparison"
        subtitle="Side-by-side analysis of your options"
      />
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-3 text-left font-semibold">Factor</th>
              <th className="border p-3 text-left font-semibold text-primary">Secondary Glazing</th>
              <th className="border p-3 text-left font-semibold">New Crittall Replacement</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                <td className="border p-3 font-medium">{row.factor}</td>
                <td className="border p-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    {row.secondary}
                  </div>
                </td>
                <td className="border p-3 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    {row.replacement}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold">
          Winner for cost, heritage preservation, and planning approval: <span className="text-primary">Secondary Glazing</span>
        </p>
      </div>
    </section>
  );
};

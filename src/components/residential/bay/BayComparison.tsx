import React from "react";
import { Check, X } from "lucide-react";

const BayComparison = () => {
  const comparisonData = [
    { factor: "Cost", secondary: "£1,200-£3,200", replacement: "£3,000-£10,000+", winner: "secondary" },
    { factor: "Heritage", secondary: "Preserves authentic bay", replacement: "Destroys period feature", winner: "secondary" },
    { factor: "Installation Time", secondary: "1-2 days", replacement: "1-2 weeks", winner: "secondary" },
    { factor: "Planning Required", secondary: "Usually no", replacement: "Often required", winner: "secondary" },
    { factor: "Reversible", secondary: "Yes", replacement: "No", winner: "secondary" },
    { factor: "Performance", secondary: "Excellent", replacement: "Excellent but costlier", winner: "tie" }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Secondary Glazing vs Bay Window Replacement</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-4 font-semibold text-foreground border-b border-border">Factor</th>
              <th className="text-left p-4 font-semibold text-primary border-b border-border">Secondary Glazing</th>
              <th className="text-left p-4 font-semibold text-muted-foreground border-b border-border">Bay Replacement</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="hover:bg-muted/50 transition-colors">
                <td className="p-4 border-b border-border font-medium text-foreground">{row.factor}</td>
                <td className="p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    {row.winner === "secondary" && <Check className="h-5 w-5 text-green-600" />}
                    <span className={row.winner === "secondary" ? "text-green-600 dark:text-green-400 font-medium" : "text-foreground"}>
                      {row.secondary}
                    </span>
                  </div>
                </td>
                <td className="p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    {row.winner === "secondary" && <X className="h-5 w-5 text-red-500" />}
                    <span className={row.winner === "secondary" ? "text-muted-foreground" : "text-foreground"}>
                      {row.replacement}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
        <p className="text-foreground font-medium">
          <strong>Clear Winner:</strong> Secondary glazing delivers the best combination of heritage preservation, 
          excellent performance, and value for money for bay windows.
        </p>
      </div>
    </section>
  );
};

export default BayComparison;

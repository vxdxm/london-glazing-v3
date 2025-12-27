import { Check, X, Minus } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      factor: "Cost",
      liftOut: "£300-£500 (mid-range)",
      fixed: "£250-£550 (cheapest)",
      hinged: "£400-£700 (most expensive)"
    },
    {
      factor: "Access",
      liftOut: "Complete removal (5-10 min)",
      fixed: "Screw removal (5-10 min)",
      hinged: "Daily opening (instant)"
    },
    {
      factor: "Best For",
      liftOut: "Seasonal use, rental, trial",
      fixed: "Never-opened windows",
      hinged: "Regular access"
    },
    {
      factor: "Performance",
      liftOut: "Very good (clip gaps)",
      fixed: "Maximum (sealed)",
      hinged: "Excellent (hinge gaps)"
    },
    {
      factor: "Flexibility",
      liftOut: "Install/remove seasonally",
      fixed: "Permanently in place",
      hinged: "Permanently in place"
    },
    {
      factor: "Storage",
      liftOut: "Required when removed",
      fixed: "Not needed",
      hinged: "Not needed"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Lift-Out vs Fixed vs Hinged: The Real Comparison</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-4 text-left font-semibold">Factor</th>
              <th className="border border-border p-4 text-left font-semibold bg-primary/10">Lift-Out</th>
              <th className="border border-border p-4 text-left font-semibold">Fixed</th>
              <th className="border border-border p-4 text-left font-semibold">Hinged</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                <td className="border border-border p-4 font-medium">{row.factor}</td>
                <td className="border border-border p-4 bg-primary/5 font-medium text-primary">{row.liftOut}</td>
                <td className="border border-border p-4 text-muted-foreground">{row.fixed}</td>
                <td className="border border-border p-4 text-muted-foreground">{row.hinged}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;

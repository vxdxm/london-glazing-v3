import { Check, X, Minus } from "lucide-react";

const CasementComparison = () => {
  const comparisonData = [
    {
      factor: "Cost per window",
      secondary: "£350-£800",
      replacement: "£800-£1,500",
      diy: "£20-£50",
    },
    {
      factor: "Heritage preservation",
      secondary: "Preserves originals perfectly",
      secondaryGood: true,
      replacement: "Destroys period casements",
      replacementGood: false,
      diy: "Temporary, poor appearance",
      diyGood: false,
    },
    {
      factor: "Character retention",
      secondary: "Maintains complete period charm",
      secondaryGood: true,
      replacement: "Often loses character",
      replacementGood: false,
      diy: "Looks cheap and temporary",
      diyGood: false,
    },
    {
      factor: "Installation time",
      secondary: "2-3 hours per window",
      replacement: "Full day+ per window",
      diy: "1 hour per window",
    },
    {
      factor: "Disruption level",
      secondary: "Minimal mess",
      secondaryGood: true,
      replacement: "Major (removal, making good)",
      replacementGood: false,
      diy: "Minimal",
      diyGood: true,
    },
    {
      factor: "Reversibility",
      secondary: "Completely reversible",
      secondaryGood: true,
      replacement: "No (originals destroyed)",
      replacementGood: false,
      diy: "Yes but temporary",
      diyGood: null,
    },
    {
      factor: "Exterior appearance",
      secondary: "Unchanged from street",
      secondaryGood: true,
      replacement: "Altered building appearance",
      replacementGood: false,
      diy: "Visible, poor quality",
      diyGood: false,
    },
    {
      factor: "Performance",
      secondary: "Excellent (45-60% energy, 70-80% noise)",
      secondaryGood: true,
      replacement: "Excellent but much costlier",
      replacementGood: null,
      diy: "Poor (<10% improvement)",
      diyGood: false,
    },
    {
      factor: "Durability",
      secondary: "20+ years",
      secondaryGood: true,
      replacement: "20+ years",
      replacementGood: true,
      diy: "1-2 years maximum",
      diyGood: false,
    },
  ];

  const getIcon = (isGood: boolean | null | undefined) => {
    if (isGood === true) return <Check className="h-4 w-4 text-green-600" />;
    if (isGood === false) return <X className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Secondary Glazing vs Alternatives Comparison</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-4 font-semibold border-b">Factor</th>
              <th className="text-left p-4 font-semibold border-b bg-primary/10">Secondary Glazing</th>
              <th className="text-left p-4 font-semibold border-b">Casement Replacement</th>
              <th className="text-left p-4 font-semibold border-b">DIY Plastic Film</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                <td className="p-4 font-medium">{row.factor}</td>
                <td className="p-4 bg-primary/5">
                  <div className="flex items-center gap-2">
                    {getIcon(row.secondaryGood)}
                    <span>{row.secondary}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {getIcon(row.replacementGood)}
                    <span>{row.replacement}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {getIcon(row.diyGood)}
                    <span>{row.diy}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((row, index) => (
          <div key={index} className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">{row.factor}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2 bg-primary/10 rounded p-2">
                {getIcon(row.secondaryGood)}
                <div>
                  <span className="text-xs text-muted-foreground">Secondary Glazing</span>
                  <p className="text-sm">{row.secondary}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-background/60 rounded p-2">
                {getIcon(row.replacementGood)}
                <div>
                  <span className="text-xs text-muted-foreground">Replacement</span>
                  <p className="text-sm">{row.replacement}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-background/60 rounded p-2">
                {getIcon(row.diyGood)}
                <div>
                  <span className="text-xs text-muted-foreground">DIY Film</span>
                  <p className="text-sm">{row.diy}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
        <p className="text-lg font-semibold">
          <span className="text-primary">Clear Winner for Period Casements:</span> Secondary glazing delivers the best combination of heritage preservation, excellent performance, and value for money.
        </p>
      </div>
    </section>
  );
};

export default CasementComparison;

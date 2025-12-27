export const FixedComparison = () => {
  const comparisonData = [
    {
      feature: "Cost per window",
      fixed: "£250-£550",
      hinged: "£400-£700",
      liftOut: "£300-£500"
    },
    {
      feature: "Thermal performance",
      fixed: "60-70% reduction",
      hinged: "50-60% reduction",
      liftOut: "50-60% reduction"
    },
    {
      feature: "Acoustic performance",
      fixed: "75-85% reduction",
      hinged: "70-80% reduction",
      liftOut: "70-75% reduction"
    },
    {
      feature: "Installation time",
      fixed: "30-60 minutes",
      hinged: "60-90 minutes",
      liftOut: "45-75 minutes"
    },
    {
      feature: "Maintenance",
      fixed: "Minimal",
      hinged: "Moderate",
      liftOut: "Low"
    },
    {
      feature: "Access to primary",
      fixed: "Screw removal",
      hinged: "Easy opening",
      liftOut: "Complete removal"
    },
    {
      feature: "Best applications",
      fixed: "Never-opened, extreme noise, budget",
      hinged: "Regular access needed",
      liftOut: "Seasonal access"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Performance Comparison</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-4 text-left font-semibold">Feature</th>
              <th className="border p-4 text-left font-semibold bg-primary/10">Fixed</th>
              <th className="border p-4 text-left font-semibold">Hinged</th>
              <th className="border p-4 text-left font-semibold">Lift-out</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                <td className="border p-4 font-medium">{row.feature}</td>
                <td className="border p-4 bg-primary/5 font-medium text-primary">{row.fixed}</td>
                <td className="border p-4 text-muted-foreground">{row.hinged}</td>
                <td className="border p-4 text-muted-foreground">{row.liftOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

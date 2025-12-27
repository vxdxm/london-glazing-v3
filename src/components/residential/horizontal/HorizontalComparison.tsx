import React from "react";
import { Check, X, Minus } from "lucide-react";

const HorizontalComparison = () => {
  const vsVertical = [
    { factor: "Wide Windows", horizontal: "Excellent (specifically designed)", vertical: "Awkward (difficult to manage)", winner: "horizontal" },
    { factor: "Operation", horizontal: "Smooth sideways gliding", vertical: "Vertical lift (harder for some)", winner: "horizontal" },
    { factor: "Aesthetic", horizontal: "Modern contemporary lines", vertical: "Traditional period styling", winner: "tie" },
    { factor: "Ideal Applications", horizontal: "Wide windows, modern, commercial", vertical: "Sash windows, period properties", winner: "tie" },
    { factor: "Wide Window Cost", horizontal: "£400-£2,500", vertical: "£500-£1,200", winner: "tie" }
  ];

  const vsHinged = [
    { factor: "Wide Windows", horizontal: "Excellent (multi-panel spans)", hinged: "Requires multiple units", winner: "horizontal" },
    { factor: "Swing Space", horizontal: "None required", hinged: "Needs clearance for swing", winner: "horizontal" },
    { factor: "Furniture Proximity", horizontal: "Can be very close", hinged: "Must maintain clearance", winner: "horizontal" },
    { factor: "Operation Method", horizontal: "Smooth gliding motion", hinged: "Swing open and closed", winner: "tie" },
    { factor: "Modern Aesthetic", horizontal: "Contemporary clean lines", hinged: "More traditional styling", winner: "horizontal" }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Comparison: Horizontal Sliding vs Alternative Systems</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Horizontal Sliding vs Vertical Sliding Sash</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Factor</th>
                  <th className="text-left p-3 font-semibold text-primary border-b border-border">Horizontal Sliding</th>
                  <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">Vertical Sliding</th>
                </tr>
              </thead>
              <tbody>
                {vsVertical.map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-3 border-b border-border font-medium text-foreground">{row.factor}</td>
                    <td className="p-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        {row.winner === "horizontal" && <Check className="h-4 w-4 text-green-600" />}
                        {row.winner === "tie" && <Minus className="h-4 w-4 text-muted-foreground" />}
                        <span className={row.winner === "horizontal" ? "text-green-600 dark:text-green-400 font-medium" : "text-foreground"}>
                          {row.horizontal}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 border-b border-border text-muted-foreground">{row.vertical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-primary font-medium">Clear winner for wide windows: Horizontal sliding systems</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Horizontal Sliding vs Hinged Systems</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-semibold text-foreground border-b border-border">Factor</th>
                  <th className="text-left p-3 font-semibold text-primary border-b border-border">Horizontal Sliding</th>
                  <th className="text-left p-3 font-semibold text-muted-foreground border-b border-border">Hinged Systems</th>
                </tr>
              </thead>
              <tbody>
                {vsHinged.map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="p-3 border-b border-border font-medium text-foreground">{row.factor}</td>
                    <td className="p-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        {row.winner === "horizontal" && <Check className="h-4 w-4 text-green-600" />}
                        {row.winner === "tie" && <Minus className="h-4 w-4 text-muted-foreground" />}
                        <span className={row.winner === "horizontal" ? "text-green-600 dark:text-green-400 font-medium" : "text-foreground"}>
                          {row.horizontal}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 border-b border-border text-muted-foreground">{row.hinged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-primary font-medium">Clear winner for wide windows near furniture: Horizontal sliding systems</p>
        </div>
      </div>
    </section>
  );
};

export default HorizontalComparison;

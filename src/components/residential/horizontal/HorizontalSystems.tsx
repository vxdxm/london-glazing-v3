import React from "react";
import { Layers, Zap, CheckCircle } from "lucide-react";

const HorizontalSystems = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Standard vs Multi-Track Systems: Choosing the Right Solution</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="bg-primary/10 p-4">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Standard Horizontal Sliding (2-3 Panels)</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-foreground mb-3">Best Applications:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Residential windows up to 2.5 metres wide
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Standard living room, bedroom, dining room windows
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Budget-conscious projects seeking excellent performance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Typical modern home window proportions
              </li>
            </ul>

            <h4 className="font-semibold text-foreground mb-3">Configuration Options:</h4>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p><strong className="text-foreground">2-Panel:</strong> One or both panels slide, typically 50/50 coverage</p>
              <p><strong className="text-foreground">3-Panel:</strong> Central fixed panel with sliding sides, or all three slide</p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3">
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">Cost Range: £400-£900 per window</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-4">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xl font-semibold text-foreground">Multi-Track Horizontal Sliding (3-5 Panels)</h3>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-semibold text-foreground mb-3">Ideal Situations:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Very wide windows 2.5-5 metres or more
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Panoramic glazing and architectural glass features
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Patio door-width openings
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-amber-600" />
                Commercial applications, extensions, conservatories
              </li>
            </ul>

            <h4 className="font-semibold text-foreground mb-3">Advanced Configuration:</h4>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <p>3-5 panels on multiple parallel tracks with coordinated motion</p>
              <p>Panels overlap and slide past each other smoothly</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3">
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">Investment Range: £900-£2,500+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Choosing Your System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="bg-background rounded-lg p-3">
            <p className="font-medium text-foreground mb-1">Window up to 2.5m wide</p>
            <p className="text-muted-foreground">Standard 2-3 panel system - excellent performance with cost-effectiveness</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <p className="font-medium text-foreground mb-1">Window 2.5m-5m+ wide</p>
            <p className="text-muted-foreground">Multi-track systems recommended for proper coverage and smooth operation</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <p className="font-medium text-foreground mb-1">Patio door widths</p>
            <p className="text-muted-foreground">Multi-track typically required due to spans usually exceeding 2.5 metres</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSystems;

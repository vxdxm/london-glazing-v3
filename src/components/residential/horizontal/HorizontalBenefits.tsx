import React from "react";
import { Thermometer, Volume2, Maximize2, Paintbrush, Settings } from "lucide-react";

const HorizontalBenefits = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive Benefits for Wide Windows and Modern Homes</h2>

      <div className="space-y-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Thermometer className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Energy Efficiency and Substantial Cost Savings</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Horizontal sliding secondary glazing delivers <strong className="text-foreground">50-65% reduction in heat loss</strong> through 
            windows, with particularly dramatic impact on large glass areas common in modern properties.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">£300-£600</p>
              <p className="text-xs text-muted-foreground">Annual savings per wide window</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">£1,200-£2,400</p>
              <p className="text-xs text-muted-foreground">Total annual savings possible</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">4-7 Years</p>
              <p className="text-xs text-muted-foreground">ROI payback period</p>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-green-600 dark:text-green-400">20+ Years</p>
              <p className="text-xs text-muted-foreground">System lifespan</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Volume2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Dramatic Noise Reduction for Urban Living</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">70-80% noise reduction</strong> transforms even the busiest London locations 
            into peaceful sanctuaries. High-quality sealing between overlapping panels creates effective acoustic 
            barriers, while laminated glass options (6.8mm to 12.8mm) provide exceptional performance for extreme 
            noise situations such as main roads, railway lines, or flight paths.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Maximize2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Maximum Access and Operational Flexibility</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <ul className="space-y-2">
              <li>• <strong className="text-foreground">Full-width access</strong> when panels slide apart</li>
              <li>• <strong className="text-foreground">Easy cleaning</strong> - reach all primary window surfaces</li>
            </ul>
            <ul className="space-y-2">
              <li>• <strong className="text-foreground">Maximum summer ventilation</strong> at full capacity</li>
              <li>• <strong className="text-foreground">No swing space obstruction</strong> - room layout unchanged</li>
            </ul>
          </div>
        </div>
      </div>

      <img 
        src="https://cdn.marblism.com/0hjIGnzdfuN.webp" 
        alt="Benefits of horizontal sliding secondary glazing" 
        className="w-full rounded-lg mb-8 shadow-lg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Paintbrush className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Modern Aesthetic Appeal</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong className="text-foreground">Contemporary clean lines</strong> complement modern interior design</li>
            <li>• <strong className="text-foreground">Professional appearance</strong> suits commercial applications</li>
            <li>• <strong className="text-foreground">Color options</strong> including white, grey, black, and RAL matching</li>
            <li>• <strong className="text-foreground">Maximised glass visibility</strong> - windows remain focal point</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Durability and Engineering Excellence</h3>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong className="text-foreground">Precision engineering</strong> ensures smooth operation for decades</li>
            <li>• <strong className="text-foreground">Minimal maintenance</strong> - occasional track cleaning only</li>
            <li>• <strong className="text-foreground">Long-lasting mechanisms</strong> deliver 20+ years reliability</li>
            <li>• <strong className="text-foreground">Quality tracks and bearings</strong> maintain perfect alignment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HorizontalBenefits;

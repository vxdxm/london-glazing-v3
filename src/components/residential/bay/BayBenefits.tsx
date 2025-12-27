import React from "react";
import { Thermometer, Volume2, Shield, Sofa } from "lucide-react";

const BayBenefits = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive Benefits of Bay Window Secondary Glazing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sofa className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Transform Your Cold Bay Zone</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Secondary glazing eliminates the cold spot phenomenon that makes bay areas uncomfortable. 
            Your bay window seat becomes a warm, usable space year-round - often becoming the family's 
            favorite spot for reading, relaxation, or morning coffee.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Thermometer className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Dramatic Energy Efficiency Improvements</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Professional secondary glazing can reduce heat loss through bay windows by 45-60%, with typical 
            annual savings of £400-£800 per bay depending on size and current glazing. The large glass 
            surface area of bays means proportionally greater savings compared to standard windows.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Volume2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Exceptional Noise Reduction</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Bay windows face the street, capturing maximum traffic noise, sirens, and urban sounds. 
            Quality secondary glazing with acoustic glass can reduce noise levels by 70-80%, transforming 
            noisy front rooms into peaceful sanctuaries.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Shield className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Heritage Preservation</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Secondary glazing preserves your authentic Victorian or Edwardian bay completely. Installed 
            internally, it's invisible from the street, maintaining your property's period character 
            and street scene contribution while delivering modern performance.
          </p>
        </div>
      </div>

      <img 
        src="https://cdn.marblism.com/0zlJySxj8-W.webp" 
        alt="Bay window with secondary glazing benefits" 
        className="w-full rounded-lg shadow-lg"
      />
    </section>
  );
};

export default BayBenefits;

import React from "react";
import { AlertTriangle, Thermometer, Shield, PoundSterling } from "lucide-react";

const WhyBayNeedsGlazing = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Why Bay Windows Desperately Need Secondary Glazing</h2>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Bay windows are architectural treasures that define Victorian and Edwardian streetscapes across London. 
        From the classic box bays of Islington terraces to the elegant canted bays of Ealing villas, these 
        projecting windows create character and charm. However, they also present unique challenges that make 
        them prime candidates for secondary glazing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <Thermometer className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Massive Heat Loss Through Large Glass Areas</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Unlike single windows, bay windows feature 3-5 individual panels creating an enormous glass surface area. 
            Most Victorian and Edwardian bays remain single-glazed, turning your beautiful architectural feature 
            into a massive heat-loss zone. The bay's projection from the building creates a thermal bridge, 
            making the bay area the coldest part of your room.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Heritage Value vs Modern Comfort</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Replacing authentic period bays typically costs £3,000-£10,000 per bay and destroys irreplaceable 
            architectural features. Many Victorian and Edwardian bays are protected under listed building 
            designations or conservation area restrictions, making replacement impossible or extremely 
            difficult to achieve planning permission.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">The Cold Bay Zone Problem</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• That beautiful bay window seat becomes unusable in winter due to cold draughts radiating from the large glass surface</li>
              <li>• Multiple window seals across 3-5 panels multiply draught sources</li>
              <li>• The prominent street-facing position amplifies traffic noise</li>
              <li>• Condensation issues leading to potential damp and mould problems</li>
            </ul>
          </div>
        </div>
      </div>

      <img 
        src="https://cdn.marblism.com/8La7JhW86UP.webp" 
        alt="Victorian bay window requiring secondary glazing" 
        className="w-full rounded-lg mb-8 shadow-lg"
      />
    </section>
  );
};

export default WhyBayNeedsGlazing;

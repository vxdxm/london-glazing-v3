import React from "react";
import { Thermometer, Volume2, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BayHero = () => {
  return (
    <section className="mb-12">
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        Transform your beautiful Victorian or Edwardian bay from a cold, draughty showcase into a warm, 
        comfortable living space with professional secondary glazing. Maintain the character of original bay windows while improving performance - learn about <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">preserving Victorian windows</Link> and <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian property glazing</Link>. Whether you're battling soaring 
        energy bills, street noise, or simply want to make your iconic bay window usable year-round, 
        secondary glazing offers the perfect solution - preserving your <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">period property's character</Link> 
        while delivering modern performance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Thermometer className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">45-60% Heat Loss Reduction</p>
            <p className="text-sm text-muted-foreground">Dramatic energy savings</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Volume2 className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">70-80% Noise Reduction</p>
            <p className="text-sm text-muted-foreground">Peace from street noise</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Shield className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">Heritage Preserved</p>
            <p className="text-sm text-muted-foreground">Original bays intact</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Home className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">50-70% Cost Savings</p>
            <p className="text-sm text-muted-foreground">vs. bay replacement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BayHero;

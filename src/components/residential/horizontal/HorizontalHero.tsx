import React from "react";
import { Thermometer, Volume2, Maximize2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HorizontalHero = () => {
  return (
    <section className="mb-12">
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        <strong className="text-foreground">Horizontal sliding secondary glazing offers the perfect solution for wide windows, 
        large glass areas, and modern properties throughout London.</strong> Horizontal sliders preserve your original windows completely - ideal for <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>, <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian properties</Link>. With 50-65% energy reduction, 
        70-80% noise reduction, and smooth gliding operation ideal for openings from 2-5 metres wide, 
        this contemporary system delivers exceptional performance without compromising your property's aesthetics.
      </p>
      
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Whether you have expansive modern glazing, wide Victorian window pairs, or commercial spaces 
        requiring professional solutions, horizontal sliding secondary glazing provides precision-engineered 
        comfort with clean, minimal lines that complement any architectural style. Perfect for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Thermometer className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">50-65% Energy Reduction</p>
            <p className="text-sm text-muted-foreground">Dramatic heat loss savings</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Volume2 className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">70-80% Noise Reduction</p>
            <p className="text-sm text-muted-foreground">Urban peace restored</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Maximize2 className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">2-5 Metre Spans</p>
            <p className="text-sm text-muted-foreground">Wide window coverage</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">Modern Aesthetic</p>
            <p className="text-sm text-muted-foreground">Clean contemporary lines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalHero;

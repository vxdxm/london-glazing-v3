import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FixedPanelIcon } from "@/components/icons/GlazingTypeIcons";

export const CrittallHero = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <FixedPanelIcon size={56} className="text-primary" />
        <h1 className="text-4xl font-bold">Secondary Glazing for Crittall Windows</h1>
      </div>
      
      <div className="bg-primary/5 rounded-lg p-8 mb-8">
        <p className="text-xl text-foreground mb-6">
          <strong>Perfect for preserving original Crittall windows completely while achieving 50-65% energy reduction and avoiding £12,000-£18,000 replacement costs.</strong> Our secondary glazing stops metal frame heat conduction, eliminates condensation on Crittall frames, and reduces noise by 70-80%, all while maintaining your property's authentic 1920s-1950s architectural heritage. Ideal for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>. Reversible solution protects heritage value.
        </p>
        
        <p className="text-lg text-muted-foreground mb-6">
          <strong>Crittall heritage specialists • Grid aesthetic preservation experts • Listed Art Deco building approved • W20/W40 experience</strong>
        </p>
        
        <p className="text-muted-foreground mb-8">
          Perfect for Art Deco buildings, 1930s homes, factory conversions, modernist villas, and any property with original W20/W40 Crittall windows throughout London.
        </p>
        
        <Button asChild size="lg">
          <Link to="/quote">Get Your Free Crittall Assessment</Link>
        </Button>
      </div>
    </div>
  );
};

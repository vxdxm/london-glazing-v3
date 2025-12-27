import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "lucide-react";

export const CrittallAestheticPreservation = () => {
  return (
    <section className="mb-16">
      <SectionHeading 
        title="How Secondary Glazing Preserves Your Crittall Aesthetic 100%"
        subtitle="Complete grid pattern preservation with zero external alteration"
      />
      
      <img 
        src="https://cdn.marblism.com/qY64DlWuS7P.webp" 
        alt="Secondary glazing preserving Crittall grid aesthetic"
        className="w-full rounded-lg mb-8 shadow-lg"
      />
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">From Exterior (Street View)</h3>
          <p className="text-muted-foreground mb-4">
            Your property's appearance remains absolutely unchanged. The original Crittall grid stays fully visible from the street because secondary glazing is installed internally with zero external alteration.
          </p>
          <p className="text-muted-foreground">
            Your property character, street scene, and iconic Crittall look remain completely intact. This invisible-from-outside approach ensures planning-friendly approval since there's no external appearance change whatsoever.
          </p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">From Interior</h3>
          <p className="text-muted-foreground mb-4">
            A slim secondary glazing frame (20-30mm aluminum) installs unobtrusively in the window reveal. You see through the transparent secondary glass to the original Crittall grid behind, creating a layered aesthetic.
          </p>
          <p className="text-muted-foreground">
            Both the secondary frame and original Crittall grid remain visible in an attractive depth effect. The Crittall grid pattern stays the dominant visual feature—it's never hidden or obscured.
          </p>
        </div>
      </div>
      
      <div className="bg-primary/5 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Color-Matching Options</h3>
        <p className="text-muted-foreground">
          Secondary frames can be powder-coated black or grey to blend seamlessly with your Crittall, or white for modern contrast that suits contemporary interiors. Many owners discover they actually prefer the layered industrial look of both metal frames working together.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Why the Grid Is Never Lost</h3>
        <ul className="space-y-3">
          {[
            "Secondary glazing uses completely transparent glass—you see straight through to the Crittall grid behind",
            "The Crittall remains the primary visual element with its grid pattern and metal frames staying prominent",
            "Installation in the window reveal doesn't obstruct the Crittall face view",
            "Reveals simply gain 50-100mm depth with secondary glazing sitting inside while Crittall remains at the exterior edge"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Art Deco Building</h4>
          <p className="text-sm text-muted-foreground">
            Black Crittall 9-pane grids with black aluminum secondary frames create a cohesive industrial aesthetic—from street zero change, from inside both black frames look intentional with grid perfectly preserved.
          </p>
        </div>
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">Factory Conversion</h4>
          <p className="text-sm text-muted-foreground">
            W40 warehouse Crittall with large grids plus grey secondary frames maintains industrial loft character while enhancing the layered metal aesthetic.
          </p>
        </div>
        <div className="border rounded-lg p-5">
          <h4 className="font-semibold mb-2">1930s Suburban Home</h4>
          <p className="text-sm text-muted-foreground">
            Cream Crittall 6-pane grids with white secondary frames preserves authentic 1930s character—street view unchanged, interior maintains period feel.
          </p>
        </div>
      </div>
      
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-200">Complete Reversibility</h3>
        <p className="text-green-700 dark:text-green-300">
          Secondary glazing removes completely, allowing return to original single-glazed Crittall if ever desired. There's zero permanent alteration—your Crittall windows remain completely intact beneath, protecting heritage value for future generations.
        </p>
      </div>
      
      <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
        "I was terrified secondary glazing would hide my beautiful Crittall grids. I can't believe how well it works—the grids are still the main feature, just with a modern performance boost. From the street, you'd never know there's secondary glazing. It's absolutely perfect."
      </blockquote>
    </section>
  );
};

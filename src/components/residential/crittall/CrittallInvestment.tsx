import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "lucide-react";

export const CrittallInvestment = () => {
  return (
    <section className="mb-16">
      <SectionHeading 
        title="Investment: Secondary Glazing vs Crittall Replacement Costs"
        subtitle="Understanding the significant cost savings"
      />
      
      <img 
        src="https://cdn.marblism.com/-7S_p8RCPes.webp" 
        alt="Secondary glazing investment comparison"
        className="w-full rounded-lg mb-8 shadow-lg"
      />
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Secondary Glazing Investment</h3>
          <ul className="space-y-3 text-sm">
            <li><strong>Per window:</strong> £300-£700</li>
            <li><strong>Typical Art Deco property:</strong> £3,500-£7,000 (10-15 windows)</li>
            <li><strong>Large factory conversion:</strong> £7,000-£12,000</li>
          </ul>
        </div>
        
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-destructive">New Crittall Replacement</h3>
          <ul className="space-y-3 text-sm">
            <li><strong>Per window:</strong> £800-£1,500</li>
            <li><strong>Typical property:</strong> £10,000-£15,000</li>
            <li><strong>Professional installation:</strong> £2,000-£3,000</li>
            <li><strong>Total project:</strong> £12,000-£18,000</li>
          </ul>
        </div>
        
        <div className="bg-amber-100 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-amber-800 dark:text-amber-200">Modern Crittall-Style Imitation</h3>
          <ul className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
            <li><strong>Per window:</strong> £600-£1,000</li>
            <li><strong>Typical property:</strong> £6,000-£12,000</li>
            <li><strong>Major drawback:</strong> Loses authentic heritage value and property character</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Secondary Glazing Value Proposition</h3>
        <ul className="space-y-3">
          {[
            "Save £5,000-£11,000 versus authentic Crittall replacement",
            "50-70% cheaper than any replacement option",
            "Preserves original Crittall maintaining heritage value and property premium",
            "Equivalent performance achieving similar thermal and acoustic results",
            "Reversible solution keeps original Crittall intact for future generations",
            "Planning-friendly while replacement often gets refused"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-green-700 dark:text-green-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Return on Investment</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Annual energy savings:</strong> £500-£900 (Crittall properties have significant glass areas)</li>
            <li><strong>Payback period:</strong> 4-7 years typical</li>
            <li><strong>System lifespan:</strong> 20-25 years with quality installation</li>
            <li><strong>Total lifetime savings:</strong> £10,000-£18,000 over 20 years</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-6 flex items-center justify-center">
          <p className="text-center text-muted-foreground">
            <strong>Finance options available</strong> to spread investment costs over manageable periods.
          </p>
        </div>
      </div>
    </section>
  );
};

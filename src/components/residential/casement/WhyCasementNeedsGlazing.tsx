import { AlertTriangle, Home, Thermometer, Volume2, Wrench, PoundSterling, Shield, Check } from "lucide-react";

const WhyCasementNeedsGlazing = () => {
  const metalCasementProblems = [
    "Single-glazed construction creates massive heat loss - you're essentially heating the outdoors",
    "Rust and deterioration is common, especially around hinges and frames",
    "Draughty hinged mechanisms create gaps that whistle with wind and leak heat constantly",
    "Difficult operation due to seized hinges, paint buildup, and warped frames",
    "Expensive like-for-like replacement often costs £800-£1,500 per window for specialist heritage metalwork",
    "Character loss if replaced with modern uPVC destroys the period charm completely",
  ];

  const timberCasementProblems = [
    "Single-glazed construction in older properties (poor thermal performance)",
    "Shrinking and swelling timber creates seasonal draughts and operation issues",
    "Ongoing paint maintenance requirements and weather damage",
    "High replacement costs (£800-£1,500 per window for quality timber casements)",
  ];

  const modernCasementProblems = [
    "Builder-grade double glazing uses cheap units with poor performance",
    "Insufficient for noisy environments - standard double glazing can't handle flight paths, railways, or busy London roads",
    "Heat loss through frames and aging seals reduces efficiency over time",
  ];

  const dailyImpacts = [
    { icon: Thermometer, text: "Cold rooms in winter as heat escapes through single glazing and draughty seals" },
    { icon: PoundSterling, text: "Shocking energy bills from constantly heating inefficient spaces" },
    { icon: Volume2, text: "Noise pollution penetrating through gaps in hinged mechanisms - traffic, railways, aircraft" },
    { icon: AlertTriangle, text: "Condensation and potential mould from cold single glazing surfaces" },
    { icon: Home, text: "Uncomfortable draughts around opening mechanisms making rooms unpleasant" },
    { icon: Wrench, text: "Aesthetic concerns from deteriorating metal casements affecting property appearance" },
  ];

  const solutions = [
    "Preserves original casement windows completely - no removal, heritage intact",
    "Delivers 45-60% energy bill reductions through effective thermal barrier",
    "Achieves 70-80% noise reduction by sealing the gaps that let sound through",
    "Works with ANY casement style - metal, timber, uPVC, side-hung, top-hung, tilt & turn",
    "Maintains full access to primary casements for operation, cleaning, maintenance",
    "Costs 50-65% less than replacement at £350-£800 vs £800-£1,500 per window",
    "Protects deteriorating metal casements by reducing weather exposure",
    "Quick installation takes just 2-3 hours per window with minimal disruption",
    "No exterior alteration perfect for conservation areas and character preservation",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Why Casement Windows Desperately Need Secondary Glazing</h2>
      
      <p className="text-lg text-muted-foreground mb-8">
        Casement windows present unique challenges that make secondary glazing not just beneficial, but often essential for comfortable living.
      </p>

      {/* Period Metal Casements */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Period Metal Casements (1920s-1950s Properties)
        </h3>
        <p className="text-muted-foreground mb-4">
          Original steel casements found in Art Deco properties, inter-war suburban homes, and 1930s-1950s semi-detached houses face specific problems:
        </p>
        <ul className="space-y-2">
          {metalCasementProblems.map((problem, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground/80">
              <span className="text-destructive mt-1">•</span>
              <span><strong>{problem.split(' - ')[0]}</strong>{problem.includes(' - ') ? ` - ${problem.split(' - ')[1]}` : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timber Casements */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Timber Casement Windows</h3>
        <p className="text-muted-foreground mb-4">Traditional timber casements suffer from:</p>
        <ul className="space-y-2">
          {timberCasementProblems.map((problem, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground/80">
              <span className="text-amber-600 mt-1">•</span>
              <span><strong>{problem.split(' (')[0]}</strong>{problem.includes(' (') ? ` (${problem.split(' (')[1]}` : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Modern Casements */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Modern uPVC and Timber Casements</h3>
        <p className="text-muted-foreground mb-4">Even newer casement windows often underperform:</p>
        <ul className="space-y-2">
          {modernCasementProblems.map((problem, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground/80">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>{problem.split(' - ')[0]}</strong>{problem.includes(' - ') ? ` - ${problem.split(' - ')[1]}` : ''}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image placeholder */}
      <div className="mb-8">
        <img 
          src="https://cdn.marblism.com/eLlsRPgx3pm.webp" 
          alt="Casement window secondary glazing installation" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Daily Impact */}
      <div className="bg-muted/30 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-6">The Impact on London Homeowners</h3>
        <p className="text-muted-foreground mb-6">These casement window problems create real daily struggles:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {dailyImpacts.map((impact, index) => (
            <div key={index} className="flex items-start gap-3 bg-background/60 rounded-lg p-4">
              <impact.icon className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{impact.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-background/60 rounded-lg">
          <p className="text-foreground/80 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <span><strong>Guilt about replacement</strong> - knowing that removing original casements destroys period character</span>
          </p>
        </div>
        <div className="mt-2 p-4 bg-background/60 rounded-lg">
          <p className="text-foreground/80 flex items-start gap-2">
            <PoundSterling className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <span><strong>Cost paralysis</strong> - replacement seems too expensive, but current situation is unbearable</span>
          </p>
        </div>
      </div>

      {/* Why Secondary Glazing is Perfect */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Why Secondary Glazing is the Perfect Solution
        </h3>
        <p className="text-muted-foreground mb-6">Secondary glazing solves every casement window problem elegantly:</p>
        <div className="grid md:grid-cols-2 gap-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{solution}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCasementNeedsGlazing;

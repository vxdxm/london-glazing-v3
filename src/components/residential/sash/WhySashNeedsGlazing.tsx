import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ThermometerSnowflake, Volume2, Building2, PoundSterling, Check } from "lucide-react";

const challenges = [
  {
    icon: ThermometerSnowflake,
    title: "Single-glazed construction",
    description: "Creates massive heat loss through the glass itself. Most period sash windows were designed when energy efficiency wasn't a consideration, resulting in significant thermal bridging and heat escape."
  },
  {
    icon: AlertTriangle,
    title: "Draughty by design",
    description: "The sliding mechanism inherently creates gaps, rattles, and air leakage around the meeting rails and sash frames. While this was intentional for ventilation in the Victorian era, it's problematic for modern comfort and energy efficiency."
  },
  {
    icon: Volume2,
    title: "Poor acoustic performance",
    description: "Single pane glass combined with the gaps and rattles means traffic noise, street sounds, railways, and flight paths penetrate easily into your home."
  },
  {
    icon: Building2,
    title: "Heritage protection constraints",
    description: "Many sash windows are in listed buildings or conservation areas where replacement is either refused or requires lengthy planning battles that often end in disappointment."
  },
  {
    icon: PoundSterling,
    title: "Expensive replacement costs",
    description: "Proper like-for-like sash window replacement costs £1,500-£3,000+ per window, and may destroy the heritage character that makes your property valuable."
  }
];

const impacts = [
  "Cold rooms in winter as heat escapes through inefficient single glazing and draughts",
  "High energy bills with heating costs disappearing through poorly performing windows",
  "Noise pollution affecting sleep quality, work from home productivity, and family comfort",
  "Uncomfortable living spaces with cold draughts and uneven temperatures",
  "Condensation issues leading to potential damp and mould problems",
  "Security concerns from vulnerable single glazing that's easily compromised",
  "Planning frustration when considering improvements to listed or conservation area properties"
];

const solutions = [
  {
    title: "Preserves your original windows completely",
    description: "No removal, no damage, heritage character intact from both inside and outside"
  },
  {
    title: "Delivers massive performance improvements",
    description: "50-65% reduction in heat loss and 70-80% noise reduction through proven thermal and acoustic barriers"
  },
  {
    title: "Avoids planning permission complications",
    description: "Internal modifications typically don't require permission, even in listed buildings and conservation areas"
  },
  {
    title: "Costs a fraction of replacement",
    description: "£400-£900 per window versus £1,500-£3,000 for sash replacement"
  },
  {
    title: "Quick, non-disruptive installation",
    description: "2-3 hours per window with minimal mess and you can stay in your home throughout"
  }
];

const WhySashNeedsGlazing = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Why Sash Windows Need Secondary Glazing</h2>
      <p className="text-muted-foreground mb-8">
        Original sash windows face unique challenges that make them particularly suited to secondary glazing solutions:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <challenge.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{challenge.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-semibold mb-6">Impact on Your Daily Life</h3>
        <p className="text-muted-foreground mb-6">These challenges create real problems for period property owners:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {impacts.map((impact, index) => (
            <li key={index} className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{impact}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary/5 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-6">Why Secondary Glazing is the Perfect Solution</h3>
        <p className="text-muted-foreground mb-6">
          Secondary glazing addresses all these issues while preserving what you love about your period property:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-foreground">{solution.title}</strong>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySashNeedsGlazing;

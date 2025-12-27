import { Check, Volume2, Thermometer, Plane, Train, Car } from "lucide-react";
import { Link } from "react-router-dom";

const CasementGlassSpecs = () => {
  const glassOptions = [
    {
      thickness: "4mm",
      description: "Quiet suburban streets, mainly thermal benefit for single-glazed metal casements",
      icon: Thermometer,
      color: "text-green-600",
      bgColor: "bg-green-500/5",
      borderColor: "border-green-500/20",
    },
    {
      thickness: "6.4mm-6.8mm",
      description: "Moderate urban noise, excellent all-rounder for most casement installations, balances cost and performance perfectly",
      icon: Volume2,
      color: "text-blue-600",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      recommended: true,
    },
    {
      thickness: "8.8mm-10.8mm",
      description: "Heavy traffic areas, railway lines, busy London environments, ideal for front-facing casements",
      icon: Car,
      color: "text-amber-600",
      bgColor: "bg-amber-500/5",
      borderColor: "border-amber-500/20",
    },
    {
      thickness: "10.8mm-12.8mm",
      description: "Extreme noise situations - airports, major railways, motorways, maximum acoustic performance",
      icon: Plane,
      color: "text-purple-600",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/20",
    },
  ];

  const recommendations = [
    { type: "Single-glazed metal casements", spec: "Minimum 6.8mm for significant improvement" },
    { type: "Modern double-glazed casements", spec: "6.4mm often sufficient (adding effective third barrier)" },
    { type: "Flight path properties", spec: "10.8mm+ for aircraft noise" },
    { type: "Railway properties", spec: "8.8mm+ for train noise" },
    { type: "Main road properties", spec: "6.8mm+ for traffic noise" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Glass Specifications for Every Situation</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Understanding air gap sizing is critical for casement installations. Choose the right glass thickness for your specific <Link to="/noise-reduction-secondary-glazing" className="text-primary hover:underline">acoustic insulation</Link> and <Link to="/thermal-insulation-secondary-glazing" className="text-primary hover:underline">thermal performance</Link> needs. Read our <Link to="/blog/secondary-glazing-cost-london" className="text-primary hover:underline">complete guide to secondary glazing costs</Link> for detailed pricing.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {glassOptions.map((option, index) => (
          <div 
            key={index} 
            className={`${option.bgColor} border ${option.borderColor} rounded-xl p-5 relative ${option.recommended ? 'ring-2 ring-primary' : ''}`}
          >
            {option.recommended && (
              <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                Recommended
              </span>
            )}
            <div className="flex items-start gap-3">
              <option.icon className={`h-6 w-6 ${option.color} mt-1 flex-shrink-0`} />
              <div>
                <h3 className="font-bold text-lg mb-2">{option.thickness}</h3>
                <p className="text-foreground/80">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Recommendation Guide</h3>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 bg-background/60 rounded-lg p-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">{rec.type}:</span>
                <span className="text-muted-foreground ml-2">{rec.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasementGlassSpecs;

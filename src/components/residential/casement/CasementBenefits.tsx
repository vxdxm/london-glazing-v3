import { Thermometer, Volume2, Shield, Lock, Check } from "lucide-react";

const CasementBenefits = () => {
  const energyBenefits = [
    "45-60% reduction in heat loss through your casement windows (independently verified)",
    "Annual savings of £250-£500 per casement window on energy bills",
    "ROI payback period of just 4-7 years then pure savings for decades",
    "Particularly effective on single-glazed metal casements where improvement is dramatic",
    "Even enhances modern double-glazed casements by adding a third thermal barrier",
    "Warmer rooms immediately - eliminates cold zones near windows",
    "Consistent comfortable temperatures throughout the day",
    "Reduced condensation from warmer internal glass surfaces",
    "Lower carbon footprint through significantly reduced heating energy demand",
  ];

  const noiseBenefits = [
    "70-80% noise reduction achieved for traffic, railways, flight paths",
    "Particularly effective for casements because it seals the gaps around hinged mechanisms",
    "Laminated acoustic glass options (6.8mm to 12.8mm) for extreme noise situations",
    "Transforms urban London living near busy roads, railway lines, Heathrow flight paths",
    "Better sleep quality in quieter bedrooms",
    "Comfortable work from home in productive home offices without background noise",
    "Peaceful family life for conversation, relaxation, children's activities",
  ];

  const heritageBenefits = [
    "Ideal for 1920s-1950s metal casements in Art Deco and inter-war properties",
    "Preserves complete period character - original casements remain fully visible",
    "Perfect for deteriorated metal casements - protects from further weather exposure",
    "Suitable for conservation areas - internal modification requires no exterior change",
    "Compatible with modern uPVC casements for enhanced performance",
    "Maintains property value by keeping character features intact",
    "No planning permission battles as it's an internal addition",
    "Completely reversible if ever needed (non-permanent installation)",
  ];

  const securityBenefits = [
    "Multiple barrier protection with laminated glass options that hold together when broken, delaying potential intruders",
    "Additional locking mechanisms on secondary units providing extra security layers",
    "Ground floor protection particularly valuable for vulnerable casement windows in bedrooms and living areas",
    "Visible deterrent effect while maintaining the authentic appearance of your period property",
  ];

  const accessBenefits = [
    "You can still open and operate your primary casement windows completely normally",
    "Independent operation - secondary glazing doesn't interfere with primary window function",
    "Access window handles, latches, locks on your original casements",
    "Clean primary casements fully - no compromise on maintenance",
    "Maintain, paint, repair original windows as needed",
    "Ventilation flexibility - open primary or secondary windows independently",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Comprehensive Benefits That Transform Your Home</h2>

      {/* Energy Efficiency */}
      <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-green-600" />
          Energy Efficiency & Dramatic Cost Savings
        </h3>
        <p className="text-muted-foreground mb-4">
          Secondary glazing creates an insulating air gap that transforms casement window thermal performance:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {energyBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Noise Reduction */}
      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-blue-600" />
          Noise Reduction & Acoustic Transformation
        </h3>
        <p className="text-muted-foreground mb-4">
          The hinged gaps in casement windows are notorious for letting noise through:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {noiseBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img 
          src="https://cdn.marblism.com/WPdW4YMFKe1.webp" 
          alt="Casement window noise reduction benefits" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Heritage Preservation */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-amber-600" />
          Heritage Preservation & Period Property Perfect
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {heritageBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-purple-600" />
          Enhanced Security & Safety
        </h3>
        <p className="text-muted-foreground mb-4">Additional security benefits include:</p>
        <div className="space-y-3">
          {securityBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full Access */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Full Access to Primary Windows Maintained</h3>
        <p className="text-muted-foreground mb-4">
          This critical advantage sets quality secondary glazing apart:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {accessBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasementBenefits;

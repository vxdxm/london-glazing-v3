import { PoundSterling, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CasementInvestment = () => {
  const perWindowCosts = [
    { size: "Small casements", cost: "£350-£500", note: "(depending on glass specification)" },
    { size: "Medium casements", cost: "£500-£650", note: "(standard residential size)" },
    { size: "Large casements/French doors", cost: "£650-£800+", note: "(oversized or complex units)" },
    { size: "Hinged units", cost: "Slightly higher cost than lift-out", note: "(engineered moving mechanism)" },
  ];

  const wholeHouseExamples = [
    { type: "1930s Semi-detached (8 metal casements)", cost: "£2,800-£6,400 total investment" },
    { type: "Modern family home (10 uPVC casements)", cost: "£3,500-£8,000 total investment" },
    { type: "Art Deco property (12 metal casements)", cost: "£4,200-£9,600 total investment" },
  ];

  const comparison = [
    { item: "Casement window replacement", cost: "£800-£1,500 per window (like-for-like quality)" },
    { item: "Secondary glazing", cost: "£350-£800 per window" },
  ];

  const additionalBenefits = [
    "Preserves original casements",
    "No exterior alteration",
    "Faster installation",
    "Completely reversible",
  ];

  const roi = [
    { label: "Annual energy savings", value: "£250-£500 per casement window" },
    { label: "Payback period", value: "4-7 years typically" },
    { label: "Expected lifespan", value: "20+ years with minimal maintenance" },
    { label: "Total lifetime savings", value: "£5,000-£10,000 per window over lifespan" },
    { label: "Additional value", value: "Noise reduction, comfort improvement, heritage preservation" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Investment & Cost Breakdown</h2>

      {/* Per Window Costs */}
      <div className="bg-muted/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <PoundSterling className="h-5 w-5 text-primary" />
          Typical Costs Per Casement Window
        </h3>
        <div className="space-y-3">
          {perWindowCosts.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-background/60 rounded-lg p-3">
              <span className="font-medium">{item.size}</span>
              <div className="text-right">
                <span className="font-bold text-primary">{item.cost}</span>
                <span className="text-sm text-muted-foreground ml-2">{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Whole House Examples */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Whole House Investment Examples</h3>
        <div className="space-y-3">
          {wholeHouseExamples.map((example, index) => (
            <div key={index} className="flex items-center justify-between bg-background/60 rounded-lg p-3">
              <span className="text-foreground/80">{example.type}</span>
              <span className="font-bold text-primary">{example.cost}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img 
          src="https://cdn.marblism.com/H8ljiyD5gLZ.webp" 
          alt="Casement window investment value" 
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Comparison */}
      <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Compare to Casement Replacement Costs</h3>
        <div className="space-y-3 mb-4">
          {comparison.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-background/60 rounded-lg p-3">
              <span>{item.item}</span>
              <span className="font-bold">{item.cost}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-600 text-white rounded-lg p-4 text-center mb-4">
          <span className="text-xl font-bold">Your savings: 50-65% cheaper than replacement</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="font-semibold">Plus additional benefits:</span>
          {additionalBenefits.map((benefit, index) => (
            <span key={index} className="bg-background/60 px-3 py-1 rounded-full text-sm">
              {benefit}
            </span>
          ))}
        </div>
      </div>

      {/* ROI */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-amber-600" />
          Return on Investment
        </h3>
        <div className="space-y-3 mb-6">
          {roi.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">{item.label}:</span>
                <span className="text-muted-foreground ml-2">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="w-full">
          <Link to="/quote-request">
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CasementInvestment;

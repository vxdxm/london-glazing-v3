import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const SashHero = () => {
  const navigate = useNavigate();
  
  const benefits = [
    "Energy bill reduction 50-65% (£300-£600 annual savings per window)",
    "70-80% noise reduction (transformative acoustic comfort)",
    "Preserve original sash windows perfectly (heritage intact)",
    "Ideal for listed buildings and conservation areas (no planning battles)",
    "Fraction of replacement cost (£400-£900 vs £1,500-£3,000 per window)"
  ];

  return (
    <section className="mb-12">
      <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12">
        <p className="text-lg md:text-xl text-foreground/90 mb-6 max-w-4xl">
          <strong>Transform your period property with secondary glazing that preserves your beautiful original sash windows while delivering exceptional energy and acoustic performance.</strong>
        </p>
        
        <p className="text-muted-foreground mb-8 max-w-4xl">
          Trusted by London period property owners, our sash window secondary glazing specialists help you cut energy bills by 50-65% (saving £300-£600 annually per window), reduce noise by 70-80%, and preserve your heritage windows perfectly. Ideal for listed buildings and conservation areas with no planning permission required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{benefit}</span>
            </div>
          ))}
        </div>

        <p className="text-sm italic text-muted-foreground mb-8">
          Hundreds of Victorian, Georgian, and Edwardian homes transformed across London
        </p>

        <Button size="lg" onClick={() => navigate("/quote-request")} className="bg-primary hover:bg-primary/90">
          Get Your Free Sash Window Assessment
        </Button>
      </div>
    </section>
  );
};

export default SashHero;

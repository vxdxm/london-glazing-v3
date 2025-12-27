import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CasementHero = () => {
  const benefits = [
    { text: "Energy bill reduction 45-60%", detail: "(£250-£500 annual savings per window)" },
    { text: "70-80% noise reduction", detail: "(transformative acoustic comfort)" },
    { text: "Preserve original casement windows perfectly", detail: "(heritage intact)" },
    { text: "Ideal for conservation areas", detail: "(no planning battles)" },
    { text: "Fraction of replacement cost", detail: "(£350-£800 vs £800-£1,500 per window)" },
  ];

  return (
    <section className="mb-16">
      <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 rounded-2xl p-8 md:p-12">
        <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
          Transform your draughty, noisy casement windows into high-performance energy savers with secondary glazing. Ideal for preserving original casement windows in <Link to="/victorian-windows-secondary-glazing" className="text-primary hover:underline">Victorian</Link>, <Link to="/georgian-windows-secondary-glazing" className="text-primary hover:underline">Georgian</Link>, and <Link to="/edwardian-property-secondary-glazing" className="text-primary hover:underline">Edwardian properties</Link>. Whether you own a charming 1930s Art Deco property with original steel casements or a modern home with underperforming uPVC windows, secondary glazing delivers <strong>45-60% energy bill reductions</strong>, <strong>70-80% noise reduction</strong>, and preserves your original windows perfectly.
        </p>

        <p className="text-lg text-muted-foreground mb-8">
          <strong>Trusted by London period property owners</strong> | Specialists in heritage and modern casement windows | Works with metal, timber, and uPVC casements | Full access to primary windows maintained. Perfect for <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed buildings</Link> and <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation areas</Link>.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 bg-background/60 rounded-lg p-4">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-foreground">{benefit.text}</span>
                <span className="text-muted-foreground text-sm ml-1">{benefit.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic mb-8">
          Hundreds of Victorian, Georgian, Edwardian, and Art Deco homes transformed across London
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/quote-request">
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link to="/contact">Speak to a Specialist</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasementHero;

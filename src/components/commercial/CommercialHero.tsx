import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingDown, Users, Building2 } from "lucide-react";

const CommercialHero = () => {
  const highlights = [
    { icon: TrendingDown, text: "30-50% Energy Savings" },
    { icon: Users, text: "100+ London Businesses" },
    { icon: Building2, text: "3-5 Year Payback" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your London Commercial Building with Proven Energy Efficiency Solutions
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            <strong className="text-foreground">Reduce energy costs by 30-50%, improve occupant comfort, and preserve heritage properties</strong> with secondary glazing solutions trusted by 100+ London businesses, schools, hospitals, hotels, and retailers. Our commercial-grade installations deliver quick ROI (3-5 year payback typical) while maintaining business continuity throughout the process.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border shadow-sm">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proven Results */}
        <div className="bg-card border rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-sm text-muted-foreground">
                Victorian office building in Clerkenwell achieved 40% energy cost reduction and £8,000 annual savings.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <p className="text-sm text-muted-foreground">
                Grade II listed hotel in Bloomsbury improved guest satisfaction scores by 35% while reducing heating costs by 45%.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <p className="text-sm text-muted-foreground">
                NHS hospital ward in East London achieved 75% noise reduction supporting better patient recovery outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/quote-request">
              Get Free Commercial Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Speak to Commercial Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommercialHero;
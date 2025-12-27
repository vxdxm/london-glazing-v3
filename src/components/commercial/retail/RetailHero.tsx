import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Store, ThermometerSun, PoundSterling, ShieldCheck } from "lucide-react";

export const RetailHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Store className="w-4 h-4" />
              Retail & Shop Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Retail Spaces & Shops Secondary Glazing
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transform your London retail space into a warm, quiet, profitable environment that keeps customers 
              browsing longer and reduces energy costs by up to 50%. Secondary glazing delivers immediate comfort 
              improvements while preserving heritage shop fronts and enhancing security.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <ThermometerSun className="w-5 h-5 text-primary" />
                <span className="text-sm">50% Energy Savings</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Store className="w-5 h-5 text-primary" />
                <span className="text-sm">40% Longer Browsing</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm">Enhanced Security</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <PoundSterling className="w-5 h-5 text-primary" />
                <span className="text-sm">3-5 Year Payback</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/quote-request")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Free Retail Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate("/commercial")}
              >
                View All Commercial Solutions
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <Store className="w-32 h-32 text-primary/40" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Longer Browsing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

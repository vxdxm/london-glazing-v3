import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, ThermometerSun, Volume2, Clock } from "lucide-react";

export const HealthcareHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              NHS & CQC Compliant Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Healthcare Secondary Glazing Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transform your London healthcare facility with premium secondary glazing solutions that enhance patient recovery, 
              reduce energy costs, and ensure regulatory compliance. Our specialized healthcare installations deliver up to 
              80% noise reduction, 50% energy savings, and improved patient outcomes – all with minimal operational disruption.
            </p>
            
            <p className="text-base font-semibold text-foreground">
              Trusted by NHS trusts, private hospitals, care homes, and GP surgeries across London and the Home Counties.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Volume2 className="w-5 h-5 text-primary" />
                <span className="text-sm">80% Noise Reduction</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <ThermometerSun className="w-5 h-5 text-primary" />
                <span className="text-sm">50% Energy Savings</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">CQC Compliant</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm">Minimal Disruption</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/quote-request")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Free Healthcare Assessment
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
            <img 
              src="/images/commercial/healthcare-hospital-ward.webp" 
              alt="Modern hospital ward with secondary glazing for patient comfort" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Healthcare Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

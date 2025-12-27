import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Volume2, ThermometerSun, PoundSterling } from "lucide-react";

export const EducationHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <GraduationCap className="w-4 h-4" />
              BB93 Compliant Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Educational Sector Secondary Glazing Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Transform your educational facility with secondary glazing solutions that improve student learning outcomes, 
              meet BB93 acoustic standards, reduce energy costs by up to 50%, and preserve heritage buildings. Our comprehensive 
              systems create optimal learning environments across London schools, colleges, and universities.
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
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm">BB93 Compliant</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <PoundSterling className="w-5 h-5 text-primary" />
                <span className="text-sm">CIF Funding Eligible</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/quote-request")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Free School Assessment
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
              <GraduationCap className="w-32 h-32 text-primary/40" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="text-3xl font-bold text-primary">25%</div>
              <div className="text-sm text-muted-foreground">Better Attainment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

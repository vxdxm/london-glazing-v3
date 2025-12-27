import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, Droplets, VolumeX, Wind, Shield, PoundSterling, FileCheck, Lock, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const CrittallComprehensiveBenefits = () => {
  const benefits = [
    {
      icon: Thermometer,
      title: "Transform Thermal Efficiency",
      description: "The 50-100mm air gap between your Crittall and secondary glazing breaks the thermal bridge completely. While your metal Crittall frames still conduct heat, the insulating air gap prevents that cold from transferring into your room.",
      stats: "50-65% reduction in heat loss • £500-£900 annual savings typical",
      link: "/thermal-insulation-secondary-glazing",
      linkText: "Learn about thermal insulation"
    },
    {
      icon: Droplets,
      title: "Prevent Condensation on Crittall Frames",
      description: "The interior surface becomes the warm secondary glazing rather than cold Crittall metal. Condensation moves to the cold side between Crittall and secondary glazing, away from your living space.",
      stats: "Your visible interior surface stays completely dry—no more daily wipe-down",
      link: null,
      linkText: null
    },
    {
      icon: VolumeX,
      title: "Dramatically Improve Acoustic Performance",
      description: "Achieves 70-80% noise reduction through a dual barrier effect: your Crittall single glazing plus secondary glazing plus the large air gap. Laminated acoustic glass options handle extreme noise situations.",
      stats: "70-80% noise reduction • Transforms urban Crittall properties",
      link: "/noise-reduction-secondary-glazing",
      linkText: "Explore acoustic solutions"
    },
    {
      icon: Wind,
      title: "Complete Draught Elimination",
      description: "Secondary glazing seals the entire opening with high-quality brush seals, creating zero air leakage. Aged Crittall draught points get sealed behind the secondary glazing—failures in original sealing no longer matter.",
      stats: "Wind no longer penetrates • Comfortable rooms year-round",
      link: null,
      linkText: null
    },
    {
      icon: Shield,
      title: "Preserves Authentic Crittall Heritage Value",
      description: "Your original Crittall remains completely intact with zero alteration to heritage fabric. Authentic 1920s-1950s windows stay preserved, maintaining property value and architectural heritage.",
      stats: "Grid aesthetic unchanged • Property desirability actually increases",
      link: null,
      linkText: null
    },
    {
      icon: PoundSterling,
      title: "Avoids Catastrophic Replacement Costs",
      description: "Secondary glazing costs £3,500-£7,000 for typical properties versus £10,000-£18,000 for new Crittall replacement. This saves £5,000-£11,000 (50-70% cheaper) while achieving equivalent performance.",
      stats: "Save £5,000-£11,000 • Faster 4-7 year payback",
      link: "/blog/secondary-glazing-cost-london",
      linkText: "Read our cost guide"
    },
    {
      icon: FileCheck,
      title: "Listed Building & Planning Advantages",
      description: "The reversible solution gains approval for listed buildings because there's no permanent alteration. With no external appearance change and internal-only addition, it's usually permitted development.",
      stats: "Conservation officers support it • Crittall replacement often refused",
      link: "/blog/planning-permission-secondary-glazing-conservation-areas",
      linkText: "Planning guide"
    },
    {
      icon: Lock,
      title: "Add Modern Security to Heritage Crittall",
      description: "Secondary glazing creates an additional barrier that intruders must breach before reaching Crittall windows. Laminated glass options hold when broken, delaying intrusion.",
      stats: "Ground floor Art Deco properties get meaningful security enhancement",
      link: "/benefits",
      linkText: "Security benefits"
    },
    {
      icon: Settings,
      title: "Maintains Full Crittall Window Operation",
      description: "Your Crittall windows can still open completely—secondary glazing opens independently through hinged, lift-out, or sliding options. Both window systems function independently.",
      stats: "Full access for ventilation and cleaning • Year-round flexibility",
      link: null,
      linkText: null
    }
  ];

  return (
    <section className="mb-16">
      <SectionHeading 
        title="Comprehensive Benefits: Why Secondary Glazing Transforms Crittall Performance"
        subtitle="Complete solutions for every Crittall challenge"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <benefit.icon className="w-10 h-10 text-primary mb-3" />
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
              <p className="text-xs font-medium text-primary mb-2">{benefit.stats}</p>
              {benefit.link && (
                <Link to={benefit.link} className="text-xs text-primary hover:underline">
                  {benefit.linkText} →
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

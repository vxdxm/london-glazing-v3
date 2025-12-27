import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PoundSterling, Users, Building2, Clock } from "lucide-react";

const CommercialBenefits = () => {
  const benefits = [
    {
      icon: PoundSterling,
      title: "Energy Cost Savings That Transform Your Bottom Line",
      description: "Our commercial installations consistently deliver 30-50% reductions in heating and cooling costs. A small office saves £3,000-£5,000 annually, medium buildings save £8,000-£15,000, while large commercial properties achieve £20,000-£50,000+ in annual savings. With typical ROI payback periods of 3-5 years and 20+ year lifespan, every pound saved on energy directly improves profitability."
    },
    {
      icon: Users,
      title: "Enhanced Occupant Satisfaction and Retention",
      description: "Comfortable working temperatures year-round eliminate cold draughty windows and create productive environments. Our 70-80% noise reduction transforms spaces affected by traffic, construction, and urban activity. Higher tenant satisfaction leads to improved retention rates, reducing void periods and maintaining consistent rental income."
    },
    {
      icon: Building2,
      title: "Heritage Building Compliance Made Simple",
      description: "Secondary glazing is ideal for listed commercial buildings (Grade I, II*, II) and conservation area properties. As an internal modification preserving original window character, it typically doesn't require planning permission. This English Heritage-approved approach maintains building heritage value while delivering modern performance standards."
    },
    {
      icon: Clock,
      title: "Minimal Business Disruption Guarantee",
      description: "Installation works around your operations with out-of-hours and weekend options available. Our phased room-by-room approach means occupants remain in building throughout, with typical installations taking 1-2 hours per window. Professional project management ensures business continuity is maintained at all times."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Comprehensive Commercial Benefits
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialBenefits;
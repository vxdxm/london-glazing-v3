import { ShoppingBag, PoundSterling, Landmark, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CriticalBenefits = () => {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Customer Experience & Sales Impact",
      description: "Comfortable shop temperatures directly correlate with increased sales. When customers feel warm and comfortable, they browse 30-40% longer.",
      details: "Showcase windows become properly functional display areas. Products remain in better condition without temperature fluctuations, while reduced UV transmission prevents fading and damage to valuable stock."
    },
    {
      icon: PoundSterling,
      title: "Energy Cost Savings That Improve Margins",
      description: "Retail heating costs typically represent 15-25% of operating expenses, with showcase windows responsible for up to 60% of heat loss.",
      details: "Secondary glazing delivers 30-50% reduction in heating and cooling costs, translating to annual savings of £2,000-£15,000+ depending on shop size."
    },
    {
      icon: Landmark,
      title: "Heritage Shop Front Preservation",
      description: "Many London high streets feature beautiful Georgian, Victorian, and Edwardian shop fronts protected by conservation area restrictions.",
      details: "Secondary glazing preserves these heritage features while delivering modern performance, requiring no planning permission and maintaining original character."
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security for Ground Floor Retail",
      description: "Street-level retail premises face constant security concerns from smash-and-grab theft.",
      details: "Secondary glazing provides an additional barrier with toughened and laminated glass options, often reducing insurance premiums while providing peace of mind for valuable stock."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Critical Benefits for Retail Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive improvements that boost sales and protect your investment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{benefit.description}</p>
                <p className="text-sm text-muted-foreground/80 italic">{benefit.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

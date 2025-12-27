import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Thermometer, Building, Leaf } from "lucide-react";

const WhyCommercialNeeds = () => {
  const challenges = [
    {
      icon: TrendingUp,
      title: "Rising Operating Costs",
      description: "Commercial energy costs have increased 40% in recent years, eroding profit margins and straining budgets. Poor thermal performance in period buildings leads to excessive heating and cooling expenses, particularly problematic for the Georgian, Victorian, and Edwardian commercial properties common across London's business districts."
    },
    {
      icon: Thermometer,
      title: "Occupant Comfort Issues",
      description: "Cold, draughty windows create uncomfortable working environments leading to productivity loss and tenant complaints. Street noise pollution in busy urban locations affects concentration, guest experiences, patient recovery, and student learning outcomes."
    },
    {
      icon: Building,
      title: "Heritage Building Restrictions",
      description: "Many London commercial buildings are listed or located in conservation areas where window replacement requires complex planning permission battles. Traditional double glazing often isn't permitted, leaving property owners with limited efficiency improvement options."
    },
    {
      icon: Leaf,
      title: "Sustainability Pressures",
      description: "Net zero commitments, ESG reporting requirements, and carbon reduction targets demand measurable improvements in building performance. Poor EPC ratings affect property values, marketability, and tenant attraction."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Why London Commercial Buildings Need Secondary Glazing
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          London's commercial property owners face mounting challenges that secondary glazing directly addresses:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <img 
            src="https://cdn.marblism.com/VqdG1yBrqLg.webp" 
            alt="London commercial building with secondary glazing installation" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyCommercialNeeds;
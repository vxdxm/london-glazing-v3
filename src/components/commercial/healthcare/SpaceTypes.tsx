import { Bed, ClipboardList, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SpaceTypes = () => {
  const spaces = [
    {
      icon: Bed,
      title: "Patient Wards & Bedrooms",
      features: [
        "Maximum noise reduction supports healing sleep patterns",
        "Thermal comfort protects vulnerable patients",
        "Easy-clean hygienic surfaces maintain infection control",
        "Preserves patient dignity and privacy"
      ]
    },
    {
      icon: ClipboardList,
      title: "Consultation & Examination Rooms",
      features: [
        "Acoustic privacy for confidential medical discussions",
        "Comfortable temperatures for patient and staff",
        "Professional appearance supports therapeutic relationships",
        "GDPR compliance for verbal information"
      ]
    },
    {
      icon: Brain,
      title: "Mental Health Units",
      features: [
        "Safety-rated glazing including anti-ligature designs",
        "Noise control creates therapeutic environments",
        "Internal and external acoustic separation",
        "Supports treatment effectiveness"
      ]
    },
    {
      icon: Users,
      title: "Care Home Resident Rooms",
      features: [
        "Peaceful environments support elderly wellbeing",
        "Thermal comfort for temperature-sensitive residents",
        "Heritage building compatibility",
        "Preserves character of period care homes"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions by Healthcare Space Type
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored approaches for different clinical and care environments
          </p>
        </div>

        <div className="mb-12">
          <img 
            src="/images/commercial/healthcare-care-home.webp" 
            alt="Care home resident room with secondary glazing providing comfort and natural light" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {spaces.map((space, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <space.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{space.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {space.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

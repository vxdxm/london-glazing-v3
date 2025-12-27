import { Volume2, ThermometerSun, PoundSterling, ShieldCheck, Sun, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const KeyBenefitsGrid = () => {
  const benefits = [
    {
      icon: Volume2,
      title: "Superior Acoustic Performance",
      points: [
        "70-80% noise reduction for quiet ward environments",
        "Private consultation rooms meet confidentiality requirements",
        "Reduced corridor noise transmission",
        "Up to 52dB acoustic reduction"
      ]
    },
    {
      icon: ThermometerSun,
      title: "Patient Comfort & Wellbeing",
      points: [
        "Consistent comfortable temperatures",
        "Eliminated cold draughts around beds",
        "Reduced condensation for hygiene",
        "Better natural light for mental health"
      ]
    },
    {
      icon: PoundSterling,
      title: "Substantial Energy Savings",
      points: [
        "30-50% reduction in heating/cooling costs",
        "Thousands of pounds annual savings",
        "Supports sustainability targets",
        "Carbon reduction compliance"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Infection Control & Hygiene",
      points: [
        "Easy-clean smooth surfaces",
        "Minimal bacterial harboring points",
        "Medical-grade finishes available",
        "Eliminated condensation prevents mold"
      ]
    },
    {
      icon: Sun,
      title: "Medical Equipment Protection",
      points: [
        "UV protection for sensitive equipment",
        "Temperature stability in storage areas",
        "Extended equipment lifespan",
        "Pharmaceutical integrity maintained"
      ]
    },
    {
      icon: Clock,
      title: "Minimal Operational Disruption",
      points: [
        "Planned around clinical schedules",
        "Room-by-room phasing available",
        "Out-of-hours installation options",
        "Maintain patient occupancy"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Benefits for Healthcare Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive improvements across acoustic, thermal, and operational performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {point}
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

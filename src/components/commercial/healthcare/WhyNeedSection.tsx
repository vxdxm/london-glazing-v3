import { AlertTriangle, Volume2, Thermometer, PoundSterling, HeartPulse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyNeedSection = () => {
  const problems = [
    {
      icon: Volume2,
      title: "External Noise Disruption",
      description: "Noise disrupts patient sleep in busy urban locations, affecting recovery rates and increasing hospital stays."
    },
    {
      icon: AlertTriangle,
      title: "Poor Acoustic Privacy",
      description: "Confidential medical discussions in consultation rooms are compromised, affecting GDPR compliance."
    },
    {
      icon: Thermometer,
      title: "Temperature Fluctuations",
      description: "Vulnerable patients suffer from cold draughts and inconsistent temperatures that can compromise recovery."
    },
    {
      icon: PoundSterling,
      title: "High Energy Costs",
      description: "Major operational overhead for NHS trusts and private facilities, diverting funds from patient care."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Healthcare Facilities Need Secondary Glazing
          </h2>
          <p className="text-lg text-muted-foreground">
            Healthcare buildings operate 24/7, making them particularly vulnerable to external noise pollution 
            and energy inefficiency. The impact on patient care is significant: disrupted sleep affects recovery 
            rates, noise complaints reach PALS departments, and poor environmental conditions influence patient 
            satisfaction scores and CQC inspection outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card border-destructive/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <problem.icon className="w-10 h-10 text-destructive mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <HeartPulse className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">The Consequences Extend Beyond Patient Comfort</h3>
                <p className="text-muted-foreground">
                  Poor sleep quality can extend hospital stays, increase medication errors, and compromise recovery outcomes. 
                  Staff working in noisy, uncomfortable environments experience higher stress levels, affecting retention and 
                  performance. These issues directly impact CQC ratings and patient satisfaction scores.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

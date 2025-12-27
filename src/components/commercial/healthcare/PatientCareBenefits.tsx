import { Moon, Lock, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PatientCareBenefits = () => {
  const benefits = [
    {
      icon: Moon,
      title: "Patient Sleep Quality & Recovery",
      description: "Noise is recognised as a major barrier to healing environments. Secondary glazing achieves 70-80% noise reduction, creating the peaceful atmosphere essential for recovery.",
      details: "Particularly critical for post-surgery patients, mental health wards, and ICU step-down units where sleep quality directly impacts healing outcomes."
    },
    {
      icon: Lock,
      title: "Acoustic Privacy for Confidential Care",
      description: "GP consultations, counseling sessions, and mental health treatments require complete privacy.",
      details: "Secondary glazing provides the acoustic separation necessary for confidential discussions while ensuring GDPR compliance for verbal medical information."
    },
    {
      icon: Heart,
      title: "Enhanced Healing Environments",
      description: "NHS England Estates standards emphasise evidence-based design for healthcare settings.",
      details: "Secondary glazing supports patient-centered care environments by maintaining consistent temperatures, eliminating cold draughts, and creating supportive spaces that promote recovery."
    },
    {
      icon: ShieldCheck,
      title: "Vulnerable Patient Protection",
      description: "Elderly patients in care homes, pediatric patients, those with compromised immune systems, and post-operative patients benefit significantly.",
      details: "Stable, comfortable environments that secondary glazing provides are essential for temperature-sensitive and vulnerable patient groups."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Critical Benefits for Patient Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based improvements that directly impact patient outcomes and satisfaction scores
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

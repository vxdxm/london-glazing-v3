import { CheckCircle, Building, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RegulatoryCompliance = () => {
  const standards = [
    {
      icon: CheckCircle,
      title: "CQC Standards Compliance",
      description: "The Care Quality Commission evaluates healthcare facilities on creating safe, effective environments that respond to patient needs.",
      details: "Secondary glazing directly supports these standards by improving acoustic comfort, temperature stability, and overall environmental quality."
    },
    {
      icon: Building,
      title: "NHS England Estates Requirements",
      description: "Healthcare facilities must meet specific Health Building Notes (HBN) and Health Technical Memorandums (HTM) that cover acoustic performance, thermal efficiency, and energy management.",
      details: "Secondary glazing helps achieve these standards while reducing operational costs."
    },
    {
      icon: Landmark,
      title: "Heritage Healthcare Buildings",
      description: "Many London hospitals occupy Victorian or Georgian buildings with heritage protection.",
      details: "Secondary glazing provides an approved solution for improving performance without altering historical facades, ensuring conservation area compliance while meeting modern healthcare standards."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Regulatory & Standards Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meeting and exceeding NHS, CQC, and heritage building requirements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {standards.map((standard, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                  <standard.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{standard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{standard.description}</p>
                <p className="text-sm text-primary font-medium">{standard.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

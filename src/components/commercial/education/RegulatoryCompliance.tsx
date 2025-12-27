import { CheckCircle, ClipboardCheck, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const RegulatoryCompliance = () => {
  const standards = [
    {
      icon: CheckCircle,
      title: "Building Bulletin 93 (BB93) Acoustic Standards",
      description: "The Department for Education's BB93 standards specify maximum noise levels for different educational spaces.",
      details: "Our secondary glazing systems meet and exceed these requirements, with measured acoustic testing available to demonstrate compliance during Ofsted inspections or local authority reviews."
    },
    {
      icon: ClipboardCheck,
      title: "Ofsted Environment Criteria",
      description: "Ofsted specifically assesses whether buildings are 'safe, clean, well-maintained and comfortable for learning.'",
      details: "Secondary glazing directly addresses environmental quality, contributing to positive inspection outcomes and demonstrating effective resource management."
    },
    {
      icon: Landmark,
      title: "Heritage Building Compliance",
      description: "Many London educational buildings are listed or located in conservation areas.",
      details: "Secondary glazing is completely reversible, preserves original architectural features, and typically requires no planning permission. English Heritage recognizes this approach as best practice for historic buildings."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Standards & Regulatory Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meeting and exceeding DfE, Ofsted, and heritage building requirements.{' '}
            <Link to="/blog/planning-permission-secondary-glazing-conservation-areas" className="text-primary hover:underline">Understanding planning requirements for educational buildings</Link> is essential.
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

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Learn more about{' '}
            <Link to="/listed-buildings-secondary-glazing" className="text-primary hover:underline">listed building solutions</Link> and{' '}
            <Link to="/conservation-areas-secondary-glazing" className="text-primary hover:underline">conservation area compliance</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

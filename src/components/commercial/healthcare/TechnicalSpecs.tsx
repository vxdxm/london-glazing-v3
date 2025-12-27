import { Layers, Frame, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TechnicalSpecs = () => {
  const specs = [
    {
      icon: Layers,
      title: "Glass Options",
      items: [
        "6.4mm-12.8mm acoustic laminate for superior noise reduction",
        "Toughened safety glass meeting HTM compliance",
        "Laminated safety glass for mental health units",
        "Low-E thermal coating for energy efficiency",
        "UV protection for medical equipment and furnishings"
      ]
    },
    {
      icon: Frame,
      title: "Frame Options",
      items: [
        "Slim medical-grade aluminum profiles",
        "Powder-coated hygienic finishes",
        "Available in white, grey, or bespoke RAL colors",
        "Easy-clean surfaces with thermal break technology",
        "Ligature-free profiles for mental health applications"
      ]
    },
    {
      icon: Gauge,
      title: "Performance Specifications",
      items: [
        "Up to 52dB acoustic reduction meeting healthcare standards",
        "U-values as low as 1.6 W/m²K thermal performance",
        "Fire-rated glass options for healthcare compliance",
        "Smoke control properties available",
        "HTM and HBN compliant installations"
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Specifications for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medical-grade materials and performance standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{spec.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
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

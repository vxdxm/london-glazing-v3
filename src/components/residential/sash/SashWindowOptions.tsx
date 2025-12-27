import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const windowOptions = [
  {
    title: "Vertical Sliding Sash",
    description: "The most authentic option that perfectly mirrors your original sash window operation:",
    features: [
      "Smooth vertical sliding mechanism with spring-balanced operation for effortless use",
      "Discrete brush seals for comprehensive draught proofing",
      "Color-matched frames that blend seamlessly with existing window surrounds",
      "Independent access to your primary window for cleaning, maintenance, and operation",
      "Perfect aesthetic match for period properties, especially listed buildings",
      "Full operational flexibility - open primary window for ventilation while keeping secondary closed, or vice versa"
    ]
  },
  {
    title: "Tilt-In Vertical Sliding",
    description: "Combines authentic sash aesthetics with modern cleaning convenience:",
    features: [
      "All benefits of vertical sliding operation plus practical cleaning advantages",
      "90-degree inward tilt for easy cleaning from inside, eliminating external access needs",
      "Ideal for upper floors including first floor, second floor, and loft conversions",
      "Safety mechanisms with child safety locks and secure tilt operation",
      "Perfect for townhouses and multi-storey period properties where external cleaning is difficult"
    ]
  },
  {
    title: "Lift-Out Panels",
    description: "Removable units offering maximum flexibility:",
    features: [
      "Lightweight frames that can be completely removed when needed",
      "Seasonal flexibility - remove in summer for maximum ventilation if desired",
      "Most cost-effective option while still delivering excellent performance",
      "Easy maintenance with complete removal for thorough cleaning",
      "Ideal for occasionally-used rooms such as spare bedrooms or guest accommodation"
    ]
  },
  {
    title: "Fixed Secondary Glazing",
    description: "Non-opening units for maximum thermal and acoustic performance:",
    features: [
      "Superior performance with no opening mechanisms creating potential air gaps",
      "Most cost-effective installation with simpler fitting requirements",
      "Perfect for windows you rarely open such as upper floor or certain room configurations",
      "Maximum acoustic benefit particularly valuable for street-facing windows where noise reduction is the priority"
    ]
  }
];

const SashWindowOptions = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-8">Sash Window Secondary Glazing Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {windowOptions.map((option, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{option.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SashWindowOptions;

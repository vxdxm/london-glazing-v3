
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const glassOptions = [
  {
    thickness: "4mm",
    title: "Standard Glass",
    features: [
      "Basic toughened safety glass",
      "Noise reduction up to 29dB",
      "Suitable for quiet residential areas",
      "Cost-effective solution",
      "Standard security features"
    ]
  },
  {
    thickness: "6.4mm",
    title: "Entry-Level Acoustic Glass",
    features: [
      "Entry-level laminated glass",
      "Noise reduction up to 32dB",
      "Good for suburban areas",
      "Enhanced security features",
      "Basic noise reduction properties"
    ]
  },
  {
    thickness: "6.8mm",
    title: "Enhanced Entry Glass",
    features: [
      "Enhanced entry-level acoustic glass",
      "Noise reduction up to 33dB",
      "Suitable for urban residential areas",
      "Improved security features",
      "Better noise reduction capabilities"
    ]
  },
  {
    thickness: "8.8mm",
    title: "Medium Performance Glass",
    features: [
      "Medium-performance acoustic laminated glass",
      "Noise reduction up to 35dB",
      "Ideal for properties near busy roads",
      "Enhanced security features",
      "Perfect for urban environments"
    ]
  },
  {
    thickness: "10.8mm",
    title: "High Performance Glass",
    features: [
      "High-performance acoustic laminated glass",
      "Noise reduction up to 38dB",
      "Suitable for city centers",
      "Superior sound dampening",
      "Excellent for properties near railways"
    ]
  },
  {
    thickness: "Double",
    title: "Double Glazing Glass",
    features: [
      "Two glass panes with air or gas-filled cavity",
      "Noise reduction up to 40dB",
      "Superior thermal insulation",
      "Enhanced energy efficiency",
      "Ideal for modern properties seeking comfort"
    ]
  }
];

const SashWindowGlassOptions = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Glass Options and Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {glassOptions.map((glass) => (
          <Card key={glass.thickness} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{glass.thickness} {glass.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {glass.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SashWindowGlassOptions;


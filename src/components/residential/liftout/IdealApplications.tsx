import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Shield, Plane } from "lucide-react";

const IdealApplications = () => {
  const applications = [
    {
      icon: Home,
      title: "Rental Properties",
      description: "Perfect for tenants who want winter comfort without permanent alterations. Remove panels when you move, or leave them for the next tenant — complete flexibility for everyone."
    },
    {
      icon: Building2,
      title: "Listed Building Trials",
      description: "Test secondary glazing for a full winter season before committing permanently. Conservation officers appreciate the complete reversibility, and you get to prove effectiveness before any long-term decisions."
    },
    {
      icon: Shield,
      title: "Ground Floor Security",
      description: "Some homeowners remove panels during the day for natural light and ventilation, then reinstall them at night or when away for enhanced security."
    },
    {
      icon: Plane,
      title: "Seasonal Workers",
      description: "Home in winter, travelling in summer? Why pay for year-round secondary glazing when lift-out panels adapt perfectly to your lifestyle?"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Ideal Applications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="grid grid-cols-1 gap-4">
          {applications.map((app, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <app.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{app.title}</h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <OptimizedImage
            src="https://cdn.marblism.com/oKuKXTk-Jyo.webp"
            alt="Lift-out secondary glazing ideal for rental and heritage properties"
            className="rounded-lg shadow-lg w-full h-full min-h-[400px] object-cover"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default IdealApplications;

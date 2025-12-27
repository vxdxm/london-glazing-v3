
import { Zap, Clock, Calendar } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmergencyServices = () => {
  const serviceOptions = [
    {
      icon: Zap,
      title: "Same-Day Emergency",
      surcharge: "£50 surcharge",
      description: "Available for genuine emergencies like broken glass, lock failures, or suddenly dropped sashes that render windows unusable.",
      availability: "Call before 12pm for London M25 availability",
      urgent: true
    },
    {
      icon: Clock,
      title: "Next-Day Priority",
      surcharge: "£25 surcharge",
      description: "Better availability than same-day service. Ideal when you need quick but not immediate attention.",
      availability: "Call before 2pm for next-day scheduling",
      urgent: false
    },
    {
      icon: Calendar,
      title: "Standard Service",
      surcharge: "No surcharge",
      description: "Best value option with no surcharge beyond standard call-out fee. Perfect for non-urgent repairs.",
      availability: "5-7 days booking window",
      urgent: false
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">Emergency & Priority Services</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        We understand that some repairs can't wait. Choose the service level that matches your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {serviceOptions.map((service, index) => (
          <Card 
            key={index} 
            className={`border-border/50 ${service.urgent ? 'ring-2 ring-amber-500 bg-amber-50/50 dark:bg-amber-950/20' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${service.urgent ? 'bg-amber-500/20' : 'bg-primary/10'}`}>
                  <service.icon className={`h-5 w-5 ${service.urgent ? 'text-amber-600' : 'text-primary'}`} />
                </div>
                <div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <span className={`text-sm font-medium ${service.urgent ? 'text-amber-600' : 'text-primary'}`}>
                    {service.surcharge}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
              <p className="text-xs bg-muted/50 rounded px-2 py-1 inline-block">{service.availability}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/30 border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold mb-1">Temporary Fixes Available</h3>
              <p className="text-muted-foreground text-sm">
                When immediate repair isn't possible – boarding for broken glass, security wedges for failed locks, 
                and props for dropped sashes.
              </p>
            </div>
            <Button asChild>
              <a href="tel:02070601572">Call for Emergency Service</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EmergencyServices;

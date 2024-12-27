import { Shield, Thermometer, VolumeX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Security",
    description: "Enhanced protection for your property with our security glazing solutions.",
    icon: Shield,
    path: "/specialized/security-glazing"
  },
  {
    title: "Thermal Insulation",
    description: "Improve energy efficiency and reduce heating costs.",
    icon: Thermometer,
    path: "/specialized/thermal-insulation"
  },
  {
    title: "Noise Reduction",
    description: "Create a quieter environment with our acoustic glazing options.",
    icon: VolumeX,
    path: "/specialized/noise-reduction"
  }
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(service.path)}
            >
              <CardHeader className="space-y-1">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
                {service.title === "Noise Reduction" && (
                  <Link 
                    to="/specialized/noise-reduction" 
                    className="block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors text-center"
                  >
                    Noise Reduction Calculator
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Shield, Thermometer, VolumeX, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Noise Reduction",
    description: "Reduce external noise by up to 80% with our advanced secondary glazing solutions.",
    icon: VolumeX,
    path: "/specialized/noise-reduction"
  },
  {
    title: "Thermal Insulation",
    description: "Improve your home's energy efficiency and reduce heating costs significantly.",
    icon: Thermometer,
    path: "/specialized/thermal-insulation"
  },
  {
    title: "Security Enhancement",
    description: "Add an extra layer of security to your windows without compromising on style.",
    icon: Shield,
    path: "/specialized/security-glazing"
  },
  {
    title: "Glazing Repairs",
    description: "Expert repair services for secondary glazing systems, including spiral balance replacement.",
    icon: Wrench,
    path: "/secondary-glazing-repairs"
  },
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer" 
              onClick={() => navigate(service.path)}
            >
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
                {service.title === "Noise Reduction" && (
                  <Link 
                    to="/specialized/noise-reduction" 
                    className="block mt-4 text-primary hover:underline"
                  >
                    Noise Reduction Calculator
                  </Link>
                )}
                {service.title === "Thermal Insulation" && (
                  <Link 
                    to="/specialized/thermal-insulation" 
                    className="block mt-4 text-primary hover:underline"
                  >
                    Thermal Insulation Calculator
                  </Link>
                )}
                {service.title === "Security Enhancement" && (
                  <Link 
                    to="/specialized/security-glazing" 
                    className="block mt-4 text-primary hover:underline"
                  >
                    Security Break-in Resistance Calculator
                  </Link>
                )}
                {service.title === "Glazing Repairs" && (
                  <Link 
                    to="/secondary-glazing-repairs" 
                    className="block mt-4 text-primary hover:underline"
                  >
                    Spiral Balance Repair Guide
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

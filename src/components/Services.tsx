import { Shield, Thermometer, VolumeX, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";
import { memo, useCallback } from "react";

const services = [
  {
    title: "Noise Reduction",
    description: "Reduce external noise by up to 80% with our advanced secondary glazing solutions.",
    icon: VolumeX,
    path: "/secondary-glazing-noise-reduction",
    calculatorPath: "/secondary-glazing-noise-reduction#calculator",
    calculatorLabel: "Noise Reduction Calculator"
  },
  {
    title: "Thermal Insulation",
    description: "Improve your home's energy efficiency and reduce heating costs significantly.",
    icon: Thermometer,
    path: "/specialized/thermal-insulation",
    calculatorPath: "/specialized/thermal-insulation",
    calculatorLabel: "Thermal Insulation Calculator"
  },
  {
    title: "Security Enhancement",
    description: "Add an extra layer of security to your windows without compromising on style.",
    icon: Shield,
    path: "/specialized/security-glazing",
    calculatorPath: "/specialized/security-glazing",
    calculatorLabel: "Security Break-in Resistance Calculator"
  },
  {
    title: "Glazing Repairs",
    description: "Expert repair services for secondary glazing systems, including spiral balance replacement.",
    icon: Wrench,
    path: "/secondary-glazing-repairs",
    calculatorPath: "/secondary-glazing-repairs",
    calculatorLabel: "Spiral Balance Repair Guide"
  },
];

const ServicesComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  return (
    <section className="py-12 md:py-16 bg-background below-fold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4 text-foreground">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive secondary glazing solutions for residential and commercial properties across London. 
            Whether you need acoustic insulation for a busy road, thermal efficiency improvements for an older property, 
            or enhanced security for ground-floor windows, our expert team delivers tailored solutions with professional installation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer min-h-[44px]" 
              onClick={() => handleCardClick(service.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service.path)}
            >
              <CardHeader className="pb-2 md:pb-4">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4" aria-hidden="true" />
                <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                <Link 
                  to={service.calculatorPath}
                  className="block mt-3 md:mt-4 text-sm md:text-base text-primary hover:underline py-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {service.calculatorLabel}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Services = memo(ServicesComponent);

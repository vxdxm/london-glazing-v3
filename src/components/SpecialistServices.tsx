import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  TreePine, 
  Home, 
  ArrowUpDown, 
  Landmark, 
  Castle, 
  Thermometer, 
  Volume2 
} from "lucide-react";

const services = [
  {
    title: "Listed Buildings Secondary Glazing",
    description: "Expert solutions for Grade I, II*, and II listed properties with planning permission guidance",
    path: "/listed-buildings-secondary-glazing",
    icon: Landmark,
  },
  {
    title: "Conservation Areas Secondary Glazing",
    description: "Preserve character while meeting conservation area requirements",
    path: "/conservation-areas-secondary-glazing",
    icon: TreePine,
  },
  {
    title: "Victorian Windows Secondary Glazing",
    description: "Protect original Victorian sash windows while improving insulation",
    path: "/victorian-windows-secondary-glazing",
    icon: Home,
  },
  {
    title: "Sash Window Secondary Glazing",
    description: "Maintain functionality of traditional sash windows with modern efficiency",
    path: "/sash-window-secondary-glazing",
    icon: ArrowUpDown,
  },
  {
    title: "Georgian Windows Secondary Glazing",
    description: "Period-appropriate solutions for Georgian properties",
    path: "/georgian-windows-secondary-glazing",
    icon: Castle,
  },
  {
    title: "Edwardian Property Secondary Glazing",
    description: "Sympathetic glazing for Edwardian homes",
    path: "/edwardian-property-secondary-glazing",
    icon: Building2,
  },
  {
    title: "Thermal Insulation Secondary Glazing",
    description: "Reduce heat loss by up to 75% and lower energy bills",
    path: "/thermal-insulation-secondary-glazing",
    icon: Thermometer,
  },
  {
    title: "Noise Reduction Secondary Glazing",
    description: "Block up to 80% of external noise pollution",
    path: "/noise-reduction-secondary-glazing",
    icon: Volume2,
  },
];

export const SpecialistServices = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specialist Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From heritage properties to modern noise reduction, we provide tailored secondary glazing solutions for every requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.path} to={service.path} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

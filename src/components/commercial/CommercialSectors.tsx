import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Hotel, Heart, GraduationCap, Store, ArrowRight } from "lucide-react";

const CommercialSectors = () => {
  const sectors = [
    {
      icon: Building2,
      title: "Office Buildings",
      description: "Transform workplace environments with improved thermal comfort and acoustic performance. Reduce energy costs by 30-50% while creating productive, comfortable working spaces ideal for period office buildings, listed properties, and modern commercial premises across London's business districts.",
      link: "/commercial/office-buildings",
      image: "/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
    },
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      description: "Enhance guest experience with quiet, comfortable rooms and public spaces. Reduce energy costs while improving guest satisfaction scores and online reviews. Perfect for listed hotels, boutique properties, and heritage hospitality venues throughout London's tourism areas.",
      link: "/commercial/hospitality-sector",
      image: "/lovable-uploads/8c405e6d-83e1-4a0e-8cf5-de325c39e542.jpg"
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      description: "Create optimal healing environments with thermal comfort, acoustic privacy, and significant noise reduction. Support patient recovery, meet CQC/HTM standards, and reduce NHS energy budgets. Ideal for hospitals, clinics, care homes, and medical centers requiring controlled environments.",
      link: "/commercial/healthcare-industry",
      image: "/lovable-uploads/056a60d0-4ffa-4e1c-977a-c2bbe100e809.jpg"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Improve student learning outcomes with comfortable, quiet classrooms that meet BB93 acoustic standards. Reduce school energy budgets while preserving heritage school buildings. Perfect for primary schools, secondary schools, universities, and nurseries across London boroughs.",
      link: "/commercial/educational-sector",
      image: "/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg"
    },
    {
      icon: Store,
      title: "Retail Spaces",
      description: "Increase customer dwell time and sales with warm, comfortable shop environments. Protect showcase windows from heat loss, reduce energy costs by 30-50%, and preserve heritage high street shop fronts. Ideal for boutiques, department stores, cafes, and luxury retail throughout London's shopping districts.",
      link: "/commercial/retail-spaces",
      image: "/images/commercial/retail-heritage.webp"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Commercial Sectors We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Link key={index} to={sector.link} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <sector.icon className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg">{sector.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{sector.description}</p>
                  <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <img 
            src="https://cdn.marblism.com/I0_AREdQM6z.webp" 
            alt="Commercial building exterior with modern glazing solutions" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialSectors;
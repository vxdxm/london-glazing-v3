import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceAreas = () => {
  const areas = [
    { name: "Oxford Street & Regent Street", description: "Flagship stores and department stores", link: "/areas/central-london" },
    { name: "Bond Street & Mayfair", description: "Luxury retail and designer boutiques", link: "/locations/georgian-belgravia" },
    { name: "Covent Garden", description: "Heritage market and retail venues", link: "/areas/central-london" },
    { name: "King's Road & Chelsea", description: "Boutique retail and antiques", link: "/areas/west-london" },
    { name: "Kensington High Street", description: "Premium high street retail", link: "/areas/west-london" },
    { name: "Knightsbridge", description: "Luxury department stores", link: "/areas/central-london" },
    { name: "Notting Hill", description: "Independent boutiques and antique markets", link: "/areas/west-london" },
    { name: "Shoreditch & Spitalfields", description: "Creative retail and markets", link: "/areas/east-london" }
  ];

  const relatedLocations = [
    { name: "Central London", path: "/areas/central-london" },
    { name: "West London", path: "/areas/west-london" },
    { name: "East London", path: "/areas/east-london" },
    { name: "Georgian Belgravia", path: "/locations/georgian-belgravia" },
    { name: "Greater London", path: "/areas/greater-london" },
    { name: "Home Counties", path: "/areas/home-counties" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            London Retail Locations We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From flagship department stores to independent boutiques across London
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {areas.map((area, index) => (
            <Link key={index} to={area.link}>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border hover:border-primary/50 transition-colors h-full">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-6">
          <h3 className="font-semibold mb-4 text-center">Explore Our London Coverage</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLocations.map((location, index) => (
              <Link
                key={index}
                to={location.path}
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                {location.name}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

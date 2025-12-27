import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServiceAreas = () => {
  const areas = [
    { name: "Westminster & Victoria", description: "Historic school buildings and colleges", link: "/areas/central-london" },
    { name: "Bloomsbury & Holborn", description: "University campuses and colleges", link: "/areas/central-london" },
    { name: "Hampstead & Highgate", description: "Independent schools and academies", link: "/areas/north-london" },
    { name: "Kensington & Chelsea", description: "Premium independent schools", link: "/areas/west-london" },
    { name: "Richmond & Kingston", description: "State and independent schools", link: "/areas/greater-london" },
    { name: "Greenwich & Lewisham", description: "Historic educational buildings", link: "/areas/south-london" },
    { name: "Sevenoaks & Kent", description: "Independent boarding schools", link: "/locations/sevenoaks" },
    { name: "Surrey & Home Counties", description: "Schools and colleges across the region", link: "/areas/home-counties" }
  ];

  const relatedLocations = [
    { name: "Central London", path: "/areas/central-london" },
    { name: "North London", path: "/areas/north-london" },
    { name: "South London", path: "/areas/south-london" },
    { name: "West London", path: "/areas/west-london" },
    { name: "Greater London", path: "/areas/greater-london" },
    { name: "Home Counties", path: "/areas/home-counties" },
    { name: "Sevenoaks", path: "/locations/sevenoaks" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Institutions We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From historic university buildings to modern academies across London and the Home Counties
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

import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  const areas = [
    {
      name: "Harley Street",
      description: "Private medical quarter specialists"
    },
    {
      name: "Great Ormond Street & Bloomsbury",
      description: "Major hospital clusters"
    },
    {
      name: "Royal London Hospital, Whitechapel",
      description: "East London NHS facilities"
    },
    {
      name: "Westminster & Victoria",
      description: "Central London hospital concentrations"
    },
    {
      name: "Chelsea Hospital Corridor",
      description: "South West London healthcare hubs"
    },
    {
      name: "Hampstead & Highgate",
      description: "Care homes and clinics"
    },
    {
      name: "Kensington & Chelsea",
      description: "Premium healthcare facilities"
    },
    {
      name: "Richmond upon Thames",
      description: "Care homes and medical centers"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            London Healthcare Locations We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage across all London boroughs and the Home Counties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 bg-card rounded-lg border hover:border-primary/50 transition-colors"
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground">{area.name}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          We serve GP surgeries, dental practices, and specialized healthcare facilities throughout the Home Counties.
        </p>
      </div>
    </section>
  );
};

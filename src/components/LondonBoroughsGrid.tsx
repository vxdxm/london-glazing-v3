import { MapPin } from "lucide-react";

const boroughs = [
  "Westminster",
  "Kensington & Chelsea",
  "Richmond",
  "Camden",
  "Islington",
  "Hammersmith & Fulham",
  "Wandsworth",
  "Barnet",
];

export const LondonBoroughsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Serving All London Boroughs</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {boroughs.map((borough) => (
          <div
            key={borough}
            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
          >
            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-medium text-foreground">{borough}</span>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-muted-foreground text-center italic">
        Local installers familiar with borough-specific planning restrictions and heritage requirements.
      </p>
    </section>
  );
};

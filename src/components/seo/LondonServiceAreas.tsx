import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

type AreaLink = { name: string; href: string; note?: string };

const boroughs: AreaLink[] = [
  { name: "Kensington & Chelsea", href: "/areas/kensington-chelsea", note: "Stucco terraces & listed buildings" },
  { name: "Westminster", href: "/service-areas/westminster", note: "Georgian townhouses & Mayfair" },
  { name: "Camden", href: "/service-areas/camden", note: "Victorian terraces & Primrose Hill" },
  { name: "Islington", href: "/service-areas/islington", note: "Georgian squares & Canonbury" },
  { name: "Richmond", href: "/locations/conservation-richmond", note: "Riverside conservation areas" },
  { name: "Hampstead", href: "/locations/edwardian-hampstead", note: "Edwardian villas & Heath-side homes" },
  { name: "Hackney", href: "/locations/hackney-energy-efficiency", note: "Victorian terraces & EPC upgrades" },
  { name: "Shoreditch", href: "/locations/shoreditch-urban-noise", note: "Converted warehouses & urban noise" },
];

const neighbourhoods: AreaLink[] = [
  { name: "Belgravia", href: "/locations/georgian-belgravia" },
  { name: "Chelsea", href: "/locations/chelsea-draught-proofing" },
  { name: "Notting Hill", href: "/locations/notting-hill-security" },
  { name: "Islington (Victorian)", href: "/locations/victorian-islington" },
  { name: "Clapham", href: "/locations/clapham-busy-roads" },
  { name: "King's Cross", href: "/locations/kings-cross-train-noise" },
  { name: "Canary Wharf", href: "/locations/canary-wharf-offices" },
  { name: "Heathrow Corridor", href: "/locations/heathrow-aircraft" },
  { name: "Chigwell", href: "/locations/chigwell" },
  { name: "Radlett", href: "/locations/radlett" },
  { name: "Ascot", href: "/locations/ascot" },
  { name: "Virginia Water", href: "/locations/virginia-water" },
];

const regions: AreaLink[] = [
  { name: "Central London", href: "/areas/central-london" },
  { name: "North London", href: "/areas/north-london" },
  { name: "South London", href: "/areas/south-london" },
  { name: "East London", href: "/areas/east-london" },
  { name: "West London", href: "/areas/west-london" },
  { name: "Greater London", href: "/areas/greater-london" },
  { name: "Home Counties", href: "/areas/home-counties" },
];

interface Props {
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export const LondonServiceAreas = ({
  heading = "London Service Areas",
  subheading = "Local specialists across every London borough, neighbourhood and the Home Counties.",
  compact = false,
}: Props) => {
  return (
    <section
      className={`container mx-auto px-4 ${compact ? "py-10" : "py-14 md:py-16"}`}
      aria-labelledby="london-service-areas-heading"
    >
      <div className="text-center mb-8">
        <h2
          id="london-service-areas-heading"
          className="text-2xl md:text-3xl font-bold text-foreground mb-2"
        >
          {heading}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
      </div>

      {/* Regions */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {regions.map((r) => (
          <Link
            key={r.href}
            to={r.href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border bg-card text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            {r.name}
            <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>

      {/* Borough cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {boroughs.map((b) => (
          <Link
            key={b.href}
            to={b.href}
            className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/40 transition-colors"
          >
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-medium text-foreground text-sm">{b.name}</p>
              {b.note && (
                <p className="text-xs text-muted-foreground mt-0.5">{b.note}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Neighbourhood links */}
      <div className="bg-secondary/30 rounded-lg p-5">
        <h3 className="font-semibold text-sm mb-3 text-center">
          Popular Neighbourhoods & Locations
        </h3>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {neighbourhoods.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              {n.name}
              <ArrowRight className="h-3 w-3" />
            </Link>
          ))}
          <Link
            to="/areas-we-serve"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
          >
            View all areas
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LondonServiceAreas;
import React from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { MapPin, Building2 } from "lucide-react";

interface LocationLink {
  name: string;
  path: string;
}

interface LocationRegion {
  region: string;
  locations: LocationLink[];
}

const allLocations: LocationRegion[] = [
  {
    region: "Surrey",
    locations: [
      { name: "Virginia Water", path: "/locations/virginia-water" },
      { name: "Weybridge", path: "/locations/weybridge" },
      { name: "Cobham", path: "/locations/cobham" },
      { name: "Esher", path: "/locations/esher" },
      { name: "Guildford", path: "/locations/guildford" },
    ],
  },
  {
    region: "Kent",
    locations: [
      { name: "Sevenoaks", path: "/locations/sevenoaks" },
      { name: "Tunbridge Wells", path: "/locations/tunbridge-wells" },
    ],
  },
  {
    region: "Buckinghamshire",
    locations: [
      { name: "Beaconsfield", path: "/locations/beaconsfield" },
      { name: "Marlow", path: "/locations/marlow" },
      { name: "Gerrards Cross", path: "/locations/gerrards-cross" },
    ],
  },
  {
    region: "Hertfordshire",
    locations: [
      { name: "Rickmansworth", path: "/locations/rickmansworth" },
      { name: "Chorleywood", path: "/locations/chorleywood" },
      { name: "Radlett", path: "/locations/radlett" },
    ],
  },
  {
    region: "Berkshire",
    locations: [
      { name: "Ascot", path: "/locations/ascot" },
    ],
  },
  {
    region: "Essex",
    locations: [
      { name: "Chigwell", path: "/locations/chigwell" },
    ],
  },
];

interface RelatedLocationsProps {
  currentLocation: string;
  currentRegion: string;
}

const RelatedLocations: React.FC<RelatedLocationsProps> = ({ currentLocation, currentRegion }) => {
  // Get locations in the same region (excluding current)
  const sameRegion = allLocations.find(r => r.region === currentRegion);
  const sameRegionLocations = sameRegion?.locations.filter(l => l.name !== currentLocation) || [];
  
  // Get nearby regions to show
  const nearbyRegions = allLocations.filter(r => r.region !== currentRegion).slice(0, 2);

  const commercialSectors = [
    { name: "Office Buildings", path: "/commercial/office-buildings" },
    { name: "Hospitality Sector", path: "/commercial/hospitality-sector" },
    { name: "Educational Sector", path: "/commercial/educational-sector" },
    { name: "Healthcare Industry", path: "/commercial/healthcare-industry" },
    { name: "Retail Spaces", path: "/commercial/retail-spaces" },
  ];

  return (
    <section className="mb-12">
      <SectionHeading title="We Also Serve Nearby Areas" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Same region locations */}
        {sameRegionLocations.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              More in {currentRegion}
            </h3>
            <ul className="space-y-2">
              {sameRegionLocations.map((location) => (
                <li key={location.path}>
                  <Link 
                    to={location.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Nearby regions */}
        {nearbyRegions.map((region) => (
          <div key={region.region} className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {region.region}
            </h3>
            <ul className="space-y-2">
              {region.locations.map((location) => (
                <li key={location.path}>
                  <Link 
                    to={location.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Commercial sectors */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Commercial Services
          </h3>
          <ul className="space-y-2">
            {commercialSectors.map((sector) => (
              <li key={sector.path}>
                <Link 
                  to={sector.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RelatedLocations;

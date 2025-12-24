
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface RouteMapping {
  [key: string]: string;
}

const routeLabels: RouteMapping = {
  "": "Home",
  "specialized": "Specialized Services",
  "residential": "Residential Solutions",
  "commercial": "Commercial Solutions",
  "sound-transmission-guide": "Sound Transmission Guide",
  "acoustic-glazing": "Acoustic Glazing",
  "noise-reduction": "Noise Reduction",
  "thermal-insulation": "Thermal Insulation",
  "secondary-glazing-repairs": "Secondary Glazing Repairs",
  "condensation-control": "Condensation Control",
  "security-glazing": "Security Glazing",
  "air-gap-secondary-glazing": "Air Gap Secondary Glazing",
  "secondary-glazing-building-regulations": "Building Regulations",
  "secondary-glazing-original-windows": "Original Windows Solutions",
  "acoustic-secondary-glazing-windows": "Acoustic Windows",
  "educational-sector": "Educational Sector",
  "office-buildings": "Office Buildings",
  "hospitality-sector": "Hospitality Sector",
  "healthcare-industry": "Healthcare Industry",
  "listed-buildings": "Listed Buildings",
  "sash-windows": "Sash Windows",
  "casement-windows": "Casement Windows",
  "bay-windows": "Bay Windows",
  "horizontal-sliding": "Horizontal Sliding",
  "lift-out": "Lift Out",
  "combination": "Combination",
  "traditional-options": "Traditional Options",
  "modern-solutions": "Modern Solutions",
  "gallery": "Gallery",
  "faqs": "FAQs",
  "quote-request": "Quote Request",
  "sustainability-impact-tracker-secondary-glazing": "Sustainability Impact Tracker",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms and Conditions",
  "cookie-policy": "Cookie Policy",
  "double-glazed-units": "Double Glazed Units",
  "locations": "Locations",
  // London locations
  "victorian-islington": "Victorian Islington",
  "victorian-terraces-islington": "Victorian Terraces Islington",
  "edwardian-hampstead": "Edwardian Hampstead",
  "listed-kensington": "Listed Kensington",
  "georgian-belgravia": "Georgian Belgravia",
  "conservation-richmond": "Conservation Richmond",
  "canary-wharf-offices": "Canary Wharf",
  "clapham-busy-roads": "Clapham",
  "heathrow-aircraft": "Heathrow Area",
  "kings-cross-train-noise": "King's Cross",
  "shoreditch-urban-noise": "Shoreditch",
  "notting-hill-security": "Notting Hill",
  "hackney-energy-efficiency": "Hackney",
  "chelsea-draught-proofing": "Chelsea",
  // Surrey locations
  "virginia-water": "Virginia Water",
  "weybridge": "Weybridge",
  "cobham": "Cobham",
  "esher": "Esher",
  "guildford": "Guildford",
  // Kent locations
  "sevenoaks": "Sevenoaks",
  "tunbridge-wells": "Tunbridge Wells",
  // Buckinghamshire locations
  "beaconsfield": "Beaconsfield",
  "marlow": "Marlow",
  "gerrards-cross": "Gerrards Cross",
  // Hertfordshire locations
  "rickmansworth": "Rickmansworth",
  "chorleywood": "Chorleywood",
  "radlett": "Radlett",
  // Berkshire locations
  "ascot": "Ascot",
  // Essex locations
  "chigwell": "Chigwell",
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  // Add console logs to help debug
  console.log("Current location:", location.pathname);
  
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  console.log("Path segments:", pathSegments);

  // Skip rendering if we're on the home page
  if (pathSegments.length === 0) {
    console.log("Home page detected, skipping breadcrumb");
    return null;
  }

  // Special case handling
  if (pathSegments.length === 1) {
    const segment = pathSegments[0];
    const directRoutes = ["air-gap-secondary-glazing", "secondary-glazing-building-regulations"];
    
    if (directRoutes.includes(segment)) {
      console.log("Direct route detected:", segment);
      const label = routeLabels[segment] || segment.replace(/-/g, ' ');
      
      return (
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{label}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    }
  }

  // Try/catch to prevent rendering errors from breaking the page
  try {
    return (
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathSegments.map((segment, index) => {
            const label = routeLabels[segment] || segment.replace(/-/g, ' ');
            const isLastSegment = index === pathSegments.length - 1;
            
            // Build the path up to this segment
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            
            return isLastSegment ? (
              <BreadcrumbItem key={segment}>
                <BreadcrumbPage>{label}</BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <React.Fragment key={segment}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={path}>{label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  } catch (error) {
    console.error("Error in BreadcrumbNav:", error);
    // Return null instead of breaking the entire page render
    return null;
  }
};

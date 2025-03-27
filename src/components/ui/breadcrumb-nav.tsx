
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
  // Add more routes as needed
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Skip rendering if we're on the home page
  if (pathSegments.length === 0) {
    return null;
  }

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
          
          return (
            <React.Fragment key={segment}>
              {isLastSegment ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={path}>{label}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

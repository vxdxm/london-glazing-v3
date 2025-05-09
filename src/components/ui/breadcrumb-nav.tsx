
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
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Skip rendering if we're on the home page
  if (pathSegments.length === 0) {
    return null;
  }

  // Special case for direct air gap page
  if (pathSegments.length === 1 && pathSegments[0] === "air-gap-secondary-glazing") {
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
            <BreadcrumbPage>Air Gap Secondary Glazing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  // Special case for secondary glazing building regulations direct page
  if (pathSegments.length === 1 && pathSegments[0] === "secondary-glazing-building-regulations") {
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
            <BreadcrumbPage>Building Regulations</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
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
};

import { Link } from "react-router-dom";

export interface InternalLink {
  text: string;
  href: string;
}

// Specialist Services Links
export const specialistServicesLinks: InternalLink[] = [
  { text: "listed buildings secondary glazing", href: "/listed-buildings-secondary-glazing" },
  { text: "conservation areas secondary glazing", href: "/conservation-areas-secondary-glazing" },
  { text: "Victorian windows secondary glazing", href: "/victorian-windows-secondary-glazing" },
  { text: "sash window secondary glazing", href: "/sash-window-secondary-glazing" },
  { text: "Georgian windows secondary glazing", href: "/georgian-windows-secondary-glazing" },
  { text: "Edwardian property secondary glazing", href: "/edwardian-property-secondary-glazing" },
  { text: "thermal insulation secondary glazing", href: "/thermal-insulation-secondary-glazing" },
  { text: "noise reduction secondary glazing", href: "/noise-reduction-secondary-glazing" },
];

// Residential Glazing Types Links
export const residentialGlazingLinks: InternalLink[] = [
  { text: "fixed secondary glazing", href: "/residential/fixed-secondary-glazing" },
  { text: "casement windows", href: "/residential/casement-windows" },
  { text: "sash windows", href: "/residential/sash-windows" },
  { text: "horizontal sliding", href: "/residential/horizontal-sliding" },
  { text: "lift out panels", href: "/residential/lift-out" },
  { text: "modern solutions", href: "/residential/modern-solutions" },
];

// Service Area Links
export const serviceAreaLinks: InternalLink[] = [
  { text: "Central London", href: "/areas/central-london" },
  { text: "North London", href: "/areas/north-london" },
  { text: "South London", href: "/areas/south-london" },
  { text: "East London", href: "/areas/east-london" },
  { text: "West London", href: "/areas/west-london" },
  { text: "Greater London", href: "/areas/greater-london" },
  { text: "Home Counties", href: "/areas/home-counties" },
];

// Commercial Links
export const commercialLinks: InternalLink[] = [
  { text: "commercial secondary glazing", href: "/commercial" },
  { text: "office buildings", href: "/commercial/office-buildings" },
  { text: "hotels", href: "/commercial/hospitality-sector" },
  { text: "schools", href: "/commercial/educational-sector" },
  { text: "hospitals", href: "/commercial/healthcare-industry" },
];

// Resource Links
export const resourceLinks: InternalLink[] = [
  { text: "request a quote", href: "/quote-request" },
  { text: "case studies", href: "/case-studies" },
  { text: "benefits of secondary glazing", href: "/benefits" },
  { text: "FAQs", href: "/faqs" },
  { text: "repairs and maintenance", href: "/secondary-glazing-repairs" },
];

// Inline Link Component
interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const InlineLink = ({ href, children, className = "" }: InlineLinkProps) => (
  <Link 
    to={href} 
    className={`text-primary hover:underline font-medium ${className}`}
  >
    {children}
  </Link>
);

// Quick Links Grid Component
interface QuickLinksGridProps {
  title?: string;
  links: InternalLink[];
  columns?: 2 | 3 | 4;
}

export const QuickLinksGrid = ({ 
  title = "Quick Links", 
  links,
  columns = 2 
}: QuickLinksGridProps) => {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className="my-6">
      {title && <h4 className="font-semibold mb-3">{title}</h4>}
      <div className={`grid ${gridCols[columns]} gap-2`}>
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-sm text-primary hover:underline"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InlineLink;

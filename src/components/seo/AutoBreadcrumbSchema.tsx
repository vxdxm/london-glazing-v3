import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "https://secondaryglazingspecialist.com";

// Human-readable labels for known path segments. Anything not listed
// falls back to title-cased slug (hyphens → spaces).
const LABELS: Record<string, string> = {
  blog: "Blog",
  specialized: "Specialized Services",
  residential: "Residential",
  commercial: "Commercial",
  guides: "Guides",
  specialist: "Specialist",
  locations: "Locations",
  "areas-we-serve": "Areas We Serve",
  "service-areas": "Service Areas",
  areas: "Areas",
  glass: "Glass Options",
  "casement-windows": "Casement Windows",
  "sash-windows": "Sash Windows",
  "bay-windows": "Bay Windows",
  "horizontal-sliding": "Horizontal Sliding",
  "lift-out": "Lift Out",
  "crittall-windows": "Crittall Windows",
  "energy-performance": "Energy Performance",
  "energy-efficiency": "Energy Efficiency",
  "acoustic-glazing": "Acoustic Glazing",
  "noise-reduction": "Noise Reduction",
  "thermal-insulation": "Thermal Insulation",
  "security-glazing": "Security Glazing",
  "condensation-control": "Condensation Control",
  "double-glazed-units": "Double Glazed Units",
  "air-gap-secondary-glazing": "Air Gap Secondary Glazing",
  "sound-transmission-guide": "Sound Transmission Guide",
  "uv-protection": "UV Protection",
  "insurance-premiums": "Insurance Premiums",
  "office-buildings": "Office Buildings",
  "hospitality-sector": "Hospitality Sector",
  "healthcare-industry": "Healthcare",
  "educational-sector": "Educational Sector",
  "retail-spaces": "Retail Spaces",
  "listed-buildings": "Listed Buildings",
  "compliance-hub": "Compliance Hub",
  "quote-request": "Request a Quote",
  "case-studies": "Case Studies",
  faqs: "FAQs",
  contact: "Contact",
  about: "About",
  gallery: "Gallery",
};

const prettify = (slug: string): string => {
  if (LABELS[slug]) return LABELS[slug];
  return slug
    .split("-")
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
};

/**
 * Emits BreadcrumbList JSON-LD for the current route on every non-home page.
 * Mounted once globally so blog posts and service pages get schema without
 * per-page boilerplate.
 */
export const AutoBreadcrumbSchema = () => {
  const { pathname } = useLocation();
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/+$/, "");
  if (!clean || clean === "/") return null;

  const segments = clean.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE}/`,
    },
    ...segments.map((seg, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: prettify(seg),
      item: `${SITE}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <Helmet>
      <script type="application/ld+json" data-schema="breadcrumb-auto">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default AutoBreadcrumbSchema;
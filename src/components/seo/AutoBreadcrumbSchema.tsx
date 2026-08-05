import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
  "bay-window-options": "Bay Window Options",
  "heritage-listed": "Heritage & Listed Buildings",
  "sound-insulation": "Sound Insulation",
  "cost-guide": "Cost Guide",
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
  const segments = clean.split("/").filter(Boolean);

  const schemaJson = segments.length
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          ...segments.map((seg, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: prettify(seg),
            item: `${SITE}/${segments.slice(0, i + 1).join("/")}`,
          })),
        ],
      })
    : "";

  // De-duplicate: some legacy page components still emit their own
  // BreadcrumbList. Two competing BreadcrumbList blocks on one URL can stop
  // Google rendering breadcrumbs, so keep this global one as the single source.
  useEffect(() => {
    const dedupe = () => {
      const scripts = Array.from(
        document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')
      );
      for (const el of scripts) {
        const text = el.textContent || "";
        if (schemaJson && text.trim() === schemaJson) continue; // our own block
        if (!text.includes("BreadcrumbList")) continue;
        let data: unknown;
        try {
          data = JSON.parse(text);
        } catch {
          continue;
        }
        const isBc = (n: any) => n && typeof n === "object" && n["@type"] === "BreadcrumbList";
        if (isBc(data)) {
          el.remove();
          continue;
        }
        const obj = data as any;
        if (Array.isArray(obj?.["@graph"])) {
          const kept = obj["@graph"].filter((n: any) => !isBc(n));
          if (kept.length !== obj["@graph"].length) {
            if (kept.length === 0) el.remove();
            else el.textContent = JSON.stringify({ ...obj, "@graph": kept });
          }
        } else if (Array.isArray(data)) {
          const kept = (data as any[]).filter((n) => !isBc(n));
          if (kept.length !== (data as any[]).length) {
            if (kept.length === 0) el.remove();
            else el.textContent = JSON.stringify(kept);
          }
        }
      }
    };

    dedupe();
    const observer = new MutationObserver(() => dedupe());
    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [schemaJson]);

  if (!schemaJson) return null;

  return (
    <Helmet>
      <script type="application/ld+json" data-schema="breadcrumb-auto">
        {schemaJson}
      </script>
    </Helmet>
  );
};

export default AutoBreadcrumbSchema;
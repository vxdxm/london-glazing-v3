
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Shield, Sun, Sofa, Palette } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

// Lazy load components that aren't needed for initial render
const LazyFooter = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const UVProtection = () => {
  const pageMetadata = {
    title: "UV Protection Secondary Glazing | Furniture & Art Protection",
    description: "Protect your furnishings, artwork, and interiors from UV damage with specialized secondary glazing solutions. Learn about UV filtering technology and preservation benefits.",
    canonicalPath: "/specialized/uv-protection",
    imageUrl: "/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg",
    type: "article" as const,
    publishedDate: "2024-07-20",
    modifiedDate: "2025-05-17",
    keywords: ["UV protection", "secondary glazing", "furniture protection", "art preservation", "UV filtering", "window film", "UV damage prevention"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="keywords" content={pageMetadata.keywords?.join(", ")} />
        <link rel="canonical" href={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={pageMetadata.title} />
        <meta property="og:description" content={pageMetadata.description} />
        <meta property="og:type" content={pageMetadata.type} />
        <meta property="og:url" content={`https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}`} />
        {pageMetadata.imageUrl && <meta property="og:image" content={pageMetadata.imageUrl} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={pageMetadata.imageUrl} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
        
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://secondaryglazingspecialist.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Specialized Services",
                "item": "https://secondaryglazingspecialist.com/specialized"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "UV Protection",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
        
        {/* Preload critical assets */}
        <link rel="preload" href="/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg" as="image" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">UV Protection Secondary Glazing</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <OptimizedImage
                src="/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg"
                alt="UV protection glazing demonstration"
                aspectRatio={16/9}
                className="rounded-lg"
                priority={true}
              />
              
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Understanding UV Protection</h2>
                <p className="text-gray-600 mb-6">
                  UV rays from sunlight can cause significant damage to your interior furnishings, 
                  artwork, and fabrics over time. Our specialized UV protection secondary glazing 
                  helps preserve your valuable possessions by filtering out harmful ultraviolet radiation 
                  while maintaining natural light transmission.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Protection Features</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Blocks up to 99% of harmful UV rays</li>
                  <li>• Preserves original window character</li>
                  <li>• Maintains natural light transmission</li>
                  <li>• Reduces heat gain in summer</li>
                  <li>• Compatible with listed buildings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">UV Damage Prevention</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• Protects furniture from fading</li>
                  <li>• Preserves artwork and photographs</li>
                  <li>• Extends fabric life</li>
                  <li>• Reduces carpet deterioration</li>
                  <li>• Protects wood finishes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Areas That Benefit Most</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sofa className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Living Spaces</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Living rooms with expensive furniture</li>
                    <li>• Dining rooms with antique pieces</li>
                    <li>• Bedrooms with delicate fabrics</li>
                    <li>• Home offices with important documents</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Special Collections</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Art galleries and museums</li>
                    <li>• Private art collections</li>
                    <li>• Historic properties</li>
                    <li>• Libraries and archives</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">UV Filtering Technology & Performance Data</h2>
              <p className="text-gray-600 mb-4">
                Our UV-filtering secondary glazing combines low-iron toughened or laminated glass with a PVB (polyvinyl
                butyral) interlayer engineered to absorb radiation across the UVA (315–400nm) and UVB (280–315nm) bands.
                The interlayer chemistry blocks ≥99% of radiation below 380nm and ≥98% up to 400nm when measured to
                ISO 9050:2003 (Glass in Building — Determination of Light Transmittance, Solar Direct Transmittance,
                Total Solar Energy Transmittance, Ultraviolet Transmittance and Related Glazing Factors).
              </p>
              <p className="text-gray-600 mb-4">
                For museum and conservation environments, we also specify glass tested to ISO 18934:2011 (Imaging
                Materials — Multiple Media Archives — Storage Environment) and CIBSE Lighting Guide LG8: Lighting for
                Museums and Art Galleries. Damage rate (Tdw-ISO) is independently calculated to BS EN 410, allowing
                conservators to model cumulative exposure in lux-hours per annum against ISO Blue Wool reference standards.
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="border border-border p-3 text-left">Glass Specification</th>
                      <th className="border border-border p-3 text-left">UV Block (≤380nm)</th>
                      <th className="border border-border p-3 text-left">Visible Light (LT)</th>
                      <th className="border border-border p-3 text-left">Tdw-ISO Damage Factor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Standard Float (control)</td>
                      <td className="border border-border p-3">~25%</td>
                      <td className="border border-border p-3">90%</td>
                      <td className="border border-border p-3">0.69</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">6.8mm Laminate (acoustic PVB)</td>
                      <td className="border border-border p-3">99.5%</td>
                      <td className="border border-border p-3">88%</td>
                      <td className="border border-border p-3">0.42</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">10.8mm Stadip Silence + Optilam UV</td>
                      <td className="border border-border p-3">99.9%</td>
                      <td className="border border-border p-3">85%</td>
                      <td className="border border-border p-3">0.31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Damage Factor figures derived from BS EN 410:2011 Annex A using CIE 89/3 weighting. Lower values indicate
                slower fading rates for ISO Blue Wool 1–3 sensitive materials (silk, watercolour pigments, dyed wool).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Specifying for Galleries, Archives & Heritage Interiors</h2>
              <p className="text-gray-600 mb-4">
                When specifying UV-filtering secondary glazing for ACR (Accreditation Scheme for Museums and Galleries)
                registered institutions, the design brief should reference Benchmarks in Collection Care 2.0 (Collections
                Trust) and PAS 198:2012 — Specification for Managing Environmental Conditions for Cultural Collections.
                Our standard heritage build-up — 10.8mm Stadip Silence with an Optilam UV interlayer set in a slim
                aluminium sub-frame — meets the Cat. 1 sensitivity requirements (50 lux ceiling, 15,000 lux-hours/year)
                without resorting to applied window films, which can degrade, bubble, or yellow within 7–10 years.
              </p>
              <p className="text-gray-600 mb-4">
                For Grade I and Grade II* listed properties, the secondary glazing is mechanically fixed to the sub-frame
                or staff bead with no adhesive contact to historic joinery, satisfying SPAB and Historic England guidance
                on reversible interventions. Combined with a 100–150mm cavity, the same panel delivers Rw 38–45 dB
                acoustic attenuation and a combined U-value of 1.6–1.9 W/m²K, addressing UV, noise, and thermal
                performance in a single specification line.
              </p>
              <p className="text-gray-600">
                Typical applications include national trust properties, livery hall portrait collections, RIBA-listed
                interwar interiors, and private collections in conservation areas across Mayfair, Belgravia, and
                Holland Park. Sample panels and BS EN 410 test certificates are available on request for inclusion in
                NBS specification clauses (Section L40 / Pr_25_30_98_75).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Suspense fallback={<div className="h-40 bg-gray-100"></div>}>
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default UVProtection;

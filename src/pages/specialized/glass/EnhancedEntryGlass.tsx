
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const EnhancedEntryGlass = () => {
  const pageMetadata = {
    title: "6.8mm Enhanced Entry-Level Acoustic Glass | Secondary Glazing",
    description: "Enhanced entry-level acoustic glass providing superior sound insulation for properties in suburban areas with moderate traffic. Improved performance with 6.8mm thickness.",
    canonicalPath: "/specialized/glass/enhanced-entry-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["enhanced acoustic glass", "6.8mm glass", "noise reduction", "moderate traffic", "secondary glazing", "enhanced laminated safety", "UV protection"]
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
        
        {/* Product structured data */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "6.8mm Enhanced Entry-Level Acoustic Glass",
            "description": "Enhanced acoustic laminated glass providing superior sound insulation for properties in suburban areas with moderate traffic.",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}",
              "priceCurrency": "GBP",
              "priceValidUntil": "2027-01-01",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">6.8mm Enhanced Entry-Level Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 6.8mm acoustic laminated glass provides enhanced sound insulation compared to our entry-level option, making it ideal for properties in suburban areas with moderate traffic.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 33dB</li>
                  <li>Enhanced laminated safety glass</li>
                  <li>Superior UV protection</li>
                  <li>Excellent clarity and visibility</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Properties near moderate traffic routes</li>
                  <li>Suburban homes requiring improved sound insulation</li>
                  <li>Office spaces in residential areas</li>
                  <li>Properties near schools or community centers</li>
                </ul>

                <h3 className="text-xl font-semibold">Technical Benefits</h3>
                <p>The 6.8mm thickness provides an optimal balance between sound insulation and practicality, offering improved acoustic performance while maintaining ease of installation and cost-effectiveness.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnhancedEntryGlass;


import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const EntryLevelGlass = () => {
  const pageMetadata = {
    title: "6.4mm Entry-Level Acoustic Glass | Secondary Glazing Solutions",
    description: "Our 6.4mm acoustic laminated glass provides effective noise reduction for residential properties in quieter urban areas. Learn about specifications and applications.",
    canonicalPath: "/specialized/glass/entry-level-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["entry-level acoustic glass", "6.4mm glass", "laminated safety glass", "noise reduction", "secondary glazing", "UV protection", "clear visibility"]
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
            "name": "6.4mm Entry-Level Acoustic Glass",
            "description": "Our 6.4mm acoustic laminated glass represents our entry-level solution for noise reduction, perfect for residential properties in quieter urban areas.",
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
        <h1 className="text-4xl font-bold mb-8">6.4mm Entry-Level Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 6.4mm acoustic laminated glass represents our entry-level solution for noise reduction, perfect for residential properties in quieter urban areas.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 32dB</li>
                  <li>Laminated safety glass construction</li>
                  <li>UV protection included</li>
                  <li>Clear visibility maintained</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Residential properties in suburban areas</li>
                  <li>Homes away from major roads</li>
                  <li>Properties requiring basic noise reduction</li>
                  <li>Bedrooms and living spaces in quieter neighborhoods</li>
                </ul>

                <h3 className="text-xl font-semibold">Installation Details</h3>
                <p>The 6.4mm glass is installed within our specially designed secondary glazing frames, maintaining a optimal air gap between your existing windows and the secondary unit for maximum noise reduction effectiveness.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EntryLevelGlass;

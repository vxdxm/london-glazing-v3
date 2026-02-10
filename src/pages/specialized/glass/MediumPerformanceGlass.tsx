
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const MediumPerformanceGlass = () => {
  const pageMetadata = {
    title: "8.8mm Medium Performance Acoustic Glass | Secondary Glazing",
    description: "Our 8.8mm acoustic laminated glass represents a significant step up in noise reduction capabilities, perfect for properties in busier urban environments.",
    canonicalPath: "/specialized/glass/medium-performance-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2026-01-01",
    modifiedDate: "2026-01-01",
    keywords: ["medium performance glass", "8.8mm acoustic glass", "laminated construction", "urban noise reduction", "busy road noise", "enhanced security", "sound dampening"]
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
            "name": "8.8mm Medium Performance Acoustic Glass",
            "description": "Advanced acoustic laminated glass with significant step up in noise reduction capabilities, perfect for properties in busier urban environments.",
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
        <h1 className="text-4xl font-bold mb-8">8.8mm Medium Performance Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 8.8mm acoustic laminated glass represents a significant step up in noise reduction capabilities, perfect for properties in busier urban environments.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 35dB</li>
                  <li>Advanced laminated construction</li>
                  <li>Enhanced security features</li>
                  <li>Superior sound dampening properties</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Properties near busy roads</li>
                  <li>Commercial buildings in urban areas</li>
                  <li>Residential properties in city centers</li>
                  <li>Hotels and guest houses</li>
                </ul>

                <h3 className="text-xl font-semibold">Advanced Features</h3>
                <p>The 8.8mm glass incorporates multiple layers of acoustic interlayers, providing exceptional noise reduction while maintaining optical clarity. The increased thickness also offers enhanced security benefits.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediumPerformanceGlass;

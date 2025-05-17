
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";

const HighPerformanceGlass = () => {
  const pageMetadata = {
    title: "10.8mm High Performance Acoustic Glass | Premium Noise Reduction",
    description: "Our 10.8mm acoustic laminated glass delivers superior noise reduction for demanding environments, making it ideal for properties in high-noise areas.",
    canonicalPath: "/specialized/glass/high-performance-glass",
    imageUrl: "/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg",
    type: "product" as const,
    publishedDate: "2024-07-05",
    modifiedDate: "2025-05-17",
    keywords: ["high performance glass", "10.8mm acoustic glass", "premium noise reduction", "recording studios", "city center properties", "railway noise reduction", "premium acoustic lamination"]
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
            "name": "10.8mm High Performance Acoustic Glass",
            "description": "Premium acoustic laminated glass delivering superior noise reduction for demanding environments, ideal for properties in high-noise areas.",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}",
              "priceCurrency": "GBP",
              "priceValidUntil": "2026-05-17",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">10.8mm High Performance Acoustic Glass</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Our 10.8mm acoustic laminated glass delivers superior noise reduction for demanding environments, making it ideal for properties in high-noise areas.</p>
                
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise reduction up to 38dB</li>
                  <li>Premium acoustic lamination</li>
                  <li>Maximum security benefits</li>
                  <li>Exceptional sound insulation properties</li>
                </ul>

                <h3 className="text-xl font-semibold">Best Applications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>City center properties</li>
                  <li>Buildings near railways</li>
                  <li>Recording studios</li>
                  <li>High-end residential developments</li>
                </ul>

                <h3 className="text-xl font-semibold">Professional Applications</h3>
                <p>The 10.8mm glass is particularly suited for professional environments where noise control is crucial. Its substantial thickness provides excellent sound dampening while maintaining clarity and light transmission.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HighPerformanceGlass;

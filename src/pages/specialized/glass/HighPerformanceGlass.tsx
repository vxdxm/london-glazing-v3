
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/ui/seo-head";

const HighPerformanceGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="10.8mm High Performance Acoustic Glass | Superior Noise Reduction"
        description="Our premium 10.8mm acoustic laminated glass delivers superior noise reduction up to 38dB. Ideal for properties in high-noise areas like city centers and near railways."
        canonicalUrl="https://secondaryglazingspecialist.com/specialized/glass/high-performance-glass"
        ogTitle="10.8mm High Performance Acoustic Glass | Premium Sound Insulation"
        ogDescription="Premium 10.8mm acoustic glass for properties in high-noise environments. Delivers unmatched sound insulation up to 38dB while providing enhanced security."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "10.8mm High Performance Acoustic Glass",
          "description": "Premium acoustic laminated glass with superior noise reduction properties up to 38dB.",
          "brand": {
            "@type": "Brand",
            "name": "Secondary Glazing Specialist"
          },
          "category": "Acoustic Glazing",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Noise Reduction",
              "value": "Up to 38dB"
            },
            {
              "@type": "PropertyValue",
              "name": "Glass Thickness",
              "value": "10.8mm"
            },
            {
              "@type": "PropertyValue",
              "name": "Glass Type",
              "value": "Laminated Acoustic"
            }
          ]
        }}
      >
        <meta name="keywords" content="10.8mm acoustic glass, high performance glazing, superior sound insulation, 38dB noise reduction, city center properties, railway noise reduction" />
      </SeoHead>
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
      <Footer />
    </div>
  );
};

export default HighPerformanceGlass;

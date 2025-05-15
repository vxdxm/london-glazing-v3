
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/ui/seo-head";

const EntryLevelGlass = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        title="6.4mm Entry-Level Acoustic Glass | Affordable Noise Reduction"
        description="Our 6.4mm entry-level acoustic laminated glass offers basic noise reduction up to 32dB for residential properties in quieter areas. Cost-effective solution with UV protection."
        canonicalUrl="https://secondaryglazingspecialist.com/specialized/glass/entry-level-glass"
        ogTitle="6.4mm Entry-Level Acoustic Glass | Basic Sound Insulation"
        ogDescription="Affordable 6.4mm acoustic glass for residential properties. Provides effective noise reduction up to 32dB in suburban areas while maintaining clear visibility."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "6.4mm Entry-Level Acoustic Glass",
          "description": "Affordable acoustic laminated glass with basic noise reduction properties up to 32dB.",
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
              "value": "Up to 32dB"
            },
            {
              "@type": "PropertyValue",
              "name": "Glass Thickness",
              "value": "6.4mm"
            },
            {
              "@type": "PropertyValue",
              "name": "Glass Type",
              "value": "Laminated Acoustic"
            }
          ]
        }}
      >
        <meta name="keywords" content="6.4mm acoustic glass, entry-level glazing, basic noise reduction, affordable secondary glazing, 32dB noise reduction, UV protection glass" />
      </SeoHead>
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
      <Footer />
    </div>
  );
};

export default EntryLevelGlass;

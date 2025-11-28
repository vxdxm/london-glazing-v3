
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CostCalculator from "@/components/CostCalculator";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { SectionHeading } from "@/components/ui/section-heading";
import { KeyPoint } from "@/components/ui/key-point";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { UValuesComparison } from "@/components/specialized/thermal/UValuesComparison";
import { CO2SavingsCalculator } from "@/components/specialized/thermal/CO2SavingsCalculator";

const ThermalInsulation = () => {
  const pageMetadata = {
    title: "Thermal Insulation Secondary Glazing | Up to 60% Heat Loss Reduction",
    description: "Expert thermal insulation solutions with secondary glazing. Reduce heat loss by up to 60%, lower energy bills, and improve comfort with our specialist installation.",
    canonicalPath: "/specialized/thermal-insulation",
    imageUrl: "https://secondaryglazingspecialist.com/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["thermal insulation", "secondary glazing", "energy efficiency", "heat loss reduction", "energy bills", "thermal barriers", "double glazed secondary glazing", "U-values"]
  };

  const pageSchema = createPageSchema(pageMetadata);
  
  // Add logging for indexing
  useEffect(() => {
    console.log("Thermal Insulation page loaded for indexing");
  }, []);

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
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <SectionHeading 
          title="Thermal Insulation" 
          subtitle="Advanced solutions for maximum energy efficiency"
          className="mb-8"
        />
        
        <div className="prose max-w-none mb-12 text-gray-600">
          <p className="text-lg leading-relaxed">
            Our advanced thermal insulation solutions provide exceptional energy efficiency for your property. 
            By creating an additional barrier against heat loss and gain, our secondary glazing systems can 
            significantly reduce your energy consumption and create a more comfortable living environment. 
            Using the latest in glazing technology, our solutions can help reduce heat loss by up to 60% 
            compared to single glazing, leading to substantial savings on your energy bills while contributing 
            to a more sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png"
                alt="Secondary glazing installation in progress showing thermal insulation benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/218776ee-eff4-4f63-8d88-27dd86763e28.png"
                alt="Decorative stained glass window showing thermal efficiency through traditional design"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Energy Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Enhanced thermal insulation solutions for improved energy efficiency and comfort.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced heat loss</li>
                <li>Lower energy bills</li>
                <li>Improved U-values</li>
                <li>Draft elimination</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/3853a532-5ab4-43d2-8e86-a0cdbfede781.png"
                alt="Close-up of secondary glazing installation with radiator showing thermal efficiency features"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Technical Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                State-of-the-art thermal insulation technology for maximum efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Low-E glass options</li>
                <li>Thermal break frames</li>
                <li>Warm edge spacers</li>
                <li>Weather sealing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16 mb-16">
          <SectionHeading 
            title="Double Glazed Secondary Glazing Units"
            subtitle="Superior thermal performance for demanding environments"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Enhanced Thermal Performance</h3>
              <p className="text-gray-700">
                Our double glazed secondary glazing units offer superior performance through:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Two separate air gaps for maximum insulation</li>
                <li>Up to 40% better insulation than single glazed secondary units</li>
                <li>Optimal 20mm gap between panes for maximum thermal efficiency</li>
                <li>Argon gas filling option for enhanced performance</li>
              </ul>
              <Link 
                to="/specialized/double-glazed-units" 
                className="inline-block mt-4 text-primary hover:underline"
              >
                Learn more about Double Glazed Secondary Glazing Units
              </Link>
            </div>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Standard Configuration</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>4mm-12mm-4mm (20mm total)</li>
                      <li>U-value: 1.2 W/m²K</li>
                      <li>Sound reduction: up to 45dB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium Configuration</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>4mm-9.2mm-6.8mm Acoustic (20mm total)</li>
                      <li>U-value: 1.0 W/m²K</li>
                      <li>Sound reduction: up to 48dB</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <UValuesComparison />

        <CO2SavingsCalculator />

        <section className="mt-16">
          <SectionHeading 
            title="Calculate Your Potential Savings"
            subtitle="See how much you could save with our thermal insulation solutions"
            className="text-center mb-8"
          />
          <CostCalculator />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ThermalInsulation;

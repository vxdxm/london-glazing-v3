
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GlassOptions from "@/components/residential/GlassOptions";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { createPageSchema } from "@/utils/seo";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const LiftOut = () => {
  // Define page metadata
  const pageMetadata = {
    title: "Lift Out Secondary Glazing | Easy Access Window Solutions",
    description: "Our lift out secondary glazing provides maximum accessibility and ease of maintenance. Perfect for windows requiring regular cleaning with excellent thermal and acoustic insulation.",
    canonicalPath: "/residential/lift-out",
    imageUrl: "/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png",
    type: "article" as const,
    publishedDate: "2025-05-09",
    modifiedDate: "2025-05-17",
    keywords: ["lift out secondary glazing", "removable window panels", "easy maintenance windows", "heritage window solutions", "listed building glazing", "thermal insulation"]
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
        {pageMetadata.imageUrl && <meta property="og:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageMetadata.title} />
        <meta name="twitter:description" content={pageMetadata.description} />
        {pageMetadata.imageUrl && <meta name="twitter:image" content={`https://secondaryglazingspecialist.com${pageMetadata.imageUrl}`} />}
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">{pageSchema}</script>
      </Helmet>
      
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Lift Out Secondary Glazing</h1>
            <p className="text-gray-700 mb-6">
              Our lift out secondary glazing solutions offer maximum accessibility and ease of maintenance.
              Perfect for windows that require regular cleaning or seasonal ventilation adjustments. These panels 
              are designed with a unique lift-out mechanism that allows for complete removal without tools, 
              making them ideal for listed buildings and properties where permanent alterations aren't permitted. 
              The panels provide excellent thermal insulation and noise reduction while maintaining the original 
              character of your windows.
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png"
              alt="Lift out window demonstration"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Available Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Standard Lift Out Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/3bfb7e32-d21b-47d7-91e3-f374ca8d25c0.png"
                    alt="Standard lift out panel"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Our classic lift out panel design provides full access for cleaning and maintenance.
                    Features secure fixing mechanisms and weather-tight seals.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Easy removal and replacement</li>
                    <li>Secure fixing points</li>
                    <li>Weather-resistant seals</li>
                    <li>Lightweight aluminum frame</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick-Release System</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/208cca9c-8392-4aef-b6f1-4361c44644a6.png"
                    alt="Quick release system demonstration"
                    className="rounded-lg w-full h-[200px] object-cover mb-4"
                  />
                  <p className="text-gray-700">
                    Advanced quick-release mechanism for effortless panel removal.
                    Perfect for frequent access requirements.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>One-touch release mechanism</li>
                    <li>Enhanced safety features</li>
                    <li>Tool-free operation</li>
                    <li>Ideal for high-level windows</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Aluminum alloy frame construction</li>
                  <li>Powder-coated finish options</li>
                  <li>Multiple color choices available</li>
                  <li>Thermal break technology</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Anti-lift mechanisms</li>
                  <li>Reinforced corner joints</li>
                  <li>Tamper-resistant fixings</li>
                  <li>Optional security glass</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <GlassOptions />
      </div>
      <Footer />
    </div>
  );
};

export default LiftOut;

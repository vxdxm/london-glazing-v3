
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InsurancePremiumCalculator from "@/components/insurance/InsurancePremiumCalculator";
import { Shield, Lock } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Helmet } from "react-helmet-async";
import { createPageSchema } from "@/utils/seo";

const InsurancePremiums = () => {
  const pageMetadata = {
    title: "Insurance Premium Benefits | Secondary Security Glazing",
    description: "Discover how installing security secondary glazing can reduce your insurance premiums. Expert solutions for enhanced property protection and cost savings.",
    canonicalPath: "/specialized/insurance-premiums",
    imageUrl: "/lovable-uploads/3d97865e-eb3e-4558-adcf-5fef6f809746.jpg",
    type: "article" as const,
    publishedDate: "2024-08-05",
    modifiedDate: "2025-05-17",
    keywords: ["insurance premiums", "security glazing", "property insurance", "insurance savings", "window security", "premium reduction", "security features"]
  };

  const pageSchema = createPageSchema(pageMetadata);

  return <div className="min-h-screen bg-background">
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
                "name": "Insurance Premium Benefits",
                "item": "https://secondaryglazingspecialist.com${pageMetadata.canonicalPath}"
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Insurance Premium Benefits</h1>
        
        <div className="prose max-w-none mb-8 text-gray-600">
          <p className="text-lg">
            Installing security glazing not only enhances the protection of your property but can also 
            lead to significant savings on your insurance premiums. Many insurance providers offer reduced 
            rates for properties with enhanced security measures, including secondary security glazing.
          </p>
        </div>

        <div className="mb-12 w-full max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img alt="A secure and well-protected living room with secondary glazing" className="object-cover w-full h-full rounded-lg" src="/lovable-uploads/3d97865e-eb3e-4558-adcf-5fef6f809746.jpg" />
          </AspectRatio>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Insurance Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Reduced insurance premiums</li>
                <li>Enhanced security rating for your property</li>
                <li>Additional protection against break-ins</li>
                <li>Potential claims reduction</li>
                <li>Improved property value</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lock className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Multi-point locking systems</li>
                <li>Reinforced frames</li>
                <li>Laminated glass options</li>
                <li>Anti-lever mechanisms</li>
                <li>Insurance-approved specifications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Calculate Your Savings</h2>
          <InsurancePremiumCalculator />
        </div>

        <div className="prose max-w-none text-gray-600 mb-12">
          <h2 className="text-3xl font-semibold mb-4">How Security Glazing Affects Insurance</h2>
          <p>
            Insurance companies assess risk based on various security measures in place at your property. 
            Secondary security glazing is recognized as an effective deterrent against break-ins and can 
            result in lower insurance premiums. The actual reduction in premiums can vary depending on:
          </p>
          <ul className="list-disc list-inside text-gray-500 mt-4 space-y-2">
            <li>Your insurance provider's specific policies</li>
            <li>The type of security glazing installed</li>
            <li>Your property's location and risk assessment</li>
            <li>The overall security system in place</li>
          </ul>
        </div>
      </div>
    </div>;
};

export default InsurancePremiums;

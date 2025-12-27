
import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { createPageSchema } from "@/utils/seo";
import { createLocalBusinessSchema, createServiceSchema } from "@/utils/structuredData";

const CommercialSolutions = () => {
  const pageMetadata = {
    title: "Commercial Secondary Glazing London | Business & Office Solutions",
    description: "Professional commercial secondary glazing solutions for London businesses. Improve energy efficiency, reduce noise, and enhance security in offices, hotels, and commercial buildings.",
    canonicalPath: "/commercial",
    imageUrl: "/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg",
    type: "website" as const,
    publishedDate: "2024-12-15",
    modifiedDate: "2025-05-17",
    keywords: ["commercial glazing", "office glazing", "business windows", "hotel windows", "commercial property", "noise reduction", "energy efficiency", "London commercial"]
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
        
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createLocalBusinessSchema())}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            "Commercial Secondary Glazing Installation",
            "Professional commercial secondary glazing solutions for London businesses. Improve energy efficiency, reduce noise, and enhance security in offices, hotels, healthcare facilities, and educational buildings."
          ))}
        </script>
        
        {/* Product Schema with Offers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Commercial Secondary Glazing",
            "description": "Professional secondary glazing for commercial properties",
            "brand": {
              "@type": "Brand",
              "name": "Secondary Glazing Specialist"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "GBP",
              "lowPrice": "400",
              "highPrice": "2000",
              "offerCount": "8"
            }
          })}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Commercial Secondary Glazing Solutions</h1>
        <div className="prose max-w-none mb-8 text-gray-600">
          <p className="text-lg">
            Commercial secondary glazing solutions involve adding an additional layer of glass or transparent material to existing windows in commercial buildings. This system serves to improve insulation, reduce noise pollution, and enhance energy efficiency without the need for full window replacement. Secondary glazing can also help in reducing heat loss, contributing to lower energy bills, and improving the overall comfort within the space. These solutions are often tailored to meet aesthetic and functional needs, ensuring compliance with building regulations while maintaining the original character of the property.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/commercial/office-buildings">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern office building" className="w-full h-full object-cover" src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Office Glazing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance your office environment with our secondary glazing solutions that provide excellent thermal insulation and noise reduction. Perfect for busy urban settings.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/hospitality-sector">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern hotel building" className="w-full h-full object-cover" src="/lovable-uploads/8c405e6d-83e1-4a0e-8cf5-de325c39e542.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Hotel & Hospitality Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create a peaceful atmosphere for your guests with our specialized hotel glazing solutions, designed to reduce noise and improve energy efficiency.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/healthcare-industry">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern healthcare facility" className="w-full h-full object-cover" src="/lovable-uploads/056a60d0-4ffa-4e1c-977a-c2bbe100e809.jpg" />
              </div>
              <CardHeader>
                <CardTitle>Healthcare Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized glazing solutions for healthcare facilities, ensuring optimal temperature control, sound insulation, and maintaining a sterile environment for patient comfort.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/educational-sector">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern educational facility" src="/lovable-uploads/1c6ae08e-8c9d-4d76-a036-5b7643b5f28a.jpg" className="w-full h-full object-fill" />
              </div>
              <CardHeader>
                <CardTitle>Educational Sector Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create the perfect learning environment with our secondary glazing solutions designed specifically for schools, universities, and other educational institutions.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/commercial/retail-spaces">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-full h-48 overflow-hidden">
                <img alt="Modern retail storefront" src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Retail Spaces & Shops Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance customer experience and protect merchandise with our retail glazing solutions offering noise reduction, security, and UV protection for shop displays.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
      <Footer />
    </div>;
};

export default CommercialSolutions;

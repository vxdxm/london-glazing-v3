
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";

const HospitalitySector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hospitality Secondary Glazing | Hotels & Restaurants Solutions</title>
        <meta name="description" content="Specialized secondary glazing solutions for the hospitality industry. Create peaceful environments for hotels and restaurants with our premium acoustic and thermal glazing." />
        <meta name="keywords" content="hotel glazing, restaurant glazing, hospitality windows, noise reduction, hotel sound insulation, thermal glazing" />
        <meta property="og:title" content="Secondary Glazing for Hospitality Industry" />
        <meta property="og:description" content="Create the perfect environment for your guests with our premium secondary glazing solutions for hotels and restaurants." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Secondary Glazing for Hospitality Industry" />
        <meta name="twitter:description" content="Premium secondary glazing solutions for hotels and restaurants." />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/hospitality-sector" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "Secondary Glazing Solutions for the Hospitality Industry",
            "description": "Create the perfect environment for your guests with our premium secondary glazing solutions, designed specifically for hotels, restaurants, and leisure facilities.",
            "image": "/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".text-lg", ".card-title", ".card-content"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Hospitality Secondary Glazing",
              "description": "Specialized glazing solutions for hotels, restaurants, and bars.",
              "provider": {
                "@type": "Organization",
                "name": "Secondary Glazing Specialist",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "London",
                  "postalCode": "W12 7LA",
                  "streetAddress": "Arch 141, MacFarlane Road"
                },
                "telephone": "0207 060 1572"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock"
              }
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hospitality Sector Glazing Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create the perfect environment for your guests with our premium secondary glazing solutions, 
              designed specifically for hotels, restaurants, and leisure facilities.
            </p>
          </section>

          {/* Main Image */}
          <div className="w-full">
            <AspectRatio ratio={21/9}>
              <img
                src="/lovable-uploads/96faaaa8-1961-4d56-897f-cf5fba13e0cd.png"
                alt="Secondary glazing installation in a historic building"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          {/* Key Benefits Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Sound Insulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="/lovable-uploads/368ef4e0-3b95-4553-9c2d-66546e736887.png"
                      alt="Conference room with sound-proof secondary glazing"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Reduce external noise by up to 80% to ensure peaceful rest for your guests. 
                  Perfect for city-center locations and airport hotels.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Temperature Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="/lovable-uploads/5b955a38-2c68-4d0c-9a22-c4815f0b0969.png"
                      alt="Office space with thermal glazing installation"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Maintain optimal room temperatures year-round while reducing heating and cooling costs. 
                  Our solutions provide excellent thermal insulation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Aesthetic Appeal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="/lovable-uploads/bdef4ec1-0413-4528-b776-dee1a4b8dcb3.png"
                      alt="Modern window installation with secondary glazing"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Preserve the architectural beauty of your property with our discreet secondary glazing solutions 
                  that complement your existing windows.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Detailed Features Section */}
          <section className="bg-gray-50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-semibold mb-6">Why Choose Our Solutions?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Hotels</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Superior sound insulation for peaceful guest rooms</li>
                  <li>Enhanced temperature control for year-round comfort</li>
                  <li>Reduced energy costs through better insulation</li>
                  <li>Minimal disruption during installation</li>
                  <li>Suitable for listed and historic buildings</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Restaurants & Bars</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Create comfortable dining environments</li>
                  <li>Reduce street noise interference</li>
                  <li>Prevent condensation on windows</li>
                  <li>Maintain clear views for diners</li>
                  <li>Easy access for window cleaning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Enhance Your Property?</h2>
            <p className="text-gray-600">
              Contact us today for a free consultation and quote tailored to your specific needs.
            </p>
            <Button 
              onClick={() => navigate("/quote-request")}
              className="bg-primary text-primary-foreground px-8 py-4"
            >
              Request a Quote
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalitySector;

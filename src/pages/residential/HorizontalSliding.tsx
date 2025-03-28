
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const HorizontalSliding = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Horizontal Sliding Secondary Glazing | Smooth Operating Window Solutions</title>
        <meta name="description" content="Our horizontal sliding secondary glazing systems offer excellent thermal insulation and noise reduction while maintaining easy access to your existing windows. Perfect for wide openings." />
        <meta name="keywords" content="horizontal sliding windows, sliding secondary glazing, thermal insulation, noise reduction, wide window openings, residential glazing" />
        <meta property="og:title" content="Horizontal Sliding Secondary Glazing" />
        <meta property="og:description" content="Smooth-operating horizontal sliding panels that provide easy access to primary windows. Ideal for large windows and offering excellent ventilation options." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png" />
        <meta property="og:url" content="https://secondaryglazingspecialist.com/residential/horizontal-sliding" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horizontal Sliding Secondary Glazing" />
        <meta name="twitter:description" content="Smooth-operating horizontal sliding secondary glazing for wide window openings." />
        <meta name="twitter:image" content="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/residential/horizontal-sliding" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "headline": "Horizontal Sliding Secondary Glazing Solutions",
            "description": "Our horizontal sliding secondary glazing systems offer a perfect blend of functionality and aesthetics. These systems are designed to provide excellent thermal insulation and noise reduction while maintaining easy access to your existing windows.",
            "image": "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
            "url": "https://secondaryglazingspecialist.com/residential/horizontal-sliding",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".text-lg", ".card-title", ".card-description"]
            },
            "mainEntity": {
              "@type": "Product",
              "name": "Horizontal Sliding Secondary Glazing",
              "description": "Smooth-operating horizontal sliding panels that provide excellent insulation and easy access to primary windows.",
              "image": "/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png",
              "brand": {
                "@type": "Brand",
                "name": "Secondary Glazing Specialist"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "GBP",
                "availability": "https://schema.org/InStock"
              }
            },
            "breadcrumb": {
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
                  "name": "Residential Solutions",
                  "item": "https://secondaryglazingspecialist.com/residential"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Horizontal Sliding",
                  "item": "https://secondaryglazingspecialist.com/residential/horizontal-sliding"
                }
              ]
            }
          }
        `}
        </script>
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-8">
        <BreadcrumbNav />
        <h1 className="text-4xl font-bold mb-8">Horizontal Sliding Windows</h1>
        
        {/* Introduction Section */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Our horizontal sliding secondary glazing systems offer a perfect blend of functionality and aesthetics. 
            These systems are designed to provide excellent thermal insulation and noise reduction while maintaining 
            easy access to your existing windows.
          </p>
        </div>

        {/* Main Window Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Standard Horizontal Sliding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
                  alt="Standard horizontal sliding secondary glazing with multiple panels that slide smoothly for easy operation"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                  loading="lazy"
                />
                <p>
                  Our standard horizontal sliding system typically consists of 2 or 3 panels, which is standard for majority of the windows. 
                  This classic design combines functionality with ease of use, perfect for residential applications where traditional window 
                  styles are preferred.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Smooth sliding mechanism for effortless operation</li>
                  <li>High-quality brush seals for enhanced insulation</li>
                  <li>Available in 2 or 3 panel configurations</li>
                  <li>Suitable for windows up to 2.4m in height</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multi-Track Sliding System</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/83a85813-7a32-48d2-a1c9-ad133fc122d7.png"
                  alt="Multi-track horizontal sliding secondary glazing system with advanced features for larger window openings"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                  loading="lazy"
                />
                <p>
                  Our advanced multi-track sliding system can accommodate 3 to 5 panels within one window frame, offering maximum flexibility 
                  for larger openings. Perfect for creating panoramic views and seamless indoor-outdoor transitions in modern homes and 
                  commercial spaces.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multiple track options for 3-5 panels</li>
                  <li>Enhanced security features with multi-point locking</li>
                  <li>Ideal for large window spans up to 4m wide</li>
                  <li>Superior weather sealing system</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features and Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Features and Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Thermal Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduces heat loss by up to 65%</li>
                  <li>Helps eliminate cold spots</li>
                  <li>Lower energy bills</li>
                  <li>Improved comfort year-round</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reduces external noise by up to 80%</li>
                  <li>Perfect for busy streets</li>
                  <li>Enhanced sound insulation</li>
                  <li>Peaceful living environment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Practical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Easy maintenance and cleaning</li>
                  <li>Smooth operation</li>
                  <li>Enhanced security features</li>
                  <li>Draft elimination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frame Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aluminum frame thickness: 2mm</li>
                  <li>Maximum panel height: 2.4m</li>
                  <li>Maximum panel width: 2m</li>
                  <li>Available in various colors and finishes</li>
                  <li>Thermal break options available</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Installation Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional installation required</li>
                  <li>Typical installation time: 2-4 hours per window</li>
                  <li>Minimal disruption to existing windows</li>
                  <li>Full warranty coverage</li>
                  <li>After-installation support available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Ready to Upgrade Your Windows?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and quote. Our experts will help you 
            find the perfect horizontal sliding solution for your home.
          </p>
          <Button size="lg" onClick={() => navigate("/quote-request")} className="bg-primary hover:bg-primary/90">
            Get Free Quote
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HorizontalSliding;

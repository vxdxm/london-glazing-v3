import { Helmet } from "react-helmet";
import { Hero } from "@/components/Hero";
import { MainNav } from "@/components/MainNav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Thermometer, VolumeX, Lightbulb, PoundSterling, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Secondary Glazing London | Expert Window Solutions & Installation</title>
        <meta name="description" content="London's trusted secondary glazing specialists. Enhance your home with superior noise reduction, thermal insulation, and security features. Free consultation available." />
        <meta name="keywords" content="secondary glazing, window insulation, noise reduction, thermal insulation, security glazing, London windows, energy efficient windows, listed building windows" />
        <meta property="og:title" content="London Secondary Glazing Solutions | Expert Window Insulation Services" />
        <meta property="og:description" content="Premium secondary glazing solutions in London. Enhance your home with superior noise reduction, thermal insulation, and security features." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London Secondary Glazing Solutions" />
        <meta name="twitter:description" content="Premium secondary glazing solutions for homes and businesses in London." />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <MainNav />
      <Hero />
      <Services />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Secondary Glazing Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/lovable-uploads/105df4cf-806c-402e-aaba-ccb4792bad5f.png"
                alt="Triple sash window installation with grey roman blinds overlooking urban area"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Sash Window Solutions
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/lovable-uploads/289db534-0ea4-4a46-b9f6-1896892c42b5.png"
                alt="Wide horizontal sliding secondary glazing installation with garden view"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Horizontal Sliding Systems
                </p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/lovable-uploads/85a35431-eb67-44c0-bc47-544b29a786f6.png"
                alt="Modern casement window with secondary glazing in a contemporary setting"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  Casement Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Glazing Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Secondary Glazing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <CardTitle>What is Secondary Glazing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Secondary glazing involves installing a discreet additional window on the room-side of your existing windows. 
                  It's an excellent solution for properties where replacement windows aren't suitable or allowed, particularly 
                  in listed buildings and conservation areas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <PoundSterling className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Cost-Effective Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Secondary glazing is typically more affordable than full window replacement while offering excellent benefits. 
                  It can reduce your energy bills by up to 40% through improved insulation, and installation is quick with 
                  minimal disruption to your property.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Quick Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most installations can be completed within a day, with minimal disruption to your daily routine. 
                  Our professional team ensures a clean, efficient installation process, and you can start enjoying 
                  the benefits immediately.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Preserves the character of original windows</li>
                  <li>Ideal for listed buildings and conservation areas</li>
                  <li>Significantly reduces external noise</li>
                  <li>Improves thermal insulation</li>
                  <li>Enhances security</li>
                  <li>Reduces condensation</li>
                  <li>Low maintenance requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Period properties and listed buildings</li>
                  <li>Properties in conservation areas</li>
                  <li>Homes near busy roads or flight paths</li>
                  <li>Buildings requiring enhanced security</li>
                  <li>Properties with single glazing</li>
                  <li>Homes with condensation issues</li>
                  <li>Commercial buildings requiring noise reduction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Testimonials />
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

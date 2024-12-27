import { Hero } from "@/components/Hero";
import { MainNav } from "@/components/MainNav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Thermometer, VolumeX, Lightbulb, PoundSterling, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/84bdd7cf-5970-4949-a908-9ccf79610741.png",
      alt: "Secondary Glazing Installation",
      caption: "Premium Secondary Glazing Solutions"
    },
    {
      src: "/lovable-uploads/78d4ec89-4da8-46df-b9cf-722eaa162852.png",
      alt: "Heritage Window Treatment",
      caption: "Heritage Window Preservation"
    },
    {
      src: "/lovable-uploads/7f03d371-d4b3-4061-afe2-9723cde940ee.png",
      alt: "Commercial Installation",
      caption: "Commercial Glazing Excellence"
    }
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      <Hero />
      
      {/* Rotating Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                        <p className="text-lg font-semibold text-center">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      <Services />
      
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
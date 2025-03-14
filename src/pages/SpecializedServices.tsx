import { Helmet } from "react-helmet";
import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import WhatsAppButton from "@/components/WhatsAppButton";
import GetQuoteButton from "@/components/GetQuoteButton";
import { Earth, Wrench, Volume2 } from "lucide-react";

const SpecializedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Specialized Secondary Glazing Services | Acoustic & Thermal Solutions</title>
        <meta name="description" content="Expert specialized secondary glazing services including acoustic glazing, thermal insulation, and security solutions. Professional installation for specific requirements." />
        <meta name="keywords" content="specialized glazing, acoustic glazing, thermal insulation, security glazing, noise reduction, energy efficiency, London specialist" />
        <meta property="og:title" content="Specialized Secondary Glazing Services" />
        <meta property="og:description" content="Advanced secondary glazing solutions for specific requirements. Expert installation in London." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Specialized Glazing Solutions</h1>
        <div className="mb-12">
          <p className="text-lg text-gray-600 mb-4">
            Our specialized secondary glazing solutions are designed to address specific challenges beyond standard window requirements.
            Whether you need superior noise reduction, enhanced thermal performance, or increased security, our expert team delivers tailored solutions for your unique needs.
          </p>
          <p className="text-lg text-gray-600">
            We combine innovative technology with expert craftsmanship to provide secondary glazing that preserves the character of your property
            while significantly improving its performance, comfort, and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/9ff3e6d6-15f4-4553-8354-cd715631af50.png"
                  alt="Acoustic glazing installation showing sound dampening features"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Acoustic Glazing</h2>
                <p className="text-gray-600 mb-4">Our acoustic glazing solutions significantly reduce external noise, creating a peaceful indoor environment perfect for urban properties.</p>
                <Link to="/specialized/acoustic-glazing" className="text-primary hover:underline">Learn more about Acoustic Glazing</Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/6dc186a4-6846-4f8f-ba1a-8bcbdbdac94c.png"
                  alt="Thermal insulation glazing demonstration"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Thermal Insulation</h2>
                <p className="text-gray-600 mb-4">Improve your property's energy efficiency with our thermal insulation solutions, reducing heat loss and energy bills.</p>
                <Link to="/specialized/thermal-insulation" className="text-primary hover:underline">Learn more about Thermal Insulation</Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/963badc7-4485-4f5d-9f11-27736802f9fe.png"
                  alt="Security glazing features and installation"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Security Glazing</h2>
                <p className="text-gray-600 mb-4">Enhance your property's security with our reinforced secondary glazing options, providing peace of mind without compromising on style.</p>
                <Link to="/specialized/security-glazing" className="text-primary hover:underline">Learn more about Security Glazing</Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/421bc849-0e6d-479e-a002-22fe336f654a.png"
                  alt="Condensation control system demonstration"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Condensation Control</h2>
                <p className="text-gray-600 mb-4">Combat condensation issues effectively with our specialized glazing solutions, maintaining a healthier indoor environment.</p>
                <Link to="/specialized/condensation-control" className="text-primary hover:underline">Learn more about Condensation Control</Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png"
                  alt="Secondary glazing repair specialist fixing vertical sliding mechanisms"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-sky-700" />
                  <h2 className="text-2xl font-semibold">Secondary Glazing Repairs</h2>
                </div>
                <p className="text-gray-600 mb-4">Expert repair services for secondary glazing, specializing in spiral balances for vertical sliding units and other common issues.</p>
                <Link to="/secondary-glazing-repairs" className="text-primary hover:underline">Learn about our Repair Services</Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <img
                  src="/lovable-uploads/90c68028-9503-4ba2-b65b-9cfce4cd13a0.jpg"
                  alt="Sound transmission guide and acoustic measurement diagram"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </AspectRatio>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-semibold">Understanding Sound & Noise Reduction</h2>
                </div>
                <p className="text-gray-600 mb-4">Comprehensive guide to understanding decibels, sound transmission, and how secondary glazing can reduce external noise by up to 80%. Essential reading for noise-affected properties.</p>
                <Link to="/specialized/sound-transmission-guide" className="text-primary hover:underline">Explore our Sound Transmission Guide</Link>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow md:col-span-2">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <AspectRatio ratio={16/9} className="h-full">
                    <img
                      src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
                      alt="Environmental impact of secondary glazing visualized with eco-friendly imagery"
                      className="w-full h-full object-cover md:rounded-l-lg md:rounded-r-none rounded-t-lg md:rounded-t-none"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Earth className="h-6 w-6 text-green-600" />
                    <h2 className="text-2xl font-semibold">Sustainability Impact</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover the environmental benefits of secondary glazing, from reduced carbon emissions to energy conservation. 
                    Our sustainability tracker helps you visualize your contribution to a greener planet.
                  </p>
                  <Link to="/sustainability-impact-tracker-secondary-glazing" className="text-primary hover:underline">
                    Explore the Sustainability Impact Tracker
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <WhatsAppButton />
      <GetQuoteButton />
    </div>
  );
};

export default SpecializedServices;

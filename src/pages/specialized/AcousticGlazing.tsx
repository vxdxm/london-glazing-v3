import { MainNav } from "@/components/MainNav";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { Link } from "react-router-dom";

const AcousticGlazing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Acoustic Glazing | Reduce Noise with Secondary Glazing Solutions</title>
        <meta
          name="description"
          content="Explore our acoustic glazing solutions for effective noise reduction. Our secondary glazing provides superior soundproofing for homes and commercial properties."
        />
      </Helmet>
      <MainNav />

      <main className="container mx-auto px-4 py-16 flex-grow">
        <BreadcrumbNav />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-8">Acoustic Glazing Solutions</h1>
            <p className="text-lg mb-6">
              Our acoustic glazing solutions provide exceptional sound insulation, creating a quieter and more peaceful indoor environment. 
              Perfect for properties near busy roads, flight paths, or in urban areas with high noise pollution.
            </p>
          </div>
          <div>
            <img 
              src="/lovable-uploads/937ef286-fd23-475e-91f4-294470527896.jpg"
              alt="Secondary glazing installation showing acoustic glass panel in a period property window"
              className="rounded-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How Acoustic Glazing Works</h2>
              <div className="mb-4">
                <img
                  src="/lovable-uploads/41ac9ed1-11cf-4479-90f7-8aa763917c75.jpg"
                  alt="Diagram showing acoustic secondary glazing layers and sound wave reduction"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Acoustic secondary glazing creates an additional barrier against sound, with the air gap between your existing window 
                and the secondary glazing significantly reducing noise transmission. Different glass thicknesses and laminated acoustic 
                glass options further enhance sound reduction performance.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Up to 80% noise reduction (45-50dB)</li>
                <li>Wide range of acoustic glass options</li>
                <li>Customizable air gap dimensions</li>
                <li>Perfect for listed buildings where replacement windows aren't allowed</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits of Acoustic Glazing</h2>
              <div className="mb-4">
                <img
                  src="/lovable-uploads/8c405e6d-83e1-4a0e-8cf5-de325c39e542.jpg"
                  alt="Before and after comparison of acoustic secondary glazing installation showing noise reduction benefits"
                  className="rounded-lg w-full h-[200px] object-cover mb-4"
                />
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Enhanced Comfort:</strong> Reduce external noise intrusion for a more peaceful living or working environment
                </li>
                <li>
                  <strong>Improved Sleep Quality:</strong> Minimize nighttime disturbances from traffic or urban noise
                </li>
                <li>
                  <strong>Increased Concentration:</strong> Create quieter spaces better suited for work, study, or relaxation
                </li>
                <li>
                  <strong>Added Thermal Insulation:</strong> Additional window layer also improves energy efficiency
                </li>
                <li>
                  <strong>Preserves Original Windows:</strong> Ideal solution for listed buildings and conservation areas
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-secondary/60 p-5 rounded-lg mb-12">
          <h2 className="text-xl font-semibold mb-2 text-primary">Learn More: Secondary Glazing Noise Reduction</h2>
          <p className="text-gray-700 mb-4">
            Want to understand how secondary glazing can cut outside noise by up to 80%? Discover detailed acoustic glass options, air gap strategies, and solutions for listed buildings on our dedicated page.
          </p>
          <Link
            to="/secondary-glazing-noise-reduction"
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Explore Secondary Glazing Noise Reduction
          </Link>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/56e6bf65-3f25-4fcd-b697-e286aa479776.jpg"
                    alt="Sound transmission demonstration through secondary glazed window"
                    className="rounded-lg w-full h-[160px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sound Transmission Guide</h3>
                <p className="text-gray-600 mb-4">Learn about how sound travels through windows and how secondary glazing creates effective barriers.</p>
                <Link to="/specialized/sound-transmission-guide" className="text-primary hover:underline">
                  Read Sound Transmission Guide
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/43d4f1cb-1c9a-460e-b2f5-37e4c742df34.jpg"
                    alt="Interactive noise reduction calculator interface showing decibel reduction levels"
                    className="rounded-lg w-full h-[160px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Noise Reduction Calculator</h3>
                <p className="text-gray-600 mb-4">Calculate potential noise reduction based on your specific window configuration and requirements.</p>
                <Link to="/secondary-glazing-noise-reduction#calculator" className="text-primary hover:underline">
                  Try Noise Reduction Calculator
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-lg mb-4">Ready to create a quieter home or office environment?</p>
          <Link
            to="/quote-request"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
          >
            Request a Free Consultation
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcousticGlazing;

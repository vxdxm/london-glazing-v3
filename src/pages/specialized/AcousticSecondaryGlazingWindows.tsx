import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AcousticSecondaryGlazingWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Acoustic Secondary Glazing Windows London | Expert Sound Insulation</title>
        <meta 
          name="description" 
          content="Discover our premium acoustic secondary glazing windows in London. Superior sound insulation with up to 48dB noise reduction. Expert installation and consultation available." 
        />
        <meta 
          name="keywords" 
          content="acoustic windows, sound insulation, noise reduction, secondary glazing, London glazing specialist, soundproof windows" 
        />
        <meta property="og:title" content="Acoustic Secondary Glazing Windows | London Specialist" />
        <meta 
          property="og:description" 
          content="Premium acoustic secondary glazing solutions offering superior sound insulation. Expert installation in London." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/acoustic-secondary-glazing-windows" />
      </Helmet>
      
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Acoustic Secondary Glazing Windows</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <AspectRatio ratio={16/9} className="mb-6">
                <img 
                  src="/lovable-uploads/f3eb05a4-a9c1-49c4-bc8a-81cb8ef23da9.png"
                  alt="Acoustic secondary glazing installation demonstrating sound insulation properties"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
              <h2 className="text-2xl font-semibold mb-4">Superior Sound Insulation</h2>
              <p className="text-gray-600 mb-4">
                Our acoustic secondary glazing windows provide industry-leading sound reduction of up to 48dB, 
                making them perfect for properties in noisy urban areas or near transport routes.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Advanced Sound Reduction Technology</h3>
                  <p className="text-gray-600">
                    Using specialized acoustic laminated glass combined with optimized air gaps, our systems create 
                    multiple barriers that effectively break down sound waves. This sophisticated approach targets 
                    different frequency ranges, from low-frequency traffic noise to high-frequency urban sounds.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Measurable Performance</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Reduces external noise by up to 80% (48dB reduction)</li>
                    <li>Effective across frequencies from 100Hz to 3150Hz</li>
                    <li>Independently tested to BS EN ISO 10140-2:2010 standards</li>
                    <li>Exceeds Building Regulations requirements for noise reduction</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-World Benefits</h3>
                  <p className="text-gray-600">
                    A 48dB reduction means that heavy traffic noise is reduced to the equivalent of a quiet library, 
                    while train noise becomes barely perceptible. This transformation creates peaceful living spaces 
                    even in the busiest urban environments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <AspectRatio ratio={16/9} className="mb-6">
                <img 
                  src="/lovable-uploads/09754466-a230-4ca4-a233-601125c832fc.png"
                  alt="Technical demonstration of acoustic glazing layers and sound waves"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
              <h2 className="text-2xl font-semibold mb-4">Acoustic Glazing Options</h2>
              <p className="text-gray-600 mb-6">
                Our acoustic glazing solutions feature two premium glass configurations, each engineered for specific noise reduction requirements:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Standard 6.4mm Acoustic Glass</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Achieves up to 32dB noise reduction</li>
                    <li>Ideal for residential areas with moderate traffic noise</li>
                    <li>Laminated construction for enhanced safety</li>
                    <li>Effective against mid to high-frequency sounds</li>
                    <li>UV protection included</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Premium 12.8mm Acoustic Glass</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Superior noise reduction up to 45dB</li>
                    <li>Perfect for high-noise urban environments</li>
                    <li>Multi-layer acoustic lamination</li>
                    <li>Exceptional performance across all frequency ranges</li>
                    <li>Maximum sound insulation for transport routes</li>
                  </ul>
                </div>
                <p className="text-gray-600 italic">
                  Both options are tested to BS EN ISO 10140-2 standards and come with professional installation for optimal performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sound Reduction</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Up to 48dB noise reduction</li>
                <li>Specialized acoustic glass layers</li>
                <li>Optimal air gap spacing</li>
                <li>Enhanced sound dampening seals</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Additional Benefits</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improved thermal insulation (U-value: 1.0 W/m²K)</li>
                <li>Draft elimination</li>
                <li>Easy maintenance access</li>
                <li>Preserves original window character</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondary/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Properties Near Busy Roads or Railways</h3>
                <p className="text-gray-700">Living near a busy road or railway line can mean constant exposure to traffic noise, train rumblings, and honking horns. Our acoustic secondary glazing windows are specifically designed to tackle these challenges by significantly reducing the transmission of noise.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">City Center Locations</h3>
                <p className="text-gray-700">Perfect for urban environments where noise from traffic, pedestrians, and city life can be disruptive. Our solutions provide an effective barrier against urban noise while maintaining the aesthetic appeal of your property.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Listed Buildings Requiring Noise Reduction</h3>
                <p className="text-gray-700">Ideal for heritage properties where original windows must be preserved. Our secondary glazing provides modern noise reduction without compromising historical integrity.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Home Offices Requiring Quiet Environments</h3>
                <p className="text-gray-700">Create a productive workspace with minimal external noise disruption. Perfect for remote workers needing a quiet environment for focused work and professional video calls.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Recording Studios and Music Rooms</h3>
                <p className="text-gray-700">Specialized acoustic solutions for music professionals. Our windows provide superior sound insulation for optimal recording conditions and sound quality control.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/60 p-5 rounded-lg mt-12">
          <h2 className="text-xl font-semibold mb-2 text-primary">Want to Learn More about Noise Reduction?</h2>
          <p className="text-gray-700 mb-2">
            Discover in detail how secondary glazing can reduce outside noise by up to 80%. Learn about glass options, performance, and tips for heritage properties on our dedicated page.
          </p>
          <a
            href="/secondary-glazing-noise-reduction"
            className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            See Secondary Glazing Noise Reduction &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcousticSecondaryGlazingWindows;

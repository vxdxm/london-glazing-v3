import { MainNav } from "@/components/MainNav";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";
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
              <p className="text-gray-600">
                Our acoustic secondary glazing windows provide industry-leading sound reduction of up to 48dB, 
                making them perfect for properties in noisy urban areas or near transport routes.
              </p>
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
              <p className="text-gray-600">
                We offer a range of specialized acoustic glass configurations to meet your specific noise reduction needs:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Standard 4mm acoustic glass - suitable for moderate noise reduction</li>
                <li>Enhanced 6.4mm laminated acoustic glass - for improved sound insulation</li>
                <li>Premium 9.2mm acoustic laminated glass - maximum noise reduction performance</li>
                <li>Custom configurations available for specific frequency targeting</li>
              </ul>
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
      </div>
    </div>
  );
};

export default AcousticSecondaryGlazingWindows;
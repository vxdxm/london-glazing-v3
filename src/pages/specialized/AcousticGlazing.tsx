
import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoiseReductionCalculator from "@/components/NoiseReductionCalculator";
import { Helmet } from "react-helmet";

const AcousticGlazing = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Acoustic Secondary Glazing | Noise Reduction Solutions</title>
        <meta name="description" content="Specialized acoustic secondary glazing solutions for maximum noise reduction. Expert installation for homes and businesses in London." />
        <meta name="keywords" content="acoustic glazing, noise reduction, sound insulation, secondary glazing, London" />
        <meta property="og:title" content="Acoustic Secondary Glazing Solutions" />
        <meta property="og:description" content="Transform your space with our acoustic secondary glazing solutions. Reduce noise by up to 80% with our specialized installations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/specialized/acoustic-glazing" />
      </Helmet>
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Acoustic Secondary Glazing</h1>
        
        <div className="prose max-w-none mb-12 text-gray-600">
          <p className="text-lg leading-relaxed mb-4">
            Our acoustic secondary glazing solutions offer superior sound insulation for properties affected by external noise. 
            Using specialized acoustic glass and optimized air gaps, our systems can reduce noise levels by up to 80%, creating 
            a peaceful environment in even the busiest urban locations.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're dealing with traffic noise, aircraft sound, or general urban disturbance, our acoustic glazing 
            systems are specifically designed to combat these challenges while maintaining the aesthetic and character of your 
            property. Each installation is tailored to your specific requirements, ensuring maximum effectiveness for your 
            particular noise reduction needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="col-span-1">
            <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
              <img alt="Modern interior with acoustic secondary glazing installation" src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

          <NoiseReductionCalculator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img src="/lovable-uploads/09754466-a230-4ca4-a233-601125c832fc.png" alt="Living room with acoustic secondary glazing" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Maximum noise reduction solutions for urban properties and noise-sensitive environments.
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Up to 80% noise reduction</li>
                  <li>Specialized acoustic glass</li>
                  <li>Optimal air gap spacing</li>
                  <li>Sound dampening seals</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img src="/lovable-uploads/70b3b30b-ebf1-4420-bf6d-b02537cc0da8.png" alt="Dining area with acoustic glazing installation" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ideal for properties in high-noise areas or those requiring peaceful environments.
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>City center locations</li>
                  <li>Near transport routes</li>
                  <li>Recording studios</li>
                  <li>Residential areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};

export default AcousticGlazing;

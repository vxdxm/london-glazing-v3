import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { LocationBreadcrumb } from "@/components/locations/LocationBreadcrumb";
import { ClaphamBusyRoadsSEO } from "@/components/locations/ClaphamBusyRoadsSEO";
import { SEOImage } from "@/components/ui/seo-image";

export default function ClaphamBusyRoads() {
  return (
    <div className="min-h-screen bg-background">
      <ClaphamBusyRoadsSEO />
      <MainNav />
      
      <main className="container mx-auto px-4 py-12">
        <LocationBreadcrumb locationName="Clapham" />
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Noise Reduction Solutions for Homes Near Busy Roads in Clapham
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your Clapham home from noisy to peaceful with our specialist secondary glazing designed to combat persistent traffic noise from the A3, Clapham High Street, and surrounding busy roads.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-4xl mx-auto">
          <SEOImage
            src="/lovable-uploads/85544e29-d125-48ad-a85a-64e24b58c3c7.jpg"
            alt="Clapham residential street with heavy traffic showing the need for noise reduction solutions"
            width={800}
            height={400}
            className="rounded-lg mb-8 w-full"
          />

          <h2 className="text-3xl font-semibold mb-6 text-foreground">Understanding Traffic Noise in Clapham</h2>
          <p className="mb-6 text-muted-foreground">
            Clapham's strategic location in South London means many properties face constant traffic noise from major arterial routes. The A3 (Clapham High Street), Wandsworth Road, and numerous bus routes create a persistent acoustic challenge that can significantly impact quality of life, sleep patterns, and property values.
          </p>

          <p className="mb-8 text-muted-foreground">
            Traffic noise in Clapham is particularly challenging because it combines multiple frequency ranges: low-frequency rumble from heavy vehicles and buses, mid-frequency engine noise from constant flow traffic, and high-frequency sounds from acceleration, braking, and tire noise on wet roads.
          </p>

          <h2 className="text-3xl font-semibold mb-6 text-foreground">The Science of Traffic Noise Reduction</h2>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Low-Frequency Traffic Challenges</h3>
          <p className="mb-6 text-muted-foreground">
            The persistent low-frequency rumble from buses and HGVs on Clapham's roads is particularly difficult to block with standard single glazing. These sounds require specialist acoustic treatment with asymmetric glass configurations and optimized air gaps to achieve effective reduction.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">Decibel Reduction Expectations</h3>
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-semibold mb-4 text-foreground">Typical Noise Levels vs. Our Solutions:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Clapham High Street traffic:</strong> 70-75 dB → Reduced to 45-50 dB (25-30 dB reduction)</li>
              <li><strong>Residential side roads:</strong> 60-65 dB → Reduced to 35-40 dB (25 dB reduction)</li>
              <li><strong>Bus route noise:</strong> 75-80 dB → Reduced to 50-55 dB (25-30 dB reduction)</li>
              <li><strong>Night-time traffic:</strong> 55-60 dB → Reduced to 30-35 dB (25 dB reduction)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mb-6 text-foreground">Specialist Solutions for Other London Areas</h2>
          <p className="mb-6 text-muted-foreground">
            Each London location presents unique acoustic challenges. Discover our targeted solutions:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                  Victorian Terraces - Islington
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Conservation-approved solutions for period properties maintaining historical character.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/heathrow-aircraft" className="text-primary hover:underline">
                  Aircraft Noise - Heathrow
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialized glazing for persistent aircraft noise near London's busiest airport.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/kings-cross-train-noise" className="text-primary hover:underline">
                  Railway Noise - King's Cross
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Combat train noise with solutions designed for railway environments.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/shoreditch-urban-noise" className="text-primary hover:underline">
                  Urban Living - Shoreditch
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                24/7 urban noise solutions for London's creative and nightlife districts.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/canary-wharf-offices" className="text-primary hover:underline">
                  Commercial - Canary Wharf
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Office acoustic solutions for London's financial district buildings.
              </p>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                <a href="/locations/listed-kensington" className="text-primary hover:underline">
                  Listed Buildings - Kensington
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Heritage-sensitive glazing for protected buildings in conservation areas.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Ready for Peace and Quiet in Clapham?</h3>
            <p className="text-muted-foreground mb-6">
              Get a free acoustic survey and tailored quotation for secondary glazing designed specifically to combat Clapham's traffic noise challenges.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="/contact" className="btn btn-primary">Get Free Acoustic Survey</a>
              <a href="/quote" className="btn btn-outline">Request Quote</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
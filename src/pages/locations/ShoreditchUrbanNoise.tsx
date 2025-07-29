import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { ShoreditchUrbanNoiseSEO } from "@/components/locations/ShoreditchUrbanNoiseSEO";

const ShoreditchUrbanNoise = () => {
  return (
    <div className="min-h-screen bg-background">
      <ShoreditchUrbanNoiseSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-8">Soundproofing Windows for Urban Living in Shoreditch</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Shoreditch's vibrant urban environment creates a complex acoustic landscape. Our comprehensive 
            secondary glazing solutions address the full spectrum of city noise - from emergency services 
            and traffic to nightlife and construction - providing residents with peaceful havens in London's 
            creative heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h2 className="text-2xl font-semibold mb-4 text-purple-800">Urban Noise Sources</h2>
            <ul className="space-y-2 text-purple-700">
              <li>• Emergency services (frequent sirens)</li>
              <li>• Late-night entertainment venues</li>
              <li>• Construction and development</li>
              <li>• Heavy traffic and delivery vehicles</li>
              <li>• Pedestrian activity and street life</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h2 className="text-2xl font-semibold mb-4 text-teal-800">Comprehensive Solutions</h2>
            <ul className="space-y-2 text-teal-700">
              <li>• Multi-frequency noise reduction approach</li>
              <li>• 30-40dB average noise reduction</li>
              <li>• Improved sleep quality</li>
              <li>• Enhanced work-from-home environments</li>
              <li>• Preserved neighborhood character</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shoreditch's Unique Acoustic Challenges</h2>
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-800">24/7 Activity Patterns</h3>
            <p className="text-indigo-700 mb-4">
              Unlike purely residential areas, Shoreditch maintains high activity levels throughout the day and night. 
              Our acoustic solutions are designed to handle this constant but varied noise environment, 
              adapting to different usage patterns and sound frequencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Daytime (7am-6pm)</h3>
              <p className="text-gray-600 text-sm">
                Construction, delivery vehicles, office activity, and general traffic noise.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Evening (6pm-11pm)</h3>
              <p className="text-gray-600 text-sm">
                Restaurant patrons, increased pedestrian activity, early nightlife.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Late Night (11pm-3am)</h3>
              <p className="text-gray-600 text-sm">
                Club noise, late-night venues, emergency services, taxi activity.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Early Morning (3am-7am)</h3>
              <p className="text-gray-600 text-sm">
                Waste collection, early deliveries, cleaning services, minimal traffic.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Adaptive Acoustic Solutions</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Multi-Frequency Glass Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 6.8-10.8mm laminated acoustic glass</li>
                  <li>• Broad-spectrum frequency response</li>
                  <li>• Enhanced PVB for mid-frequency dampening</li>
                  <li>• Optimized for 200-4000Hz urban noise</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Flexible Configuration Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tilt-and-turn for summer ventilation</li>
                  <li>• Sliding systems for space efficiency</li>
                  <li>• Fixed panels for maximum acoustic performance</li>
                  <li>• Combination systems for versatility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Emergency Services & Sudden Noise Events</h2>
          <p className="text-gray-600 mb-6">
            Shoreditch's central location means frequent emergency service activity. Our systems are specifically 
            designed to significantly reduce these high-intensity, sudden noise events while maintaining the 
            urban connectivity residents value.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Siren Reduction</h3>
              <p className="text-gray-600">
                High-frequency siren noise (1000-4000Hz) is effectively dampened, 
                reducing startling wake-ups and concentration disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Horn & Alarm Noise</h3>
              <p className="text-gray-600">
                Vehicle horns and building alarms are significantly reduced 
                without completely isolating residents from safety alerts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Helicopter Activity</h3>
              <p className="text-gray-600">
                Low-frequency helicopter noise is substantially reduced, 
                particularly beneficial for higher-floor properties.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Property Types & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold mb-3 text-yellow-800">Converted Warehouses</h3>
              <p className="text-yellow-700 mb-3">
                Large industrial windows offer excellent opportunities for secondary glazing:
              </p>
              <ul className="space-y-1 text-yellow-700">
                <li>• Steel frame compatibility</li>
                <li>• Large glazed areas for maximum impact</li>
                <li>• Preservation of industrial character</li>
                <li>• Significant thermal benefits</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
              <h3 className="text-xl font-semibold mb-3 text-rose-800">Georgian/Victorian Conversions</h3>
              <p className="text-rose-700 mb-3">
                Historic properties require sensitive acoustic enhancement:
              </p>
              <ul className="space-y-1 text-rose-700">
                <li>• Sash window compatibility</li>
                <li>• Conservation area compliance</li>
                <li>• Period feature preservation</li>
                <li>• Discreet installation methods</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Work-From-Home Acoustic Solutions</h2>
          <p className="text-gray-600 mb-6">
            Many Shoreditch residents work from home in creative industries requiring concentration. 
            Our acoustic improvements support professional productivity while maintaining the inspiring 
            urban environment that draws people to the area.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Video Calls</h3>
              <p className="text-blue-700">
                Reduced background noise creates professional-quality 
                audio for important business communications.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Creative Work</h3>
              <p className="text-green-700">
                Musicians, designers, and writers benefit from improved 
                acoustic environments for focused creative sessions.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Client Meetings</h3>
              <p className="text-orange-700">
                Professional atmosphere maintained with minimal 
                disruption from external urban noise.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Installation in Active Urban Environment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Minimal Disruption Methods</h3>
              <p className="text-gray-600">
                Understanding that Shoreditch residents lead busy urban lives, 
                our installations are planned for minimal home disruption with 
                flexible scheduling options.
              </p>
            </div>
            <div className="bg-primary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Building Access Coordination</h3>
              <p className="text-gray-600">
                Experienced with complex urban property access, parking 
                restrictions, and building management requirements common 
                in dense urban environments.
              </p>
            </div>
          </div>
        </section>

        {/* Related Location Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Solutions for Other London Areas</h2>
          <p className="text-gray-600 mb-8">
            We provide specialist secondary glazing solutions across London, tailored to each area's unique acoustic challenges:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/clapham-busy-roads" className="text-primary hover:underline">
                  Clapham Traffic Noise Solutions
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialist solutions for homes near A3, Clapham High Street and busy bus routes. Reduce traffic noise by up to 30dB.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/victorian-terraces-islington" className="text-primary hover:underline">
                  Victorian Terraces Islington
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Conservation-approved secondary glazing for Islington's Victorian terraces. Preserve period character while improving performance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/canary-wharf-offices" className="text-primary hover:underline">
                  Canary Wharf Office Solutions
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Commercial acoustic glazing for offices in Canary Wharf. Create quieter working environments in busy financial district.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/heathrow-aircraft" className="text-primary hover:underline">
                  Heathrow Aircraft Noise
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Specialized solutions for properties near Heathrow Airport. Combat persistent aircraft noise with advanced acoustic glazing.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/kings-cross-train-noise" className="text-primary hover:underline">
                  King's Cross Train Noise
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Railway noise reduction for properties near King's Cross station. Address both train noise and urban vibrations.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">
                <a href="/locations/listed-kensington" className="text-primary hover:underline">
                  Listed Buildings Kensington
                </a>
              </h3>
              <p className="text-muted-foreground text-sm">
                Heritage-sensitive secondary glazing for listed buildings in Kensington. Meet conservation requirements while improving comfort.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Create Your Urban Sanctuary in Shoreditch</h2>
          <p className="mb-6">
            Enjoy the best of urban living with the peace and quiet you deserve. Our comprehensive 
            noise reduction solutions let you embrace Shoreditch's energy while maintaining a tranquil home environment.
          </p>
          <a 
            href="/quote-request" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Transform Your Urban Space
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ShoreditchUrbanNoise;
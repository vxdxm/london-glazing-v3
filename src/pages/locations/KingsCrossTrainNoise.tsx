import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import LocationBreadcrumb from "@/components/locations/LocationBreadcrumb";
import { KingsCrossTrainNoiseSEO } from "@/components/locations/KingsCrossTrainNoiseSEO";

const KingsCrossTrainNoise = () => {
  return (
    <div className="min-h-screen bg-background">
      <KingsCrossTrainNoiseSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <LocationBreadcrumb locationName="King's Cross" />
        
        <h1 className="text-4xl font-bold mb-8">Train Noise Secondary Glazing for Flats in King's Cross</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            King's Cross properties face complex acoustic challenges from multiple railway lines, underground 
            services, and high-speed trains. Our specialized secondary glazing addresses airborne train noise 
            while acknowledging the limitations for structural vibrations, providing comprehensive solutions 
            for railway-adjacent residential properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Railway Noise Sources</h2>
            <ul className="space-y-2 text-orange-700">
              <li>• High-speed trains (ECML mainline)</li>
              <li>• Underground services (multiple lines)</li>
              <li>• Freight trains (overnight operations)</li>
              <li>• Station announcements and signals</li>
              <li>• Track maintenance activities</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Acoustic Solutions</h2>
            <ul className="space-y-2 text-green-700">
              <li>• 35-45dB airborne noise reduction</li>
              <li>• Specialized railway-frequency dampening</li>
              <li>• Enhanced sleep quality restoration</li>
              <li>• Reduced stress from sudden noise events</li>
              <li>• Improved property comfort & value</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Railway Noise Types</h2>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-amber-800">Airborne vs. Structure-Borne Noise</h3>
            <p className="text-amber-700 mb-4">
              <strong>Important:</strong> Secondary glazing effectively addresses airborne noise (sound traveling through air) 
              but cannot eliminate structure-borne vibrations that travel through the building's foundations. 
              We focus on maximizing airborne noise reduction while setting realistic expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Wheel-Rail Noise</h3>
              <p className="text-gray-600">
                High-frequency screaming and grinding sounds from wheel-rail interaction. 
                Effectively reduced by acoustic glazing (500-4000Hz range).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Engine & Traction Noise</h3>
              <p className="text-gray-600">
                Low to mid-frequency sounds from diesel engines and electric traction. 
                Significant reduction achievable with proper glass configurations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Structural Vibrations</h3>
              <p className="text-gray-600">
                Low-frequency vibrations transmitted through building structure. 
                <em>Not addressed by secondary glazing</em> - requires structural solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Railway-Optimized Glass Configurations</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Glass Selection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 10.8-13.5mm laminated acoustic glass</li>
                  <li>• Optimized for 500-4000Hz railway frequencies</li>
                  <li>• Enhanced PVB interlayers for damping</li>
                  <li>• Asymmetric thickness to avoid resonance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">System Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 150-200mm air gap optimization</li>
                  <li>• Acoustic absorption materials</li>
                  <li>• Vibration-isolated mounting systems</li>
                  <li>• Enhanced sealing for intermittent noise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">King's Cross Specific Challenges</h2>
          <p className="text-gray-600 mb-6">
            The King's Cross area presents unique acoustic challenges due to the convergence of multiple railway 
            lines, underground services, and the major terminus. Properties vary significantly in their exposure 
            based on proximity to different rail infrastructures.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold mb-3 text-red-800">High Exposure Properties</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Direct views of railway lines</li>
                <li>• Properties within 100m of tracks</li>
                <li>• Flats facing King's Cross station</li>
                <li>• Developments near goods yards</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Moderate Exposure Properties</h3>
              <li>• Flats with railway views but greater distance</li>
              <li>• Properties shielded by other buildings</li>
              <li>• Areas affected mainly by underground services</li>
              <li>• Locations with intermittent train noise</li>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Realistic Performance Expectations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">What We Can Achieve</h3>
              <ul className="space-y-2 text-green-700">
                <li>• 35-45dB airborne noise reduction</li>
                <li>• Elimination of high-frequency screeching</li>
                <li>• Significant reduction in speech interference</li>
                <li>• Improved sleep quality</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold mb-3 text-yellow-800">Limitations to Consider</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Cannot eliminate structural vibrations</li>
                <li>• Low-frequency rumble may remain</li>
                <li>• Building shaking not addressed</li>
                <li>• Underground vibrations persist</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Additional Benefits</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Enhanced thermal insulation</li>
                <li>• Reduced dust and air pollution</li>
                <li>• Increased property desirability</li>
                <li>• Preserved original window character</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complementary Solutions</h2>
          <p className="text-gray-600 mb-6">
            For properties with significant structural vibration issues, we can recommend complementary approaches 
            alongside secondary glazing to achieve optimal acoustic comfort.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Floor Isolation</h3>
              <p className="text-gray-600">
                Floating floor systems can reduce vibration transmission through 
                the building structure (specialist contractors required).
              </p>
            </div>
            <div className="bg-primary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Interior Acoustic Treatment</h3>
              <p className="text-gray-600">
                Sound-absorbing materials and acoustic panels can enhance 
                the overall noise reduction achieved by secondary glazing.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Optimize Your King's Cross Property's Acoustic Environment</h2>
          <p className="mb-6">
            While we can't eliminate all railway impacts, our secondary glazing solutions deliver significant 
            improvements in airborne noise comfort. Get honest advice and effective solutions.
          </p>
          <a 
            href="/quote-request" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Realistic Assessment
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default KingsCrossTrainNoise;
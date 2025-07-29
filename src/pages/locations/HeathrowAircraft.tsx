import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { HeathrowAircraftSEO } from "@/components/locations/HeathrowAircraftSEO";

const HeathrowAircraft = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeathrowAircraftSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-8">Aircraft Noise Reduction for Properties Near Heathrow</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Properties in Hounslow, Feltham, and surrounding areas face unique challenges from persistent aircraft noise. 
            Our specialized acoustic secondary glazing systems are specifically designed to combat high-frequency jet 
            engine noise and provide substantial acoustic relief for homes under Heathrow's flight paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h2 className="text-2xl font-semibold mb-4 text-amber-800">Aircraft Noise Characteristics</h2>
            <ul className="space-y-2 text-amber-700">
              <li>• High-frequency jet engine noise (1000-8000Hz)</li>
              <li>• Sudden onset and duration patterns</li>
              <li>• Variable intensity based on aircraft type</li>
              <li>• Landing/takeoff approach variations</li>
              <li>• 16+ hours daily exposure periods</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Specialized Solutions</h2>
            <ul className="space-y-2 text-blue-700">
              <li>• High-performance acoustic glass (13.5mm+)</li>
              <li>• Optimized air gaps (200mm minimum)</li>
              <li>• Enhanced sealing for high frequencies</li>
              <li>• Up to 50dB aircraft noise reduction</li>
              <li>• Compliance with CAA noise guidelines</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Understanding Aircraft Noise Impact</h2>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
            <h3 className="text-xl font-semibold mb-3 text-red-800">Health & Wellbeing Effects</h3>
            <p className="text-red-700 mb-4">
              Continuous exposure to aircraft noise can cause sleep disruption, stress-related health issues, 
              and reduced cognitive performance. The World Health Organization recognizes aircraft noise as 
              a significant environmental health concern requiring effective mitigation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Sleep Disruption</h3>
              <p className="text-gray-600">
                Aircraft noise events above 35dB indoors can cause sleep fragmentation. 
                Our systems reduce noise to WHO-recommended levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Cardiovascular Stress</h3>
              <p className="text-gray-600">
                Chronic aircraft noise exposure increases stress hormones. 
                Effective noise reduction supports better health outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Cognitive Impact</h3>
              <p className="text-gray-600">
                Concentration and learning can be impaired by intermittent 
                high-level noise events, especially affecting children.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Specialized Acoustic Glass for Aircraft Noise</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">High-Performance Glass</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 13.5mm laminated acoustic glass standard</li>
                  <li>• 17.5mm options for extreme noise exposure</li>
                  <li>• Multiple PVB interlayers for damping</li>
                  <li>• Asymmetric configurations to avoid resonance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Advanced Air Gap Design</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 200-300mm air gaps for maximum isolation</li>
                <li>• Acoustic absorption materials</li>
                  <li>• Precision-engineered frame systems</li>
                  <li>• Multi-point locking for airtight seals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Flight Path Considerations</h2>
          <p className="text-gray-600 mb-6">
            Different areas around Heathrow experience varying noise patterns based on runway usage, 
            wind direction, and flight path variations. Our assessments consider your specific location's 
            noise exposure profile to optimize the acoustic solution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">High Exposure Areas</h3>
              <p className="text-gray-600 mb-3">
                Properties directly under approach/departure paths require maximum-performance solutions:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Hounslow Central & West</li>
                <li>• Feltham & Ashford</li>
                <li>• Cranford & Harlington</li>
                <li>• Parts of Richmond & Twickenham</li>
              </ul>
            </div>
            <div className="bg-primary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Moderate Exposure Areas</h3>
              <p className="text-gray-600 mb-3">
                Areas with intermittent exposure benefit from tailored solutions:
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Isleworth & Brentford</li>
                <li>• Hampton & Whitton</li>
                <li>• Hayes & Southall</li>
                <li>• Staines & Sunbury</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Metrics & Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-3 text-green-800">Noise Reduction</h3>
              <p className="text-green-700">
                Guaranteed 40-50dB reduction for aircraft noise events, 
                bringing indoor levels below WHO guidelines.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Frequency Response</h3>
              <p className="text-blue-700">
                Optimized performance across 500-8000Hz range where 
                aircraft noise energy is concentrated.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Quality Assurance</h3>
              <p className="text-purple-700">
                Independent acoustic testing and 10-year performance 
                warranties on all installations.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Reclaim Peace in Your Heathrow-Area Home</h2>
          <p className="mb-6">
            Don't let aircraft noise control your life. Our proven solutions have helped thousands of residents 
            achieve peaceful homes despite proximity to one of the world's busiest airports.
          </p>
          <a 
            href="/quote-request" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Acoustic Assessment
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HeathrowAircraft;
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { CanaryWharfOfficesSEO } from "@/components/locations/CanaryWharfOfficesSEO";

const CanaryWharfOffices = () => {
  return (
    <div className="min-h-screen bg-background">
      <CanaryWharfOfficesSEO />
      <MainNav />
      
      <div className="container mx-auto px-4 py-16">
        <BreadcrumbNav />
        
        <h1 className="text-4xl font-bold mb-8">Noise Reduction Solutions for Offices in Canary Wharf</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg mb-6">
            Canary Wharf's bustling business environment demands effective acoustic solutions for office buildings. 
            Our high-performance commercial secondary glazing creates quieter, more productive working environments 
            by significantly reducing external noise from traffic, construction, and urban activity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Commercial Acoustic Challenges</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Heavy traffic noise from major arterial roads</li>
              <li>• Construction and development activity</li>
              <li>• DLR and underground transport systems</li>
              <li>• River traffic and maritime sounds</li>
              <li>• Emergency services and urban bustle</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">High-Performance Solutions</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Laminated acoustic glass configurations</li>
              <li>• Optimized air gap depths (150mm+)</li>
              <li>• Mass-loaded vinyl backing options</li>
              <li>• Professional sealing systems</li>
              <li>• Building regulations compliance</li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Creating Productive Work Environments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Open Plan Offices</h3>
              <p className="text-gray-600">
                Reduce background noise levels to improve concentration and reduce fatigue. 
                Our solutions can achieve 40-50dB noise reduction for enhanced productivity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Meeting Rooms</h3>
              <p className="text-gray-600">
                Ensure confidential discussions remain private while eliminating external 
                distractions. Critical for client meetings and sensitive business discussions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Executive Offices</h3>
              <p className="text-gray-600">
                Premium acoustic comfort for senior leadership spaces. Maintain professional 
                atmosphere with minimal disruption from external urban noise.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Specifications for Commercial Use</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Glass Configurations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 6.8mm laminated acoustic glass minimum</li>
                  <li>• 10.8mm or 13.5mm for maximum performance</li>
                  <li>• Different glass thicknesses to avoid resonance</li>
                  <li>• PVB interlayers for enhanced sound damping</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rw rating improvements of 15-20dB</li>
                  <li>• Low frequency noise reduction critical</li>
                  <li>• Meets commercial building standards</li>
                  <li>• Minimal maintenance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Installation Considerations</h2>
          <p className="text-gray-600 mb-6">
            Commercial installations in Canary Wharf require careful planning to minimize business disruption. 
            Our team works with building management to schedule installations during off-hours or phased 
            approaches that maintain business continuity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Building Management Coordination</h3>
              <p className="text-gray-600">
                We liaise directly with facility managers and building owners to ensure 
                smooth project delivery with minimal tenant disruption.
              </p>
            </div>
            <div className="bg-primary/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Health & Safety Compliance</h3>
              <p className="text-gray-600">
                Full commercial-grade safety protocols, insurance coverage, and 
                compliance with all relevant workplace safety regulations.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Canary Wharf Office Environment</h2>
          <p className="mb-6">
            Ready to create a quieter, more productive workplace? Contact us for a commercial consultation 
            and acoustic assessment tailored to your office requirements.
          </p>
          <a 
            href="/quote-request" 
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Commercial Quote
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CanaryWharfOffices;
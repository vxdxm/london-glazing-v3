import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

const HealthcareIndustry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Healthcare Industry Glazing Solutions</h1>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Modern healthcare facility"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Our premium glazing solutions are specifically designed for healthcare facilities,
              creating peaceful environments that promote healing and well-being.
            </p>

            <h2 className="text-2xl font-semibold mt-8">Key Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Superior noise reduction for patient comfort</li>
              <li>Enhanced temperature control for consistent climate</li>
              <li>Improved hygiene with easy-to-clean surfaces</li>
              <li>Energy efficiency to reduce operational costs</li>
              <li>UV protection for sensitive medical equipment</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Perfect For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hospitals and medical centers</li>
              <li>Clinics and doctor offices</li>
              <li>Rehabilitation facilities</li>
              <li>Dental practices</li>
              <li>Medical laboratories</li>
            </ul>
          </div>

          <div className="mt-12 space-x-4">
            <Button 
              onClick={() => navigate("/quote-request")}
              className="bg-primary text-primary-foreground"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/commercial")}
            >
              Back to Commercial Solutions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareIndustry;
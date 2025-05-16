import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const HealthcareIndustry = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Secondary Glazing Solutions | Medical Facility Windows</title>
        <meta name="description" content="Specialized secondary glazing solutions for healthcare facilities. Superior noise reduction, temperature control, and hygiene standards for hospitals and medical centers." />
        <meta name="keywords" content="healthcare glazing, hospital windows, medical facility glazing, noise reduction, temperature control, sterile environments" />
        <meta property="og:title" content="Healthcare Secondary Glazing Solutions | Medical Facility Windows" />
        <meta property="og:description" content="Expert secondary glazing solutions for healthcare facilities. Create optimal healing environments with superior noise reduction and climate control." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://secondaryglazingspecialist.com/commercial/healthcare-industry" />
      </Helmet>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Healthcare Industry Glazing Solutions</h1>
          
          <div className="prose max-w-none mb-8 text-gray-600">
            <p className="text-lg">
              Create optimal healing environments with our specialized secondary glazing solutions for healthcare facilities. 
              We understand the unique challenges faced by hospitals, clinics, and medical centers - from maintaining patient 
              privacy and comfort to ensuring sterile conditions. Our advanced glazing systems are specifically engineered to 
              enhance acoustic insulation, regulate temperature, and maintain the highest standards of hygiene while supporting 
              your facility's energy efficiency goals.
            </p>
          </div>

          <div className="mb-8">
            <img alt="Modern healthcare facility" className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6" src="/lovable-uploads/90c68028-9503-4ba2-b65b-9cfce4cd13a0.jpg" />
          </div>

          <div className="space-y-6 text-lg mb-8">
            <p>
              Our premium glazing solutions are specifically designed for healthcare facilities,
              creating peaceful environments that promote healing and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Superior noise reduction for patient comfort</li>
                  <li>Temperature control for consistent climate</li>
                  <li>Improved hygiene with easy-to-clean surfaces</li>
                  <li>Energy efficiency to reduce operational costs</li>
                  <li>UV protection for sensitive medical equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Hospitals and medical centers</li>
                  <li>Clinics and doctor offices</li>
                  <li>Rehabilitation facilities</li>
                  <li>Dental practices</li>
                  <li>Medical laboratories</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-x-4">
            <Button onClick={() => navigate("/quote-request")} className="bg-primary text-primary-foreground">
              Request a Quote
            </Button>
            <Button variant="outline" onClick={() => navigate("/commercial")}>
              Back to Commercial Solutions
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default HealthcareIndustry;

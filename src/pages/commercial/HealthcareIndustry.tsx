import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const HealthcareIndustry = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Healthcare Industry Glazing Solutions</h1>
          
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
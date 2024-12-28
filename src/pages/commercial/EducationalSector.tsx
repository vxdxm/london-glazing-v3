import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const EducationalSector = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Educational Sector Glazing Solutions</h1>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Modern educational facility"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Link to="/specialized/acoustic-glazing">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>Learning Environment Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Create optimal learning environments with our specialized glazing solutions designed for educational institutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 space-y-2">
                    <li>Enhanced acoustic performance</li>
                    <li>Natural light optimization</li>
                    <li>Temperature regulation</li>
                    <li>Energy efficiency</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            <Link to="/specialized/thermal-insulation">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>Safety & Comfort Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ensure student and staff comfort while maintaining high safety standards.
                  </p>
                  <ul className="list-disc list-inside text-gray-500 space-y-2">
                    <li>Safety-enhanced glazing options</li>
                    <li>UV protection</li>
                    <li>Glare reduction</li>
                    <li>Ventilation control</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="space-y-6 text-lg">
            <h2 className="text-2xl font-semibold">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/specialized/acoustic-glazing">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Schools and Libraries</h3>
                    <p className="text-sm text-gray-600">Optimal acoustic solutions for learning environments</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/thermal-insulation">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Research Facilities</h3>
                    <p className="text-sm text-gray-600">Temperature-controlled environments for research</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/security-glazing">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Sports Facilities</h3>
                    <p className="text-sm text-gray-600">Enhanced security and safety features</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/condensation-control">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Student Accommodation</h3>
                    <p className="text-sm text-gray-600">Moisture control for comfortable living spaces</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalSector;
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
              src="/lovable-uploads/c7e8f368-37e7-4802-84d8-e96a040ac74c.png"
              alt="Modern educational facility with secondary glazing"
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
                  <div className="mb-4">
                    <img
                      src="/lovable-uploads/ce569e66-cc87-4091-9f5a-d5ae27f88371.png"
                      alt="Classroom with acoustic glazing"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
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
                  <div className="mb-4">
                    <img
                      src="/lovable-uploads/bf1bde82-2bff-48bc-9ccb-82ac28cacb6a.png"
                      alt="School windows with thermal insulation"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
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
                    <div className="mb-4">
                      <img
                        src="/lovable-uploads/2363aeff-ca37-4a34-91c1-75267dfaae9f.png"
                        alt="Library with acoustic glazing"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Schools and Libraries</h3>
                    <p className="text-sm text-gray-600">Optimal acoustic solutions for learning environments</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/thermal-insulation">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <img
                        src="/lovable-uploads/41ebf8a1-1774-4e48-ab3c-36589de97413.png"
                        alt="Research facility with thermal insulation"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Research Facilities</h3>
                    <p className="text-sm text-gray-600">Temperature-controlled environments for research</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/security-glazing">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <img
                        src="/lovable-uploads/41fdf8fc-4bed-4792-87dd-45ca3fa377de.png"
                        alt="Sports facility with security glazing"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">Sports Facilities</h3>
                    <p className="text-sm text-gray-600">Enhanced security and safety features</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/specialized/condensation-control">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <img
                        src="/lovable-uploads/48f66df8-d436-4d4d-bb38-4ae24504fd26.png"
                        alt="Student accommodation with condensation control"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
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
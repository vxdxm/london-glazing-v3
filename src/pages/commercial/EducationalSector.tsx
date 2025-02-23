
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
          
          <div className="prose max-w-none mb-8 text-gray-600">
            <p className="text-lg">
              Transform your educational facilities with our specialized secondary glazing solutions. We understand the unique 
              challenges faced by schools, universities, and research facilities - from noise control in busy urban locations 
              to maintaining comfortable learning environments year-round. Our secondary glazing systems are designed to enhance 
              acoustic performance, improve thermal efficiency, and provide essential security features while preserving the 
              original character of your educational buildings.
            </p>
          </div>

          <div className="mb-8">
            <img
              src="/lovable-uploads/56d88485-571a-4326-b29d-e8e13794d088.png"
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
                      src="/lovable-uploads/7a21c616-75fa-4c43-b665-22808e3ca26c.png"
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
                      src="/lovable-uploads/a091c5df-92d2-4d2e-be2d-d5f0e9372186.png"
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
                    <li>Emergency egress compliance</li>
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
                        src="/lovable-uploads/935421f2-cd3f-43d7-853c-95fbbb97222d.png"
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
                        src="/lovable-uploads/f4fb1e9c-f9dd-440f-9fdb-7f01b5b7f12e.png"
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
                        src="/lovable-uploads/7891494f-5e77-40d3-b5fc-cabf6262f2fe.png"
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
                        src="/lovable-uploads/3fab2280-476f-4095-a2cf-83d2f4485ca3.png"
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

import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

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
            <Card className="hover:shadow-lg transition-shadow">
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

            <Card className="hover:shadow-lg transition-shadow">
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
          </div>

          <div className="space-y-6 text-lg">
            <h2 className="text-2xl font-semibold">Perfect For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schools and universities</li>
              <li>Libraries and study areas</li>
              <li>Research facilities</li>
              <li>Sports facilities</li>
              <li>Student accommodation</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalSector;
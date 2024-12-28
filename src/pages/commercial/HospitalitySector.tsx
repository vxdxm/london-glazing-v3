import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HospitalitySector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold mb-6">Hospitality Sector Glazing Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create the perfect environment for your guests with our premium secondary glazing solutions, 
              designed specifically for hotels, restaurants, and leisure facilities.
            </p>
          </section>

          {/* Main Image */}
          <div className="w-full">
            <AspectRatio ratio={21/9}>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                alt="Luxury hotel exterior with modern glazing"
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          {/* Key Benefits Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Sound Insulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                      alt="Modern hotel room with sound-proof windows"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Reduce external noise by up to 80% to ensure peaceful rest for your guests. 
                  Perfect for city-center locations and airport hotels.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Temperature Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                      alt="Hotel interior with thermal glazing"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Maintain optimal room temperatures year-round while reducing heating and cooling costs. 
                  Our solutions provide excellent thermal insulation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Aesthetic Appeal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <AspectRatio ratio={16/9}>
                    <img
                      src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                      alt="Elegant hotel facade with glazing"
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="text-gray-600">
                  Preserve the architectural beauty of your property with our discreet secondary glazing solutions 
                  that complement your existing windows.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Detailed Features Section */}
          <section className="bg-gray-50 rounded-lg p-8 space-y-6">
            <h2 className="text-3xl font-semibold mb-6">Why Choose Our Solutions?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Hotels</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Superior sound insulation for peaceful guest rooms</li>
                  <li>Enhanced temperature control for year-round comfort</li>
                  <li>Reduced energy costs through better insulation</li>
                  <li>Minimal disruption during installation</li>
                  <li>Suitable for listed and historic buildings</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">For Restaurants & Bars</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Create comfortable dining environments</li>
                  <li>Reduce street noise interference</li>
                  <li>Prevent condensation on windows</li>
                  <li>Maintain clear views for diners</li>
                  <li>Easy access for window cleaning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Ready to Enhance Your Property?</h2>
            <p className="text-gray-600">
              Contact us today for a free consultation and quote tailored to your specific needs.
            </p>
            <Button 
              onClick={() => navigate("/quote-request")}
              className="bg-primary text-primary-foreground px-8 py-4"
            >
              Request a Quote
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HospitalitySector;
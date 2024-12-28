import { MainNav } from "@/components/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SashWindowGlassOptions from "@/components/residential/SashWindowGlassOptions";

const SashWindows = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container mx-auto px-4 py-16">
        <article className="prose lg:prose-xl max-w-none">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-8">Sash Window Secondary Glazing: Complete Guide</h1>
              <p className="text-gray-700 mb-4">
                Our sash window secondary glazing solutions are designed to preserve the original character 
                of your period property while providing modern insulation benefits. We use specially designed 
                systems that complement existing window frames, enhancing both aesthetics and functionality.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/lovable-uploads/a638a754-a3c4-4107-b725-4e149b0bbfa6.png"
                alt="Traditional sash window example"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Window Styles Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Vertical Sliding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                      alt="Vertical sliding sash window"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Traditional vertical sliding secondary glazing that perfectly matches your existing sash windows.
                      Smooth operation and excellent thermal insulation while maintaining the original character of your property.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tilt-In Sash Windows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                      alt="Tilt-in sash window demonstration"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Our innovative tilt-in secondary glazing system allows easy access for cleaning and maintenance.
                      The panels can be tilted inwards at a 90-degree angle, making it perfect for high-rise buildings
                      or windows that are difficult to access from the outside.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Safe and secure cleaning from inside</li>
                      <li>Perfect for high-rise applications</li>
                      <li>Easy maintenance access</li>
                      <li>Enhanced safety features</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Understanding Sash Window Secondary Glazing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a"
                alt="Sash window installation"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
              <p className="text-gray-700">
                Secondary glazing for sash windows involves installing an additional window on the room-side 
                of your existing sash windows. This creates an insulating barrier of air that significantly 
                improves thermal and acoustic performance while maintaining the original character of your windows.
              </p>
            </div>
          </section>

          <SashWindowGlassOptions />

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Heritage Preservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                      alt="Heritage building with sash windows"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Perfect for listed buildings and conservation areas. Preserves historical character 
                      while improving performance and comfort.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Thermal Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
                      alt="Modern thermal efficiency demonstration"
                      className="rounded-lg w-full h-[200px] object-cover mb-4"
                    />
                    <p className="text-gray-700">
                      Significantly reduces heat loss through windows, potentially cutting energy bills 
                      by up to 40%.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Installation Process</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Our professional installation process ensures optimal performance:</p>
              <ol className="list-decimal pl-6">
                <li>Initial survey and measurement</li>
                <li>Custom manufacturing to exact specifications</li>
                <li>Professional installation by certified technicians</li>
                <li>Quality assurance check and demonstration</li>
                <li>Aftercare support and maintenance guidance</li>
              </ol>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default SashWindows;